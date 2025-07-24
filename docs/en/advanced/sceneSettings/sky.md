# Sky

Sky is divided into `Physics Sky` and `HDRI Sky`.

::: tip

- The various properties of the sky are quite complex, and it is difficult to accurately describe the function of each property in words.
- It is recommended to experiment hands-on, adjusting each property yourself to understand its function and effect.
- Here, only the properties, their types, and default values are listed, without extensive explanation.
- If you want to simulate Earth's sky, you can keep the default settings for this component.

:::

## `Sky Type`

- Type: `Physics Sky | HDRI Sky`
- Default: `Physics Sky`

## `Exposure Compensation`

- Type: `float`
- Default: `0.0`
- Range: `-20.0` ~ `20.0`

## Physics Sky

### Ground

#### `Rotation`

- Type: `Float3`
- Default: `(0, 0, 0)`

#### `Color Texture`

- Type: `Texture`
- Default: Empty

#### `Tint`

- Type: `ColorRGBA`
- Default: `(59 / 255, 64 / 255, 71 / 255, 1)`

#### `Emission Texture`

- Type: `Texture`
- Default: Empty

#### `Emission Multiplier`

- Type: `float`
- Default: `1.0`

### Space

#### `Space Rotation`

- Type: `Float3`
- Default: `(0, 0, 0)`

#### `Emission Texture`

- Type: `Texture`
- Default: Empty

#### `Emission Multiplier`

- Type: `float`
- Default: `1.0`

### Air

#### `Maximum Altitude`

- Type: `float`
- Default: `55000.0`

#### `Density R`

- Type: `float`
- Default: `0.0453`
- Range: `0.0` ~ `1.0`

#### `Density G`

- Type: `float`
- Default: `0.1024`
- Range: `0.0` ~ `1.0`

#### `Density B`

- Type: `float`
- Default: `0.2326`
- Range: `0.0` ~ `1.0`

#### `Tint`

- Type: `ColorRGBA`
- Default: `(1, 1, 1, 1)`

### Aerosols

#### `Density`

- Type: `float`
- Default: `0.012`
- Range: `0.0` ~ `1.0`

#### `Tint`

- Type: `ColorRGBA`
- Default: `(1, 1, 1, 1)`

#### `Anisotropy`

- Type: `float`
- Default: `0.8`
- Range: `0.0` ~ `1.0`

#### `Maximum Altitude`

- Type: `float`
- Default: `8290.0`

### Ozone

#### `Density Dimmer`

- Type: `float`
- Default: `1.0`
- Range: `0.0` ~ `1.0`

#### `Minimum Altitude`

- Type: `float`
- Default: `20000.0`

#### `Layer Width`

- Type: `float`
- Default: `20000.0`

### Artistic Overrides

#### `Color Saturation`

- Type: `float`
- Default: `1.0`
- Range: `0.0` ~ `1.0`

#### `Alpha Saturation`

- Type: `float`
- Default: `1.0`
- Range: `0.0` ~ `1.0`

#### `Alpha Multiplier`

- Type: `float`
- Default: `1.0`
- Range: `0.0` ~ `1.0`

#### `Horizon Tint`

- Type: `ColorRGBA`
- Default: `(1, 1, 1, 1)`

#### `Zenith Shift`

- Type: `float`
- Default: `0.0`
- Range: `-1.0` ~ `1.0`

#### `Zenith Tint`

- Type: `ColorRGBA`
- Default: `(1, 1, 1, 1)`

## HDRI Sky

### `Up`

- Type: `Texture`
- Default: Empty

### `Down`

- Type: `Texture`
- Default: Empty

### `Left`

- Type: `Texture`
- Default: Empty

### `Right`

- Type: `Texture`
- Default: Empty

### `Front`

- Type: `Texture`
- Default: Empty

### `Back`

- Type: `Texture`
- Default: Empty

### `Rotation`

- Type: `float`
- Default: `0`
- Range: `0` ~ `360`

### `Gamma Offset`

- Type: `float`
- Default: `0.0`
- Range: `-3.0` ~ `3.0`

::: tip

- If using `HDRI Sky` and the sky effect is not ideal after importing the sky texture, you can try adjusting the `Gamma Offset` and `Exposure Compensation` properties.
- After setting `Gamma Offset` and `Exposure Compensation`, you need to click the `Refresh` button to apply.

:::
