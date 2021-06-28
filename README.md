# Cloudflare Workers Test

Example `wrangler.toml`:
```toml
name = "cloudflare-workers-test"
type = "javascript"
account_id = ""
usage_model = "bundled"

[env.dev]
vars = { ENVIRONMENT = "development" }
workers_dev = true

[env.prod]
vars = { ENVIRONMENT = "production" }
zone_id = ""
route = ""

[build]
command = "yarn install && yarn build"

[build.upload]
format = "service-worker"
```
