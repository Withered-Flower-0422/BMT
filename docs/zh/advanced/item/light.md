# 光源 #{light}

此光源为局部光源。若要设置全局平行光，参考 [`场景设置 → 光照`](../sceneSettings/lighting)。

## [变换偏移](item#变换偏移) #{transform-offset}

## `光源类型` #{light-type}

- 类型：`点光 | 聚光 | 矩形区域光 | 圆形区域光`
- 默认值：`点光`

::: tip 注意

圆形区域光仅提供 [体积光](#体积光) 使用，无照明效果。

:::

## `色温 (K)` #{temperature}

- 类型：`float`
- 默认值：`6570.0`

## `颜色` #{filter}

- 类型：`ColorRGBA`
- 默认值：`(1, 1, 1, 1)`

## `强度 (Lux)` #{intensity}

- 类型：`float`
- 默认值：`10000.0`

## `范围` #{range}

- 类型：`float`
- 默认值：`5.0`

## `阴影质量` #{shadow-quality}

- 类型：`关闭 | 低 | 中 | 高`
- 默认值：`关闭`

物体由该光源产生的阴影的质量。

## `阴影近处裁切` #{shadow-near-clip}

- 类型：`float`
- 默认值：`0.1`
- 范围：`0.0` ~ `10.0`

## `内圈角度`<badge text="光源类型 = 聚光" /> #{inner-angle}

- 类型：`float`
- 默认值：`0.0`
- 范围：`0.0` ~ `179.0`

## `外圈角度`<badge text="光源类型 = 聚光" /> #{outer-angle}

- 类型：`float`
- 默认值：`30.0`
- 范围：`1.0` ~ `179.0`

## `尺寸`<badge text="光源类型 = 矩形区域光" /> #{size}

- 类型：`Float2`
- 默认值：`(1, 1)`

## `半径`<badge text="光源类型 = 圆形区域光" /> #{radius}

- 类型：`float`
- 默认值：`1.0`

## `启用体积光` #{enable-volumetric-light}

- 类型：`bool`
- 默认值：`false`

## 体积光 #{volumetric-light}

体积光会根据不同的光源类型变换。

### 渲染 #{rendering}

#### `仅体积光` #{only-volumetric}

- 类型：`bool`
- 默认值：`false`

设置为 `true` 时，仅提供体积光效果，无照明效果。

#### `自动优化` #{auto-optimize}

- 类型：`bool`
- 默认值：`true`

仅建议当光源不移动时启用此选项。

#### `混合模式` #{blend-mode}

- 类型：`添加 | 混合 | 预乘 | 减去`
- 默认值：`添加`

混合模式用于控制光源的颜色叠加方式。

#### `质量` #{quality}

- 类型：`int`
- 默认值：`8`
- 范围：`1` ~ `256`

#### `步长` #{step-size}

- 类型：`float`
- 默认值：`0.1`

#### `最大步数` #{max-step}

- 类型：`int`
- 默认值：`200`

#### `采样抖动` #{jitter}

- 类型：`float`
- 默认值：`0.2`

#### `透明度抖动` #{dither}

- 类型：`float`
- 默认值：`1.0`

### 噪波 #{noise}

#### `噪波强度` #{noise-strength}

- 类型：`float`
- 默认值：`1.0`
- 范围：`0.0` ~ `3.0`

#### `噪波缩放` #{noise-scale}

- 类型：`float`
- 默认值：`5.0`

#### `噪波乘数` #{noise-multiplier}

- 类型：`float`
- 默认值：`5.0`

#### `风` #{wind}

- 类型：`Float3`
- 默认值：`(0.03, 0.02, 0)`

### 体积 #{volumetric}

#### `密度` #{density}

- 类型：`float`
- 默认值：`0.2`

#### `色调` #{tint}

- 类型：`ColorRGBA`
- 默认值：`(1, 1, 1, 1)`

#### `亮度` #{brightness}

- 类型：`float`
- 默认值：`0.5`

#### `常量衰减` #{constant-falloff}

- 类型：`float`
- 默认值：`1.0`

#### `线性衰减` #{linear-falloff}

- 类型：`float`
- 默认值：`10.0`

#### `平方衰减` #{quadratic-falloff}

- 类型：`float`
- 默认值：`5.0`

#### `范围衰减` #{range-falloff}

- 类型：`float`
- 默认值：`15.0`

#### `漫射强度` #{diffusion-intensity}

- 类型：`float`
- 默认值：`0.0`

#### `边缘淡出` #{edge-fade}

- 类型：`float`
- 默认值：`1.0`
- 范围：`0.0` ~ `1.0`

#### `顶部半径`<badge text="光源类型 = 聚光" /> #{top-radius}

- 类型：`float`
- 默认值：`0.0`

#### `投射贴图`<badge text="光源类型 = 聚光" /> #{projector-texture}

- 类型：`Texture`
- 默认值：空

聚光灯提供了投影仪功能。设置 `投射贴图` 指定需要投射的图案。

#### `投射缩放`<badge text="光源类型 = 聚光" /> #{projector-scale}

- 类型：`Float2`
- 默认值：`(1, 1)`

投射图案的缩放比例。

#### `投射偏移`<badge text="光源类型 = 聚光" /> #{projector-offset}

- 类型：`Float2`
- 默认值：`(0, 0)`

投射图案的偏移量。

#### `投射滚动速度`<badge text="光源类型 = 聚光" /> #{projector-scroll-speed}

- 类型：`Float2`
- 默认值：`(0, 0)`

投射图案在 x 和 y 轴上滚动的速度。

#### `扩散角度`<badge text="光源类型 = 矩形区域光" /><badge text="光源类型 = 圆形区域光" /> #{frustum-angle}

- 类型：`float`
- 默认值：`0.0`
- 范围：`0.0` ~ `80.0`

### 阴影 #{shadows}

#### `阴影质量` #{shadow-quality}

- 类型：`关闭 | 低 | 中 | 高`
- 默认值：`关闭`

#### `阴影强度` #{shadow-intensity}

- 类型：`float`
- 默认值：`1.0`

#### `自动烘焙` #{auto-bake}

- 类型：`bool`
- 默认值：`false`

勾选 `自动烘焙` 后会在游戏开始时烘焙一次阴影，之后将不再实时计算。如果游戏中确保该光源不会照射到移动物体，请勾选此选项以提高性能。

#### `近处裁切` #{near-clip}

- 类型：`float`
- 默认值：`0.1`

### 尘埃 #{dust}

#### `启用尘埃` #{enable-dust}

- 类型：`bool`
- 默认值：`false`

#### `尘埃亮度` #{dust-brightness}

- 类型：`float`
- 默认值：`1.0`

#### `尘埃尺寸` #{dust-size}

- 类型：`Float2`
- 默认值：`(0.01, 0.02)`

尘埃尺寸将在该值范围内随机。

#### `尘埃湍流` #{dust-turbulence}

- 类型：`float`
- 默认值：`1.0`

#### `尘埃淡出距离` #{dust-fadeout-distance}

- 类型：`float`
- 默认值：`10.0`
