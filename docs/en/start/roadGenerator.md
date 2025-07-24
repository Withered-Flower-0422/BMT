# Road Generator

::: warning

Because the road generator plays a crucial role in the mapping process, this chapter has been added to the basic section to introduce the most fundamental usage of the road generator.

The content of this chapter has a decisive impact on mapping quality and efficiency. Please be sure to read it carefully and practice a lot. Do not skip this chapter!

:::

The roads, rails, wood boards, and tubes in Ballex² are all made with the road generator.

## Creating a Road Generator

`Create → Road Generator`

In this Start section, only common usages and frequently used parameters will be explained. The most critical parameters are:

- `Generator Algorithm`
- `Length`
- `Width`
- `End Width`
- `Segments`
- `Bend`
- `Offsets`<badge text="Generator Algorithm = Rail" />

::: tip

- The [`Custom Vertices`](../advanced/item/roadGenerator#Custom-Vertices) road generator will be detailed in the `Advanced` section.
- The [`Custom Script`](../script/roadGenerator) road generator will be detailed in the `Script` section.

:::

## Straight Road

- Select `Generator Algorithm` as `Road`.
- Set the `Length`.
- To create a concave road, set `Concave` and `End Concave` (recommended value is `0.1`).
- To create a wide road, set `Width` and `End Width` (recommended value is `3`).
- To create a sloped road, set `End Height` and check `Precise UV Length`.

::: tip

`Length` is the projected length onto the horizontal plane and is an independent parameter from `End Height`.

If both ends are obstructed by other objects, you can uncheck `Create Caps` to improve performance.

:::

## Straight Wood Board

- Select `Generator Algorithm` as `Wood Board`.
- Set the `Length`.
- To create a wide wood board, set `Width` (recommended value is `2`).
- To create a sloped wood board, set `End Height` and check `Precise UV Length`.

## Straight Rail

- Select `Generator Algorithm` as `Rail`.
- Set the `Length`.
- To change the dual-rail gauge, set the `Offsets` (not recommended to modify).
- To create a monorail, set the `Offsets` count to `1` with a value of `(0, 0)`.
- To create a sloped rail, rotate the rail and connect it with matching curved arc rails.

## Straight Tube

- Select `Generator Algorithm` as `Tube`.
- Set the `Length`.
- To increase the tube's outer diameter, set `Radius` and `End Radius` (recommended value is `0.75`).
- To change the cross-section's central angle, set `Slice` (recommended value is `(0, 180)`).

## Arc

- Calculate the corresponding `Length` based on the desired radius and central angle.
- Set `Bend Y` to the angle between the end direction and the start direction, in degrees. A right turn is positive, a left turn is negative.
- Set the `Segments` appropriately based on the angle above (recommended value is `Yaw Angle / 7.5`, rounded up).

## Spiral

- Set `End Height` to the height difference between the end and the start.
- Other settings are the same as for an Arc.

## Roll

- Set `Bend X` to the angle between the end direction and the start direction, in degrees. Pushing down is positive, pulling up is negative.
- Other settings are the same as for an Arc.

## Twist

- Set `Bend Z` to the angle between the end direction and the start direction, in degrees. A counter-clockwise twist is positive, a clockwise twist is negative.
- Other settings are the same as for an Arc.

::: warning

To avoid strange results:

- Do not set both `End Height` and `Bend X` parameters at the same time.
- Do not set both `Bend X` and `Bend Y` parameters at the same time.

:::

## Corner

- Select `Generator Algorithm` as `Corner`.
- Set the `Size` corresponding to the road width.
- Click to modify the texture styles of the edges and corners.
