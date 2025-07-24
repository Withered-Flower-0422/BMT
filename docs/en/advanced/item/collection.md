# Collection

- The Collection component needs to be used in conjunction with a [`Collection Prototype`](../sceneSettings/collectionPrototype).
- The Collection component needs to be used in conjunction with the [`Renderer`](renderer) and [`Trigger`](trigger) components.
  - The `Renderer` component is responsible for graphics rendering.
  - The `Trigger` component is responsible for triggering the collection.
  - It is recommended to create a collection directly via `Create → Collection`.

## `Collection Name`

- Type: `string`
- Default: Empty

## `Rotation Velocity`

- Type: `Float3`
- Default: `(0, 1, 0)`

The speed at which the collection rotates in the scene.

## `Sfx`

- Type: `Audio`
- Default: Empty

The sound effect that plays when the collection is collected.
