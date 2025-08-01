# 云 #{cloud}

BME Pro 提供了两层平面云层，下面列出云层中的各项属性、其类型及默认值。

## `启用` #{enabled}

- 类型：`bool`
- 默认值：`true`

是否启用该云层。

## `纹理 A` #{texture-a}

- 类型：`float`
- 默认值：`1.0`<badge text="云层 1" />，`0.0`<badge text="云层 2" />
- 范围：`0.0` ~ `1.0`

云层纹理 A 的强度。

## `纹理 B` #{texture-b}

- 类型：`float`
- 默认值：`0.0`
- 范围：`0.0` ~ `1.0`

云层纹理 B 的强度。

## `纹理 C` #{texture-c}

- 类型：`float`
- 默认值：`0.0`<badge text="云层 1" />，`0.5`<badge text="云层 2" />
- 范围：`0.0` ~ `1.0`

云层纹理 C 的强度。

## `纹理 D` #{texture-d}

- 类型：`float`
- 默认值：`0.0`
- 范围：`0.0` ~ `1.0`

云层纹理 D 的强度。

## `海拔` #{altitude}

- 类型：`float`
- 默认值：`2000.0`<badge text="云层 1" />，`4000.0`<badge text="云层 2" />

云层海拔高度。

## `旋转` #{rotation}

- 类型：`float`
- 默认值：`0.0`<badge text="云层 1" />，`45.0`<badge text="云层 2" />
- 范围：`0.0` ~ `360.0`

云层的旋转角度。

## `色调` #{tint}

- 类型：`ColorRGBA`
- 默认值：`(1, 1, 1, 1)`

云层的颜色。

## `曝光补偿` #{exposurecompensation}

- 类型：`float`
- 默认值：`0.0`

## `风向` #{wind-direction}

- 类型：`float`
- 默认值：`0.0`
- 范围：`0.0` ~ `360.0`

云层的运动方向。

## `风速` #{wind-speed}

- 类型：`float`
- 默认值：`300.0`<badge text="云层 1" />，`200.0`<badge text="云层 2" />

云层的运动速度。

## `计算步数` #{raymarching-step}

- 类型：`int`
- 默认值：`8`<badge text="云层 1" />，`6`<badge text="云层 2" />
- 范围：`2` ~ `32`

## `密度` #{density}

- 类型：`float`
- 默认值：`0.07`<badge text="云层 1" />，`0.05`<badge text="云层 2" />
- 范围：`0.0` ~ `1.0`

## `环境光照` #{ambient-lighting}

- 类型：`float`
- 默认值：`1.0`
- 范围：`0.0` ~ `1.0`
