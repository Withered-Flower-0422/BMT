# 地图信息 {#map-information}

::: tip 提示

此组件的基础功能在 [`起步 → 发布地图 → 设置地图信息`](../../start/release#set-map-information) 中已详细说明。

:::

## 配置项 {#configurations}

- 在这里可以设置该地图使用到的自定义配置，如自定义按键，自定义数据等。该属性不为空时，玩家在进入地图时可以自行选择、配置自定义按键和自定义数据的值。
- 使用脚本中的 [`levelManager.getConfig()` / `levelManager.getConfigInputKey()`](https://github.com/Withered-Flower-0422/BST/blob/main/_Typings/gameApi/modules/levelManager.d.ts) 方法以获取玩家设置的自定义配置的值。

### `键` {#key}

- 类型：`string`
- 默认值：空

该自定义配置的名称。这个名称是这个配置真正意义上的名称，将该名称传入 `levelManager.getConfig()` 以及 `levelManager.getConfigInputKey()` 方法中以获取玩家设置的自定义配置的值。

### 名称 {#name}

#### `英文` {#english}

- 类型：`string`
- 默认值：空

该自定义配置的英文名称，当玩家游戏设置为英文时，该名称将显示在 UI 上。

#### `简体中文` {#simplified-chinese}

- 类型：`string`
- 默认值：空

该自定义配置的简体中文名称，当玩家游戏设置为简体中文时，该名称将显示在 UI 上。

#### `繁体中文` {#traditional-chinese}

- 类型：`string`
- 默认值：空

该自定义配置的繁体中文名称，当玩家游戏设置为繁体中文时，该名称将显示在 UI 上。

#### `日文` {#japanese}

- 类型：`string`
- 默认值：空

该自定义配置的日文名称，当玩家游戏设置为日文时，该名称将显示在 UI 上。

#### `西班牙文` {#spanish}

- 类型：`string`
- 默认值：空

该自定义配置的西班牙文名称，当玩家游戏设置为西班牙文时，该名称将显示在 UI 上。

### `配置类型` {#config-type}

- 类型：`字符串 | 本地化字符串 | 按键`
- 默认值：`字符串`

该自定义配置的数据类型。

- `字符串`
  - 玩家将看到与字符串值相同的选项内容，与玩家的游戏语言设置无关
  - 使用 `levelManager.getConfig()` 方法获取玩家设置的该配置类型自定义值的 <span class="text-red">**索引**</span>
- `本地化字符串`
  - 玩家将看到与游戏语言设置匹配的选项内容
  - 使用 `levelManager.getConfig()` 方法获取玩家设置的该配置类型自定义值的 <span class="text-red">**索引**</span>
- `按键`
  - 玩家将选择一个键盘按键作为该自定义配置的值
  - 使用 `levelManager.getConfigInputKey()` 方法获取玩家设置的该配置类型自定义值的 <span class="text-yellow">**按键名**</span>

### `默认选项索引号`<badge text="配置类型 = 字符串" /><badge text="配置类型 = 本地化字符串" /> {#default-index}

- 类型：`int`
- 默认值：`0`

该自定义配置的默认选项索引号。

::: warning 注意

如果索引号超出了下列 [`选项`](#item-values) 的索引值范围，游戏将会卡在黑屏加载阶段。

:::

### `选项`<badge text="配置类型 = 字符串" /><badge text="配置类型 = 本地化字符串" /> {#item-values}

- 类型：`string[]`<badge text="配置类型 = 字符串" />
- 类型：[`LocalizeString[]`](https://github.com/Withered-Flower-0422/BST/blob/main/_Typings/utils/localize.d.ts)<badge text="配置类型 = 本地化字符串" />
- 默认值：`[]`

玩家将看到的该自定义配置的选项内容。

### `默认按键`<badge text="配置类型 = 按键" /> {#default-key}

- 类型：[`KeyboardKey`](https://github.com/Withered-Flower-0422/BST/blob/main/_Typings/utils/keys.d.ts)
- 默认值：空

该自定义配置的默认按键。
