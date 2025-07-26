import { defineConfig } from "vitepress"

const base = "/BMT/"

export default defineConfig({
  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  base,

  rewrites: { "zh/:rest*": ":rest*" },
  head: [["link", { rel: "icon", href: `${base}ballex2.ico` }]],
  locales: { root: { label: "简体中文" }, en: { label: "English" } },

  themeConfig: {
    outline: { level: [2, 6] },
    search: { provider: "local" },
    logo: { dark: "/ballex2.ico", light: "/ballex2light.ico" },

    socialLinks: [
      { icon: "github", link: "https://github.com/Withered-Flower-0422/BMT" },
      { icon: "steam", link: "https://store.steampowered.com/app/1809190/" },
    ],
  },
})
