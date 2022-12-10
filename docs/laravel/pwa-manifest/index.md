# PWA Manifest

<repo-link name="laravel-pwa-manifest" licence="MIT" />

This Laravel Package generates icons files (inc. favicon) and a web app manifest for your website or web app.

## Installation

Require the package via Composer.

```bash
composer require eighteen73/laravel-pwa-manifest
```

Then publish the config file to your project.

```bash
php artisan vendor:publish --tag=pwa-manifest-config
```

## Config

You'll find documented config at `config/pwa-manifest.php`. To get started you may only need to change the value of `config('pwa-manifest.icons.primary')` so there's a source image for the package to generate icons.

It's important to read the entire config file and fill in all the values that are applicable to your website/app. It explains how to modify/add and attribute in a web app manifest.

## Blade Markup

Use the Blade component `x-pwa-manifest::head` as follows.

```html {11}
<html>
<head>
    <x-pwa-manifest::head/>
</head>
<body>
</body>
</html>
```

This will output all the necessary HTML tags to your rendered pages, for example.

```html
<html>
<head>
    <!-- Start of PWA -->
    <link rel="icon" type="image/png" sizes="32x32" href="https://example.com/pwa-manifest/icon-32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="https://example.com/pwa-manifest/icon-16.png">
    <link rel="manifest" href="https://example.com/pwa-manifest/manifest.json" />
    <meta name="application-name" content="My Laravel Web App">
    <!-- iOS-specific PWA -->
    <link rel="apple-touch-icon" sizes="180x180" href="https://example.com/pwa-manifest/icon-180.png">
    <!-- End of PWA -->
</head>
<body>
</body>
</html>

```

## Generating files

You can generate files on demand via an Artisan command or programmatically using a Job. 

Remember add the path at `config('pwa-manifest.root_path')` to your `.gitignore` file if you intend to generate files on the server and don't want to track them using Git.

### Artisan command

```bash
php artisan pwa-manifest:build
```

### Job

Dispatch the following job if you have an action that requires new files to be automatically generated. This is useful if your app allows users to specify their own branding online; just dispatch this job after they save their preferences.

```php
Eighteen73\PwaManifest\Jobs\BuildPwaManifest::dispatch();
```

The job will be queued by default so use `dispatchSync()` if you want to run it in the current process.
