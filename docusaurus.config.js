// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'eighteen73 Docs',
  tagline: 'Documentation for packages published by eighteen73.',
  url: 'https://docs.eighteen73.co.uk',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'eighteen73', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/eighteen73/docs/edit/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'eighteen73 logo',
          src: 'img/eighteen73-logo-dark.svg',
          srcDark: 'img/eighteen73-logo-light.svg',
          width: 110,
          height: 23,
        },
        items: [
          {
            type: 'dropdown',
            label: 'WordPress',
            items: [
              {
                label: 'Build Tools',
                to: 'wordpress/build-tools',
              },
              {
                label: 'Plugins',
                to: 'wordpress/plugins',
              },
            ]
          },
          {
            type: 'dropdown',
            label: 'Laravel',
            items: [
              {
                label: 'Packages',
                to: 'laravel',
              },
            ]
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'More',
            items: [
              {
                label: 'Website',
                href: 'https://eighteen73.co.uk',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/eighteen73',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} eighteen73`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: [
          'ini',
          'php',
        ],
      },
      announcementBar: {
        id: 'work_in_progress',
        content: '<strong>These docs are work-in-progress.</strong> All published information is correct but there may be some gaps.',
        backgroundColor: '#7278cc',
        textColor: '#ffffff',
        isCloseable: false,
      },
    }),
};

module.exports = config;
