# Machinery

- Adding machineries to a map can enrich the level's logic.
- This chapter will introduce the characteristics of all official machineries.
- This chapter can be considered an official machinery compendium.

## Doors and Keys

::: tip

- Doors and Keys can be found in `Assets → Items → DoorsAndKeys`.
- There is no functional difference between a `Normal Key` and an `Opaque Key`. However, when the camera is above water and a `Normal Key` is in the water, the key will not be rendered. Therefore, please use an `Opaque Key` when placing keys in water.

:::

|          Door Name          |         Key Needed to Unlock          |                            Characteristics                            |
| :-------------------------: | :-----------------------------------: | :-------------------------------------------------------------------: |
|  `LockedLocked_Door_Blue`   |    `Key_Blue` or `Key_Blue_Opaque`    |      The `Door` and `Key`'s states reset after the player dies.       |
|  `LockedLocked_Door_Green`  |   `Key_Green` or `Key_Green_Opaque`   |      The `Door` and `Key`'s states reset after the player dies.       |
|   `LockedLocked_Door_Red`   |     `Key_Red` or `Key_Red_Opaque`     |      The `Door` and `Key`'s states reset after the player dies.       |
|  `LockedLocked_Door_Cyan`   |    `Key_Cyan` or `Key_Cyan_Opaque`    | The `Door` and `Key`'s states do **not** reset after the player dies. |
| `LockedLocked_Door_Yellow`  |  `Key_Yellow` or `Key_Yellow_Opaque`  | The `Door` and `Key`'s states do **not** reset after the player dies. |
| `LockedLocked_Door_Magenta` | `Key_Magenta` or `Key_Magenta_Opaque` | The `Door` and `Key`'s states do **not** reset after the player dies. |

## Physical Machineries

::: tip

- Physical Machineries can be found in `Assets → Items → Machinery`.
- ~~Some machineries may not be very physical.~~

:::

|     Machinery Name      |                         Characteristics                         |  Interaction   |                               Notes                                |
| :---------------------: | :-------------------------------------------------------------: | :------------: | :----------------------------------------------------------------: |
|     `BalanceBoard`      |                         Shaky, unstable                         |       -        |                                 -                                  |
|        `Blower`         |         Blows light objects, accelerates humidity loss          |   Paper Ball   |           Two blowers are needed to lift a Sponge Ball.            |
|   `Blower_Rotatable`    |                 Same as `Blower`, but rotatable                 |   Paper Ball   |                                 -                                  |
|    `Blower_Rotating`    |           Same as `Blower`, but rotates automatically           |   Paper Ball   |                                 -                                  |
| `DoublePushBoard_TypeA` |           Allows passage on one of two parallel paths           | Non-light Ball |                                 -                                  |
| `DoublePushBoard_TypeB` |          A mirrored version of `DoublePushBoard_TypeA`          | Non-light Ball |                                 -                                  |
|     `FallDownBoard`     |               Falls after contact with any object               |       -        |                                 -                                  |
|         `Fence`         |           A path obstacle, pushed open from the side            | Non-light Ball |                                 -                                  |
|      `FloatBoard`       |      Lifts light objects, is pushed down by heavy objects       |       -        |       Has its own gravity, align using the assistance cube.        |
|     `FloatBoard_ng`     |            Same as `FloatBoard`, but has no gravity             |       -        |                                 -                                  |
|     `FloatUpBoard`      |         Rises on contact, pushed down by heavy objects          |       -        |                                 -                                  |
|     `FragileBoard`      |            Loses elasticity after being pushed down             | Non-heavy Ball |                                 -                                  |
|       `JumpArea`        |         Applies force or velocity to objects it touches         |       -        |             Parameters can be set in the `Inspector`.              |
|       `JumpBoard`       |             Flips up after contact with any object              |       -        |                                 -                                  |
|        `Lifter`         |         Push the target to change the platform's height         |       -        |                     Maximum height is 2 units.                     |
|       `PushBoard`       |           A path obstacle, pushed open from the front           | Non-light Ball |                                 -                                  |
|     `PushBoard_ns`      |           Same as `PushBoard`, but without a stopper            | Non-light Ball |                                 -                                  |
|         `Raft`          |                 Moves on water, carries objects                 |       -        |                                 -                                  |
|       `RailBoard`       |           Moves along its own Z-axis, carries objects           |       -        |              A rail on top is not strictly necessary.              |
|      `SeesawBoard`      |                Allows one-way passage on a path                 |       -        |               Can be pushed down by non-light balls.               |
|    `SeesawBoard_ns`     |          Same as `SeesawBoard`, but without a stopper           |       -        |                     Set up your own obstacles.                     |
|      `SpikedFlail`      |            Swings on its XY plane, can cause damage             |       -        |                                 -                                  |
|       `StabPlate`       |               Damages the player ball on contact                |       -        |                                 -                                  |
|       `SteelDoor`       |           A path obstacle, pushed open by heavy balls           |   Heavy Ball   |                                 -                                  |
|      `StoneBlock`       |                   Moves along its own Y-axis                    |       -        |     Usually, a `Box` is placed under it to create an obstacle.     |
|        `Stopper`        |               Used with stopper-less machineries                |       -        |                                 -                                  |
|   `SuspensionBridge`    |               Only allows non-heavy balls to pass               |       -        | Can also be placed horizontally, needing a heavy ball to break it. |
|      `SwingChest`       |         Swings on its YZ plane, carries the player ball         |       -        |               Recommended for non-heavy balls only.                |
|        `TTBoard`        |                    Pushed off from the side                     | Non-light Ball |                                 -                                  |
|      `TTBoard_ns`       |             Same as `TBoard`, but without a stopper             | Non-light Ball |                     Set up your own obstacles.                     |
|    `Teleporter_Blue`    | Teleports the player ball to the nearest other blue teleporter  |       -        |                                 -                                  |
|   `Teleporter_Green`    | Teleports the player ball to the nearest other green teleporter |       -        |                                 -                                  |
|    `Teleporter_Red`     |  Teleports the player ball to the nearest other red teleporter  |       -        |                                 -                                  |
|       `TriPrism`        | One end is pushed down by heavy balls, the other by light balls |       -        |                                 -                                  |
|      `TriPrism_na`      |            Same as `TriPrism`, but without an anchor            |       -        |                                 -                                  |
|       `Turnstile`       | Used to push objects or machineries on the other side of a path |       -        |                                 -                                  |

