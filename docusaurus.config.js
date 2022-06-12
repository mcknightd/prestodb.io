// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PrestoDB',
  tagline: 'Distributed SQL Query Engine for Big Data',
  url: 'https://prestodb.io',
  baseUrl: '/prestodb.io/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'mcknightd', // Usually your GitHub org/user name.
  projectName: 'prestodb.io', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: [
            require.resolve('./src/css/bootstrap.min.css'),
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/effects.css'),
            require.resolve('./src/css/ytlightbox.css')
            ],
        },
      }),
    ],
  ],
      //themes: ['@docusaurus/theme-bootstrap'],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'PrestoDB',
          src: 'img/logo-presto-white.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Get Started',
          },
          
          {
            type: 'dropdown',
            label: 'Learn',
            position: 'left',
            items: [
              {to: '/blog', label: 'Blog'},
              // ... more items
            ],
          },
          {to: 'community', label: 'Community', position: 'left', target:'_self'},
          {to: 'pathname:///docs/current/', label: 'Docs', position: 'left', target:'_self'},
          //{to: 'pathname:///prestoconday2021.html', label: 'Prestoconday', position: 'left', target:'_self'},
          {
            href: 'https://github.com/prestodb/presto',
            className: 'nav-icon nav-github',
            position: 'right',
          },
          {
            href: 'https://twitter.com/prestodb',
            className: 'nav-icon nav-twitter',
            position: 'right',
          },
          {
            href: 'https://prestodb.slack.com/',
            className: 'nav-icon nav-slack',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Get Started',
                to: '/docs/intro',
              },
              {to: 'pathname:///docs/current/', label: 'Presto Docs', position: 'left', target:'_self'},
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Slack',
                href: 'https://prestodb.slack.com/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/prestodb',
              },
              {
                label: 'MeetUp',
                href: 'https://www.meetup.com/topics/presto/',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/presto-foundation/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'PrestoDB Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/prestodb/presto',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()}  The Presto Foundation.<br>
        AAll rights reserved. Presto is a registered trademark of LF Projects, LLC. <br>Please see our <a href="https://lfprojects.org/policies/trademark-policy/" target="_blank">Trademark Policy</a> for more
    information.<br/>
    <a href="https://lfprojects.org/policies/privacy-policy/" target="_blank">Privacy Policy</a> |
    <a href="https://lfprojects.org/policies/terms-of-use/" target="_blank">Terms of Use</a>.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },

    }),
   scripts: [
      {
        src:
          '/js/bootstrap.bundle.min.js',
          async: false,
      },
      {
        src:
          '/js/effects.js',
          async: false,
      },
      {
        src:
          '/js/ytlightbox.js',
          async: false,
      },
  
  ],

};

module.exports = config;
