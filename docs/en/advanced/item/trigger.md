# Trigger

## Trigger Layer

Used to set which [Collision Layer](physicsObject#Collision-Layer) of items can activate this trigger.

### `Player`

- Type: `bool`
- Default: `true`

### `Rigid Body`

- Type: `bool`
- Default: `true`

### `Machinery`

- Type: `bool`
- Default: `true`

### `Static Road`

- Type: `bool`
- Default: `false`

### `Stopper`

- Type: `bool`
- Default: `false`

### `Without Player`

- Type: `bool`
- Default: `false`

### `Only Player`

- Type: `bool`
- Default: `false`

### `None`

- Type: `bool`
- Default: `false`

## Trigger Event

### `Trigger Enter`

- Type: `bool`
- Default: `false`

When set to `true`, it will call the script's [onTrigger()](../../script/game#onTrigger) function on the frame an object enters the trigger's volume.

### `Trigger Stay`

- Type: `bool`
- Default: `false`

When set to `true`, it will call the script's [onTrigger()](../../script/game#onTrigger) function on every frame that an object stays within the trigger's volume, **including** the frame it enters and leaves.

### `Trigger Exit`

- Type: `bool`
- Default: `false`

When set to `true`, it will call the script's [onTrigger()](../../script/game#onTrigger) function on the frame an object leaves the trigger's volume.

## Trigger Shape

Refer to [`Physics Object → Collider Type`](physicsObject#Collider-Type).
