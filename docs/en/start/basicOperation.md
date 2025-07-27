# Basic Operation

## Adding an Item

Find the desired item in the `Assets → Items` panel and drag it into the `Scene` window to add it. You will see it appear at the end of the list in the `Hierarchy` window, and you can adjust its position, rotation, scale, and other available parameters in the `Inspector` window.

## Undo

`Edit → Undo` / `Ctrl + Z`, corresponds to the first button on the top-right toolbar.

## Redo

`Edit → Redo` / `Ctrl + Y`, corresponds to the second button on the top-right toolbar.

## View Adjustment

### Pan View & Free Move

- First, set the free move shortcut in `Settings → Shortcut of Free-Move Tool`. The Middle Mouse Button is recommended.
- Press and hold the _configured key_ to enter free move mode. Drag the mouse to change the camera's orientation. Press `W` to move forward, `S` backward, `A` left, `D` right, `Q` down, and `E` up.
- Press and hold _another key_ to enter pan mode, and drag the mouse to pan the view.

### Rotate View

Hold `Alt + Left Mouse Button` and drag.

### Zoom View

Use the `Mouse Wheel`.

### Focus

`F`

This function will automatically adjust the view to center the selected item in the field of vision and set the view adjustment pivot to the current position.

::: tip

The effect of all view adjustment operations is related to the view adjustment pivot point. If you encounter difficulties during adjustment, try using the Focus function to change the pivot.

:::

### Three Views

Click the axis arrows in the top-right corner gizmo.

### Toggle Perspective / Orthographic View

The current view (`Persp` for Perspective / `Ortho` for Orthographic) is displayed below the coordinate axis gizmo in the top-right corner. Click it to toggle. Orthographic view is very useful for fine-tuning layouts.

## Item Adjustment

### View Mode

`Q`, corresponds to the 3rd button on the top-right toolbar, also known as the `Hand Tool`.

In this mode, you cannot select or modify items. The left mouse button's function becomes equivalent to the middle mouse button.

### Move Mode

`W`, corresponds to the 4th button on the top-right toolbar, also known as the `Move Tool`.

Drag the three axis arrows to move the item along that axis, or drag the plane handles to move it within that plane.

### Rotate Mode

`E`, corresponds to the 5th button on the top-right toolbar, also known as the `Rotate Tool`.

Drag the three colored arcs to rotate the item within the corresponding plane, drag the large white circle to rotate within the view plane, or drag the sphere face to rotate freely.

### Scale Mode

`R`, corresponds to the 6th button on the top-right toolbar, also known as the `Scale Tool`.

Drag the three handles to scale the item along that axis. You can drag into the negative axis, which will mirror the item.

::: warning

- For fixed items, scaling is not needed in most cases.

- For mechanisms, scaling most of them will cause unexpected behavior. Therefore, please do not scale items if other viable solutions exist.

:::

### Rect Tool Mode

`T`, corresponds to the 7th button on the top-right toolbar, also known as the `Rect Transform Tool`.

