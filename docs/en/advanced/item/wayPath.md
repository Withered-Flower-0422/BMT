# Way Path

`Way Path` needs to be used in conjunction with the [`Way Point`](wayPoint) component.

A [Target Item](#Targets) can automatically move and change its pose based on the poses of the way points in the path.

## `Way Points`

- Type: `Item[]`
- Default: `[]`

The list of way points for this path. The order of the path is the order of the way point list.

## `Auto Collect`

- Type: `bool`
- Default: `false`

When `Auto Collect` is checked, the path will automatically collect all way points from its child items and add them to the way point list in the order they appear in the `Hierarchy`.

## `Use Curve`

- Type: `bool`
- Default: `false`

When `Use Curve` is checked, the path between two way points will be connected using a Bezier curve.

## `Closed Path`

- Type: `bool`
- Default: `false`

When `Closed Path` is checked, the path will be closed, meaning the last way point will automatically connect to the first way point.

## `Loop`

- Type: `bool`
- Default: `false`

When `Loop` is checked, the item will move along this path in a loop; otherwise, the item will eventually stop at the last way point.

## `Relative Position`

- Type: `bool`
- Default: `false`

When `Relative Position` is checked, the item's movement path will start from its own position and move relative to the path. Otherwise, the item will start moving from the position of the first way point.

## `Relative Rotation`

- Type: `bool`
- Default: `false`

When `Relative Rotation` is checked, the item's rotation will start from its own initial rotation and rotate relative to the path. Otherwise, a an item will start rotating from the rotation of the first way point.

## `Align Tangent`

- Type: `bool`
- Default: `false`

## `Auto Start`

- Type: `bool`
- Default: `false`

When `Auto Start` is checked, the item will automatically start moving when the game begins. ~~Otherwise, you would need to use a [script](https://github.com/Withered-Flower-0422/BST/blob/main/_Typings/gameApi/types/itemComponents/wayPath.d.ts) to control its start, pause, stop, etc. states.~~

::: danger

Currently, there are no methods provided in the scripts to control the path. If you do need to use a path, checking `Auto Start` is the only option for now.

:::

## `Targets`

- Type: `Item[]`
- Default: `[]`

The list of items that need to move along the path.
