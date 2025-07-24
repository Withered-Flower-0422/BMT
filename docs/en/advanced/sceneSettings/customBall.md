# Custom Ball

Custom Ball allows you to create ball types other than the 9 official ones.

It is recommended to first select a preset ball type and click `Create Selected Preset` to understand how to create a custom player ball.

Specific Usage:

1. Create a ball item in the scene and set up the parameters for its [`Renderer`](../item/renderer) and [`Physics Object`](../item/physicsObject) components.
2. In its [`Item Settings`](../item/settings) component, check `As Template` and enter a custom name in `Template Name`.
3. In `Scene Settings → Custom Ball`, add a new custom ball and fill in all the required properties.
4. The corresponding ball switcher is located at `Assets → Items → Switcher → Switcher_Custom`. After dragging it into the scene, fill in the corresponding [`Custom Ball Name`](#Ball-Name) in its `Inspector → Item Link`.

## `Item Template`

- Type: `string`
- Default: Empty

Fill in the `Template Name` of the ball item in the scene that is marked as `As Template`.

## `Ball Name`

- Type: `string`
- Default: Empty

The name of the custom ball. This is the true name of the custom ball and will be used as the value for [`player.ballType`](https://github.com/Withered-Flower-0422/BST/blob/main/_Typings/gameApi/types/player.d.ts) in scripts.

## `English`

- Type: `string`
- Default: Empty

The English name of the custom ball. When the in-game language is set to English, this name will be displayed on the UI.

## `Simplified Chinese`

- Type: `string`
- Default: Empty

The Simplified Chinese name of the custom ball. When the in-game language is set to Simplified Chinese, this name will be displayed on the UI.

## `Traditional Chinese`

- Type: `string`
- Default: Empty

The Traditional Chinese name of the custom ball. When the in-game language is set to Traditional Chinese, this name will be displayed on the UI.

## `Japanese`

- Type: `string`
- Default: Empty

The Japanese name of the custom ball. When the in-game language is set to Japanese, this name will be displayed on the UI.

## `Spanish`

- Type: `string`
- Default: Empty

The Spanish name of the custom ball. When the in-game language is set to Spanish, this name will be displayed on the UI.

## `Wetness UI`

- Type: `bool`
- Default: `false`

Whether to display the Wetness UI when the player's ball type is this custom ball.

## `Temperature UI`

- Type: `bool`
- Default: `false`

Whether to display the Temperature UI when the player's ball type is this custom ball.

## `Scale UI`

- Type: `bool`
- Default: `false`

Whether to display the Scale UI when the player's ball type is this custom ball.

## `Power UI`

- Type: `bool`
- Default: `false`

Whether to display the Power UI when the player's ball type is this custom ball.

## `Move Force`

- Type: `float`
- Default: `10.0`

The movement force applied when the player controls this custom ball.

## `Torque Force`

- Type: `float`
- Default: `10.0`

The rotational force (torque) applied when the player controls this custom ball.

## `Defence`

- Type: `float`
- Default: `1.0`

The player ball's defense force when this ball takes damage (from spike plates, swinging hammers, etc.). The higher the defense, the less damage is taken.

## `Wet Mass Multiplier`

- Type: `float`
- Default: `0.0`

The multiplier by which this ball's mass changes with wetness.

## `Flammability`

- Type: `float`
- Default: `0.0`

The flammability of this ball. 0 is non-flammable, 1 is flammable.

## `Wet Damage`

- Type: `float`
- Default: `0.0`

The damage multiplier this ball receives due to the effects of wetness.

## `Temp Scale Multiplier`

- Type: `float`
- Default: `0.0`

The multiplier by which this ball's scale changes with temperature.

## `Low Power Force Multiplier`

- Type: `float`
- Default: `0.0`

The force multiplier for this ball when its power is 0. A value of 0 means zero power does not affect the applied force.

## `Absorb Electric Multiplier`

- Type: `float`
- Default: `0.0`

The multiplier for absorbing the repulsive force when the player ball touches a `Electric` Supply. 0 means no absorption, 1 means full absorption (i.e., the `Electric` Supply can no longer repel the player ball).

## `Invincible`

- Type: `float`
- Default: `0.0`

Whether this ball is immune to any damage. 0 is not invincible, 1 is invincible.

## `Roll on Wood`

- Type: `Audio`
- Default: Empty

The sound effect that plays when this ball rolls on a wood surface.

## `Roll on Stone`

- Type: `Audio`
- Default: Empty

The sound effect that plays when this ball rolls on a stone surface.

## `Roll on Steel`

- Type- Type: `Audio`
- Default: Empty

The sound effect that plays when this ball rolls on a steel surface.

## `Switcher Material`

- Type: `Material`
- Default: Empty

The material for this ball's corresponding switcher.

## `Switcher Glow Color`

- Type: `ColorRGBA`
- Default: `(1, 1, 1, 1)`

The light source color for the four corners and inner ring of this ball's switcher. (Is affected by `Switcher Light Color`)

## `Switcher Glow Intensity`

- Type: `float`
- Default: `5.0`

The light source brightness for the four corners and inner ring of this ball's switcher.

## `Switcher Light Color`

- Type: `ColorRGBA`
- Default: `(1, 1, 1, 1)`

The emission color of this ball's switcher's [Rect Area Light](../item/light#Light-Type).

## `Switcher Light Intensity`

- Type: `float`
- Default: `30000.0`

The emission intensity of this ball's switcher's [Rect Area Light](../item/light#Light-Type).
