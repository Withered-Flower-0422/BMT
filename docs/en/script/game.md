# 游戏内脚本

## 使用方法

1. 参考 [模板](#模板) 和 [示例](#示例) 的书写方式编写好脚本
2. 将脚本 [导入](../advanced/assets#脚本) 编辑器
3. 如果脚本内使用了 [触碰事件](../advanced/item/physicsObject#碰撞进入) 或 [触发器事件](../advanced/item/trigger#触发事件)，请确保元件启用并设置好了相应的组件和功能
4. 在 [`执行器`](../advanced/item/executor) 组件中添加脚本，并设置好需要的变量
5. 进入游戏，脚本将自动执行

## 钩子

游戏内共提供了 6 个钩子，参见 [BST/\_Typings/gameApi/exportFuncs.d.ts](https://github.com/Withered-Flower-0422/BST/blob/main/_Typings/gameApi/exportFuncs.d.ts)。

### `init`

```ts
export const init: (self: Item, vars: { [key: string]: any }) => void
```

执行器加载脚本时执行，在所有事件之前执行，只会执行一次。

::: warning 注意

在此函数中不要进行任何有关游戏内物体的操作，因为此时场景尚未加载完成。

:::

- `self`：执行器组件所在元件的引用
- `vars`：执行器上设置的变量，以键值对的形式传入

### `execute`

```ts
export const execute: (...args: any[]) => void
```

游戏中使用 `execute()` 被其他执行器调用时执行。

### `registerEvents`

```ts
export const registerEvents: RegisterEvent[]
```

导出一个 string 数组，注册需要接收的事件。

<details class="details custom-block">
<summary>事件列表</summary>

::: warning 注意

事件中所有传递的信息均为数组。

:::

- `OnPhysicsUpdate` 物理更新
- `OnLoadLevel` 当关卡加载结束，开始关卡前
- `OnStartLevel` 开始关卡时，包括第一次进入及重开后
- `OnQuitLevel` 未完成游戏退出关卡时
- `OnTimerActive` 生成玩家球启用计时器时
- `OnPreRestartLevel` 执行重开关卡前
  - 可取消
  - 不包括完成关卡后的重开
- `OnPostRestartLevel` 执行重开关卡后
- `OnPrePlayerDeadStart` 玩家掉入死亡区 / 耐久归零 / 自杀前
  - 可取消
- `OnPostPlayerDeadStart` 玩家掉入死亡区 / 耐久归零 / 自杀后
- `OnPlayerDeadEnd` 死亡动画结束后
- `OnPreCheckpointReached` 到达检查点前
  - 消息：`[Item]` 检查点元件
  - 可取消
- `OnPostCheckpointReached` 到达检查点后
  - 消息：`[Item]` 检查点元件
- `OnPreDestinationReached` 到达终点前
  - 消息: `[Item]` 终点元件
  - 可取消
- `OnPostDestinationReached` 到达终点后
  - 消息: `[Item]` 终点元件
- `OnPreGetCollection` 获取收集物前
  - 消息：`string[]` 被收集的收集品名字
  - 可取消
- `OnPostGetCollection` 获取收集物后
  - 消息：`string[]` 被收集的收集品名字
- `OnPreSwitchBallStart` 变球动画开始前
  - 消息：`[BallType]` 变球类型
  - 可取消
- `OnPreSwitchBallEnd` 变球动画结束前
  - 消息：`[BallType]` 变球类型
  - 可取消
- `OnPostSwitchBallEnd` 变球动画结束后
  - 消息：`[BallType]` 变球类型
- `OnPreTransferBallStart` 传球动画开始前
  - 消息：`[Item, Item]` 传送器元件，第一个是当前传送器，第二个是目标传送器
  - 可取消
- `OnPreTransferBallEnd` 传球动画结束前
  - 消息：`[Item, Item]` 传送器元件，第一个是当前传送器，第二个是目标传送器
  - 可取消
- `OnPostTransferBallEnd` 传球动画结束后
  - 消息：`[Item, Item]` 传送器元件，第一个是当前传送器，第二个是目标传送器
- `OnPlayerCollideEnter` 玩家碰撞进入事件
  - 消息：`CollisionEvent[]` 碰撞事件
- `OnPlayerCollideStay` 玩家碰撞持续事件
  - 消息：`CollisionEvent[]` 碰撞事件
- `OnPlayerCollideExit` 玩家碰撞离开事件
  - 消息：`CollisionEvent[]` 碰撞事件
- `OnReceiveCustomEvent` 接收到自定义事件时
  - 消息：`any[]` 自定义事件的值
- `OnTntExploded` TNT 爆炸事件
  - 消息：`Float3[]` 所有 TNT 的爆炸位置

</details>

### `onEvents`

```ts
export const onEvents: (self: Item, events: Events) => void
```

注册的事件触发时执行。

- `self`：执行器组件所在元件的引用
- `events`：触发的事件及其传递的消息，以键值对的形式传入，键为事件名，值为传递的消息**数组**

### `onTrigger`

```ts
export const onTrigger: (
  self: Item,
  triggeredItem: Item | Player,
  type: CollisionEvent["eventType"]
) => void
```

触发器触发时执行。

- `self`：触发器组件所在元件的引用
- `triggeredItem`：触发触发器的元件或玩家引用
- `type`：触发事件类型，`"Enter" | "Stay" | "Exit"`

### `onCollide`

```ts
export const onCollide: (self: Item, collisionEvent: CollisionEvent) => void
```

物体发生碰撞时执行。

- `self`：碰撞发生的物体的引用
- `collisionEvent`：碰撞事件对象，包含了碰撞的物体、碰撞的类型、碰撞的位置等信息

## 模块

游戏内共提供了以下 9 个模块：

- [`audioManager`](https://github.com/Withered-Flower-0422/BST/blob/main/_Typings/gameApi/modules/audioManager.d.ts)
- [`console`](https://github.com/Withered-Flower-0422/BST/blob/main/_Typings/gameApi/modules/console.d.ts)
- [`inputManager`](https://github.com/Withered-Flower-0422/BST/blob/main/_Typings/gameApi/modules/inputManager.d.ts)
- [`levelManager`](https://github.com/Withered-Flower-0422/BST/blob/main/_Typings/gameApi/modules/levelManager.d.ts)
- [`scene`](https://github.com/Withered-Flower-0422/BST/blob/main/_Typings/gameApi/modules/scene.d.ts)
- [`settings`](https://github.com/Withered-Flower-0422/BST/blob/main/_Typings/gameApi/modules/settings.d.ts)
- [`tweenManager`](https://github.com/Withered-Flower-0422/BST/blob/main/_Typings/gameApi/modules/tweenManager.d.ts)
- [`uiCanvas`](https://github.com/Withered-Flower-0422/BST/blob/main/_Typings/gameApi/modules/uiCanvas.d.ts)
- [`variables`](https://github.com/Withered-Flower-0422/BST/blob/main/_Typings/gameApi/modules/variables.d.ts)

具体参见 [BST/\_Typings/gameApi/modules](https://github.com/Withered-Flower-0422/BST/tree/main/_Typings/gameApi/modules)。

## 模板

参见 [BST/Templates/gameTemplate.js](https://github.com/Withered-Flower-0422/BST/blob/main/Templates/gameTemplate.js)。

## 示例

参见 [BST/Samples/gameSamples](https://github.com/Withered-Flower-0422/BST/tree/main/Samples/gameSamples)。
