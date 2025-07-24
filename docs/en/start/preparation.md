# Preparation

## Launching the Map Editor

- Online Launch: In Steam, select the 2nd option `Launch Game Editor` to start.
- Offline Launch: In the local directory, double-click `BME Pro HDRP.exe` to start.

::: tip

It is recommended to launch online, as you cannot upload or update maps in offline mode.

:::

## Adjusting the Interface

### Set Language

`Settings → Language` / `设置 → 语言` / `設定 → 言語`

### Set UI Scale

`Settings → UI Scale`

### Set Frame Rate Limit

`Settings → Frame Rate Limit`

Set the frame rate limit according to your computer's configuration. It is recommended to set the frame rate limit to 60 FPS.

### Set Auto Save

`Settings → Auto Save`

It is recommended to enable the auto-save feature to prevent losing your mapping progress due to unexpected crashes (~~happens often~~).

Auto-saved map backups are located in the `%USERPROFILE%\AppData\LocalLow\AppData\LocalLow\Mushreb\BME Pro HDRP\AutoSave` directory.

### Set Ballex² Path

`Settings → Set Ballex2 Launch Path`

You need to locate `B2HDRP.exe`. When entering test mode, the Ballex² pointed to by this path will launch automatically.

### Adjust Window Layout

Drag the edges of a window to resize it, and drag the window title to change its position. Windows can be closed using the button in the top-right corner. The layout can be reset to default using `Tools → Reset Layout`.

## Getting to Know the Windows

### `Scene`

Displays the map layout; most operations are done in this window.

### `Inspector`

In this window, you can view and adjust the selected item's pose and parameters.

### `Hierarchy`

Lists all items in the current map and their hierarchical relationships.

### `Assets`

Stores all available resources, categorized. It is divided into 7 panels:

- `Scenes`: Lists all map project files, which end with `.scene`.
- `Items`: Lists all available items, which end with `.item`.
- `Meshes`: Lists all imported custom meshes, which end with `.mesh`.
- `Textures`: Lists all imported texture images, which end with `.tex`.
- `Materials`: Lists all available materials, which end with `.mat`.
- `Audios`: Lists all imported audio files, which end with `.audio`.
- `Scripts`: Lists all available scripts, which end with `.js`.

::: tip

Each panel above only displays resource files that match the corresponding suffix. **It will not display any folders or files with other suffixes**, so **do not create subfolders in the panels mentioned above**.

:::

## Coordinate System

BME Pro uses the same left-handed coordinate system as Unity3D and Cinema 4D.

- `x+` is right, `y+` is up, `z+` is forward.
- Quaternion element order is `x` `y` `z` `w`.
- Euler angle order is `y` `x` `z` (yaw, pitch, roll), in degrees.
- One grid unit corresponds to 1 meter in modeling software.
