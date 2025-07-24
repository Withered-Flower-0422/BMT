# Light

This is a local light source. To set the global parallel light, refer to [`Scene Settings → Lighting`](../sceneSettings/lighting).

## [Transform Offset](item#Transform-Offset)

## `Light Type`

- Type: `Point | Spot | Rect Area | Circular Area`
- Default: `Point`

::: tip

Circular area light for [volumetric light](#Volumetric-Light) only, no illumination effect.

:::

## `Temperature (K)`

- Type: `float`
- Default: `6570.0`

## `Filter`

- Type: `ColorRGBA`
- Default: `(1, 1, 1, 1)`

## `Intensity (Lux)`

- Type: `float`
- Default: `10000.0`

## `Range`

- Type: `float`
- Default: `5.0`

## `Shadow Quality`

- Type: `Off | Low | Medium | High`
- Default: `Off`

The quality of shadows cast by objects from this light source.

## `Shadow Near Clip`

- Type: `float`
- Default: `0.1`
- Range: `0.0` ~ `10.0`

## `Inner Angle`<badge text="Light Type = Spot" />

- Type: `float`
- Default: `0.0`
- Range: `0.0` ~ `179.0`

## `Outer Angle`<badge text="Light Type = Spot" />

- Type: `float`
- Default: `30.0`
- Range: `1.0` ~ `179.0`

## `Size`<badge text="Light Type = Rect Area" />

- Type: `Float2`
- Default: `(1, 1)`

## `Radius`<badge text="Light Type = Circular Area" />

- Type: `float`
- Default: `1.0`

## `Enable Volumetric Light`

- Type: `bool`
- Default: `false`

## Volumetric Light

Volumetric light will change based on the different light types.

### Rendering

#### `Only Volumetric`

- Type: `bool`
- Default: `false`

When set to `true`, it only provides the volumetric effect, with no illumination.

#### `Auto Optimize`

- Type: `bool`
- Default: `true`

It is only recommended to enable this option when the light source does not move.

#### `Blend Mode`

- Type: `Additive | Blend | Pre Multiply | Subtractive`
- Default: `Additive`

The blend mode controls how the light's color is superimposed.

#### `Quality`

- Type: `int`
- Default: `8`
- Range: `1` ~ `256`

#### `Step Size`

- Type: `float`
- Default: `0.1`

#### `Max Step`

- Type: `int`
- Default: `200`

#### `Jitter`

- Type: `float`
- Default: `0.2`

#### `Dither`

- Type: `float`
- Default: `1.0`

### Noise

#### `Noise Strength`

- Type: `float`
- Default: `1.0`
- Range: `0.0` ~ `3.0`

#### `Noise Scale`

- Type: `float`
- Default: `5.0`

#### `Noise Multiplier`

- Type: `float`
- Default: `5.0`

#### `Wind`

- Type: `Float3`
- Default: `(0.03, 0.02, 0)`

### Volumetric

#### `Density`

- Type: `float`
- Default: `0.2`

#### `Tint`

- Type: `ColorRGBA`
- Default: `(1, 1, 1, 1)`

#### `Brightness`

- Type: `float`
- Default: `0.5`

#### `Constant Falloff`

- Type: `float`
- Default: `1.0`

#### `Linear Falloff`

- Type: `float`
- Default: `10.0`

#### `Quadratic Falloff`

- Type: `float`
- Default: `5.0`

#### `Range Falloff`

- Type: `float`
- Default: `15.0`

#### `Diffusion Intensity`

- Type: `float`
- Default: `0.0`

#### `Edge Fade`

- Type: `float`
- Default: `1.0`
- Range: `0.0` ~ `1.0`

#### `Top Radius`<badge text="Light Type = Spot" />

- Type: `float`
- Default: `0.0`

#### `Projector Texture`<badge text="Light Type = Spot" />

- Type: `Texture`
- Default: Empty

The spotlight provides a projector function. Set the `Projector Texture` to specify the pattern to be projected.

#### `Projector Scale`<badge text="Light Type = Spot" />

- Type: `Float2`
- Default: `(1, 1)`

The scale of the projected pattern.

#### `Projector Offset`<badge text="Light Type = Spot" />

- Type: `Float2`
- Default: `(0, 0)`

The offset of the projected pattern.

#### `Projector Scroll Speed`<badge text="Light Type = Spot" />

- Type: `Float2`
- Default: `(0, 0)`

The speed at which the projected pattern scrolls on the x and y axes.

#### `Frustum Angle`<badge text="Light Type = Rect Area" /><badge text="Light Type = Circular Area" />

- Type: `float`
- Default: `0.0`
- Range: `0.0` ~ `80.0`

### Shadows

#### `Shadow Quality`

- Type: `Off | Low | Medium | High`
- Default: `Off`

#### `Shadow Intensity`

- Type: `float`
- Default: `1.0`

#### `Auto Bake`

- Type: `bool`
- Default: `false`

When `Auto Bake` is checked, the shadow will be baked once at the start of the game and will not be calculated in real-time thereafter. If you are sure that this light source will not shine on any moving objects during the game, please check this option to improve performance.

#### `Near Clip`

- Type: `float`
- Default: `0.1`

### Dust

#### `Enable Dust`

- Type: `bool`
- Default: `false`

#### `Dust Brightness`

- Type: `float`
- Default: `1.0`

#### `Dust Size`

- Type: `Float2`
- Default: `(0.01, 0.02)`

The dust size will be randomized within this range.

#### `Dust Turbulence`

- Type: `float`
- Default: `1.0`

#### `Dust Fadeout Distance`

- Type: `float`
- Default: `10.0`
