# Lighting

The lighting here provides a global parallel light.

## `Enabled`

- Type: `bool`
- Default: `true`

## `Rotation`

- Type: `Float3`
- Default: `(60, 0, 0)`

::: tip

- The `x` value can be understood as the time of day, with a range of `0` ~ `180`. Adjusting the `x` value can achieve lighting and sky effects for different times of the day.

  - 0 represents 6:00 AM (sunrise).
  - 90 represents 12:00 PM (noon).
  - 180 represents 6:00 PM (sunset).
  - To achieve a nighttime effect, please adjust properties below like [`Light Intensity`](#Light-Intensity-Lux), [`Light Temperature`](#Light-Temperature-K), and [`Light Filter`](#Light-Filter).

- The `y` value represents the angle of the sun around the y-axis, i.e., the sun's azimuth.

  - At 6:00 AM (sunrise):

    - 0 represents shooting from the South (z-).
    - 90 represents shooting from the West (x\-).
    - 180 represents shooting from the North (z+).
    - 270 represents shooting from the East (x+).

- Adjusting the `y` value can change the direction of shadows.

- The `z` value currently has no obvious effect.

:::

## `Angular Diameter`

- Type: `float`
- Default: `4`
- Range: `0` ~ `360`

Angular diameter refers to the diameter of the light source (the sun).

## `Surface Texture`

- Type: `Texture`
- Default: Empty

Surface texture refers to the texture of the light source. If you need to create a night scene, you can make a moon texture and import it here. The style of the light source will then change to a moon.

::: details no effect?

If you find no obvious effect after applying the texture, please set the `Flare Size` to `0`.

:::

## `Surface Tint`

- Type: `ColorRGBA`
- Default: `(1, 1, 1, 1)`

Surface tint refers to the color of the light source's surface and is independent of the actual global parallel light color.

## `Flare Size`

- Type: `float`
- Default: `2`
- Range: `0` ~ `90`

## `Flare Falloff`

- Type: `float`
- Default: `4`

## `Flare Tint`

- Type: `ColorRGBA`
- Default: `(1, 1, 1, 1)`

## `Flare Multiplier`

- Type: `float`
- Default: `1`
- Range: `0` ~ `1`

## `Light Intensity (Lux)`

- Type: `float`
- Default: `100000`

Light intensity refers to the intensity of the global parallel light. Please lower the light intensity for night scenes.

## `Light Temperature (K)`

- Type: `float`
- Default: `6570`

## `Light Filter`

- Type: `ColorRGBA`
- Default: `(1, 1, 1, 1)`

Light filter refers to the color of the global parallel light. Please set it to a darker, nighttime color for night scenes.

## `Shadow Intensity`

- Type: `float`
- Default: `1`
- Range: `0` ~ `1`

Shadow intensity refers to the intensity of shadows cast by objects under the global parallel light.
