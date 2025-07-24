# Item Settings

## `As Template`

- Type: `bool`
- Default: `false`

Items marked as a template will not be created when the game starts. Currently, items marked as a template have the following two uses:

- Used in conjunction with [`Custom Ball`](../sceneSettings/customBall).
- Used with the script function [`scene.createItem()`](https://github.com/Withered-Flower-0422/BST/blob/main/_Typings/gameApi/modules/scene.d.ts) to create item instances from the template.

## `Template Name`<badge text="As Template = true" />

- Type: `string`
- Default: Empty

The template name for the item marked as a template.

## `Hierarchy Icon`

- Type: `enum`
- Default: `Auto`

The icon for this item in the `Hierarchy`.

## `Hierarchy Color`

- Type: `ColorRGBA`
- Default: `(1, 1, 1, 1)`

The color for this item in the `Hierarchy`.

## `Show Cube`

- Type: `bool`
- Default: `false`

Whether to display a cube for this item in the `Scene`. This is used to make it easier to select items that do not have a [`Renderer`](renderer).

## `Cube Position`<badge text="Display Cube = true" />

- Type: `Float3`
- Default: `(0, 0, 0)`

The offset of this item's cube relative to the item's own position.

## `Cube Rotation`<badge text="Display Cube = true" />

- Type: `Float3`
- Default: `(0, 0, 0)`

The rotation angle of this item's cube. It will be added to the item's own rotation angle.

## `Cube Scale`<badge text="Display Cube = true" />

- Type: `Float3`
- Default: `(1, 1, 1)`

The scale of this item's cube. It will be multiplied with the item's own scale.

## `Cube Color`<badge text="Display Cube = true" />

- Type: `ColorRGBA`
- Default: `(1, 1, 1, 1)`

The color of this item's cube.

## `Tags`

- Type: `string[]`
- Default: `[]`

The tags for this item. Tags can be used for quick filtering in the `Hierarchy`.

::: tip

In the `Hierarchy`, you can quickly find an item based on its [`guid`](item#Guid) or `Tags`.

- Searching by `guid`:
  - In the Hierarchy, enter the prefix `guid:`, then enter the `guid` value.
  - Ensure the four letters `guid` and all letters in the entered `guid` value are lowercase.
  - Ensure there are no spaces after the `:`.
  - Ensure the `guid` value is complete.
- ~~Searching by `Tag`~~ (Currently, the feature to find items by `Tag` in the editor has a bug and is temporarily unavailable):
  - In the Hierarchy, enter `tag:`, then enter the `Tag` value.
  - Ensure the three letters `tag` are lowercase.
  - Ensure there are no spaces after the `:`.

:::
