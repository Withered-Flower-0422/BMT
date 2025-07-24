# Fog

Fog is divided into `Physics Fog` and `Artistic Fog`.

::: tip

- The various properties of fog are quite complex, and it is difficult to accurately describe the function of each property in words.
- It is recommended to experiment hands-on, adjusting each property yourself to understand its function and effect.
- Here, only the properties, their types, and default values are listed, without extensive explanation.

:::

## `Fog Type`

- Type: `Disabled | Physics Fog | Artistic Fog`
- Default: `Physics Fog`

## Physics Fog

### `Falloff Distance`

- Type: `float`
- Default: `500.0`

### `Height`

- Type: `Float2`
- Default: `(0, 200)`

### `Max Distance`

- Type: `float`
- Default: `5000.0`

### `Tint`

- Type: `ColorRGBA`
- Default: `(1, 1, 1, 1)`

## Artistic Fog

### Object Fog

#### `Intensity`

- Type: `float`
- Default: `1.0`
- Range: `0.0` - `1.0`

#### `Fog Blend Mode`

- Type: `Multiply | Additive`
- Default: `Multiply`

#### `Color Start`

- Type: `ColorRGBA`
- Default: `(128 / 255, 191 / 255, 1, 1)`

#### `Color End`

- Type: `ColorRGBA`
- Default: `(128 / 255, 191 / 255, 1, 1)`

#### `Color End Blend`

- Type: `float`
- Default: `0.0`
- Range: `0.0` - `1.0`

#### `Fog Distance`

- Type: `Float2`
- Default: `(0, 100)`

#### `Distance Falloff`

- Type: `float`
- Default: `1.0`
- Range: `1.0` - `8.0`

#### `Height`

- Type: `Float2`
- Default: `(0, 100)`

#### `Height Falloff`

- Type: `float`
- Default: `1.0`
- Range: `1.0` - `8.0`

#### `Far Fog Height`

- Type: `float`
- Default: `0.0`

#### `Far Fog Distance`

- Type: `float`
- Default: `0.0`

### Skybox Fog

#### `Intensity`

- Type: `float`
- Default: `1.0`
- Range: `0.0` - `1.0`

#### `Height`

- Type: `float`
- Default: `1.0`
- Range: `0.0` - `8.0`

#### `Falloff`

- Type: `float`
- Default: `1.0`
- Range: `1.0` - `8.0`

#### `Offset`

- Type: `float`
- Default: `0.0`
- Range: `-1.0` - `1.0`

#### `Bottom`

- Type: `float`
- Default: `0.0`
- Range: `0.0` - `1.0`

#### `Fill`

- Type: `float`
- Default: `0.0`
- Range: `0.0` - `1.0`

### Directional Light Influence

#### `Intensity`

- Type: `float`
- Default: `1.0`
- Range: `0.0` - `1.0`

#### `Falloff`

- Type: `float`
- Default: `1.0`
- Range: `1.0` - `8.0`

#### `Color`

- Type: `ColorRGBA`
- Default: `(1, 191 / 255, 128 / 255, 1)`

### Noise

#### `Intensity`

- Type: `float`
- Default: `1.0`
- Range: `0.0` - `1.0`

#### `Min`

- Type: `float`
- Default: `0.0`
- Range: `0.0` - `1.0`

#### `Max`

- Type: `float`
- Default: `1.0`
- Range: `0.0` - `1.0`

#### `Scale`

- Type: `float`
- Default: `30.0`

#### `Speed`

- Type: `Float3`
- Default: `(0.5, 0, 0.5)`

#### `Range`

- Type: `float`
- Default: `200.0`
