# 物理物体 #{physics-object}

::: tip 提示

启用此组件后，该元件将作为物理物体参与游戏中 [havok 物理引擎](https://www.havok.com) 的计算。

:::

## `碰撞箱类型` #{collider-type}

- 类型：`长方体 | 球体 | 网格`
- 默认值：`网格`

物理物体的碰撞箱类型。

### 长方体 #{box}

#### `中心` #{center}

- 类型：`Float3`
- 默认值：`(0, 0, 0)`

#### `尺寸` #{size}

- 类型：`Float3`
- 默认值：`(1, 1, 1)`

#### `倒角半径` #{bevel-radius}

- 类型：`float`
- 默认值：`0.02`

#### `自动识别` #{auto-detect}

点击该按钮，可以根据 [`渲染器`](renderer) 组件中的网格自动设置最小包裹的长方体尺寸。

### 球体 #{sphere}

#### `中心` #{center}

- 类型：`Float3`
- 默认值：`(0, 0, 0)`

#### `半径` #{radius}

- 类型：`float`
- 默认值：`0.5`

### 网格 #{mesh}

::: tip 提示

网格模式的性能远低于另外两者，在效果满足期望的前提下，请优先选择长方体或球体模式。

:::

#### `自动获取网格` #{auto-get-mesh}

- 类型：`bool`
- 默认值：`true`

当设置为 `true` 时，将试图从 [`渲染器`](renderer) 组件中获取网格。

#### `网格`<badge text="自动获取网格 = false" /> #{mesh}

- 类型：`Mesh`
- 默认值：空

当 `自动获取网格` 设置为 `false` 时将使用此网格。

#### `凸面碰撞体` #{convex}

- 类型：`bool`
- 默认值：`false`

当设置为 `true` 时，将使用[凸面碰撞体](https://en.wikipedia.org/wiki/Convex_hull)。

::: warning 注意

由于 _havok 物理引擎_ 本身的问题，当 **非凸体网格元件** 发生 [碰撞事件](#碰撞进入) 或者 [触发器事件](trigger#触发事件) 时，其网格的每一个面都会触发一次相应的事件。因此，当元件需要响应这些事件时，请尽量使用 `长方体` 和 `球体` 碰撞箱，或者启用 `凸面碰撞体` 选项。

:::

## `物理体类型` #{physics-body-type}

- 类型：`静态 | 运动学刚体 | 刚体`
- 默认值：`静态`

### 静态 #{static}

完全静止的物理物体。如：地面。

该类型的物理物体进入死亡区不会被摧毁。

#### `焊接碰撞箱` #{weld-collider}

- 类型：`bool`
- 默认值：`false`

启用该功能的邻近物体会自动优化碰撞箱，尝试修正细缝、错位、轻微穿模等微小问题。

::: danger 警告

该功能可能导致诸多违背物理的表现，包括但不限于弹跳、单轨滑落、机关穿模。除非清楚自己在做什么，请勿使用。

:::

### 运动学刚体 #{kinematic}

静止，只能通过 [执行器脚本](executor) 或者 [路径](wayPath)[路点](wayPoint) 调整位姿。如：移动路面。

该类型的物理物体可以被死亡区摧毁。

### 刚体 #{rigid}

参与物理模拟，将受到各种力的影响。如：箱子。

该类型的物理物体可以被死亡区摧毁。

#### `质量` #{mass}

- 类型：`float`
- 默认值：`1.0`

#### `线性阻力` #{linear-drag}

- 类型：`float`
- 默认值：`0.5`

#### `旋转阻力` #{angular-drag}

- 类型：`float`
- 默认值：`0.05`

#### `重力系数` #{gravity-factor}

- 类型：`float`
- 默认值：`1.0`

可以设置成负数使其飞行。

#### `密度` #{density}

- 类型：`float`
- 默认值：`10.0`

影响在水中的受力。

#### `浮力体素尺寸` #{buoyancy-voxel-size}

- 类型：`float`
- 默认值：`0.5`

## `覆写质量分布` #{override-mass-distribution}

- 类型：`bool`
- 默认值：`false`

## `质量中心` #{center-of-mass}

- 类型：`Float3`
- 默认值：`(0, 0, 0)`

该属性仅在 `覆写质量分布` 设置为 `true` 时生效。

## `自动获取物理材质` #{auto-get-physics-material}

- 类型：`bool`
- 默认值：`true`

当设置为 `true` 时，将试图从 [`路面生成器`](roadGenerator) 组件中根据路面类型获取物理材质。

## `物理材质`<badge text="自动获取物理材质 = false" /> #{physics-material}

- 类型：`enum`
- 默认值：`石`

当 `自动获取物理材质` 设置为 `false` 时将使用此物理材质。

## `自定义物理材质`<badge text="自动获取物理材质 = false" /> #{custom-physics-material}

- 类型：`bool`
- 默认值：`false`

当设置为 `true` 时，将使用自定义的物理材质。

## `自定义摩擦力模式`<badge text="自定义物理材质 = true" /><badge text="自动获取物理材质 = false" /> #{custom-friction-mode}

- 类型：`几何平均值 | 最小值 | 最大值 | 算数平均值`
- 默认值：`几何平均值`

## `自定义摩擦力`<badge text="自定义物理材质 = true" /><badge text="自动获取物理材质 = false" /> #{custom-friction}

- 类型：`float`
- 默认值：`0.2`

## `自定义弹性模式`<badge text="自定义物理材质 = true" /><badge text="自动获取物理材质 = false" /> #{custom-restitution-mode}

- 类型：`几何平均值 | 最小值 | 最大值 | 算数平均值`
- 默认值：`几何平均值`

## `自定义弹性`<badge text="自定义物理材质 = true" /><badge text="自动获取物理材质 = false" /> #{custom-restitution}

- 类型：`float`
- 默认值：`0.2`

## `禁用碰撞音` #{disable-collision-audio}

- 类型：`bool`
- 默认值：`false`

## `禁用碰撞伤害` #{disable-collision-damage}

- 类型：`bool`
- 默认值：`false`

## `碰撞层` #{collision-layer}

- 类型：`enum`
- 默认值：`静态路面`

各碰撞层之间可碰撞一览表：

|          | 玩家 | 刚体 | 机关 | 静态路面 | 机关挡板 | 无  | 非玩家 | 仅玩家 |
| :------: | :--: | :--: | :--: | :------: | :------: | :-: | :----: | :----: |
|   玩家   |  √   |  √   |  √   |    √     |          |     |        |   √    |
|   刚体   |  √   |  √   |  √   |    √     |          |     |   √    |        |
|   机关   |  √   |  √   |      |          |    √     |     |   √    |        |
| 静态路面 |  √   |  √   |      |          |          |     |   √    |        |
| 机关挡板 |      |      |  √   |          |          |     |   √    |        |
|    无    |      |      |      |          |          |     |        |        |
|  非玩家  |      |  √   |  √   |    √     |    √     |     |   √    |        |
|  仅玩家  |  √   |      |      |          |          |     |        |        |

## `碰撞进入` #{collision-enter}

- 类型：`bool`
- 默认值：`false`

当设置为 `true` 时，该物体会在与别的物体发生碰撞时的那一帧调用脚本的 [onCollide()](../../script/game#onCollide) 函数。

## `碰撞停留` #{collision-stay}

- 类型：`bool`
- 默认值：`false`

当设置为 `true` 时，该物体会在与别的物体碰撞持续过程中的每一帧调用脚本的 [onCollide()](../../script/game#onCollide) 函数，**包括**进入和离开的那一帧。

## `碰撞离开` #{collision-exit}

- 类型：`bool`
- 默认值：`false`

当设置为 `true` 时，该物体会在与别的物体碰撞离开时的那一帧调用脚本的 [onCollide()](../../script/game#onCollide) 函数。
