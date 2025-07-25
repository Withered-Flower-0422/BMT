# 编辑器脚本

## 使用方法

1. 参考 [模板](#模板) 和 [示例](#示例) 的书写方式编写好脚本
2. 将脚本 [导入](../advanced/assets#脚本) 编辑器
3. 选中需要执行的脚本，在 `检视器` 中点击 `执行` 按钮

- 注册至菜单栏
  1. 将脚本放入 `Scripts/_Editor` 文件夹中
  2. 在脚本中导出 [`menuPath`](#menuPath) 字符串，字符串值即为菜单栏中显示的名称，可用 `/` 分隔层级
  3. 如果需要给注册到菜单栏中的脚本加上图标，则需要先将图片导入编辑器转为 `.tex` 格式，再将其放入 `Scripts/_Editor/Icons` 文件夹中，并将其命名为脚本中 `menuPath` 字符串值

::: tip 提示

注册的菜单栏项目需重启编辑器生效。

:::

## 钩子

编辑器共提供了 2 个钩子，参见 [BST/\_Typings/editorApi/exportFuncs.d.ts](https://github.com/Withered-Flower-0422/BST/blob/main/_Typings/editorApi/exportFuncs.d.ts)。

### `menuPath`

```ts
export const menuPath: string
```

用于将脚本注册至菜单栏。

### `execute`

```ts
export const execute: () => void
```

点击执行按钮时执行。

## 模块

编辑器共提供了以下 6 个模块：

- [`console`](https://github.com/Withered-Flower-0422/BST/blob/main/_Typings/editorApi/modules/console.d.ts)
- [`dialogWindowManager`](https://github.com/Withered-Flower-0422/BST/blob/main/_Typings/editorApi/modules/dialogWindowManager.d.ts)
- [`editor`](https://github.com/Withered-Flower-0422/BST/blob/main/_Typings/editorApi/modules/editor.d.ts)
- [`file`](https://github.com/Withered-Flower-0422/BST/blob/main/_Typings/editorApi/modules/file.d.ts)
- [`scene`](https://github.com/Withered-Flower-0422/BST/blob/main/_Typings/editorApi/modules/scene.d.ts)
- [`math`](https://github.com/Withered-Flower-0422/BST/blob/main/_Typings/utils/math.d.ts)

具体参见 [BST/\_Typings/editorApi/modules](https://github.com/Withered-Flower-0422/BST/tree/main/_Typings/editorApi/modules)。

## 模板

参见 [BST/Templates/editorTemplate.js](https://github.com/Withered-Flower-0422/BST/blob/main/Templates/editorTemplate.js)。

## 示例

参见 [BST/Samples/editorSamples](https://github.com/Withered-Flower-0422/BST/tree/main/Samples/editorSamples)。
