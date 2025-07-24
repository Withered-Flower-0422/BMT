import { defineAdditionalConfig } from "vitepress"

const year = new Date().getFullYear()

export default defineAdditionalConfig({
  title: "Ballex² Mapping Tutorial",

  lang: "en-US",
  description: "Ballex² Mapping Tutorial",

  themeConfig: {
    nav: [
      { text: "Start", link: "/en/start/about" },
      { text: "Advanced", link: "/en/advanced/about" },
      { text: "Script", link: "/en/script/about" },
      { text: "Other", link: "/en/other/about" },
    ],

    sidebar: {
      "/en/start/": {
        base: "/en/start/",
        items: [
          {
            text: "Start",
            items: [
              { text: "About", link: "about" },
              { text: "Preparation", link: "preparation" },
              { text: "Basic Operation", link: "basicOperation" },
              { text: "Road Generator", link: "roadGenerator" },
              { text: "Machinery", link: "machinery" },
              { text: "Release Map", link: "release" },
            ],
          },
        ],
      },
      "/en/advanced/": {
        base: "/en/advanced/",
        items: [
          {
            text: "Advanced",
            items: [
              { text: "From Beginner to Expert", link: "about" },
              { text: "Tools", link: "tools" },
              { text: "Assets", link: "assets" },
              {
                text: "Scene Settings",
                collapsed: true,
                link: "sceneSettings",
                base: "/en/advanced/sceneSettings/",
                items: [
                  {
                    text: "Map Information",
                    link: "mapInfo",
                  },
                  {
                    text: "Environment",
                    link: "environment",
                  },
                  {
                    text: "Lighting",
                    link: "lighting",
                  },
                  {
                    text: "Sky",
                    link: "sky",
                  },
                  {
                    text: "Cloud",
                    link: "cloud",
                  },
                  {
                    text: "Fog",
                    link: "fog",
                  },
                  {
                    text: "Lens",
                    link: "lens",
                  },
                  {
                    text: "BGM",
                    link: "backgroundMusic",
                  },
                  {
                    text: "<s>Terrain</s>",
                    link: "terrain",
                  },
                  {
                    text: "Collection Prototype",
                    link: "collectionPrototype",
                  },
                  {
                    text: "Asset Reference",
                    link: "assetReference",
                  },
                  {
                    text: "Custom Ball",
                    link: "customBall",
                  },
                  {
                    text: "Landscaping",
                    link: "landscaping",
                  },
                ],
              },
              {
                text: "Item",
                collapsed: true,
                link: "item",
                base: "/en/advanced/item/",
                items: [
                  {
                    text: "Settings",
                    link: "settings",
                  },
                  {
                    text: "Renderer",
                    link: "renderer",
                  },
                  {
                    text: "Road Generator",
                    link: "roadGenerator",
                  },
                  {
                    text: "Physics Object",
                    link: "physicsObject",
                  },
                  {
                    text: "Item Link",
                    link: "itemLink",
                  },
                  {
                    text: "Trigger",
                    link: "trigger",
                  },
                  {
                    text: "Joint",
                    link: "joint",
                  },
                  {
                    text: "Way Point",
                    link: "wayPoint",
                  },
                  {
                    text: "Way Path",
                    link: "wayPath",
                  },
                  {
                    text: "Collection",
                    link: "collection",
                  },
                  {
                    text: "Light",
                    link: "light",
                  },
                  {
                    text: "Particle Emitter",
                    link: "particleEmitter",
                  },
                  {
                    text: "Audio Player",
                    link: "audioPlayer",
                  },
                  {
                    text: "Decal",
                    link: "decal",
                  },
                  {
                    text: "Camera",
                    link: "camera",
                  },
                  {
                    text: "Executor",
                    link: "executor",
                  },
                  {
                    text: "<s>Terrain Stamp</s>",
                    link: "terrainStamp",
                  },
                ],
              },
            ],
          },
        ],
      },
      "/en/script/": {
        base: "/en/script/",
        items: [
          {
            text: "Script",
            items: [
              { text: "About", link: "about" },
              { text: "Game Script", link: "game" },
              { text: "Editor Script", link: "editor" },
              { text: "Road Generator Script", link: "roadGenerator" },
            ],
          },
        ],
      },
      "/en/other/": {
        base: "/en/other/",
        items: [
          {
            text: "Other",
            items: [
              { text: "MMO", link: "mmo" },
              { text: "Acknowledgements", link: "acknowledgements" },
            ],
          },
        ],
      },
    },

    footer: {
      message:
        "Released under the <a href='https://github.com/Withered-Flower-0422/BMT/blob/main/LICENSE' target='_blank'>MIT</a> License.",
      copyright: `Copyright © ${
        year === 2025 ? "" : "2025-"
      }${year} Withered Flower <br> Content is licensed under a <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">CC BY-NC-SA 4.0</a> License.`,
    },

    docFooter: {
      prev: "Previous page",
      next: "Next page",
    },

    outline: {
      label: "On this page",
    },

    lastUpdated: {
      text: "Last updated",
    },

    notFound: {
      title: "PAGE NOT FOUND",
      quote: "You have been caught in an unknown territory by evil Mush.",
      linkLabel: "go to home",
      linkText: "Take me home",
    },

    langMenuLabel: "Change language",
    returnToTopLabel: "Return to top",
    sidebarMenuLabel: "Menu",
    darkModeSwitchLabel: "Appearance",
    lightModeSwitchTitle: "Switch to light theme",
    darkModeSwitchTitle: "Switch to dark theme",
    skipToContentLabel: "Skip to content",

    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "Search",
            buttonAriaLabel: "Search",
          },
          modal: {
            displayDetails: "Display detailed list",
            resetButtonTitle: "Reset search",
            backButtonTitle: "Go back",
            noResultsText: "No results for",
            footer: {
              selectText: "to select",
              selectKeyAriaLabel: "to select",
              navigateText: "to navigate",
              navigateUpKeyAriaLabel: "to navigate up",
              navigateDownKeyAriaLabel: "to navigate down",
              closeText: "to close",
              closeKeyAriaLabel: "to close",
            },
          },
        },
      },
    },
  },
})
