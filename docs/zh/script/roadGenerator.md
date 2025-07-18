# 路面生成器脚本

## 使用方法

1. 参考 [模板](#模板) 和 [示例](#示例) 的书写方式编写好脚本
2. 将脚本 [导入](../advanced/assets#脚本) 编辑器
3. 在 [`路面生成器`](../advanced/item/executor) 组件中设置 `生成器算法` 为 `自定义脚本`，添加脚本，并设置好需要的变量
4. 变量改变时，脚本会自动重新执行，生成新的路面
5. 如果没有变量，在修改脚本后可以点击 `生成` 按钮刷新生成路面

## 钩子

参见 [BST/\_Typings/roadGeneratorApi/exportFuncs.d.ts](https://github.com/Withered-Flower-0422/BST/blob/main/_Typings/roadGeneratorApi/exportFuncs.d.ts)。

### `generate`

```ts
export const generate: (vars: {
  [key: string]: any
  [key: symbol]: never
}) => Mesh
```

- `vars`：路面生成器上设置的变量，以键值对的形式传入

该函数需要返回一个 `subMesh[]` 数组，每个 `subMesh` 需包含 `顶点` `UV` `法线` `三角` 信息。具体参见 [示例](#示例) 。

## 模板

参见 [BST/Templates/roadGeneratorTemplate.js](https://github.com/Withered-Flower-0422/BST/blob/main/Templates/roadGeneratorTemplate.js)。

## 示例

::: info 猫菇原稿

```js
// 路面生成器使用的脚本必须导出 generate，将会在数值变化时触发。
export const generate = vars => {
  // 导入路面生成器上设置的变量
  let r = vars.r // 半径
  let s = vars.s // 步数

  // 每个子网格需要以下 4 个数组。
  // 1. 所有顶点的相对坐标
  const vertices = []
  // 2. 每个顶点的 UV 坐标
  const uvs = []
  // 3. 每个顶点的法线方向
  // 如果无特殊需求，其中 normal 可以使用空数组输出，BME 将会自动计算法线方向。
  const normals = []
  // 4. 所有三角面，其中每个三角面由3个顶点的索引构成
  const triangles = []

  // 以下是生成球体的案例

  // 计算每个纬度和经度的步长
  const latStep = Math.PI / s
  const lonStep = (2 * Math.PI) / s

  // 生成顶点和UV坐标
  for (let lat = 0; lat <= s; lat++) {
    const theta = lat * latStep
    for (let lon = 0; lon <= s; lon++) {
      const phi = lon * lonStep

      // 计算顶点位置
      const x = r * Math.sin(theta) * Math.cos(phi)
      const y = r * Math.cos(theta)
      const z = r * Math.sin(theta) * Math.sin(phi)

      const vertex = [x, y, z]
      vertices.push(vertex)

      // 计算UV坐标
      const u = lon / s
      const v = lat / s
      const uv = [u, v]
      uvs.push(uv)

      // 计算法线方向
      const normal = [x / r, y / r, z / r]
      normals.push(normal)
    }
  }

  // 生成三角面的顶点索引，索引为顺时针方向的三角面为正面，逆时针为背面（不渲染）。
  for (let lat = 0; lat < s; lat++) {
    for (let lon = 0; lon < s; lon++) {
      const first = lat * (s + 1) + lon
      const second = first + s + 1

      const triangle1 = [first + 1, second, first]
      const triangle2 = [first + 1, second + 1, second]
      triangles.push(triangle1)
      triangles.push(triangle2)
    }
  }

  // 四个数组合为一个数组为一个子网格，一个子网格对应了渲染器中的一个材质。
  // 也就是说如果你需要多个材质在一个模型中，你就需要生成多个子网格。
  let subMesh = [vertices, uvs, normals, triangles]
  // 所有生成的子网格放到同一个数组中，这就是最终的 Mesh 了，返回它就完成了网格生成。
  let mesh = [subMesh]
  return mesh
}
```

:::

另请参见 [BST/Samples/roadGeneratorSamples](https://github.com/Withered-Flower-0422/BST/tree/main/Samples/roadGeneratorSamples)。
