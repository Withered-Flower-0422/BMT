# Landscaping

This component helps you plant various types of vegetation to quickly dress your scene.

::: warning

None of the operations in this component will be stored in the history, so the [Undo](../../start/basicOperation#Undo) function cannot be used to roll back any actions. Please be careful when using destructive functions.

:::

## Understanding the Buttons

- `Left/Right Arrows`: Switch vegetation type.
- `Clear`: Clears all of the current vegetation type from the scene (does not include entity items).
- `Pack into Landscaping Component`: Packs all entity items in the scene that match the current vegetation type into the landscaping component.
- `Convert to Entity Items`: Converts all of the current vegetation type into entity items.
- `Show / Hide`: Shows or hides all vegetation in this component (does not include entity items).
- `Enable / Disable`: Enables or disables the landscaping feature.

::: tip

- Vegetation within the landscaping component only provides rendering and has no physical collision. If you want vegetation to have physical collision, please convert it to entity items.
- The performance of vegetation in the landscaping component is much higher than that of entity items. If you confirm that the vegetation is only for background and does not participate in game collisions, please use the vegetation from the landscaping component as much as possible.

:::

## Planting Vegetation

- Enable the `Landscaping Feature`.
- Click the `Left/Right Arrows` button to switch to the desired vegetation type.
- Set the `Placement Mode` to `Place`.
- Set the `Rotation Range` and `Scale Range` to control the random Y-axis rotation and uniform scaling of the plants.
- In the scene, when the mouse moves over an item with a [`Renderer`](../item/renderer) component, a <span class="text-green">green circle</span> and its corresponding surface normal will be displayed. The <span class="text-green">green circle</span> indicates the placement position of the vegetation, and the normal indicates its orientation.
- Click the left mouse button to plant the vegetation.

## Mass Planting

- Set the `Placement Mode` to `Paint`.
- Set the `Brush Size` and `Density` parameters to control the effect of mass planting.
- In the scene, when the mouse moves over an item with a `Renderer` component, a <span class="text-blue">blue circle</span> representing the range will appear. Vegetation will be placed randomly within this range according to the density.
- The <span class="text-blue">blue lines</span> inside the <span class="text-blue">blue circle</span> are detection lines. Where these lines intersect with the model, there will be <span class="text-green">green markers</span>; these are the placement positions and normal directions for the vegetation.
- If too many <span class="text-blue">blue detection lines</span> are not detected, you can increase the `Raycast Depth`.

## Erasing Vegetation

- Set the `Placement Mode` to `Erase`.
- Set the `Brush Size` to control the erase range.
- In the scene, when the mouse moves over an item with a `Renderer` component, a <span class="text-red">red sphere</span> will appear. All marked vegetation within the range of the red sphere will be erased.

## Scaling Vegetation

- Set the `Placement Mode` to `Scale`.
- Set the `Brush Size` and `Scale Multiplier` parameters to control the range and effect of the scaling.
- In the scene, when the mouse moves over an item with a `Renderer` component, a <span class="text-yellow">yellow sphere</span> will appear. Detected vegetation within the yellow sphere's range will have different colored markers. The closer to the center point, the greater the weight, and the more pronounced the applied scaling effect.
- Holding the `shift` key can invert the scaling, i.e., a zoom-in operation becomes a zoom-out operation.

::: tip

All the operations above only affect vegetation within the landscaping component; entity items are not affected.

:::
