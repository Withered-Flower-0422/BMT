# Decal

Projects a decal onto objects within a certain range.

## [Transform Offset](item#Transform-Offset)

## `Material`

- Type: `Material`
- Default: Empty

The material for the decal. Refer to [Assets → Materials → Material Properties → Decal Material](../assets#Material-Properties).

## `Draw Distance`

- Type: `float`
- Default: `50.0`

When the distance between the camera and this component is greater than this value, the decal will not be rendered.

## `Start Fade`

- Type: `float`
- Default: `0.8`

When the distance between the camera and this component is greater than `this value * Draw Distance`, the decal will begin to fade out.

## `Opacity`

- Type: `float`
- Default: `1.0`

## `Rotation Speed`

- Type: `float`
- Default: `0.0`
