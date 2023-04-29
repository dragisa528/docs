---
sidebar_position: 2
sidebar_label: Multisite
---

# Multisite

## NGINX

If you're using NGINX you will need to add one of the following two snippets to your host's config. Select the one that matches your website configuration.

For subdomain mode:

```nginx
rewrite ^/(wp-.*.php)$ /wp/$1 last;
rewrite ^/(wp-(content|admin|includes).*) /wp/$1 last;
```

or, for subdirectory mode:

```
if (!-e $request_filename) {
  rewrite /wp-admin$ $scheme://$host$uri/ permanent;
  rewrite ^(/[^/]+)?(/wp-.*) /wp$2 last;
  rewrite ^(/[^/]+)?(/.*.php) /wp$2 last;
}
```
