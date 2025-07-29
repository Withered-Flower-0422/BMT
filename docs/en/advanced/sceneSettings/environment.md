# Environment

## `Environment Temp.`

- Type: `float`
- Default: `0.0`

::: tip

- The player ball's initial default temperature is 20 degrees, after which it will approach the environment temperature.
- The `Ice Ball`'s temperature does not change; instead, its scale (size) changes.
- When the player ball's temperature drops below -20 degrees, it will freeze. At this point, friction disappears, and the player ball's wetness is frozen.
- When the player ball's temperature reaches 200 degrees:
  - The `Wood Ball` and `Paper Ball` will catch fire, their temperature instantly rises to 500 degrees, and then slowly approaches 333 degrees.
  - The `Balloon Ball` dies instantly.
  - Other balls gain a light source effect.

:::

## `Auto Rain Avoidance`

- Type: `bool`
- Default: `false`

When Auto Rain Avoidance is checked, if there is a collider above the player ball, the ball's wetness will not increase due to the effect of [`Rain Particle`](#Rain-Particle).

## `Wind`

- Type: `Float3`
- Default: `(0, 0, 0)`

The wind here **only affects the movement direction of the particles below**.

::: tip

To simulate the effect of wind force, please simulate it by setting [`Map Info → Gravity`](../../start/release#Gravity).

:::

## `Rain Particle`

- Type: `float`
- Default: `0.0`
- Range: `0.0` ~ `1.0`

Rain particle will globally affect the player ball's wetness; the higher the rain particle value, the faster the player ball's wetness increases.

## `Snow Particle`

- Type: `float`
- Default: `0.0`
- Range: `0.0` ~ `1.0`

## `Fog Particle`

- Type: `float`
- Default: `0.0`
- Range: `0.0` ~ `1.0`

## `Firefly Particle`

- Type: `float`
- Default: `0.0`
- Range: `0.0` ~ `1.0`

## `Spark Particle`

- Type: `float`
- Default: `0.0`
- Range: `0.0` ~ `1.0`

## `Global Snow Cover`

- Type: `float`
- Default: `0.0`
- Range: `0.0` ~ `1.0`

## `Global Wetness Cover`

- Type: `float`
- Default: `0.0`
- Range: `0.0` ~ `1.0`
