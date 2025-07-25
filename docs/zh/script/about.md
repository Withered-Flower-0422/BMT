# 脚本

脚本板块将介绍 BME Pro 的脚本系统。

- 脚本分为 3 类：
  - [`游戏内脚本`](game)：用于控制游戏流程，操作游戏内的元件等
  - [`编辑器脚本`](editor)：用于操作编辑器里的元件
  - [`路面生成器脚本`](roadGenerator)：用于生成网格

## 阅读建议

- BME Pro 使用的脚本语言为 JavaScript。本教程不包含 [JavaScript 教程](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)，请确保自己对 JavaScript 的语法有一定的了解

- 使用脚本前，建议先下载 [BME Script Typings](https://github.com/Withered-Flower-0422/BST)，为自己的编辑器添加 BME Pro 的代码提示功能

- 学完本板块的内容后，你将有能力编写脚本，制作出具有独特机制的地图，甚至客制化属于自己的 BME Pro 编辑器

## 数据类型

`游戏内脚本` 和 `编辑器脚本` 中都可以导入并使用以下 7 种基本数据类型：

- `Float2`
- `Float3`
- `Float4`
- `Quaternion`
- `Bool3`
- `Trans`
- `ColorRGBA`

具体参见 [BST/\_Typings/utils/basicData.d.ts](https://github.com/Withered-Flower-0422/BST/blob/main/_Typings/utils/basicData.d.ts)。
