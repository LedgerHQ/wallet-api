// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const TITLE = "Wallet-API";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: TITLE,
  tagline:
    "Integrate your application or service inside a Ledger client wallet",
  url: "https://wallet.api.ledger.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [
    [
      "docusaurus-plugin-typedoc",
      {
        id: "api-client",
        // TypeDoc options
        entryPoints: ["../packages/client/src/index.ts"],
        tsconfig: "../packages/client/tsconfig.json",
        plugin: ["typedoc-plugin-rename-defaults"],
        readme: "none",
        gitRevision: "main",

        // Plugin options
        out: "reference/api/client",
        sidebar: {
          categoryLabel: "Client",
        },
      },
    ],
    [
      "docusaurus-plugin-typedoc",
      {
        id: "api-server",
        // TypeDoc options
        entryPoints: ["../packages/server/src/index.ts"],
        tsconfig: "../packages/server/tsconfig.json",
        plugin: ["typedoc-plugin-rename-defaults"],
        readme: "none",
        gitRevision: "main",

        // Plugin options
        out: "reference/api/server",
        sidebar: {
          categoryLabel: "Server",
        },
      },
    ],
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/LedgerHQ/wallet-api/tree/main/documentation",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: TITLE,
        logo: {
          alt: "Logo",
          src: "img/logo.svg",
          srcDark: "img/logo-dark.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Documentation",
          },
          {
            href: "https://github.com/LedgerHQ/wallet-api",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Documentation",
            items: [
              {
                label: "Tutorials",
                to: "/category/tutorials",
              },
              {
                label: "How-to guides",
                to: "/category/how-to-guides",
              },
              {
                label: "Reference",
                to: "/category/reference",
              },
              {
                label: "Explanations",
                to: "/category/explanations",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://developers.ledger.com/discord/",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/Ledger",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Developer Portal",
                href: "https://developers.ledger.com/",
              },
              {
                label: "GitHub",
                href: "https://github.com/LedgerHQ/wallet-api",
              },
            ],
          },
        ],
        logo: {
          alt: "Ledger",
          src: "img/LEDGER-WORDMARK-BLACK.png",
          srcDark: "img/LEDGER-WORDMARK-WHITE.png",
          href: "https://www.ledger.com/",
        },
        copyright: `Copyright © ${new Date().getFullYear()} Ledger SAS. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
