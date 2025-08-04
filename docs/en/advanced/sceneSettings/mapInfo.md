# Map Information

::: tip

The basic function of this component has been explained in detail in [`Start → Release → Set Map Information`](../../start/release#Set-Map-Information).

:::

## Configurations

- Here you can set up custom configurations used by this map, such as custom keybinds and custom data. When this property is not empty, players can select and configure the values for custom keybinds and custom data when entering the map.
- Use the script methods [`levelManager.getConfig()` / `levelManager.getConfigInputKey()`](https://github.com/Withered-Flower-0422/BST/blob/main/_Typings/gameApi/modules/levelManager.d.ts) to get the values of the custom configurations set by the player.

### `Key`

- Type: `string`
- Default: Empty

The name of this custom configuration. This is the true name of this configuration. Pass this name to the `levelManager.getConfig()` and `levelManager.getConfigInputKey()` methods to get the value of the custom configuration set by the player.

### Name

#### `English`

- Type: `string`
- Default: Empty

The English name for this custom configuration. This name will be displayed on the UI when the player's game is set to English.

#### `Simplified Chinese`

- Type: `string`
- Default: Empty

The Simplified Chinese name for this custom configuration. This name will be displayed on the UI when the player's game is set to Simplified Chinese.

#### `Traditional Chinese`

- Type: `string`
- Default: Empty

The Traditional Chinese name for this custom configuration. This name will be displayed on the UI when the player's game is set to Traditional Chinese.

#### `Japanese`

- Type: `string`
- Default: Empty

The Japanese name for this custom configuration. This name will be displayed on the UI when the player's game is set to Japanese.

#### `Spanish`

- Type: `string`
- Default: Empty

The Spanish name for this custom configuration. This name will be displayed on the UI when the player's game is set to Spanish.

### `Config Type`

- Type: `String | Localized String | Keys`
- Default: `String`

The data type of this custom configuration.

- `String`
  - Players will see option content identical to the string value, regardless of the player's game language setting.
  - Use the `levelManager.getConfig()` method to get the <span class="text-red">**index**</span> of the custom value set by the player for this configuration type.
- `Localized String`
  - Players will see option content that matches their game language setting.
  - Use the `levelManager.getConfig()` method to get the <span class="text-red">**index**</span> of the custom value set by the player for this configuration type.
- `Key`
  - Players will select a keyboard key as the value for this custom configuration.
  - Use the `levelManager.getConfigInputKey()` method to get the <span class="text-yellow">**key name**</span> of the custom value set by the player for this configuration type.

### `Default Index`<badge text="Config Type = String" /><badge text="Config Type = Localized String" />

- Type: `int`
- Default: `0`

The default option index for this custom configuration.

::: warning

If the index number is outside the index range of the [`Item Values`](#item-values) below, the game will get stuck on a black loading screen.

:::

### `Item Values`<badge text="Config Type = String" /><badge text="Config Type = Localized String" />

- Type: `string[]`<badge text="Config Type = String" />
- Type: [`LocalizeString[]`](https://github.com/Withered-Flower-0422/BST/blob/main/_Typings/utils/localize.d.ts)<badge text="Config Type = Localized String" />
- Default: `[]`

The option content for this custom configuration that the player will see.

### `Default Key`<badge text="Config Type = Keys" />

- Type: [`KeyboardKey`](https://github.com/Withered-Flower-0422/BST/blob/main/_Typings/utils/keys.d.ts)
- Default: Empty

The default key for this custom configuration.
