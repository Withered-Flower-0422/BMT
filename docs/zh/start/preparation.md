# 制图前准备 {#preparation}

## 启动制图器 {#launching-the-map-editor}

- 在线启动：在 Steam 选择第 2 项 `启动游戏编辑器` 启动

- 离线启动：在本地目录直接双击 BME Pro HDRP.exe 启动

::: tip 提示

建议在线启动，离线状态下无法上传或更新地图。

:::

## 调整界面 {#adjusting-the-interface}

### 设置语言 {#set-language}

`设置 → 语言` / `Settings → Language` / `設定 → 言語`

### 设置界面缩放 {#set-ui-scale}

`设置 → 界面缩放`

### 设置帧率限制 {#set-frame-rate-limit}

`设置 → 帧率限制`

根据自己电脑配置设置帧率限制，建议将帧率限制设置为 60 FPS。

### 设置自动保存 {#set-auto-save}

`设置 → 自动保存`

建议开启自动保存功能，以防止 BME 意外崩溃（~~经常发生~~）导致丢失制图进度。

自动保存的地图备份在 `%USERPROFILE%\AppData\LocalLow\AppData\LocalLow\Mushreb\BME Pro HDRP\AutoSave` 目录下。

### 设置 Ballex² 路径 {#set-ballex2-path}

`设置 → 设置 Ballex2 启动路径`

需定位到 `B2HDRP.exe`。进入测图模式时，该路径指向的 Ballex² 将自动启动。

### 调整窗口布局 {#adjust-window-layout}

拖动窗口边缘可调整大小，拖动窗口标题可调整位置。窗口右上角可以关闭窗口。布局可以使用 `工具 → 重置布局` 恢复默认。

## 初识窗口 {#getting-to-know-the-windows}

### `场景` {#scene}

显示地图布局，多数操作都在此窗口完成。

### `检视器` {#inspector}

可在此窗口查看并调整选中元件的位姿和参数。

### `层级` {#hierarchy}

列出当前地图中的所有元件及其层级关系。

### `素材` {#assets}

按类别存放所有可用资源。分为 7 个面板：

- `场景`：列出所有地图工程文件，文件以 `.scene` 结尾
- `元件`：列出所有可用元件，文件以 `.item` 结尾
- `网格`：列出所有导入的自建网格，文件以 `.mesh` 结尾
- `纹理`：列出所有导入的纹理图片，文件以 `.tex` 结尾
- `材质`：列出所有可用材质，文件以 `.mat` 结尾
- `音频`：列出所有导入的音频，文件以 `.audio` 结尾
- `脚本`：列出所有可用脚本，文件以 `.js` 结尾

::: tip 提示

上述各面板中只显示与之后缀匹配的资源文件，**不会显示任何文件夹或者其他后缀的文件**，所以**不要在上述面板中创建子文件夹**。

:::

## 坐标系统 {#coordinate-system}

BME Pro 采用与 Unity3D 和 Cinema 4D 相同的左手系。

- `x+` 向右，`y+` 向上，`z+` 向前
- 四元数元序为 `x` `y` `z` `w`
- 欧拉角顺规为 `y` `x` `z`（偏航，俯仰，横滚），单位为角度
- 格点单位对应于建模软件中的 1 米
