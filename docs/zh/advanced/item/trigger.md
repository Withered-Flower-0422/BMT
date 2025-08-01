# 触发器 #{trigger}

## 触发层 #{trigger-layer}

用来设置何种 [碰撞层](physicsObject#碰撞层) 的元件可以触发此触发器。

### `玩家` #{player}

- 类型：`bool`
- 默认值：`true`

### `刚体` #{rigid-body}

- 类型：`bool`
- 默认值：`true`

### `机关` #{machinery}

- 类型：`bool`
- 默认值：`true`

### `静态路面` #{static-road}

- 类型：`bool`
- 默认值：`false`

### `机关挡板` #{stopper}

- 类型：`bool`
- 默认值：`false`

### `非玩家` #{without-player}

- 类型：`bool`
- 默认值：`false`

### `仅玩家` #{only-player}

- 类型：`bool`
- 默认值：`false`

### `无` #{none}

- 类型：`bool`
- 默认值：`false`

## 触发事件 #{trigger-event}

### `触发进入` #{trigger-enter}

- 类型：`bool`
- 默认值：`false`

当设置为 `true` 时，会在物体进入触发器范围时的那一帧调用脚本的 [onTrigger()](../../script/game#onTrigger) 函数。

### `触发停留` #{trigger-stay}

- 类型：`bool`
- 默认值：`false`

当设置为 `true` 时，会在物体处于触发器范围内持续时每一帧调用脚本的 [onTrigger()](../../script/game#onTrigger) 函数，**包括**进入和离开的那一帧。

### `触发离开` #{trigger-exit}

- 类型：`bool`
- 默认值：`false`

当设置为 `true` 时，会在物体离开触发器范围时的那一帧调用脚本的 [onTrigger()](../../script/game#onTrigger) 函数。

## 触发器形状 #{trigger-shape}

参考 [`物理物体 → 碰撞箱类型`](physicsObject#碰撞箱类型) 。
