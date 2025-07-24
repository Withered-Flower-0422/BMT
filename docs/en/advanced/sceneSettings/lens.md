# Lens

## Exposure

### `Auto Exposure`

- Type: `bool`
- Default: `true`

When auto exposure is enabled, the exposure value will automatically adjust based on the scene's brightness and lighting conditions to achieve the best visual effect.

::: tip

- When making a daytime map, it is recommended to enable the `Auto Exposure` feature.
- When making a nighttime map, because the scene's lighting value is low, auto exposure will lower the exposure value, making light sources in the scene appear glaring. Therefore, it is recommended to disable `Auto Exposure` and manually adjust the exposure value.

:::

### `Limit Min`<badge text="Auto Exposure = true" />

- Type: `float`
- Default: `4.5`
- Range: `-5.0` ~ `15.0`

When `Auto Exposure` is enabled, the minimum allowed exposure value.

### `Limit Max`<badge text="Auto Exposure = true" />

- Type: `float`
- Default: `14.5`
- Range: `-5.0` ~ `15.0`

When `Auto Exposure` is enabled, the maximum allowed exposure value.

### `Exposure Compensation`<badge text="Auto Exposure = true" />

- Type: `float`
- Default: `0.0`

When `Auto Exposure` is enabled, the exposure compensation value for auto exposure.

### `Dark To Light Speed`<badge text="Auto Exposure = true" />

- Type: `float`
- Default: `3`

When `Auto Exposure` is enabled, the speed at which the screen transitions from <u>overly bright</u> to the <u>optimal brightness</u>.

### `Light To Dark Speed`<badge text="Auto Exposure = true" />

- Type: `float`
- Default: `1`

When `Auto Exposure` is enabled, the speed at which the screen transitions from <u>overly dark</u> to the <u>optimal brightness</u>.

### `Fixed Exposure`<badge text="Auto Exposure = false" />

- Type: `float`
- Default: `0.0`

When `Auto Exposure` is disabled, the manually set exposure value.

## Color Adjustment

### `Post Exposure`

- Type: `float`
- Default: `0.0`

### `Contrast`

- Type: `float`
- Default: `0.0`
- Range: `-100.0` ~ `100.0`

### `Color Filter`

- Type: `ColorRGBA`
- Default: `(1, 1, 1, 1)`

### `Hue Shift`

- Type: `float`
- Default: `0.0`
- Range: `-180.0` ~ `180.0`

### `Saturation`

- Type: `float`
- Default: `0.0`
- Range: `-100.0` ~ `100.0`

### `Shadows`

- Type: `ColorRGBA`
- Default: `(0.5, 0.5, 0.5, 1)`

### `Highlights`

- Type: `ColorRGBA`
- Default: `(0.5, 0.5, 0.5, 1)`

### `Balance`

- Type: `float`
- Default: `0.0`
- Range: `-100.0` ~ `100.0`

### `Temperature`

- Type: `float`
- Default: `0.0`
- Range: `-100.0` ~ `100.0`

### `Tint`

- Type: `float`
- Default: `0.0`
- Range: `-100.0` ~ `100.0`