Drag the handles at the corners of the rectangle to scale the item. The current dimensions will be displayed in real-time. You can [Rotate the View](#Rotate-View) to operate on a different plane.

::: tip

Currently, the T-key Rect Tool mode may not be adapted for some individual items. If you encounter issues, please use the R-key Scale Mode or adjust the parameters directly in the `Inspector` window.

:::

### Toggle Global / Local Mode

`X`, corresponds to the 8th button on the top-right toolbar.

- Local Mode: The item's position and rotation operations use the selected item's local coordinate system.
- Global Mode: The item's position and rotation operations use the global coordinate system.

### Toggle Center / Pivot Mode

`Z`, corresponds to the 9th button on the top-right toolbar.

- Center Mode: The pivot for rotation is the center point of all selected items.
- Pivot Mode: The pivot for rotation is the individual pivot point of each selected item.

::: tip

Pivot mode is very useful when you need to batch rotate multiple items around their own axes.

:::

### Quantization

`Ctrl`, hold to enable, release to disable.

When quantization is enabled, you can move in increments of 0.5, rotate in increments of 15°, scale by 50% of the current size, and align with the ruler tool in increments of 0.5.

::: warning

In quantization mode, if an item is not moved along a coordinate axis, unexpected behavior may occur.

:::

### Vertex Snapping

`V`, hold to enable, release to disable.

**In Move Mode**, hold the `V` key, and the axis gizmo will snap to a vertex near the cursor. Then, hold the `Left Mouse Button` and drag that vertex; it will snap to a vertex on another item. Release the `Left Mouse Button`, then release the `V` key to complete the vertex snap.

This is often used for aligning items with sharp corners like road blocks, planks, and wooden boxes, as well as for connecting rails.

::: tip

- You can select and vertex-snap multiple items simultaneously; their relative positions will be maintained.

- "Vertices" here refer to vertices in the modeling sense, including both geometric vertices and control points at material junctions. It's easy to grasp their practical behavior with a bit of practice. In most cases, you only need to use the former for vertex snapping.

:::

::: details Vertex Snapping Example

<div align="center">

![Vertex Snapping Example](../../public/images/vertex-alignment-example.gif)

</div>

:::

## Multi-selection

- In the `Scene` window: Hold `Ctrl` to select one by one, or hold the `Left Mouse Button` to box-select.
- In the `Hierarchy` window: You can use standard multi-selection methods with `Ctrl` and `Shift`.

## Duplicate Item

`Edit → Duplicate` / `Ctrl + D`

Pressing this creates a new item at the same position, which appears at the end of the `Hierarchy` window list.

## Delete Item

`Edit → Delete` / `Delete`

## Creating Starting Point, Checkpoints, and Destination

`Assets → Items → CheckPoint`

- The player ball always spawns at the coordinates `(0, 1.5, 0)` at the start of the game, regardless of where the Starting Point is placed.
- The Starting Point is essentially a checkpoint that is triggered at the very beginning. It is recommended to place only one Starting Point in the map, at coordinates `(0, 0, 0)`.
- Checkpoints have no specific order, can be triggered multiple times, and the player will always respawn from the last activated checkpoint.
- Pay attention to the orientation of the checkpoint. The player ball's camera angle upon respawning is determined by the checkpoint's Y-axis rotation, and it will face the positive Z-axis direction of the checkpoint (in four-directional camera mode, do not set the Y-axis rotation to a value that is not a multiple of 90 degrees).
- There can be multiple Destinations. The player completes the level upon entering any one of them, and it is not necessary to activate all checkpoints.

## Map Testing

`File → Test The Map` / `F9`

If you have correctly [Set Ballex² Path](preparation#set-ballex-path), Ballex² will launch automatically.

::: tip

- The Destination cannot be activated in test mode.
- In test mode, you can set keys for `Move Up` and `Move Down` in the in-game settings menu to assist with testing.

:::

### Quick Ball Switch & Recover Player Ball Properties

- Quick Ball Switch: `1` ~ `9`
- Recover Properties: `0`

| Key |          Function          |
| :-: | :------------------------: |
| `1` |  Switch to **Wood Ball**   |
| `2` |  Switch to **Stone Ball**  |
| `3` |  Switch to **Paper Ball**  |
| `4` |   Switch to **Ice Ball**   |
| `5` |  Switch to **Steel Ball**  |
| `6` | Switch to **Rubber Ball**  |
| `7` | Switch to **Balloon Ball** |
| `8` | Switch to **Sticky Ball**  |
| `9` | Switch to **Sponge Ball**  |
| `0` |   Recover All Properties   |

::: tip

These are the number keys at the top of the keyboard, **not** the numeric keypad keys.

:::

### Screenshot

`F5`

- After entering screenshot mode, you can use `W`, `A`, `S`, `D`, `Q`, `E` along with the mouse to move the camera. Hold `Shift` to move faster. Press `Enter` to take the screenshot.
- Two `.png` files of 1920×1080 and 3840×2160 resolution will be saved in `%USERPROFILE%\AppData\LocalLow\Mushreb\B2HDRP\Screenshots`.
