# 基础操作

## 添加元件

在 `素材 → 元件` 面板中找到需要的元件，拖入 `场景` 窗口，即可添加元件。你会在 `层级` 窗口的列表末尾看到它，并可在 `检视器` 窗口中调整它的位置，姿态，缩放和其它提供的参数。

## 撤销

`编辑 → 撤销` / `Ctrl + Z`，对应右上角工具栏第一个按钮。

## 重做

`编辑 → 重做` / `Ctrl + Y`，对应右上角工具栏第二个按钮。

## 视图调整

### 平移视图 & 漫游

- 首先在 `设置 → 自由移动工具快捷键` 中设置漫游快捷键，推荐设置为 `鼠标中键`
- 按住 _设置的键位_ 进入漫游模式。拖动鼠标改变摄像机朝向，按住 `W` 前进，`S` 后退，`A` 左移，`D` 右移，`Q` 下降，`E` 上升
- 按住 _另一个键位_ 进入平移模式，拖动鼠标以平移视图

### 旋转视图

按住 `Alt + 鼠标左键` 并拖动。

### 缩放视图

使用 `鼠标滚轮`。

### 聚焦

`F`

该功能将自动调整视图，使选定元件位于视野中心，并改变视图调整中心点为当前位置。

::: tip 提示

所有视图调整操作的效果都与视图调整中心点有关。如果调整时遇到困难，可以尝试使用聚焦功能改变视图调整中心。

:::

### 三视图

点击右上角坐标轴箭头。

### 切换透视 / 正交视角

右上角坐标轴下方显示了当前视角（透视 `Persp` / 正交 `Ortho`），点击即可切换。正交视角在精调布局时很有用。

## 元件调整

### 观察模式

`Q`，对应右上角工具栏第 3 个按钮，也称 `抓手工具` 。

该模式下无法选中元件，也无法对元件作任何调整。此时鼠标左键的功能退化为鼠标中键的功能。

### 移动模式

`W`，对应右上角工具栏第 4 个按钮，也称 `移动工具` 。

拖动三个坐标轴箭头在该方向内移动元件，或拖动面符号在该面内移动元件。

### 旋转模式

`E`，对应右上角工具栏第 5 个按钮，也称 `旋转工具` 。

拖动三个有色圆弧在对应面内旋转元件，或拖动白色大圆在投影面内旋转元件，或拖动圆面自由旋转元件。

### 缩放模式

`R`，对应右上角工具栏第 6 个按钮，也称 `缩放工具` 。

拖动三个操作柄在该方向内缩放元件。可以拖动到负半轴，此时元件会变为原来的镜像。

::: warning 注意

- 对于固定元件，多数情况下不需要缩放

- 对于机关，多数机关缩放后会引发意外性质。因此在有其它可行方案时，请不要缩放元件

:::

### 标尺模式

`T`，对应右上角工具栏第 7 个按钮，也称 `矩形缩放工具` 。