## Supplies

::: tip

- Supplies can be found in `Assets → Items → Misc`.

:::

| Supply Name |                             Characteristics                              |  After Death   |                        Notes                        |
| :---------: | :----------------------------------------------------------------------: | :------------: | :-------------------------------------------------: |
|   `Cure`    |      Restores 15 durability to the player ball and gives 15 score.       |     Resets     |        Does not give score after resetting.         |
| `Electric`  | Restores 50 power to Sticky Ball, repels other balls and causes damage.  |     Resets     | Cannot repel Steel Ball, not triggered by Ice Ball. |
|  `Frozen`   | Increases Ice Ball's size by 50%, lowers other balls' temperature by 50. |     Resets     |         Can extinguish flames immediately.          |
|  `Recover`  |       Resets all of the player ball's states and gives 100 score.        |     Resets     |        Does not give score after resetting.         |
|   `Score`   |  The main item and each subsequent small score ball provide 100 score.   | Does not reset |           Generates 5 small score balls.            |

## Ball Switchers

::: tip

- Ball Switchers can be found in `Assets → Items → Switcher`.

:::

- When the player ball is within the Ball Switcher's trigger area, its `scale`<badge text="Ice Ball" /> and `power`<badge text="Sticky Ball" /> can be rapidly restored.
- The ball-switching process is triggered when the player ball _enters the trigger area_ or _touches the Ball Switcher_.
- When the player ball is _already inside the trigger area_, the ball-switching process will not be triggered again.

## Rail Cart

::: tip

- Rail Carts can be found in `Assets → Items → RailBlock`.

:::

Usage:

- Create one or more sections of rail, which can be single or double rails.
- Based on the rail type and your actual needs, select a suitable rail cart type and place it on the track.
- Adjust the position of the rail cart. Normally, the cart's Y-axis height should be the same as the rail's Y-axis height.
- Select the cart, and in the `Inspector → Item Links → Settings`, add all the rail items the cart needs to travel on.
  - In the `Hierarchy`, select the rail items and drag them one by one into its list.

## Death Area

::: tip

- The Death Area can be found in `Assets → Items → Misc`.

:::

- Please ensure the Death Area is large enough to cover all possible areas where the player ball might die.
- When the map involves the `Balloon Ball`, please also cover the area above the path with a Death Area.
- Try not to use Death Areas to block shortcuts.
