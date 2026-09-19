# 编辑器脚本 {#editor-script}

## 使用方法 {#usage}

1. 参考 [模板](#template) 和 [示例](#example) 的书写方式编写好脚本
2. 将脚本 [导入](../advanced/assets#scripts) 编辑器
3. 选中需要执行的脚本，在 `检视器` 中点击 `执行` 按钮

- 注册至菜单栏
  1. 将脚本放入 `Scripts/_Editor` 文件夹中
  2. 在脚本中导出 [`menuPath`](#menuPath) 字符串，字符串值即为菜单栏中显示的名称，可用 `/` 分隔层级
  3. 如果需要给注册到菜单栏中的脚本加上图标，则需要先将图片导入编辑器转为 `.tex` 格式，再将其放入 `Scripts/_Editor/Icons` 文件夹中，并将其命名为脚本中 `menuPath` 字符串值

::: tip 提示

注册的菜单栏项目需重启编辑器生效。

:::

## 钩子 {#hooks}

编辑器共提供了 13 个钩子，参见 [BST/\_Typings/editorApi/exportFuncs.d.ts](https://github.com/Withered-Flower-0422/BST/blob/main/_Typings/editorApi/exportFuncs.d.ts)。

使用 [素材面板底部的 `清除缓存`](../advanced/assets.md#assets) 重新注册事件。

### `menuPath` {#menupath}

```ts
export const menuPath: string
```

用于将脚本注册至菜单栏。

### `execute` {#execute}

```ts
export const execute: () => void
```

点击执行按钮时执行。

### `onTick` {#on-tick}

```ts
export const onTick: () => void
```

每隔 1s 执行一次。

### `onBeforeTestMap` {#on-before-test-map}

```ts
export const onBeforeTestMap: () => void
```

在测试地图前执行。

### `onAfterTestMap` {#on-after-test-map}

```ts
export const onAfterTestMap: () => void
```

在测试地图后执行。

### `onBeforeExportMap` {#on-before-export-map}

```ts
export const onBeforeExportMap: (filePath: string) => void
```

在导出地图前执行。

- `filePath`：导出地图的系统路径

### `onAfterExportMap` {#on-after-export-map}

```ts
export const onAfterExportMap: (filePath: string) => void
```

在导出地图后执行。

- `filePath`：导出地图的系统路径

### `onBeforeOpenScene` {#on-before-open-scene}

```ts
export const onBeforeOpenScene: (scenePath: string) => void
```

在打开场景前执行。

- `scenePath`：场景的 BME 路径

### `onAfterOpenScene` {#on-after-open-scene}

```ts
export const onAfterOpenScene: (scenePath: string) => void
```

在打开场景后执行。

- `scenePath`：场景的 BME 路径

### `onBeforeSaveScene` {#on-before-save-scene}

```ts
export const onBeforeSaveScene: (scenePath: string) => void
```

在保存场景前执行。

- `scenePath`：场景的 BME 路径

### `onAfterSaveScene` {#on-after-save-scene}

```ts
export const onAfterSaveScene: (scenePath: string) => void
```

在保存场景后执行。

- `scenePath`：场景的 BME 路径

### `onBeforeImportAsset` {#on-before-import-asset}

```ts
export const onBeforeImportAsset: (filePath: string, assetPath: string) => void
```

在导入资源前执行。

- `filePath`：资源的系统路径
- `assetPath`：资源的 BME 路径

### `onAfterImportAsset` {#on-after-import-asset}

```ts
export const onAfterImportAsset: (filePath: string, assetPath: string) => void
```

在导入资源后执行。

- `filePath`：资源的系统路径
- `assetPath`：资源的 BME 路径

## 模块 {#modules}

编辑器共提供了以下 6 个模块：

- [`console`](https://github.com/Withered-Flower-0422/BST/blob/main/_Typings/editorApi/modules/console.d.ts)
- [`dialogWindowManager`](https://github.com/Withered-Flower-0422/BST/blob/main/_Typings/editorApi/modules/dialogWindowManager.d.ts)
- [`editor`](https://github.com/Withered-Flower-0422/BST/blob/main/_Typings/editorApi/modules/editor.d.ts)
- [`file`](https://github.com/Withered-Flower-0422/BST/blob/main/_Typings/editorApi/modules/file.d.ts)
- [`scene`](https://github.com/Withered-Flower-0422/BST/blob/main/_Typings/editorApi/modules/scene.d.ts)
- [`math`](https://github.com/Withered-Flower-0422/BST/blob/main/_Typings/utils/math.d.ts)

具体参见 [BST/\_Typings/editorApi/modules](https://github.com/Withered-Flower-0422/BST/tree/main/_Typings/editorApi/modules)。

使用如下语法导入模块：

```js
import {
  // modules
  editor,
  console,
  file,
  scene,
  dialogWindowManager,
  math,

  // basic data types
  Float2,
  Float3,
  Float4,
  Bool3,
  ColorRGBA,
  Trans,
  Quaternion,
} from "editorApi"
```

:::: tip 提示

如需导入工程内的自制模块，请使用 BME 的资源路径，如：

```js
import { dotProduct } from "Scripts/_Editor/MathExtension.js"
```

::: warning 注意

- 只能导入 `_Editor` 文件夹中的模块（<span class="text-red">不包括</span> 其中的子目录）。
- 此处的 `.js` 后缀 <span class="text-green">可以</span> 被省略。

:::

::::

## 模板 {#template}

参见 [BST/Templates/editorTemplate.js](https://github.com/Withered-Flower-0422/BST/blob/main/Templates/editorTemplate.js)。

## 示例 {#example}

参见 [BST/Samples/editorSamples](https://github.com/Withered-Flower-0422/BST/tree/main/Samples/editorSamples)。
