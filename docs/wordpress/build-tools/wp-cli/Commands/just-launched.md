---
sidebar_position: 4
sidebar_label: just-launched
---

# Post-Launch Updates

This command may be run on a recently launched website and it will:

- replace instances of a staging/development domain with the new live one (optional)
- clear caches and transient storage
- run a Yoast re-index

It is safe to re-run this command at any time.

The command is essentially just a convenience for performing multiple other WP-CLI actions in one go, avoiding common gotchas after launching a website. 

## Basic run

Running this command without any extra parameters will do its basic cache clearing and data rebuilds mentioned above.

```bash
wp eighteen73 just-launched
```

## Basic run + update website domain

The command can also assist the go-live process by running a search-replace at the same time as its other tasks. This will replace the website's old domain wherever it appears deep in the database. 

Note that this is the most basic form of a search-replace and it is safe but if you prefer more control, or doing it as a dry run first, please skip this option use the `wp search-replace` command manually instead.

```bash
wp eighteen73 just-launched --old-domain=staging.example.com --new-domain=example.com

# You can include multiple old domains (comma separated) in case you are concerned about having others still in the database
wp eighteen73 just-launched --old-domain=staging.example.com,example.test --new-domain=example.com
```
