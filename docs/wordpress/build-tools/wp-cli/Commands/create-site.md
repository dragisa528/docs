---
sidebar_position: 1
sidebar_label: create-site
---

# Create a new website

:::caution

While our other tools are suitable for all developers, this particular command is **very** opinionated and produces an installation tailored to our own preferences. 

We hope you find it useful but you may prefer to set up your website without it.

:::


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

To pre-install WooCommerce with the new project you should add `--woocommerce` to the command.

```bash
wp eighteen73 create-site foobar --woocommerce
```

## Installing a multisite

To configure the new website as a multisite network you should add `--multisite` to the command. You will be prompted for extra information during installation.

```bash
wp eighteen73 create-site foobar --multisite
```

Please also refer to [this page](/wordpress/build-tools/nebula/multisite) for information about Nebula's necessary server configuration.
