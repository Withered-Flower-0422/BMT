# Editor Script

## Usage

1. Write the script by referring to the writing style of the [Template](#Template) and [Example](#Example).
2. [Import](../advanced/assets#Scripts) the script into the editor.
3. Select the script you want to execute and click the `Execute` button in the `Inspector`.

- Register to the menu bar
  1. Place the script in the `Scripts/_Editor` folder.
  2. Export a [`menuPath`](#menuPath) string in the script. The string value will be the name displayed in the menu bar. You can use `/` to separate levels.
  3. If you need to add an icon to a script registered in the menu bar, you first need to import an image into the editor to convert it to `.tex` format, then place it in the `Scripts/_Editor/Icons` folder, and name it the same as the `menuPath` string value in the script.

::: tip

Registered menu bar items require an editor restart to take effect.

:::

## Hooks

The editor provides a total of 13 hooks, see [BST/\_Typings/editorApi/exportFuncs.d.ts](https://github.com/Withered-Flower-0422/BST/blob/main/_Typings/editorApi/exportFuncs.d.ts).

Use [`Clear Cache` in the `Assets` panel](../advanced/assets.md#assets) to re-register events.

### `menuPath`

```ts
export const menuPath: string
```

Used to register the script to the menu bar.

### `execute`

```ts
export const execute: () => void
```

Executed when the execute button is clicked.

### `onTick` {#on-tick}

```ts
export const onTick: () => void
```

Executed every 1 second.

### `onBeforeTestMap` {#on-before-test-map}

```ts
export const onBeforeTestMap: () => void
```

Executed before testing the map.

### `onAfterTestMap` {#on-after-test-map}

```ts
export const onAfterTestMap: () => void
```

Executed after testing the map.

### `onBeforeExportMap` {#on-before-export-map}

```ts
export const onBeforeExportMap: (filePath: string) => void
```

Executed before exporting the map.

- `filePath`: The system path of the exported map.

### `onAfterExportMap` {#on-after-export-map}

```ts
export const onAfterExportMap: (filePath: string) => void
```

Executed after exporting the map.

- `filePath`: The system path of the exported map.

### `onBeforeOpenScene` {#on-before-open-scene}

```ts
export const onBeforeOpenScene: (scenePath: string) => void
```

Executed before opening the scene.

- `scenePath`: The BME path of the scene.

### `onAfterOpenScene` {#on-after-open-scene}

```ts
export const onAfterOpenScene: (scenePath: string) => void
```

Executed after opening the scene.

- `scenePath`: The BME path of the scene.

### `onBeforeSaveScene` {#on-before-save-scene}

```ts
export const onBeforeSaveScene: (scenePath: string) => void
```

Executed before saving the scene.

- `scenePath`: The BME path of the scene.

### `onAfterSaveScene` {#on-after-save-scene}

```ts
export const onAfterSaveScene: (scenePath: string) => void
```

Executed after saving the scene.

- `scenePath`: The BME path of the scene.

### `onBeforeImportAsset` {#on-before-import-asset}

```ts
export const onBeforeImportAsset: (filePath: string, assetPath: string) => void
```

Executed before importing the asset.

- `filePath`: The system path of the asset
- `assetPath`: The BME path of the asset

### `onAfterImportAsset` {#on-after-import-asset}

```ts
export const onAfterImportAsset: (filePath: string, assetPath: string) => void
```

Executed after importing the asset.

- `filePath`: The system path of the asset
- `assetPath`: The BME path of the asset

## Modules

The editor provides the following 6 modules:

- [`console`](https://github.com/Withered-Flower-0422/BST/blob/main/_Typings/editorApi/modules/console.d.ts)
- [`dialogWindowManager`](https://github.com/Withered-Flower-0422/BST/blob/main/_Typings/editorApi/modules/dialogWindowManager.d.ts)
- [`editor`](https://github.com/Withered-Flower-0422/BST/blob/main/_Typings/editorApi/modules/editor.d.ts)
- [`file`](https://github.com/Withered-Flower-0422/BST/blob/main/_Typings/editorApi/modules/file.d.ts)
- [`scene`](https://github.com/Withered-Flower-0422/BST/blob/main/_Typings/editorApi/modules/scene.d.ts)
- [`math`](https://github.com/Withered-Flower-0422/BST/blob/main/_Typings/utils/math.d.ts)

For details, see [BST/\_Typings/editorApi/modules](https://github.com/Withered-Flower-0422/BST/tree/main/_Typings/editorApi/modules).

To import modules, use the following syntax:

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

:::: tip

To import custom modules from within the project, please use BME's resource path, for example:

```js
import { dotProduct } from "Scripts/_Editor/MathExtension.js"
```

::: warning

- Only modules in the `_Editor` folder can be imported (<span class="text-red">excluding</span> subdirectories).
- The `.js` suffix <span class="text-green">can</span> be omitted.

:::

::::

## Template

See [BST/Templates/editorTemplate.js](https://github.com/Withered-Flower-0422/BST/blob/main/Templates/editorTemplate.js).

## Example

See [BST/Samples/editorSamples](https://github.com/Withered-Flower-0422/BST/tree/main/Samples/editorSamples).
