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
      environment_variables = {
        ROBOTS_NOINDEX = "true"
      }
    }
  }
}

# Production custom domain
resource "cloudflare_pages_domain" "production" {
  account_id   = var.cloudflare_account_id
  project_name = cloudflare_pages_project.haygrid.name
  domain       = "www.haygrid.com"
}

# Staging custom domain
resource "cloudflare_pages_domain" "staging" {
  account_id   = var.cloudflare_account_id
  project_name = cloudflare_pages_project.haygrid.name
  domain       = "staging.haygrid.com"
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

# DNS: apex → dummy IP (proxied; redirect rule fires before reaching origin)
# 192.0.2.1 is RFC 5737 TEST-NET, never reached since Cloudflare terminates proxied connections.
resource "cloudflare_record" "apex_a" {
  zone_id    = var.cloudflare_zone_id
  name       = "@"
  type       = "A"
  content    = "192.0.2.1"
  proxied    = true
  ttl        = 1
  comment    = "apex to www redirect proxy"
  depends_on = [cloudflare_ruleset.redirect_apex_to_www]
}

# 100:: is IANA discard prefix (RFC 6666), never reached for the same reason.
resource "cloudflare_record" "apex_aaaa" {
  zone_id    = var.cloudflare_zone_id
  name       = "@"
  type       = "AAAA"
  content    = "100::"
  proxied    = true
  ttl        = 1
  comment    = "apex to www redirect proxy"
  depends_on = [cloudflare_ruleset.redirect_apex_to_www]
}

# ---------------------------------------------------------------------------
# PHASE 2: Point www to Cloudflare Pages
# ---------------------------------------------------------------------------

# DNS: www → Pages production
resource "cloudflare_record" "www" {
  zone_id = var.cloudflare_zone_id
  name    = "www"
  type    = "CNAME"
  content = "haygrid-site.pages.dev"
  proxied = true
  ttl     = 1
}
