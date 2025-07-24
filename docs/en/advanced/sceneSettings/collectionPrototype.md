# Collection Prototype

- All custom collections used in the game need to be registered in this component.
- After registering a collection prototype named `name`, you can create a collection named `name` in the scene. At this point, a variable named `C_name` will be automatically created in-game, which can be modified using the script's [Variables Module](https://github.com/Withered-Flower-0422/BST/blob/main/_Typings/gameApi/modules/variables.d.ts).

::: tip

- If you only register the collection prototype but do not create any corresponding collections in the scene, the corresponding variable will not be created.
- If you need to register a collection prototype named `name` and do not want to create a corresponding collection in the scene, only wishing to control its quantity via script, you can create a collection named `name` in the scene and disable its [`Trigger`](../item/trigger) and [`Renderer`](../item/renderer).

:::

## `Reset Timing`

- Type: `On Life Start | On Restart`
- Default: `On Life Start`

Controls when the collection is reset.

::: tip

- `On Life Start`: After the player dies, all collections of this type in the level are reset, and the player's count of this collection type is reset to 0 (e.g., the official `Red, Green, Blue Keys`).
- `On Restart`: Collections of this type and the player's count of this collection type are not reset after the player dies; they are only reset when the level is restarted (e.g., the official `Cyan, Yellow, Magenta Keys`).

:::

## `Collection Name`

- Type: `string`
- Default: Empty

Please be sure to only fill in ASCII characters and do not use duplicate names.

## `Priority`

- Type: `int`
- Default: `0`

Determines the display order of the collections:

- The priorities for the Red, Green, Blue, Cyan, Magenta, and Yellow keys are `10`, `20`, `30`, `40`, `50`, and `60` respectively.
- For collections with different priorities, the one with the lower priority comes first.
- For collections with the same priority, the one that appears earlier in the map editor's list comes first, and keys are displayed last.

## `Icon`

- Type: `Texture`
- Default: Empty

The collection icon displayed in the bottom-left corner of the UI.

## `Always Show`

- Type: `bool`
- Default: `false`

Whether to still display when the collection count is 0.

## `Show Max Count`

- Type: `bool`
- Default: `false`

Whether to display the total count of this type of collection in the scene.
