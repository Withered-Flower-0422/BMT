# Particle Emitter

## [Transform Offset](item#Transform-Offset)

## `Auto Play`

- Type: `bool`
- Default: `true`

## `Loop`

- Type: `bool`
- Default: `true`

## `Simulation In Local`

- Type: `bool`
- Default: `false`

## `Duration`

- Type: `float`
- Default: `5`

## `Spawn Rate`

- Type: `Float2`
- Default: `(10, 20)`

The spawn time of the next particle will be determined by a random value uniformly distributed within this range. Negative numbers are treated as `0`. The order of the two numbers does not matter; if they are the same, the rate is fixed. The same applies below.

## `Burst Count`

- Type: `Float2`
- Default: `(0, 0)`

At the beginning of each cycle, burst particles will be emitted. The number of particles in each burst will be a random value uniformly distributed within this range. Negative numbers are treated as `0`.

## `Emitter Size`

- Type: `Float3`
- Default: `(1, 1, 1)`

Particles will be generated randomly and uniformly within this area. `0` means the position on that axis is fixed, and a negative number indicates the opposite direction.

## `Initial Velocity`

- Type: `Float2`
- Default: `(0, 5)`

Each particle will get a random value uniformly distributed within this range. A negative number indicates the opposite direction.

## `Start Rotation`

- Type: `Float2`
- Default: `(0, 0)`

Each particle will get a random value uniformly distributed within this range. The unit is radians, and a positive number indicates clockwise.

## `Angular Velocity`

- Type: `Float2`
- Default: `(0, 0)`

Each particle will get a random value uniformly distributed within this range. A positive number indicates clockwise.

## `Follow Camera`

- Type: `bool`
- Default: `false`

The particle emitter will move and rotate with the camera.

## `Texture`

- Type: `Texture`
- Default: Empty

## `Blend Mode`

- Type: `Alpha | Additive | Premultiply`
- Default: `Alpha`

## `Lifetime`

- Type: `Float2`
- Default: `(1, 2)`

Each particle will get a random value uniformly distributed within this range. Negative numbers are treated as `0`.

## `Initial Size`

- Type: `Float2`
- Default: `(0.5, 1)`

Each particle will get a random value uniformly distributed within this range. Negative numbers are treated as `0`.

## Time Nodes

- Each particle will transform its own parameters during its lifetime according to keyframes of time nodes.
- The particle's lifetime starts at `0` and ends at `1`.
- When multiple keyframes exist at the same time, only the first declared keyframe is effective.
- If there is no keyframe at the start, the parameter values from the earliest keyframe are used.
- If there is no keyframe at the end, the parameter values from the latest keyframe are used.
- Between two adjacent keyframes, each parameter transforms linearly.

### `Time`

- Type: `float`
- Default: `0`
- Range: `0` ~ `1`

### `Color`

- Type: `ColorRGBA`
- Default: `(1, 1, 1, 1)`

### `Size`

- Type: `float`
- Default: `1.0`

## `Gravity Factor`

- Type: `float`
- Default: `0.0`

## `Turbulence Intensity`

- Type: `float`
- Default: `1.0`

## `Turbulence Frequency`

- Type: `float`
- Default: `0.2`

## `Animation Tiles X` & `Animation Tiles Y`

- Type: `int`
- Default: `1`
- Range: `1` ~ `32`

Splits the material texture by the given number of tiles. Each tile is treated as a frame, creating a particle animation. The animation period is determined by the particle's `Duration`.

## Buttons

### `Refresh`

Refreshes the particle animation in the editor.

### `Play`

Plays the particle animation in the editor.

### `Pause`

Pauses the particle animation in the editor.

### `Stop`

Stops the particle animation in the editor.
