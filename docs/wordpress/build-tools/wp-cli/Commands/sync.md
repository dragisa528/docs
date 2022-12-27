---
sidebar_position: 3
sidebar_label: sync
---

import SyncConfig from './_sync-config.md';

# Sync data from a remote website

The sync command downloads a database dump and/or uploads from an existing website and overwrites your local copy as a convenient means of updating it. This is one-way sync so there's no risk of altering the remote website.

The command requires an SSH connection to the remote website.

## Usage

The plain command only applies plugin overrides.

```bash
wp eighteen73 sync
```

Database mode downloads a fresh copy of the remote database and applies plugin overrides.

```bash
wp eighteen73 sync --database
```

Downloads a fresh copy of uploads directory and applies plugin overrides.

```bash
wp eighteen73 sync --uploads
```

All of the above.

```bash
wp eighteen73 sync --database --uploads
```

:::tip

The `--uploads` option is not necessary if you are using our [Satellite](https://github.com/eighteen73/satellite) plugin and it's remote files feature is enabled. In that case your local website automatically requests remote images as needed.

:::



## Config

<SyncConfig />