拖动矩形边角处的操作柄缩放元件，会实时显示当前尺寸。[旋转视图](#旋转视图)可以切换到另一平面操作。

::: tip 提示

目前 T 键标尺模式对于个别元件可能没有适配。如果遇到问题，请换用 R 键缩放模式或者直接在 `检视器` 窗口调整参数。

:::

### 切换全局 / 本地模式

`X`，对应右上角工具栏第 8 个按钮。

- 本地模式：元件的位置、旋转操作采用选中元件的局部坐标系
- 全局模式：元件的位置、旋转操作采用全局坐标系

### 切换中心 / 轴心模式

`Z`，对应右上角工具栏第 9 个按钮。

- 中心模式：元件的旋转操作中心点为所有选中元件的中心点
- 轴心模式：元件的旋转操作中心点为选中元件各自的轴心点

::: tip 提示

轴心模式在需要批量对多个元件进行绕着自身轴旋转时很有用。

:::

### 量化

`Ctrl`，按住开启，松开关闭。

在量化开启时，可以以 0.5 为单位移动，以 15° 为单位旋转，以相对当前大小 50% 为单位缩放，以 0.5 为单位对齐标尺。

::: warning 注意

量化模式下，如果元件不是沿着坐标轴移动，会出现意外行为。

:::

### 顶点对齐

`V`，按住开启，松开关闭。

**在移动模式下**，按住 `V` 键，坐标轴将吸附在光标附近的一个顶点上，此时再按住 `鼠标左键` 拖动该顶点，将会吸附在另一元件的某个顶点上。松开 `鼠标左键`，再松开 `V` 键，就完成了一次顶点对齐。

常用于路块、木板、木箱等棱角方正的元件对齐，以及钢轨间衔接。

::: tip 提示

- 可以选中多个元件同时顶点对齐，它们的相对位置保持不变

- 这里的顶点均指建模意义中的顶点，包括几何意义中的顶点和材质交界处的控制点。多加尝试很容易掌握两者的实际表现。绝大多数情况下，顶点对齐只需要使用前者

::: details 顶点对齐示例

<div align="center">

![顶点对齐示例](../../public/images/vertex-alignment-example.gif)

</div>

:::

## 多选

- 在 `场景` 窗口中多选：按住 `Ctrl` 逐个单选，或按住 `鼠标左键` 框选
- 在 `层级` 窗口中多选：可按照通用多选方法配合 `Ctrl` `Shift` 多选

## 复制元件

`编辑 → 复制` / `Ctrl + D`

按下后在原位生成一个新元件，出现在 `层级` 窗口列表末尾。

## 删除元件

`编辑 → 删除` / `Delete`

## 创建起点、检查点和终点

`素材 → 元件 → 检查点`

- 玩家球开局出生点始终为坐标 `(0, 2, 0)` 处，与起点的摆放位置无关
- 起点本质上是一个开局即触发过的检查点。图内建议只在坐标 `(0, 0, 0)` 处摆放一个起点
- 检查点不分顺序，可以多次触发，始终从最后一次点亮的检查点重生
- 请注意检查点的摆放朝向，玩家球重生时视角由检查点的 y 轴旋转决定，且朝向检查点的 z 轴正方向（四向视角下不要将 y 轴旋转设置成非 90 度倍数的数值）
- 终点可以存在多个，玩家球进入任一终点即通关，且不必点亮所有检查点

## 测图

`文件 → 测试地图` / `F9`

如果正确[设置了 Ballex² 路径](preparation#设置-ballex-路径)，Ballex² 将自动启动。

::: tip 提示

- 测图模式无法激活终点

- 测图模式中，可在游戏内的设置界面设置 `向上移动` 和 `向下移动` 的键位辅助测图

:::

### 快速变球 & 恢复玩家球属性

- 快速变球：`1` ~ `9`
- 恢复属性：`0`

| 按键 |      功能      |
| :--: | :------------: |
| `1`  |  变为**木球**  |
| `2`  |  变为**石球**  |
| `3`  |  变为**纸球**  |
| `4`  |  变为**冰球**  |
| `5`  |  变为**钢球**  |
| `6`  | 变为**橡胶球** |
| `7`  |  变为**气球**  |
| `8`  |  变为**粘球**  |
| `9`  | 变为**海绵球** |
| `0`  |  恢复所有属性  |

::: tip 提示

此处的数字键 **非** 小键盘数字键。

:::

### 截图

`F5`

- 进入截图模式后可使用 `W` `A` `S` `D` `Q` `E` 键配合鼠标移动视角，按住 `Shift` 键可加速移动，按 `Enter` 键截图
- 截图为 1920×1080 及 3840×2160 分辨率的 2 张 `.png` 文件，保存在 `%USERPROFILE%\AppData\LocalLow\Mushreb\B2HDRP\Screenshots`
