# Physics Object

::: tip

After enabling this component, this item will participate in the game's [Havok physics engine](https://www.havok.com) calculations as a physics object.

:::

## `Collider Type`

- Type: `Box | Sphere | Mesh`
- Default: `Mesh`

The collider type of the physics object.

### Box

#### `Center`

- Type: `Float3`
- Default: `(0, 0, 0)`

#### `Size`

- Type: `Float3`
- Default: `(1, 1, 1)`

#### `Bevel Radius`

- Type: `float`
- Default: `0.02`

#### `Auto Detect`

Clicking this button automatically sets the size of the minimum bounding box based on the mesh in the [`Renderer`](renderer) component.

### Sphere

#### `Center`

- Type: `Float3`
- Default: `(0, 0, 0)`

#### `Radius`

- Type: `float`
- Default: `0.5`

### Mesh

::: tip

The performance of the Mesh mode is much lower than the other two. If the effect meets expectations, please prioritize using the Box or Sphere mode.

:::

#### `Auto Get Mesh`

- Type: `bool`
- Default: `true`

When set to `true`, it will attempt to get the mesh from the [`Renderer`](renderer) component.

#### `Mesh`<badge text="Auto Get Mesh = false" />

- Type: `Mesh`
- Default: Empty

When `Auto Get Mesh` is set to `false`, this mesh will be used.

#### `Convex`

- Type: `bool`
- Default: `false`

When set to `true`, a [convex collider](https://en.wikipedia.org/wiki/Convex_hull) will be used.

::: warning

Due to an issue with the _Havok physics engine_ itself, when a **non-convex mesh item** has a [collision event](#Collision-Enter) or a [trigger event](trigger#Trigger-Event), the corresponding event will be triggered once for each face of its mesh. Therefore, when an item needs to respond to these events, please try to use `Box` and `Sphere` colliders, or enable the `Convex` option.

:::

## `Physics Body Type`

- Type: `Static | Kinematic | Rigid`
- Default: `Static`

### Static

A completely stationary physics object. E.g., the ground.

This type of physics object will not be destroyed upon entering a death area.

#### `Weld Collider`

- Type: `bool`
- Default: `false`

Neighboring objects with this feature enabled will have their colliders automatically optimized, attempting to correct minor issues like small gaps, misalignments, and slight clipping.

::: danger

This feature can lead to many non-physical behaviors, including but not limited to bouncing, sliding off monorails, and mechanisms clipping through objects. Do not use this unless you know what you are doing.

:::

### Kinematic

Stationary, can only have its pose adjusted via an [Executor script](executor) or a [Way Path](wayPath)/[Way Point](wayPoint). E.g., a moving platform.

This type of physics object can be destroyed by a death area.

### Rigid

Participates in the physics simulation and will be affected by various forces. E.g., a box.

This type of physics object can be destroyed by a death area.

#### `Mass`

- Type: `float`
- Default: `1.0`

#### `Linear Drag`

- Type: `float`
- Default: `0.5`

#### `Angular Drag`

- Type: `float`
- Default: `0.05`

#### `Gravity Factor`

- Type: `float`
- Default: `1.0`

Can be set to a negative number to make it fly.

#### `Density`

- Type: `float`
- Default: `10.0`

Affects forces when in water.

#### `Buoyancy Voxel Size`

- Type: `float`
- Default: `0.5`

## `Override Mass Distribution`

- Type: `bool`
- Default: `false`

## `Center Of Mass`

- Type: `Float3`
- Default: `(0, 0, 0)`

This property is only effective when `Override Mass Distribution` is set to `true`.

## `Auto Get Physics Material`

- Type: `bool`
- Default: `true`

When set to `true`, it will attempt to get the physics material from the [`Road Generator`](roadGenerator) component based on the road type.

## `Physics Material`<badge text="Auto Get Physics Material = false" />

- Type: `enum`
- Default: `Stone`

When `Auto Get Physics Material` is set to `false`, this physics material will be used.

## `Custom Physics Material`<badge text="Auto Get Physics Material = false" />

- Type: `bool`
- Default: `false`

When set to `true`, a custom physics material will be used.

## `Custom Friction Mode`<badge text="Custom Physics Material = true" /><badge text="Auto Get Physics Material = false" />

- Type: `Geometric Mean | Minimum | Maximum | Arithmetic Mean`
- Default: `Geometric Mean`

## `Custom Friction`<badge text="Custom Physics Material = true" /><badge text="Auto Get Physics Material = false" />

- Type: `float`
- Default: `0.2`

## `Custom Restitution Mode`<badge text="Custom Physics Material = true" /><badge text="Auto Get Physics Material = false" />

- Type: `Geometric Mean | Minimum | Maximum | Arithmetic Mean`
- Default: `Geometric Mean`

## `Custom Restitution`<badge text="Custom Physics Material = true" /><badge text="Auto Get Physics Material = false" />

- Type: `float`
- Default: `0.2`

## `Disable Collision Audio`

- Type: `bool`
- Default: `false`

## `Disable Collision Damage`

- Type: `bool`
- Default: `false`

## `Collision Layer`

- Type: `enum`
- Default: `Static Road`

A table showing which layers can collide with each other:

|                | Player | Rigid Body | Machi-nery | Static Road | Stop-per | None | Without Player | Only Player |
| :------------: | :----: | :--------: | :--------: | :---------: | :------: | :--: | :------------: | :---------: |
|     Player     |   √    |     √      |     √      |      √      |          |      |                |      √      |
|   Rigid Body   |   √    |     √      |     √      |      √      |          |      |       √        |             |
|   Machi-nery   |   √    |     √      |            |             |    √     |      |       √        |             |
|  Static Road   |   √    |     √      |            |             |          |      |       √        |             |
|    Stop-per    |        |            |     √      |             |          |      |       √        |             |
|      None      |        |            |            |             |          |      |                |             |
| Without Player |        |     √      |     √      |      √      |    √     |      |       √        |             |
|  Only Player   |   √    |            |            |             |          |      |                |             |

## `Collision Enter`

- Type: `bool`
- Default: `false`

When set to `true`, this object will call the script's [onCollide()](../../script/game#onCollide) function on the frame it collides with another object.

## `Collision Stay`

- Type: `bool`
- Default: `false`

When set to `true`, this object will call the script's [onCollide()](../../script/game#onCollide) function on every frame that it continues to collide with another object, **including** the frame it enters and leaves.

## `Collision Exit`

- Type: `bool`
- Default: `false`

When set to `true`, this object will call the script's [onCollide()](../../script/game#onCollide) function on the frame it stops colliding with another object.
