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
