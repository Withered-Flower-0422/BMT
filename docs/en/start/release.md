# Release

Ensure you are connected to Steam before releasing a map.

## Prepare Cover Image

### Screenshot

- Enter test mode: `File → Test The Map` / `F9`
- Access the screenshot function: `F5`. Use `W`, `A`, `S`, `D`, `Q`, `E` along with the mouse to move the camera. Hold `Shift` to move faster. Press `Enter` to take the screenshot.
- Two `.png` files of 1920×1080 and 3840×2160 resolution will be saved in `%USERPROFILE%\AppData\LocalLow\Mushreb\B2HDRP\Screenshots`.

### Create Your Own

You can also create your own cover image. The requirements are:

- `.png` or `.jpg` format
- 16:9 aspect ratio, recommended resolution is 1920×1080
- Fits the theme of the map

## Import Cover Image

In the `Assets → Textures` panel, click the plus sign at the bottom right to import the cover image.

## Set Map Information

Select `Hierarchy → Scene Settings`, then in the `Inspector`, select the `Map Info` component to set the map information.

### `Author Name` <badge text="Required" />

- Default: Steam Nickname

### `Map Name` <badge text="Required" />

- Default: Empty

Please only fill in the **source language** here. For example, if English is the source language and Chinese is the translation, only fill in English.

### `Map Description` <badge text="Required" />

- Default: Empty

Please only fill in the **source language** here. For example, if English is the source language and Chinese is the translation, only fill in English.

::: tip

- The level description is a **required** field. If you really don't want to display anything, please enter a blank character (not a space; you can search for a blank character online and copy-paste it here).
- If the level description is empty, it will cause the subsequent map export to fail.

:::

### `Version` <badge text="Required" />

- Default: `0`

~~Basically useless~~

### `Difficulty`

- Default: `Easy`

### `Map Type`

- Default: `Racing`

### `Cover Image` <badge text="Required" />

- Default: Empty

Click the `+` sign in the top right of the box and select the imported cover. (You can also drag an image from the `Assets → Textures` panel here.)

::: tip

- The cover image is a **required** field.
- If the cover is empty, it will cause the subsequent map export to fail.

:::

### `Initial Ball Type`

- Default: `Wooden`

### `Use Custom Ball`

- Default: `false`

### `Custom Ball Name`

- Default: Empty

::: tip

- For the custom ball function, see [`Advanced → Scene Settings → Custom Ball`](../advanced/sceneSettings/customBall).

:::

### `Camera Mode`

- Default: `Four Dir`

### `View Distance`

- Default: `200`

Items in the map beyond this distance from the camera will not be rendered.

### `Camera Offset`

- Default: `(0, 4, -3.5)`

### `Gravity`

- Default: `(0, -18, 0)`

### `Configurations`

This property is described in [`Advance → Scene Settings → Map Information`](../advanced/sceneSettings/mapInfo#Configurations).

## Export Map

`File → Export BMS`

This will export 3 files with the suffixes `.bms`, `.bms.assets`, and `.bms.xml`.

## Upload to Steam Workshop

`File → Upload to Workshop`

- Select the `.bms` file you just exported.
- Choose `Upload` or `Update`.
- If you choose `Update`, you need to enter the Workshop File ID of the item to be updated. Find your map on the Workshop webpage, click share, and the number after `id=` in the link is the file ID.
- If you choose `Update`, you can optionally fill in `Change Note`.
