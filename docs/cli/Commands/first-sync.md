---
sidebar_position: 2
sidebar_label: first-sync
toc_min_heading_level: 2
toc_max_heading_level: 5
---

import SyncConfig from './_sync-config.md';

# Setup an existing website

The regular [sync](sync) command cannot be run without a local copy of WordPress to bootstrap, so this is a special version of that command which can be run before there's a working database for your local website.

Essentially, you can use this if you need to start work on an existing website and want to quickly setup a new local version with an up-to-date copy of the remote database.

## Usage

First you need to clone the website's Git repository to your development machine in the normal way. You will also need to add the usual local config for your hostname, DB details, etc. and run `composer install`.

Then, before actually loading the website in your browser, add the config documented below and run the following command:

```bash
wp eighteen73 first-sync
```

## Config

<SyncConfig />
