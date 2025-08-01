# 天空 {#sky}

天空分为 `物理天空` 和 `HDRI 天空` 。

::: tip 提示

- 天空的各项属性较为复杂，难以用文字准确描述每个属性的作用
- 建议实际上手操作，自己调节每个属性，领悟每个属性的作用和效果
- 这里只列出各项属性、其类型及默认值，不做过多说明
- 如果要模拟地球的天空，该组件保持默认即可

:::

## `天空类型` {#sky-type}

- 类型：`物理天空 | HDRI 天空`
- 默认值：`物理天空`

## `曝光补偿` {#exposure-compensation}

- 类型：`float`
- 默认值：`0.0`
- 范围：`-20.0` ~ `20.0`

## 物理天空 {#physics-sky}

### 地面 {#ground}

#### `旋转` {#rotation}

- 类型：`Float3`
- 默认值：`(0, 0, 0)`

#### `颜色纹理` {#color-texture}

- 类型：`Texture`
- 默认值：空

#### `色调` {#tint}

- 类型：`ColorRGBA`
- 默认值：`(59 / 255, 64 / 255, 71 / 255, 1)`

#### `发光纹理` {#emission-texture}

- 类型：`Texture`
- 默认值：空

#### `发光强度` {#emission-multiplier}

- 类型：`float`
- 默认值：`1.0`

### 太空 {#space}

#### `旋转` {#space-rotation}

- 类型：`Float3`
- 默认值：`(0, 0, 0)`

#### `发光纹理` {#emission-texture-1}

- 类型：`Texture`
- 默认值：空

#### `发光强度` {#emission-multiplier-1}

- 类型：`float`
- 默认值：`1.0`

### 空气 {#air}

#### `最大高度` {#maximum-altitude}

- 类型：`float`
- 默认值：`55000.0`

#### `红色密度` {#density-r}

- 类型：`float`
- 默认值：`0.0453`
- 范围：`0.0` ~ `1.0`

#### `绿色密度` {#density-g}

- 类型：`float`
- 默认值：`0.1024`
- 范围：`0.0` ~ `1.0`

#### `蓝色密度` {#density-b}

- 类型：`float`
- 默认值：`0.2326`
- 范围：`0.0` ~ `1.0`

#### `色调` {#tint-1}

- 类型：`ColorRGBA`
- 默认值：`(1, 1, 1, 1)`

### 气溶胶 {#aerosols}

#### `密度` {#density}

- 类型：`float`
- 默认值：`0.012`
- 范围：`0.0` ~ `1.0`

#### `色调` {#tint-2}

- 类型：`ColorRGBA`
- 默认值：`(1, 1, 1, 1)`

#### `各向异性` {#anisotropy}

- 类型：`float`
- 默认值：`0.8`
- 范围：`0.0` ~ `1.0`

#### `最大高度` {#maximum-altitude-1}

- 类型：`float`
- 默认值：`8290.0`

### 臭氧层 {#ozone}

#### `密度` {#density-dimmer}

- 类型：`float`
- 默认值：`1.0`
- 范围：`0.0` ~ `1.0`

#### `最小高度` {#minimum-altitude}

- 类型：`float`
- 默认值：`20000.0`

#### `层厚度` {#layer-width}

- 类型：`float`
- 默认值：`20000.0`

### 艺术性调参 {#artistic-overrides}

#### `颜色饱和度` {#color-saturation}

- 类型：`float`
- 默认值：`1.0`
- 范围：`0.0` ~ `1.0`

#### `透明饱和度` {#alpha-saturation}

- 类型：`float`
- 默认值：`1.0`
- 范围：`0.0` ~ `1.0`

#### `透明值倍率` {#alpha-multiplier}

- 类型：`float`
- 默认值：`1.0`
- 范围：`0.0` ~ `1.0`

#### `地平线色调` {#horizon-tint}

- 类型：`ColorRGBA`
- 默认值：`(1, 1, 1, 1)`

#### `穹顶偏移` {#zenith-shift}

- 类型：`float`
- 默认值：`0.0`
- 范围：`-1.0` ~ `1.0`

#### `穹顶色调` {#zenith-tint}

- 类型：`ColorRGBA`
- 默认值：`(1, 1, 1, 1)`

## HDRI 天空 {#hdri-sky}

### `上` {#up}

- 类型：`Texture`
- 默认值：空

### `下` {#down}

- 类型：`Texture`
- 默认值：空

### `左` {#left}

- 类型：`Texture`
- 默认值：空

### `右` {#right}

- 类型：`Texture`
- 默认值：空

### `前` {#front}

- 类型：`Texture`
- 默认值：空

### `后` {#back}

- 类型：`Texture`
- 默认值：空

### `旋转` {#rotation-1}

- 类型：`float`
- 默认值：`0`
- 范围：`0` ~ `360`

### `Gamma 偏移` {#gamma-offset}

- 类型：`float`
- 默认值：`0.0`
- 范围：`-3.0` ~ `3.0`

::: tip 提示

- 如果使用 `HDRI 天空`，导入天空纹理后发现天空效果不理想，可以尝试调整 `Gamma 偏移` 和 `曝光补偿` 两个属性
- 设置完 `Gamma 偏移` 和 `曝光补偿` 后，需要点击 `刷新` 按钮以应用

:::
