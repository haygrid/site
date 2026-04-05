terraform {
  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 4.0"
    }
  }
}

provider "cloudflare" {
  api_token = var.cloudflare_api_token
}

# Pages project with GitHub integration
resource "cloudflare_pages_project" "haygrid" {
  account_id        = var.cloudflare_account_id
  name              = "haygrid-site"
  production_branch = "main"

  source {
    type = "github"
    config {
      owner                      = "haygrid"
      repo_name                  = "site"
      production_branch          = "main"
      pr_comments_enabled        = true
      deployments_enabled        = true
      preview_branch_includes    = ["staging"]
      preview_deployment_setting = "custom"
    }
  }

  build_config {
    build_command       = "npm run build"
    destination_dir     = "out"
    root_dir            = ""
    web_analytics_tag   = "e7c0d9cc4c7a4cfba7416ce723c59cc4"
    web_analytics_token = "a11048d2de6d46a594ca2ebb85cc94a4"
  }

  deployment_configs {
    production {
      fail_open   = true
      usage_model = "standard"
    }
    preview {
      fail_open   = true
      usage_model = "standard"
    }
  }
}

# Production custom domain
resource "cloudflare_pages_domain" "production" {
  account_id   = var.cloudflare_account_id
  project_name = cloudflare_pages_project.haygrid.name
  domain       = "www.haygrid.com"
}

# CF monitoring custom domain
resource "cloudflare_pages_domain" "cf" {
  account_id   = var.cloudflare_account_id
  project_name = cloudflare_pages_project.haygrid.name
  domain       = "cf.haygrid.com"
}

# Staging custom domain
resource "cloudflare_pages_domain" "staging" {
  account_id   = var.cloudflare_account_id
  project_name = cloudflare_pages_project.haygrid.name
  domain       = "staging.haygrid.com"
}

# DNS: cf → Pages production (monitoring subdomain)
resource "cloudflare_record" "cf" {
  zone_id = var.cloudflare_zone_id
  name    = "cf"
  type    = "CNAME"
  content = "haygrid-site.pages.dev"
  proxied = true
  ttl     = 1
}

# DNS: staging → Pages staging branch
resource "cloudflare_record" "staging" {
  zone_id  = var.cloudflare_zone_id
  name     = "staging"
  type     = "CNAME"
  content  = "staging.haygrid-site.pages.dev"
  proxied  = true
  ttl      = 1
}

# ---------------------------------------------------------------------------
# PHASE 1: Apex redirect via Cloudflare (www stays on GitHub Pages)
# ---------------------------------------------------------------------------
# Step 1: Import existing GH Pages apex A records into Terraform state.
#         These are imported so Terraform can destroy them in Step 2.

import {
  to = cloudflare_record.ghpages_apex_a["185.199.108.153"]
  id = "07c43d004be84d6665edaa1644b97396/281a9c7f051b95820b0fa91dd18dee09"
}
import {
  to = cloudflare_record.ghpages_apex_a["185.199.109.153"]
  id = "07c43d004be84d6665edaa1644b97396/604ca8130c616d6b369238901c9331fc"
}
import {
  to = cloudflare_record.ghpages_apex_a["185.199.110.153"]
  id = "07c43d004be84d6665edaa1644b97396/d6fa87ae2ee0d0001fdc2f17a2d4c8f6"
}
import {
  to = cloudflare_record.ghpages_apex_a["185.199.111.153"]
  id = "07c43d004be84d6665edaa1644b97396/b063f07b29ab6b66d9c4d9662f6156e5"
}

resource "cloudflare_record" "ghpages_apex_a" {
  for_each = toset([
    "185.199.108.153",
    "185.199.109.153",
    "185.199.110.153",
    "185.199.111.153",
  ])
  zone_id = var.cloudflare_zone_id
  name    = "haygrid.com"
  type    = "A"
  content = each.value
  proxied = true
  ttl     = 1
}

