# 触发器

## 触发层

用来设置何种 [碰撞层](physicsObject#碰撞层) 的元件可以触发此触发器。

### `玩家`

- 类型：`bool`
- 默认值：`true`

### `刚体`

- 类型：`bool`
- 默认值：`true`

### `机关`

- 类型：`bool`
- 默认值：`true`

### `静态路面`

- 类型：`bool`
- 默认值：`false`

### `机关挡板`

- 类型：`bool`
- 默认值：`false`

### `非玩家`

- 类型：`bool`
- 默认值：`false`

### `仅玩家`

- 类型：`bool`
- 默认值：`false`

### `无`

- 类型：`bool`
- 默认值：`false`

## 触发事件

### `触发进入`

- 类型：`bool`
- 默认值：`false`

当设置为 `true` 时，会在物体进入触发器范围时的那一帧调用脚本的 [onTrigger()](../../script/game#onTrigger) 函数。

### `触发停留`

- 类型：`bool`
- 默认值：`false`

当设置为 `true` 时，会在物体处于触发器范围内持续时每一帧调用脚本的 [onTrigger()](../../script/game#onTrigger) 函数，**包括**进入和离开的那一帧。

### `触发离开`

- 类型：`bool`
- 默认值：`false`

当设置为 `true` 时，会在物体离开触发器范围时的那一帧调用脚本的 [onTrigger()](../../script/game#onTrigger) 函数。

## 触发器形状

参考 [`物理物体 → 碰撞箱类型`](physicsObject#碰撞箱类型) 。
