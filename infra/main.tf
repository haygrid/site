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
    build_command   = "npm run build"
    destination_dir = "out"
    root_dir        = ""
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

# DNS: www → Pages production
# CUTOVER STEP: only apply this after verifying the site at haygrid-site.pages.dev
# Run separately: tofu apply -target=cloudflare_record.www
resource "cloudflare_record" "www" {
  zone_id         = var.cloudflare_zone_id
  name            = "www"
  type            = "CNAME"
  content         = "haygrid-site.pages.dev"
  proxied         = true
  ttl             = 1
  allow_overwrite = true
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
