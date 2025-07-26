import { defineAdditionalConfig } from "vitepress"

const year = new Date().getFullYear()

export default defineAdditionalConfig({
  title: "Ballex² 制图教程",

  lang: "zh-Hans",
  description: "Ballex² 制图教程",

  themeConfig: {
    nav: [
      { text: "起步", link: "/start/about" },
      { text: "进阶", link: "/advanced/about" },
      { text: "脚本", link: "/script/about" },
      { text: "其他", link: "/other/about" },
    ],

    sidebar: {
      "/start/": {
        base: "/start/",
        items: [
          {
            text: "起步",
            items: [
              { text: "关于本教程", link: "about" },
              { text: "制图前准备", link: "preparation" },
              { text: "基础操作", link: "basicOperation" },
              { text: "路面生成器", link: "roadGenerator" },
              { text: "机关", link: "machinery" },
              { text: "发布地图", link: "release" },
            ],
          },
        ],
      },
      "/advanced/": {
        base: "/advanced/",
        items: [
          {
            text: "进阶",
            items: [
              { text: "从入门到精通", link: "about" },
              { text: "工具", link: "tools" },
              { text: "素材", link: "assets" },
              {
                text: "场景设置",
                collapsed: true,
                link: "sceneSettings",
                base: "/advanced/sceneSettings/",
                items: [
                  {
                    text: "地图信息",
                    link: "mapInfo",
                  },
                  {
                    text: "环境",
                    link: "environment",
                  },
                  {
                    text: "光照",
                    link: "lighting",
                  },
                  {
                    text: "天空",
                    link: "sky",
                  },
                  {
                    text: "云",
                    link: "cloud",
                  },
                  {
                    text: "雾",
                    link: "fog",
                  },
                  {
                    text: "镜头",
                    link: "lens",
                  },
                  {
                    text: "背景音乐",
                    link: "backgroundMusic",
                  },
                  {
                    text: "<s>地形</s>",
                    link: "terrain",
                  },
                  {
                    text: "收集品原型",
                    link: "collectionPrototype",
                  },
                  {
                    text: "素材引用",
                    link: "assetReference",
                  },
                  {
                    text: "自定义玩家球",
                    link: "customBall",
                  },
                  {
                    text: "造景",
                    link: "landscaping",
                  },
                ],
              },
              {
                text: "元件",
                collapsed: true,
                link: "item",
                base: "/advanced/item/",
                items: [
                  {
                    text: "元件设置",
                    link: "settings",
                  },
                  {
                    text: "渲染器",
                    link: "renderer",
                  },
                  {
                    text: "路面生成器",
                    link: "roadGenerator",
                  },
                  {
                    text: "物理物体",
                    link: "physicsObject",
                  },
                  {
                    text: "元件链接",
                    link: "itemLink",
                  },
                  {
                    text: "触发器",
                    link: "trigger",
                  },
                  {
                    text: "关节",
                    link: "joint",
                  },
                  {
                    text: "路点",
                    link: "wayPoint",
                  },
                  {
                    text: "路径",
                    link: "wayPath",
                  },
                  {
                    text: "收集品",
                    link: "collection",
                  },
                  {
                    text: "光源",
                    link: "light",
                  },
                  {
                    text: "粒子发射器",
                    link: "particleEmitter",
                  },
                  {
                    text: "音频播放器",
                    link: "audioPlayer",
                  },
                  {
                    text: "贴花投射器",
                    link: "decal",
                  },
                  {
                    text: "摄像机",
                    link: "camera",
                  },
                  {
                    text: "执行器",
                    link: "executor",
                  },
                  {
                    text: "<s>地形印记</s>",
                    link: "terrainStamp",
                  },
                ],
              },
            ],
          },
        ],
      },
      "/script/": {
        base: "/script/",
        items: [
          {
            text: "脚本",
            items: [
              { text: "脚本简介", link: "about" },
              { text: "游戏内脚本", link: "game" },
              { text: "编辑器脚本", link: "editor" },
              { text: "路面生成器脚本", link: "roadGenerator" },
            ],
          },
        ],
      },
      "/other/": {
        base: "/other/",
        items: [
          {
            text: "其他",
            items: [
              { text: "联机", link: "mmo" },
              { text: "小技巧", link: "tricks" },
              { text: "致谢", link: "acknowledgements" },
            ],
          },
        ],
      },
    },

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    outline: {
      label: "页面导航",
    },

    lastUpdated: {
      text: "最后更新于",
    },

    notFound: {
      title: "页面未找到",
      quote: "你被邪恶大猫菇抓到了未知领域。",
      linkLabel: "前往首页",
      linkText: "带我回首页",
    },

    langMenuLabel: "多语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
    skipToContentLabel: "跳转到内容",

    footer: {
      message:
        "基于 <a href='https://github.com/Withered-Flower-0422/BMT/blob/main/LICENSE' target='_blank'>MIT</a> 许可发布",
      copyright: `版权所有 © ${
        year === 2025 ? "" : "2025-"
      }${year} 枯萎の花 <br> 教程内容遵循 <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans" target="_blank">CC BY-NC-SA 4.0</a> 许可协议`,
    },

    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            displayDetails: "显示详细信息",
            resetButtonTitle: "清除",
            backButtonTitle: "返回",
            noResultsText: "没有找到结果",
            footer: {
              selectText: "选择",
              selectKeyAriaLabel: "选择",
              navigateText: "切换",
              navigateUpKeyAriaLabel: "切换到上一级",
              navigateDownKeyAriaLabel: "切换到下一级",
              closeText: "关闭",
              closeKeyAriaLabel: "关闭",
            },
          },
        },
      },
    },
  },
})
