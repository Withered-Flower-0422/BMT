# Game Script

## Usage

1. Write the script by referring to the writing style of the [Template](#Template) and [Example](#Example).
2. [Import](../advanced/assets#Scripts) the script into the editor.
3. If the script uses [Collision Events](../advanced/item/physicsObject#Collision-Enter) or [Trigger Events](../advanced/item/trigger#Trigger-Event), ensure the item has enabled and properly configured the corresponding components and features.
4. Add the script in the [`Executor`](../advanced/item/executor) component and set up the necessary variables.
5. Enter the game, and the script will execute automatically.

## Hooks

The game provides a total of 6 hooks, see [BST/\_Typings/gameApi/exportFuncs.d.ts](https://github.com/Withered-Flower-0422/BST/blob/main/_Typings/gameApi/exportFuncs.d.ts).

### `init`

```ts
export const init: (self: Item, vars: { [key: string]: any }) => void
```

Executed when the executor loads the script. It executes before all other events and only executes once.

::: warning

Do not perform any operations on in-game objects in this function, because the scene has not finished loading at this point.

:::

- `self`: A reference to the item where the executor component is located.
- `vars`: The variables set on the executor, passed in as key-value pairs.

### `execute`

```ts
export const execute: (...args: any[]) => void
```

Executed when `execute()` is called by another executor in the game.

### `registerEvents`

```ts
export const registerEvents: RegisterEvent[]
```

Exports a string array to register the events it needs to receive.

<details class="details custom-block">
<summary>Event List</summary>

::: warning

All messages passed in events are in the form of an array.

:::

- `OnPhysicsUpdate` Physics update
- `OnLoadLevel` When the level has finished loading, before the level starts
- `OnStartLevel` When the level starts, including the first time and after restarting
- `OnQuitLevel` When quitting the level without finishing
- `OnTimerActive` When the player ball is spawned and the timer is enabled
- `OnPreRestartLevel` Before executing a level restart
  - Cancellable
  - Does not include restarts after completing the level
- `OnPostRestartLevel` After executing a level restart
- `OnPrePlayerDeadStart` Before the player falls into a death area / durability reaches zero / suicides
  - Cancellable
- `OnPostPlayerDeadStart` After the player falls into a death area / durability reaches zero / suicides
- `OnPlayerDeadEnd` After the death animation ends
- `OnPreCheckpointReached` Before reaching a checkpoint
  - Message: `[Item]` the checkpoint item
  - Cancellable
- `OnPostCheckpointReached` After reaching a checkpoint
  - Message: `[Item]` the checkpoint item
- `OnPreDestinationReached` Before reaching the destination
  - Message: `[Item]` the destination item
  - Cancellable
- `OnPostDestinationReached` After reaching the destination
  - Message: `[Item]` the destination item
- `OnPreGetCollection` Before getting a collection
  - Message: `string[]` the name of the collection being collected
  - Cancellable
- `OnPostGetCollection` After getting a collection
  - Message: `string[]` the name of the collection being collected
- `OnPreSwitchBallStart` Before the ball switch animation starts
  - Message: `[BallType]` the ball type being switched to
  - Cancellable
- `OnPreSwitchBallEnd` Before the ball switch animation ends
  - Message: `[BallType]` the ball type being switched to
  - Cancellable
- `OnPostSwitchBallEnd` After the ball switch animation ends
  - Message: `[BallType]` the ball type being switched to
- `OnPreTransferBallStart` Before the ball transfer animation starts
  - Message: `[Item, Item]` the teleporter items; the first is the current one, the second is the target
  - Cancellable
- `OnPreTransferBallEnd` Before the ball transfer animation ends
  - Message: `[Item, Item]` the teleporter items; the first is the current one, the second is the target
  - Cancellable
- `OnPostTransferBallEnd` After the ball transfer animation ends
  - Message: `[Item, Item]` the teleporter items; the first is the current one, the second is the target
- `OnPlayerCollideEnter` Player collision enter event
  - Message: `CollisionEvent[]` the collision events
- `OnPlayerCollideStay` Player collision stay event
  - Message: `CollisionEvent[]` the collision events
- `OnPlayerCollideExit` Player collision exit event
  - Message: `CollisionEvent[]` the collision events
- `OnReceiveCustomEvent` When a custom event is received
  - Message: `any[]` the value of the custom event
- `OnTntExploded` TNT explosion event
  - Message: `Float3[]` the explosion positions of all TNTs

</details>

### `onEvents`

```ts
export const onEvents: (self: Item, events: Events) => void
```

Executed when a registered event is triggered.

- `self`: A reference to the item where the executor component is located.
- `events`: The triggered events and their passed messages, passed in as key-value pairs. The key is the event name, and the value is the passed message **array**.

### `onTrigger`

```ts
export const onTrigger: (
  self: Item,
  triggeredItem: Item | Player,
  type: "Enter" | "Stay" | "Exit"
) => void
```

Executed when a trigger is activated.

- `self`: A reference to the item where the trigger component is located.
- `triggeredItem`: A reference to the item or player that activated the trigger.
- `type`: The type of trigger event.

### `onCollide`

```ts
export const onCollide: (self: Item, collisionEvent: CollisionEvent) => void
```

Executed when an object collides.

- `self`: A reference to the object on which the collision occurred.
- `collisionEvent`: The collision event object, which contains information about the colliding object, the type of collision, the position of the collision, etc.

## Modules

The game provides the following 10 modules:

- [`audioManager`](https://github.com/Withered-Flower-0422/BST/blob/main/_Typings/gameApi/modules/audioManager.d.ts)
- [`console`](https://github.com/Withered-Flower-0422/BST/blob/main/_Typings/gameApi/modules/console.d.ts)
- [`inputManager`](https://github.com/Withered-Flower-0422/BST/blob/main/_Typings/gameApi/modules/inputManager.d.ts)
- [`levelManager`](https://github.com/Withered-Flower-0422/BST/blob/main/_Typings/gameApi/modules/levelManager.d.ts)
- [`scene`](https://github.com/Withered-Flower-0422/BST/blob/main/_Typings/gameApi/modules/scene.d.ts)
- [`settings`](https://github.com/Withered-Flower-0422/BST/blob/main/_Typings/gameApi/modules/settings.d.ts)
- [`tweenManager`](https://github.com/Withered-Flower-0422/BST/blob/main/_Typings/gameApi/modules/tweenManager.d.ts)
- [`uiCanvas`](https://github.com/Withered-Flower-0422/BST/blob/main/_Typings/gameApi/modules/uiCanvas.d.ts)
- [`variables`](https://github.com/Withered-Flower-0422/BST/blob/main/_Typings/gameApi/modules/variables.d.ts)
- [`math`](https://github.com/Withered-Flower-0422/BST/blob/main/_Typings/utils/math.d.ts)

For details, see [BST/\_Typings/gameApi/modules](https://github.com/Withered-Flower-0422/BST/tree/main/_Typings/gameApi/modules).

::: tip

To import custom modules from within the project, please use BME's resource path, for example:

```js
import { dotProduct } from "Scripts/Utility/MathExtension.js"
```

::: warning

The `.js` suffix **cannot** be omitted here.

:::

## Template

See [BST/Templates/gameTemplate.js](https://github.com/Withered-Flower-0422/BST/blob/main/Templates/gameTemplate.js).

## Example

See [BST/Samples/gameSamples](https://github.com/Withered-Flower-0422/BST/tree/main/Samples/gameSamples).
