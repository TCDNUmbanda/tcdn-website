import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Tenda de Caridade Divina Nossa Senhora',
  tagline: 'Página de boas vindas',
  favicon: './img/TCDN.ico',

  // Set the production url of your site here
  url: 'https://github.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/tcdn-website',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'TCDNUmbanda', // Usually your GitHub org/user name.
  projectName: 'tcdn-website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/'
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    navbar: {
      title: 'Tenda de Caridade Divina Nossa Senhora',
      logo: {
        alt: 'Logo da Casa',
        src: './img/TCDN_LOGO.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Temas'
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Redes',
          items: [
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/tendacaridadenossasenhora/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Vitor Dias (https://github.com/vitor-dias).`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
