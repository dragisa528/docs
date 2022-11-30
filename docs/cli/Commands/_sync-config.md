### Nebula/Bedrock websites

:::note
This same configuration is shared by the `first-sync` and `sync` so adding it once covers both commands.
:::

#### via development.php

Because this doesn't store any sensitive login credentials it may be beneficial to add sync configuration to the environment config and commit to your repo for the benefit of other developers working on the project.

```php title="/config/environments/development.php"
// Required
Config::define( 'EIGHTEEN73_SSH_HOST', 'website.example.com' );
Config::define( 'EIGHTEEN73_SSH_USER', 'username' );
Config::define( 'EIGHTEEN73_SSH_PATH', '/path/to/remote/website' );

// Optional, if the SSH port is not 22
Config::define( 'EIGHTEEN73_SSH_PORT', 123 );

// Optional, to automatically activate/deactivate plugins on sync
Config::define( 'EIGHTEEN73_SYNC_ACTIVATE_PLUGINS', 'plugin1,plugin2' );
Config::define( 'EIGHTEEN73_SYNC_DEACTIVATE_PLUGINS', 'plugin3' );
```

#### via .env

If you would rather not share your config, or you need to override the shared configuration added above, you can add this to you personal .env file.

```ini title="/.env"
EIGHTEEN73_SSH_HOST=website.example.com
EIGHTEEN73_SSH_USER=username
EIGHTEEN73_SSH_PATH=/path/to/remote/website

# Optional, if the SSH port is not 22
EIGHTEEN73_SSH_PORT=123

# Optional, to automatically activate/deactivate plugins on sync
EIGHTEEN73_SYNC_ACTIVATE_PLUGINS=plugin1,plugin2
EIGHTEEN73_SYNC_DEACTIVATE_PLUGINS=plugin3
```

### Older/basic WordPress

On websites without the above files you will need to add config to the website's wp-config.php file. This is **only** for use on non-Nebula/Bedrock websites.

```php title="/wp-config.php"
define( 'EIGHTEEN73_SSH_HOST', 'website.example.com' );
define( 'EIGHTEEN73_SSH_USER', 'username' );
define( 'EIGHTEEN73_SSH_PATH', '/path/to/remote/website' );

// Optional, if the SSH port is not 22
define( 'EIGHTEEN73_SSH_PORT', '123' );

// Optional, to automatically activate/deactivate plugins on sync
define( 'EIGHTEEN73_SYNC_ACTIVATE_PLUGINS', 'plugin1,plugin2' );
define( 'EIGHTEEN73_SYNC_DEACTIVATE_PLUGINS', 'plugin3' );
```
