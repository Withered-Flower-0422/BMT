# Renderer

::: tip

This component is only responsible for graphics rendering. To set up the item's collider, please go to [`Physics Object`](physicsObject).

:::

## `Auto Get Mesh`

- Type: `bool`
- Default: `true`

When set to `true`, the renderer will attempt to get the mesh from the [`Road Generator`](roadGenerator) component.

## `Mesh`<badge text="Auto Get Mesh = false" />

- Type: `Mesh`
- Default: Empty

When `Auto Get Mesh` is set to `false`, the renderer will use this mesh.

## `Auto Get Materials`

- Type: `bool`
- Default: `true`

When set to `true`, the renderer will attempt to get the material from the [`Road Generator`](roadGenerator) component based on the road type.

## `Materials`<badge text="Auto Get Materials = false" />

- Type: `Material[]`
- Default: `[]`

When `Auto Get Materials` is set to `false`, the renderer will use these materials. The material correspondence is consistent with the settings in the modeling software.

## `Get Global UV Mat`<badge text="Auto Get Mesh = true" />

- Type: `bool`
- Default: `false`

Attempts to get a [Global UV Material](../assets#Global-UV).

## `Shadow Casting Mode`

- Type: `On | Off | Two Sided | Shadows Only`
- Default: `On`

Sets the shadow casting mode.

- `On`: Enables shadow casting.
- `Off`: Disables shadow casting.
- `Two Sided`: Enables two-sided shadows.
- `Shadows Only`: Renders only the shadows.

## `Auto Optimize`

- Type: `bool`
- Default: `false`

After enabling auto-optimize, the renderer will render once after the game starts and will not render in real-time thereafter. Therefore, for stationary items, it is recommended to enable this option to significantly optimize performance.

## `Force Set Opacity`

- Type: `bool`
- Default: `false`

When set to `true`, the renderer will forcibly set the opacity for all materials.

## `Opacity`<badge text="Force Set Opacity = true" />

- Type: `float`
- Default: `1.0`
- Range: `0.0` ~ `1.0`

Sets the opacity for all materials.

- When the value is 1, it still uses the `A` channel value from the [albedo map](../assets#Albedo-Map) as the opacity.
- When the value is not 1, this value will be used as the opacity.

## `Near Dissolve`

- Type: `bool`
- Default: `false`

After enabling near dissolve, the renderer will apply a dissolve effect to the mesh when it is close to the camera.
