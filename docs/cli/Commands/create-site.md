---
sidebar_position: 1
sidebar_label: create-site
---

# Create a new website

This site installation command will:

- install a fresh copy of WordPress using the [Nebula](https://github.com/eighteen73/nebula) framework
- install the [Pulsar](https://github.com/eighteen73/pulsar) theme
- install other plugins that are part of our standard website configuration
- preconfigure WordPress and the installed plugins to our preference
- start a fresh git repostiory

It will interactively ask for installation details (e.g. database credentials) as needed.

## Install a new website

When setting up a new website you need to specify a folder for the project. Typically this will be a new directory underneath your current location.

```bash
wp eighteen73 create-site foobar
```

Or, if you needs to install outside of the current directory:

```bash
wp eighteen73 create-site /home/joebloggs/foobar
```

## Installing with WooCommerce

To pre-install WooCommerce with the new project you should add `--woocommerce` to the command. This must be run at the time of website creation.

```bash
wp eighteen73 create-site foobar --woocommerce
```

