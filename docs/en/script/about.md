# Script

The Script section will introduce the scripting system of BME Pro.

- Scripts are divided into 3 categories:
  - [`Game Script`](game): Used to control the game flow, operate in-game items, etc.
  - [`Editor Script`](editor): Used to operate items in the editor.
  - [`Road Generator Script`](roadGenerator): Used to generate meshes.

## Reading Suggestions

- The scripting language used by BME Pro is JavaScript. This tutorial does not include a [JavaScript tutorial](https://developer.mozilla.org/en-US/docs/Web/JavaScript). Please ensure you have a basic understanding of JavaScript syntax.

- Before using scripts, it is recommended to download [BME Script Typings](https://github.com/Withered-Flower-0422/BST) to add BME Pro's code completion features to your editor.

- After completing this section, you will be able to write scripts to create maps with unique mechanics and even customize your own BME Pro editor.

## Data Types

Both `Game Script` and `Editor Script` can import and use the following 7 basic data types:

- `Float2`
- `Float3`
- `Float4`
- `Quaternion`
- `Bool3`
- `Trans`
- `ColorRGBA`

For details, see [BST/\_Typings/utils/basicData.d.ts](https://github.com/Withered-Flower-0422/BST/blob/main/_Typings/utils/basicData.d.ts).
