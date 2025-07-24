# From Beginner to Expert

The Advance section will introduce some advanced functions and operations in BME Pro.

## Advance

In this Advance section, we will introduce:

- The functions and usage of each tool in the editor's [`Tools`](tools) tab.

- Some advanced operation techniques for the [`Assets`](assets) panel and its sub-items: the [`Scenes`](assets#Scene), [`Items`](assets#Item), [`Meshes`](assets#Mesh), [`Textures`](assets#Texture), [`Materials`](assets#Material), and [`Audios`](assets#Audio) panels.

- The functions and usage of each component in [`Scene Settings`](sceneSettings/sceneSettings).

- The functions and usage of each component in an [`Item`](item/item).

## Reading Suggestions

- The topics in this section are largely independent. You can look up and learn the specific content you need while mapping.

- Some content may involve knowledge of other software. For example, the mesh system will involve operations in modeling software, so please ensure you have a basic understanding of related topics.

- After completing this section, you will be able to create complex items and decorations, and build maps with a unique style.

## Data Types

The data types that may be involved in this section are:

- `int`: Integer data type, e.g., `123`, `456`.
- `float`: Floating-point data type, e.g., `3.14`, `2.71`.
- `string`: String data type, e.g., `"Hello World"`, `""`.
- `bool`: Boolean data type, e.g., `true`, `false`.
- `enum`: Enumeration data type.
  - If the number of enumerations is small, they will be written directly in the form `Enum A | Enum B | Enum C`.
- `Float2`: 2D float vector data type.
  - Has two components: `x` and `y`.
  - For ease of writing, `Float2` data will be abbreviated as `(x, y)`, omitting unnecessary decimal points, e.g., `(1, 2)`.
  - In the editor, this type often describes a range, where `x` represents the minimum value and `y` represents the maximum value.
- `Float3`: 3D float vector data type.
  - Has three components: `x`, `y`, and `z`.
  - For ease of writing, `Float3` data will be abbreviated as `(x, y, z)`, omitting unnecessary decimal points, e.g., `(1, 2, 3)`.
- `Float4`: 4D float vector data type.
  - Has four components: `x`, `y`, `z`, and `w`.
  - For ease of writing, `Float4` data will be abbreviated as `(x, y, z, w)`, omitting unnecessary decimal points, e.g., `(1, 2, 3, 4)`.
- `Quaternion`: Quaternion data type.
  - Has four components: `x`, `y`, `z`, and `w`.
  - For ease of writing, `Quaternion` data will be abbreviated as `(x, y, z, w)`, omitting unnecessary decimal points, e.g., `(0, 0, 0, 1)`.
- `Bool3`: 3D boolean vector data type.
  - Has three components: `x`, `y`, and `z`.
  - For ease of writing, `Bool3` data will be abbreviated as `(x, y, z)`, e.g., `(true, false, true)`.
- `Trans`: Transform data type.
  - Has three components: `pos`, `rot`, and `scl`.
  - `pos` represents position, `rot` represents rotation, and `scl` represents scale. All are of `Float3` type.
- `ColorRGBA`: Color data type.
  - Has four components: `r`, `g`, `b`, and `a`.
  - The `r`, `g`, `b` components represent the red, green, and blue components of the color, while the `a` component represents the color's opacity. All are `float` types with a range from `0` to `1`.
  - For ease of writing, `ColorRGBA` data will be abbreviated as `(r, g, b, a)`, omitting unnecessary decimal points, e.g., `(1, 1, 1, 1)`.

::: tip

In this section, types such as `Item`, `Mesh`, `Texture`, `Material`, `Audio`, and `Script` are references or paths to their corresponding resources. Their actual type is `string`.

:::

## Game Physics Frame

The physics frame rate of Ballex² is 100Hz.
