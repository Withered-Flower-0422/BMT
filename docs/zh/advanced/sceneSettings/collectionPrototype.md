# 收集品原型

- 游戏中使用到的所有自定义收集品都需要在本组件中进行注册
- 注册了名称为 `name` 的收集品原型后，可以在场景中创建名称为 `name` 的收集品，此时游戏内会自动创建名称为 `C_name` 的变量，可以使用脚本的 [变量模块](https://github.com/Withered-Flower-0422/BST/blob/main/_Typings/gameApi/modules/variables.d.ts) 进行修改

::: tip 提示

- 如果仅仅注册了收集品原型，但并没有在场景中创建任何对应的收集品，则不会创建对应的变量

- 如果确实需要注册名称为 `name` 的收集品原型，且不希望在场景中创建对应的收集品，仅希望通过脚本控制其数量，可以在场景中创建一个名称为 `name` 的收集品，并关闭其 [`触发器`](../item/trigger) 和 [`渲染器`](../item/renderer)

:::

## `重置时机`

- 类型：`生命开始时 | 关卡重开时 `
- 默认值：`生命开始时`

控制收集品的重置时机。

::: tip 提示

- `生命开始时`：在玩家死亡后，关卡内所有该类型的收集品会被重置，玩家拥有的该类型收集品数量重置为 0（例如：官方收集品中的 `红、绿、蓝钥匙`）
- `关卡重开时`：该类型的收集品和玩家拥有的该类型收集品数量不会在玩家死亡后重置，仅在关卡重开时重置（例如：官方收集品中的 `青、黄、洋红钥匙`）

:::

## `收集品名称`

- 类型：`string`
- 默认值：空

请务必只填写 ASCII 字符，且不要使用重复的名称。

## `优先级`

- 类型：`int`
- 默认值：`0`

决定收集品的显示顺序：

- 红、绿、蓝、青、洋红、黄钥匙的优先级分别为 `10` `20` `30` `40` `50` `60`
- 不同优先级的收集品，优先级低的在前
- 相同优先级的收集品，制图器中靠前的在前，钥匙在最后

## `图标`

- 类型：`Texture`
- 默认值：空

在界面左下角显示的收集品图标。

## `一直显示`

- 类型：`bool`
- 默认值：`false`

收集品数量为 0 时是否仍然显示。

## `显示最大数量`

- 类型：`bool`
- 默认值：`false`

是否显示场景内该类型收集品的所有数量。
