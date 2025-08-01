---
outline:
  level: 2
---

# 路面生成器 {#road-generator}

- 编辑器提供了 7 中路面生成器算法：`路面` `拐角` `木板` `轨道` `管道` `自定义顶点` `自定义脚本`
- 在 [`起步 → 路面生成器`](../../start/roadGenerator) 中，已初步介绍了路面生成器的使用方法，且提供了一些示例
- 路面生成器的各项属性较为直观，建议实际上手操作，自己调节每个属性，领悟每个属性的作用和效果
- 对于在起步章节已介绍过的路面生成器算法，这里只列出其各项属性、其类型及默认值，不做过多说明
- 点击跳转至 [`自定义顶点`](#自定义顶点) 路面生成器的使用方法
- [`自定义脚本`](../../script/roadGenerator) 路面生成器将在 `脚本` 板块中介绍
- 更高级的路面生成器：[`路点路面生成器`](#路点路面生成器)

:::: details 弯曲算法

::: code-group

```ts [typescript]
class Float3 {
  constructor(public x: float, public y: float, public z: float) {}
}

const addFloat3 = (...values: Float3[]) => {
  let x = 0
  let y = 0
  let z = 0
  for (const value of values) {
    x += value.x
    y += value.y
    z += value.z
  }
  return new Float3(x, y, z)
}

const scaleFloat3 = (value: Float3, ...scales: float[]) => {
  let { x, y, z } = value
  for (const scale of scales) {
    x *= scale
    y *= scale
    z *= scale
  }
  return new Float3(x, y, z)
}

const rotateFloat3 = (value: Float3, vec: Float3): Float3 => {
  const { x: x1, y: y1, z: z1 } = value
  const { x: x2, y: y2, z: z2 } = vec

  const cx = Math.cos(x1)
  const sx = Math.sin(x1)
  const cy = Math.cos(y1)
  const sy = Math.sin(y1)
  const cz = Math.cos(z1)
  const sz = Math.sin(z1)

  return new Float3(
    (cy * cz + sy * sx * sz) * x2 + (sy * sx * cz - cy * sz) * y2 + sy * cx * z2,
    cx * sz * x2 + cx * cz * y2 - sx * z2,
    (cy * sx * sz - sy * cz) * x2 + (cy * sx * cz + sy * sz) * y2 + cy * cx * z2
  )
}

export const skeletonGenerator = (
  length: float,
  height: float,
  bend: Float3,
  segment: int
): [Float3[], Float3[]] => {
  const segmentLength: float = length / segment
  const segmentHeight: float = height / segment
  const pointPostureDelta: Float3 = scaleFloat3(bend, 1 / segment)
  const segmentDirectionDelta: Float3 = scaleFloat3(bend, 1 / segment / 2)
  const pointPositions: Float3[] = [new Float3(0, 0, 0)]
  const pointPostures: Float3[] = [new Float3(0, 0, 0)]

  for (let i = 1; i <= segment; i++) {
    const segmentDirection: Float3 = scaleFloat3(segmentDirectionDelta, 2 * i - 1)
    const pointPosition: Float3 = addFloat3(
      pointPositions.at(-1),
      rotateFloat3(segmentDirection, new Float3(0, 0, segmentLength)),
      new Float3(0, segmentHeight, 0)
    )
    const pointPosture: Float3 = scaleFloat3(pointPostureDelta, i)
    pointPositions.push(pointPosition)
    pointPostures.push(pointPosture)
  }

  return [pointPositions, pointPostures]
}
```

```py [python]
def skeletonGenerator(
    length: float,
    height: float,
    bend: EulerAngle,
    segment: int
) -> tuple[list[Float3], list[EulerAngle]]:

    segment_length: float = length / segment
    segment_height: float = height / segment
    point_posture_delta: EulerAngle = bend / segment
    segment_direction_delta: EulerAngle = bend / segment / 2
    point_positions: list[Float3] = [Float3(0, 0, 0)]
    point_postures: list[EulerAngle] = [EulerAngle(0, 0, 0)]

    for i in range(1, segment + 1):
        segment_direction: EulerAngle = (2 * i - 1) * segment_direction_delta
        point_position: Float3 = (
            point_positions[-1]
            + segment_direction * Float3(0, 0, segment_length)
            + Float3(0, segment_height, 0)
        )
        point_posture: EulerAngle = i * point_posture_delta
        point_positions.append(point_position)
        point_postures.append(point_posture)

    return point_positions, point_postures
```

:::

::::

## 快捷功能 {#quick-functions}

在 `路面生成器` 组件中提供了 3 个快捷功能：

- `克隆`：在其尾部创建与当前路面相同的路面，并自动设置好其旋转等属性
- `生成`：强制刷新当前的路面生成器。对于 [`自定义脚本`](../../script/roadGenerator) 路面生成器，在修改脚本后可以点击此按钮刷新生成结果
- `创建路点`：根据当前路面生成器的分段在对应位置创建 [`路点`](wayPoint)

## 路面 {#road}

::: details 路面

### `长度` {#length}

- 类型：`float`
- 默认值：`4.0`

### `宽度` {#width}

- 类型：`float`
- 默认值：`1.0`

### `末端宽度` {#end-width}

- 类型：`float`
- 默认值：`1.0`

### `末端高度` {#end-height}

- 类型：`float`
- 默认值：`0.0`

### `末端偏移` {#end-offset}

- 类型：`float`
- 默认值：`0.0`

### `厚度` {#thickness}

- 类型：`float`
- 默认值：`1.0`

### `分段` {#segments}

- 类型：`int`
- 默认值：`1`
- 范围：`1` ~ `256`

### `弯曲` {#bend}

- 类型：`Float3`
- 默认值：`(0, 0, 0)`

### `创建封盖` {#create-cap}

- 类型：`bool`
- 默认值：`true`

### `精确 UV 长度` {#precise-uv-length}

- 类型：`bool`
- 默认值：`false`

### `旋转主 UV` {#rotate-main-uv}

- 类型：`bool`
- 默认值：`false`

### `主 UV 偏移` {#main-uv-offset}

- 类型：`Float2`
- 默认值：`(0, 0)`

### `侧边 UV 偏移` {#sides-uv-offset}

- 类型：`float`
- 默认值：`0.0`

### `凹陷` {#concave}

- 类型：`float`
- 默认值：`0.0`

### `末端凹陷` {#end-concave}

- 类型：`float`
- 默认值：`0.0`

:::

## 拐角 {#corner}

::: details 拐角

### `尺寸` {#size}

- 类型：`float`
- 默认值：`1.0`

### `厚度` {#thickness-1}

- 类型：`float`
- 默认值：`1.0`

### `创建封盖` {#create-cap-1}

- 类型：`bool`
- 默认值：`true`

### `旋转主 UV` {#rotate-main-uv-1}

- 类型：`bool`
- 默认值：`false`

### `主 UV 偏移` {#main-uv-offset-1}

- 类型：`Float2`
- 默认值：`(0, 0)`

### `凹陷` {#concave-1}

- 类型：`float`
- 默认值：`0.0`

:::

## 木板 {#wood-board}

::: details 木板

### `长度` {#length-1}

- 类型：`float`
- 默认值：`4.0`

### `宽度` {#width-1}

- 类型：`float`
- 默认值：`1.0`

### `末端高度` {#end-height-1}

- 类型：`float`
- 默认值：`0.0`

### `末端偏移` {#end-offset-1}

- 类型：`float`
- 默认值：`0.0`

### `厚度` {#thickness-2}

- 类型：`float`
- 默认值：`1.0`

### `分段` {#segments-1}

- 类型：`int`
- 默认值：`1`
- 范围：`1` ~ `256`

### `弯曲` {#bend-1}

- 类型：`Float3`
- 默认值：`(0, 0, 0)`

### `创建封盖` {#create-cap-2}

- 类型：`bool`
- 默认值：`true`

### `精确 UV 长度` {#precise-uv-length-1}

- 类型：`bool`
- 默认值：`false`

### `旋转主 UV` {#rotate-main-uv-2}

- 类型：`bool`
- 默认值：`false`

### `主 UV 偏移` {#main-uv-offset-2}

- 类型：`Float2`
- 默认值：`(0, 0)`

### `侧边 UV 偏移` {#sides-uv-offset-1}

- 类型：`float`
- 默认值：`0.0`

:::

## 轨道 {#rail}

::: details 轨道

### `长度` {#length-2}

- 类型：`float`
- 默认值：`4.0`

### `偏移` {#offsets}

- 类型：`Float2[]`
- 默认值：`[(-0.38, 0), (0.38, 0)]`

### `末端高度` {#end-height-2}

- 类型：`float`
- 默认值：`0.0`

### `末端偏移` {#end-offset-2}

- 类型：`float`
- 默认值：`0.0`

### `分段` {#segments-2}

- 类型：`int`
- 默认值：`1`
- 范围：`1` ~ `256`

### `旋转分段` {#rotation-segments}

- 类型：`int`
- 默认值：`8`
- 范围：`1` ~ `128`

钢轨横截面的分段数。

### `旋转偏移` {#rotation-offset}

- 类型：`float`
- 默认值：`0.0`
- 范围：`-180` ~ `180`

钢轨横截面的旋转角度。

### `弯曲` {#bend-2}

- 类型：`Float3`
- 默认值：`(0, 0, 0)`

### `创建封盖` {#create-cap-3}

- 类型：`bool`
- 默认值：`true`

### `精确 UV 长度` {#precise-uv-length-2}

- 类型：`bool`
- 默认值：`false`

### `主 UV 偏移` {#main-uv-offset-3}

- 类型：`Float2`
- 默认值：`(0, 0)`

### `半径` {#radius}

- 类型：`float`
- 默认值：`0.06`

钢轨的横截面半径（粗细）。
:::

## 管道 {#tube}

::: details 管道

### `长度` {#length-3}

- 类型：`float`
- 默认值：`4.0`

### `末端高度` {#end-height-3}

- 类型：`float`
- 默认值：`0.0`

### `末端偏移` {#end-offset-3}

- 类型：`float`
- 默认值：`0.0`

### `半径` {#radius-1}

- 类型：`float`
- 默认值：`0.5`

### `末端半径` {#end-radius}

- 类型：`float`
- 默认值：`0.5`

### `切片` {#slice}

- 类型：`Float2`
- 默认值：`(0, 360)`

管道横截面的 `起始角度` 与 `终止角度` 。

### `厚度` {#thickness-3}

- 类型：`float`
- 默认值：`0.05`

### `分段` {#segments-3}

- 类型：`int`
- 默认值：`1`
- 范围：`1` ~ `256`

### `旋转分段` {#rotation-segments-1}

- 类型：`int`
- 默认值：`16`
- 范围：`1` ~ `128`

管道横截面的分段数。

### `弯曲` {#bend-3}

- 类型：`Float3`
- 默认值：`(0, 0, 0)`

### `创建封盖` {#create-cap-4}

- 类型：`bool`
- 默认值：`true`

### `精确 UV 长度` {#precise-uv-length-3}

- 类型：`bool`
- 默认值：`false`

### `主 UV 偏移` {#main-uv-offset-4}

- 类型：`Float2`
- 默认值：`(0, 0)`

:::

## 自定义顶点 {#custom-vertices}

- `顶点组`：每个顶点组对应一段路面
- `顶点`：每个顶点对应 **xy 面内** 的一点坐标
  - `位置`：该顶点的位置坐标，以 **元件位置** 为原点
  - `UV`：该顶点的 UV 坐标

::: tip 提示

- 不同段的路面可以设置不同的材质
- 自定义顶点路面 **无法** 创建封盖
- 请确保每个顶点组中的首尾顶点相连
- 相邻的两个顶点 UV 坐标不要相同

:::

::: details 自定义顶点

### `长度` {#length-4}

- 类型：`float`
- 默认值：`4.0`

### `末端高度` {#end-height-4}

- 类型：`float`
- 默认值：`0.0`

### `末端偏移` {#end-offset-4}

- 类型：`float`
- 默认值：`0.0`

### `分段` {#segments-4}

- 类型：`int`
- 默认值：`1`
- 范围：`1` ~ `256`

### `弯曲` {#bend-4}

- 类型：`Float3`
- 默认值：`(0, 0, 0)`

### `精确 UV 长度` {#precise-uv-length-4}

- 类型：`bool`
- 默认值：`false`

### `旋转主 UV` {#rotate-main-uv-3}

- 类型：`bool`
- 默认值：`false`

### `主 UV 偏移` {#main-uv-offset-5}

- 类型：`Float2`
- 默认值：`(0, 0)`

:::

## 自定义脚本 {#custom-script}

[`自定义脚本`](../../script/roadGenerator) 路面生成器将在 `脚本` 板块中介绍。

## 路点路面生成器 {#way-point-road-generator}

目前路点路面生成器仅对 `路面` 和 `木板` 有效。

建议先阅读关于 [`路点`](wayPoint) 和 [`路径`](wayPath) 组件的相关内容。

使用方法：

1. 创建一些 `路点`，并在 `层级` 中将这些 `路点` 拖入 `路面生成器` 元件中作为其子元件
2. `路面生成器` 元件启用 `路径` 组件，勾选 `自动收集` ，此时路径会自动收集子元件中的所有 `路点`
3. 根据需要选择是否勾选 `使用曲线` 和 `闭合路径`
4. 在 `路面生成器` 组件中调整 `分段` 属性
5. 此时 `路面生成器` 组件中仅有 `厚度` `凹陷` `末端凹陷` 属性起作用，其余均通过 `路点` 控制
6. 调整每个 `路点` 的 `位置` `旋转` `缩放` 属性以调整路面的形状
