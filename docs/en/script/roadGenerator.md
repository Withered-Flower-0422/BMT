# Road Generator Script

## Usage

1. Write the script by referring to the writing style of the [Template](#Template) and [Example](#Example).
2. [Import](../advanced/assets#Scripts) the script into the editor.
3. In the [`Road Generator`](../advanced/item/roadGenerator#Custom-Script) component, set the `Generator Algorithm` to `Custom Script`, add the script, and set up the necessary variables.
4. When a variable is changed, the script will automatically re-execute, generating a new road.
5. If there are no variables, you can click the `Generate` button to refresh the generated road after modifying the script.

## Hooks

See [BST/\_Typings/roadGeneratorApi/exportFuncs.d.ts](https://github.com/Withered-Flower-0422/BST/blob/main/_Typings/roadGeneratorApi/exportFuncs.d.ts).

### `generate`

```ts
export const generate: (vars: { [key: string]: any; [key: symbol]: never }) => Mesh
```

- `vars`: The variables set on the road generator, passed in as key-value pairs.

This function needs to return a `subMesh[]` array. Each `subMesh` must contain `vertices`, `UVs`, `normals`, and `triangles` information. For details, see the [Example](#Example).

## Template

See [BST/Templates/roadGeneratorTemplate.js](https://github.com/Withered-Flower-0422/BST/blob/main/Templates/roadGeneratorTemplate.js).

## Example

::: info Mush's Original Script

```js
// Scripts used by the road generator must export 'generate',
// which will be triggered when values change.
export const generate = vars => {
  // Import variables set on the road generator
  let r = vars.r // radius
  let s = vars.s // steps

  // Each sub-mesh requires the following 4 arrays.
  // 1. The relative coordinates of all vertices
  const vertices = []
  // 2. The UV coordinates for each vertex
  const uvs = []
  // 3. The normal direction for each vertex
  // If there are no special requirements, 'normals' can be an empty array,
  // and BME will automatically calculate the normal directions.
  const normals = []
  // 4. All triangles, where each triangle is composed of the indices of 3 vertices
  const triangles = []

  // The following is an example of generating a sphere

  // Calculate the step for each latitude and longitude
  const latStep = Math.PI / s
  const lonStep = (2 * Math.PI) / s

  // Generate vertices and UV coordinates
  for (let lat = 0; lat <= s; lat++) {
    const theta = lat * latStep
    for (let lon = 0; lon <= s; lon++) {
      const phi = lon * lonStep

      // Calculate vertex position
      const x = r * Math.sin(theta) * Math.cos(phi)
      const y = r * Math.cos(theta)
      const z = r * Math.sin(theta) * Math.sin(phi)

      const vertex = [x, y, z]
      vertices.push(vertex)

      // Calculate UV coordinates
      const u = lon / s
      const v = lat / s
      const uv = [u, v]
      uvs.push(uv)

      // Calculate normal direction
      const normal = [x / r, y / r, z / r]
      normals.push(normal)
    }
  }

  // Generate the vertex indices for the triangles.
  // A triangle with clockwise indices is the front face;
  // counter-clockwise is the back face (not rendered).
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

  // The four arrays are combined into one array for a single sub-mesh.
  // One sub-mesh corresponds to one material in the renderer.
  // In other words, if you need multiple materials in one model,
  // you need to generate multiple sub-meshes.
  let subMesh = [vertices, uvs, normals, triangles]
  // Place all generated sub-meshes into a single array.
  // This is the final Mesh. Returning it completes the mesh generation.
  let mesh = [subMesh]
  return mesh
}
```

:::

Also see [BST/Samples/roadGeneratorSamples](https://github.com/Withered-Flower-0422/BST/tree/main/Samples/roadGeneratorSamples).
