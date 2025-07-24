# Cloud

BME Pro provides two layers of planar clouds. The properties, types, and default values for the cloud layers are listed below.

## `Enabled`

- Type: `bool`
- Default: `true`

Whether to enable this cloud layer.

## `Texture A`

- Type: `float`
- Default: `1.0`<badge text="Cloud Layer 1" />, `0.0`<badge text="Cloud Layer 2" />
- Range: `0.0` ~ `1.0`

The intensity of cloud texture A.

## `Texture B`

- Type: `float`
- Default: `0.0`
- Range: `0.0` ~ `1.0`

The intensity of cloud texture B.

## `Texture C`

- Type: `float`
- Default: `0.0`<badge text="Cloud Layer 1" />, `0.5`<badge text="Cloud Layer 2" />
- Range: `0.0` ~ `1.0`

The intensity of cloud texture C.

## `Texture D`

- Type: `float`
- Default: `0.0`
- Range: `0.0` ~ `1.0`

The intensity of cloud texture D.

## `Altitude`

- Type: `float`
- Default: `2000.0`<badge text="Cloud Layer 1" />, `4000.0`<badge text="Cloud Layer 2" />

The altitude of the cloud layer.

## `Rotation`

- Type: `float`
- Default: `0.0`<badge text="Cloud Layer 1" />, `45.0`<badge text="Cloud Layer 2" />
- Range: `0.0` ~ `360.0`

The rotation angle of the cloud layer.

## `Tint`

- Type: `ColorRGBA`
- Default: `(1, 1, 1, 1)`

The color of the cloud layer.

## `ExposureCompensation`

- Type: `float`
- Default: `0.0`

## `Wind Direction`

- Type: `float`
- Default: `0.0`
- Range: `0.0` ~ `360.0`

The direction of the cloud's movement.

## `Wind Speed`

- Type: `float`
- Default: `300.0`<badge text="Cloud Layer 1" />, `200.0`<badge text="Cloud Layer 2" />

The speed of the cloud's movement.

## `Raymarching Step`

- Type: `int`
- Default: `8`<badge text="Cloud Layer 1" />, `6`<badge text="Cloud Layer 2" />
- Range: `2` ~ `32`

## `Density`

- Type: `float`
- Default: `0.07`<badge text="Cloud Layer 1" />, `0.05`<badge text="Cloud Layer 2" />
- Range: `0.0` ~ `1.0`

## `Ambient Lighting`

- Type: `float`
- Default: `1.0`
- Range: `0.0` ~ `1.0`
