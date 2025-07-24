# Way Point

`Way Point` needs to be used in conjunction with the [`Way Path`](wayPath) component.

## ~~[Transform Offset](item#Transform-Offset)~~

Currently, the transform offset for a waypoint has no effect.

## `Move Type`

- Type: `Speed | Duration`
- Default: `Speed`

## `Move Speed`<badge text="Move Type = Speed" />

- Type: `float`
- Default: `5.0`

After an item passes this waypoint, it will move to the next waypoint at this speed.

## `Move Duration`<badge text="Move Type = Duration" />

- Type: `float`
- Default: `1.0`

After an item passes this waypoint, it will move to the next waypoint within this amount of time. The unit is seconds.

## `Stay Time`

- Type: `float`
- Default: `0.0`

When an item reaches this waypoint, this is the amount of time it will stay in place. The unit is seconds.
