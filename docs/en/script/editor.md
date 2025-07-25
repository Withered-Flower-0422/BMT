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

The editor provides a total of 2 hooks, see [BST/\_Typings/editorApi/exportFuncs.d.ts](https://github.com/Withered-Flower-0422/BST/blob/main/_Typings/editorApi/exportFuncs.d.ts).

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

## Modules

The editor provides the following 6 modules:

- [`console`](https://github.com/Withered-Flower-0422/BST/blob/main/_Typings/editorApi/modules/console.d.ts)
- [`dialogWindowManager`](https://github.com/Withered-Flower-0422/BST/blob/main/_Typings/editorApi/modules/dialogWindowManager.d.ts)
- [`editor`](https://github.com/Withered-Flower-0422/BST/blob/main/_Typings/editorApi/modules/editor.d.ts)
- [`file`](https://github.com/Withered-Flower-0422/BST/blob/main/_Typings/editorApi/modules/file.d.ts)
- [`scene`](https://github.com/Withered-Flower-0422/BST/blob/main/_Typings/editorApi/modules/scene.d.ts)
- [`math`](https://github.com/Withered-Flower-0422/BST/blob/main/_Typings/utils/math.d.ts)

For details, see [BST/\_Typings/editorApi/modules](https://github.com/Withered-Flower-0422/BST/tree/main/_Typings/editorApi/modules).

## Template

See [BST/Templates/editorTemplate.js](https://github.com/Withered-Flower-0422/BST/blob/main/Templates/editorTemplate.js).

## Example

See [BST/Samples/editorSamples](https://github.com/Withered-Flower-0422/BST/tree/main/Samples/editorSamples).