import {
  to = cloudflare_record.ghpages_apex_aaaa["2606:50c0:8000::153"]
  id = "07c43d004be84d6665edaa1644b97396/e142cc87758a5820997c96a04662f545"
}
import {
  to = cloudflare_record.ghpages_apex_aaaa["2606:50c0:8001::153"]
  id = "07c43d004be84d6665edaa1644b97396/5cae0186daa550b96833f99ff0c3bb64"
}
import {
  to = cloudflare_record.ghpages_apex_aaaa["2606:50c0:8002::153"]
  id = "07c43d004be84d6665edaa1644b97396/a3dcbbd7dd5632f2f00de82bac1e17a5"
}
import {
  to = cloudflare_record.ghpages_apex_aaaa["2606:50c0:8003::153"]
  id = "07c43d004be84d6665edaa1644b97396/6df7cc4a52c35191e9414d7a9b3286cc"
}

resource "cloudflare_record" "ghpages_apex_aaaa" {
  for_each = toset([
    "2606:50c0:8000::153",
    "2606:50c0:8001::153",
    "2606:50c0:8002::153",
    "2606:50c0:8003::153",
  ])
  zone_id = var.cloudflare_zone_id
  name    = "haygrid.com"
  type    = "AAAA"
  content = each.value
  proxied = true
  ttl     = 1
}

# Step 1: Create redirect ruleset before any DNS changes.
#         Apply with: tofu apply -target=cloudflare_ruleset.redirect_apex_to_www
#                                -target=cloudflare_record.ghpages_apex_a
#                                -target=cloudflare_record.ghpages_apex_aaaa

resource "cloudflare_ruleset" "redirect_apex_to_www" {
  zone_id = var.cloudflare_zone_id
  name    = "Redirect apex to www"
  kind    = "zone"
  phase   = "http_request_dynamic_redirect"

  rules {
    action = "redirect"
    action_parameters {
      from_value {
        status_code = 301
        target_url {
          expression = "concat(\"https://www.haygrid.com\", http.request.uri.path)"
        }
        preserve_query_string = true
      }
    }
    expression  = "(http.host eq \"haygrid.com\")"
    description = "Redirect apex domain to www"
    enabled     = true
  }
}

# Step 2: Remove ghpages_apex_a and ghpages_apex_aaaa resource + import blocks,
#         then destroy with:
#         tofu apply -target=cloudflare_record.ghpages_apex_a
#                    -target=cloudflare_record.ghpages_apex_aaaa

# Step 3: Add proxied apex records and apply.
#         192.0.2.1 is RFC 5737 TEST-NET — never reached (Cloudflare proxies terminate first).
#         100:: is IANA discard prefix (RFC 6666) — same reason.
#
# resource "cloudflare_record" "apex_a" {
#   zone_id    = var.cloudflare_zone_id
#   name       = "@"
#   type       = "A"
#   content    = "192.0.2.1"
#   proxied    = true
#   ttl        = 1
#   depends_on = [cloudflare_ruleset.redirect_apex_to_www]
# }
#
# resource "cloudflare_record" "apex_aaaa" {
#   zone_id    = var.cloudflare_zone_id
#   name       = "@"
#   type       = "AAAA"
#   content    = "100::"
#   proxied    = true
#   ttl        = 1
#   depends_on = [cloudflare_ruleset.redirect_apex_to_www]
# }

# ---------------------------------------------------------------------------
# PHASE 2: Point www to Cloudflare Pages (after Phase 1 is stable)
# ---------------------------------------------------------------------------
# Step 0: Run the following to get the www CNAME record ID:
#         curl -s -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \
#           "https://api.cloudflare.com/client/v4/zones/07c43d004be84d6665edaa1644b97396/dns_records?name=www.haygrid.com&type=CNAME" \
#           | jq '.result[] | {id, content}'
#         Record ID: 10a0749dd1f8cdef8aa7cb62b03b1ac1  content: haygrid.github.io

# import {
#   to = cloudflare_record.ghpages_www
#   id = "07c43d004be84d6665edaa1644b97396/10a0749dd1f8cdef8aa7cb62b03b1ac1"
# }
#
# resource "cloudflare_record" "ghpages_www" {
#   zone_id = var.cloudflare_zone_id
#   name    = "www"
#   type    = "CNAME"
#   content = "haygrid.github.io"
#   proxied = true
#   ttl     = 1
# }
#
# After importing, remove ghpages_www resource + import block, then add:
#
# resource "cloudflare_record" "www" {
#   zone_id = var.cloudflare_zone_id
#   name    = "www"
#   type    = "CNAME"
#   content = "haygrid-site.pages.dev"
#   proxied = true
#   ttl     = 1
# }
