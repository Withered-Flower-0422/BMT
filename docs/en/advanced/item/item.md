# Item

- All operable objects in the editor's `Scene` / `Hierarchy` are `Items`.
- You can create empty items and some preset items from the `Create` option in the top menu bar.

## Guid

- Every item has a globally unique identifier `guid`, displayed at the very top of the `Inspector`.
- There is a copy button next to the `guid`. Clicking it will copy the item's `guid` to the clipboard.
- All letters in a `guid` within the editor are lowercase.

## Quick Functions

After selecting an item, you can see two rows of buttons in the `Inspector`.

The functions of the first row of buttons, from left to right, are:

- `Reset Transform Value`: Resets the item's position to `(0, 0, 0)`, rotation to `(0, 0, 0)`, and scale to `(1, 1, 1)`.
- `Clockwise Rotate 90°`: Adds 90 to the `y` value of the item's rotation property, modulo 360.
- `Anticlockwise Rotate 90°`: Subtracts 90 from the `y` value of the item's rotation property, modulo 360.
- `Copy Transform Value`: Copies the item's position, rotation, and scale properties to the editor's internal clipboard.
- `Paste Position Value`: Pastes the position value from the editor's internal clipboard to this item's position property.
- `Paste Rotation Value`: Pastes the rotation value from the editor's internal clipboard to this item's rotation property.
- `Paste Scale Value`: Pastes the scale value from the editor's internal clipboard to this item's scale property.

---

The functions of the second row of buttons, from left to right, are:

- `Paste Position x Value`: Pastes the `x` value of the position property from the editor's internal clipboard to this item's position property.
- `Paste Position y Value`: Pastes the `y` value of the position property from the editor's internal clipboard to this item's position property.
- `Paste Position z Value`: Pastes the `z` value of the position property from the editor's internal clipboard to this item's position property.
- `Paste Rotation x Value`: Pastes the `x` value of the rotation property from the editor's internal clipboard to this item's rotation property.
- `Paste Rotation y Value`: Pastes the `y` value of the rotation property from the editor's internal clipboard to this item's rotation property.
- `Paste Rotation z Value`: Pastes the `z` value of the rotation property from the editor's internal clipboard to this item's rotation property.
- `Paste Scale x Value`: Pastes the `x` value of the scale property from the editor's internal clipboard to this item's scale property.
- `Paste Scale y Value`: Pastes the `y` value of the scale property from the editor's internal clipboard to this item's scale property.
- `Paste Scale z Value`: Pastes the `z` value of the scale property from the editor's internal clipboard to this item's scale property.

## Own Properties

Every item has the three properties `Position`, `Rotation`, and `Scale`. These can be modified manually in the `Inspector` or in the scene using the methods described in [Basic Operations](../../start/basicOperation#Item-Adjustment).

## Components

An item can have the following 16 types of components, but at most one of each type:

- [`Item Settings`](settings)
- [`Renderer`](renderer)
- [`Road Generator`](roadGenerator)
- [`Physics Object`](physicsObject)
- [`Item Link`](itemLink)
- [`Trigger`](trigger)
- [`Joint`](joint)
- [`Way Point`](wayPoint)
- [`Way Path`](wayPath)
- [`Collection`](collection)
- [`Light`](light)
- [`Particle Emitter`](particleEmitter)
- [`Audio Player`](audioPlayer)
- [`Decal`](decal)
- [`Camera`](camera)
- [`Executor`](executor)
- ~~[`Terrain Stamp`](terrainStamp)~~

::: tip

With the exception of the `Item Settings` component, all other components have two function buttons in their top-left corner:

- `Copy Component Data`: Copies all data from this component on this item to the editor's internal clipboard.
- `Paste Component Data`: Pastes component data from the editor's internal clipboard to this component on this item.

:::

### Transform Offset

Some components ([`Way Point`](wayPoint), [`Light`](light), [`Particle Emitter`](particleEmitter), [`Audio Player`](audioPlayer), [`Decal`](decal)) have a `Transform Offset` property, which is used to set the component's transform offset relative to the item itself.

#### `Position`

- Type: `Float3`
- Default: `(0, 0, 0)`

#### `Rotation`

- Type: `Float3`
- Default: `(0, 0, 0)`

#### `Scale`

- Type: `Float3`
- Default: `(1, 1, 1)`
