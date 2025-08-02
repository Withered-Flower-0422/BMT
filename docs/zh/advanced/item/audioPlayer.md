# 音频播放器 {#audio-player}

用于播放音频，需通过脚本 [audioPlayer.play()](https://github.com/Withered-Flower-0422/BST/blob/main/_Typings/gameApi/types/itemComponents/audioPlayer.d.ts) 播放。

## [变换偏移](item#transform-offset) {#transform-offset}

## `音频文件` {#audio-file}

- 类型：`Audio`
- 默认值：空

## `循环` {#loop}

- 类型：`bool`
- 默认值：`false`

## `音量` {#volume}

- 类型：`float`
- 默认值：`1.0`
- 范围：`0.0` ~ `1.0`

## `空间化音频` {#spatialize-audio}

- 类型：`bool`
- 默认值：`false`

空间音频具有立体声和多普勒效应。

## `最小距离` {#min-distance}

- 类型：`float`
- 默认值：`5.0`
- 范围：`0.0` ~ `100.0`

摄像机与音源距离大于 `最小距离` 时，音量开始衰减。

## `最大距离` {#max-distance}

- 类型：`float`
- 默认值：`20.0`
- 范围：`0.0` ~ `100.0`

摄像机与音源距离大于 `最大距离` 时，无法听到声音。
