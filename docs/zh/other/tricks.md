<script setup>

import { withBase } from 'vitepress'

</script>

# 小技巧 {#tricks}

## 测图模式 {#test-map-mode}

- 进入任意地图后，可以在控制台输入 `/t` 或者 `/testmap` 进入测图模式
- 测图模式下，可以控制球飞行或者降落，对应按键在游戏设置中设置
- 测图模式下 **无法** 激活终点
- **_死亡_** 不会退出测图模式，需 **_重开_** 以退出测图模式
- <span class="text-red">为了确保游戏体验，强烈建议至少通关一次地图后再根据需要决定是否开启测图模式探索地图</span>

::: tip 提示

呼唤控制台的快捷键在游戏设置中设置。

:::

## 独占全屏 {#exclusive-fullscreen}

::: warning 注意

- 由于独占全屏曾导致游戏卡死、快捷键失效等问题，现已在游戏内移除了独占全屏功能
- 如果你确实需要独占全屏，可以根据以下方法进行设置

:::

- 在这里或在 [QQ 群](https://qm.qq.com/q/2mIPnK8JIk) 中下载 <a :href="withBase('/patches/release/ExclusiveFullscreen.patch')" download>`ExclusiveFullscreen.patch`</a> 文件

::: details maxider

- 如果你在 [`maxider`](#beta-version) 组，请下载此 <a :href="withBase('/patches/maxider/ExclusiveFullscreen.patch')" download>`ExclusiveFullscreen.patch`</a> 文件

:::

- 在 `%USERPROFILE%\AppData\LocalLow\Mushreb\B2HDRP` 目录下创建 `Patch` 文件夹
- 将 `ExclusiveFullscreen.patch` 文件放入 `Patch` 文件夹
- 此时游戏内的 `全屏` 将变为 `独占全屏`（未安装补丁时 `全屏` 为 `无边框全屏`）
- <span class="text-red">独占全屏可能导致游戏卡死、快捷键失效等问题，请谨慎使用</span>

## 内测版本 {#beta-version}

内测版本也称 maxider 测试，该版本下可以预览未正式发布的新功能。

- 在 Steam 客户端中，右键游戏，选择 `属性...`
- 在 `测试版` 标签页中的 `私密测试` 中输入代码 `mushrebgames`
- 成功解锁测试后，在上方的 `参与测试` 中选择 `maxider - maxider`，此时会自动下载内测版本的游戏
- 下载完成后，进入游戏，查看游戏主界面右下角的版本号，如果带有 `Maxider` 后缀，则已成功进入内测版本

::: danger 警告

- 内测版本下的一些改动随时可能发生变化，且不保证游戏的稳定性
- 加入内测版本后，可能会遭遇游戏 bug、存档丢失、某些功能失效等问题
- <span class="text-red">除非你明确知道自己在做什么，并且能够承担相应的风险，否则请不要加入内测版本</span>

:::
