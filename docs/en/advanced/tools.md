# Tools

- The Tools tab can be found in the top menu bar of the editor.

- Proper use of certain tools can improve mapping efficiency.

## Image Process

### Slice to Cubemap

This tool can slice a single texture map into six texture maps suitable for an [`HDRI Sky`](sceneSettings/sky#HDRI-Sky).

Usage:

1. Prepare a skybox texture image and [import it into the editor](assets#Import-Texture).
2. In `Assets → Textures`, select the imported image and click the `Slice to Cubemap` button.
3. Six texture maps will be generated in the same directory, named with the original filename plus the suffixes `_Back`, `_Down`, `_Front`, `_Left`, `_Right`, and `_Up`.
4. Based on the suffixes, drag the six texture maps into the corresponding slots of the `HDRI Sky` texture nodes.

::: tip

- The recommended format for skybox texture images is `.hdr`. You can create them yourself in software like Photoshop or download them from the internet.
- Regular `.png` images can also be used as skybox textures.

::: details Recommended HDRI Sources

[Poly Haven](https://polyhaven.com/hdris)

:::

### Tex to Png

This tool can convert texture files imported into the editor back to `.png` format.

Usage:

1. In `Assets → Textures`, select the texture file you want to convert and click the `Tex to Png` button.
2. Choose a save path and click the `Save` button.
3. After the conversion is complete, you can find the converted `.png` file at the specified path.

## Add Pillar

This tool can help you quickly add pillars while mapping.

Usage:

1. Click the `Tools → Add Pillar` button.
2. A sub-window will pop up. Set the pillar's axis offset, which is the offset of the <u>pillar's generation position</u> relative to the <u>selected item's position</u>.
3. In the scene, select all the items where you want to add pillars, then click the `Create` button.

## Add Light

This tool can help you quickly add lights while mapping.

Usage:

1. Click the `Tools → Add Light` button.
2. A sub-window will pop up. Set the light's axis offset, which is the offset of the <u>light's generation position</u> relative to the <u>selected item's position</u>.
3. In the scene, select all the items where you want to add lights, then click the `Create` button.

::: tip

This window has 3 `Create` buttons. The top two buttons can each create 1 light at their respective positions, while the bottom button can create 2 lights simultaneously.

:::

## Reset Layout

This tool resets the editor's layout to its default state.
