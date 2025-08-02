<script setup>

import { withBase } from 'vitepress'

</script>

# 联机 {#multiplayer}

## 准备工作 {#preparation}

- 在这里或在 [QQ 群](https://qm.qq.com/q/2mIPnK8JIk) 中下载 <a :href="withBase('/patches/release/MMOServer.patch')" download>`MMOServer.patch`</a> 文件

::: details maxider

- 如果你在 [`maxider`](tricks#beta-version) 组，请下载此 <a :href="withBase('/patches/maxider/MMOServer.patch')" download>`MMOServer.patch`</a> 文件

:::

- 在 `%USERPROFILE%\AppData\LocalLow\Mushreb\B2HDRP` 目录下创建 `Patch` 文件夹
- 将 `MMOServer.patch` 文件放入 `Patch` 文件夹
- 启动游戏，点击右上角的头像，点击 `MMO 服务器` 按钮以连接至服务器

## 指令 {#commands}

- 使用方法：

  - 控制台输入 `/mmo <指令> <参数 1> <参数 2> ...`
  - 或使用缩写 `/m <指令缩写> <参数 1> <参数 2> ...`

- 如：
  - `/mmo create 123456`
  - `/mmo c 123456`
  - `/m create 123456`
  - `/m c 123456`

::: tip 提示

呼唤控制台的快捷键在游戏设置中设置。

:::

## 指令列表 {#command-list}

::: tip 提示

- 指令对大小写不敏感
- 大多数操作可通过右键玩家头像直接选择，无需手动输入指令

:::

### 创建与加入 {#create-and-join}

进入任意关卡后，可以使用指令创建或加入房间。

- `c / create {0}`： 创建房间，控制台会返回分配的房间号 ID
  - `{0}`：房间密码，可选
- `j / join {0} {1}`：加入指定房间
  - `{0}`：房间号 ID
  - `{1}`：房间密码，可选

### 房间内 {#in-a-room}

加入房间后可进行的操作。

- `q / quit`：退出当前房间
- `r / ready`：准备，再次输入取消准备
- `o / observe`：标记自己进入比赛后为观战模式，再次输入取消观战
- `e / eat {0}`：房间内所有玩家会收到自己把指定 ID 玩家吃掉的系统消息
  - `{0}`：被吃掉的玩家 ID（ID 显示在右上角玩家列表的头像前）
- `a / announce {0}`：<span class="text-red">**仅房主**</span> 向房间内所有玩家发送一个 Tip 形式的通知，停留时间为 10 秒
  - `{0}`：通知内容
- `k / kick {0}`：<span class="text-red">**仅房主**</span> 踢出指定 ID 的玩家
  - `{0}`：被踢出玩家 ID
- `h / host {0}`：<span class="text-red">**仅房主**</span> 将房主权限移交给指定 ID 的玩家
  - `{0}`：被移交房主权限的玩家 ID
- `s / start`：<span class="text-red">**仅房主**</span> 开始比赛，所有玩家会自动重开关卡并开始比赛
- `goto {0}`：<span class="text-red">**仅房主**</span> 将房间内所有玩家转移到另一关卡中，同时保持房间不变
  - `{0}`：目标关卡的标号，如 `5-3` `2-b` 等

### 比赛中 {#during-a-match}

比赛中可进行的操作。

- `d / dnf`：放弃比赛
- `q / quit`：强行退出当前比赛
- `restart`：<span class="text-red">**仅房主**</span> 重新开始比赛
