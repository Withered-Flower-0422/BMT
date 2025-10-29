<script setup>

import { withBase } from 'vitepress'

</script>

# Multiplayer

## Preparation

- Download the <a :href="withBase('/patches/release/MMOServer.patch')" download>`MMOServer.patch`</a> file here or from the [QQ Group](https://qm.qq.com/q/2mIPnK8JIk).

- Create a `Patch` folder in the `%USERPROFILE%\AppData\LocalLow\Mushreb\B2HDRP` directory.
- Place the `MMOServer.patch` file into the `Patch` folder.
- Launch the game, click the avatar in the top-right corner, and click the `MMO Server` button to connect to the server.

## Commands

- Usage:

  - In the console, enter `/mmo <command> <param1> <param2> ...`
  - Or use the shorthand `/m <command_shorthand> <param1> <param2> ...`

- E.g.:
  - `/mmo create 123456`
  - `/mmo c 123456`
  - `/m create 123456`
  - `/m c 123456`

::: tip

The hotkey to open the console can be set in the game settings.

:::

## Command List

::: tip

- Commands are case-insensitive.
- Most operations can be selected by right-clicking a player's avatar, without needing to manually enter commands.

:::

### Create and Join

After entering any level, you can use commands to create or join a room.

- `c / create {0}`: Creates a room. The console will return the assigned room ID.
  - `{0}`: Room password, optional.
- `j / join {0} {1}`: Joins a specified room.
  - `{0}`: Room ID.
  - `{1}`: Room password, optional.

### In a Room

Operations available after joining a room.

- `q / quit`: Quits the current room.
- `r / ready`: Sets your status to ready. Enter again to unready.
- `o / observe`: Marks yourself to be in spectator mode after the match starts. Enter again to cancel.
- `e / eat {0}`: All players in the room will receive a system message that you have eaten the specified player.
  - `{0}`: The ID of the player to be eaten (ID is displayed before the avatar in the player list in the top-right corner).
- `a / announce {0}`: <span class="text-red">**Host only**</span> Sends a tip-style notification to all players in the room, which stays for 10 seconds.
  - `{0}`: The content of the notification.
- `k / kick {0}`: <span class="text-red">**Host only**</span> Kicks the specified player.
  - `{0}`: The ID of the player to be kicked.
- `h / host {0}`: <span class="text-red">**Host only**</span> Transfers host privileges to the specified player.
  - `{0}`: The ID of the player to receive host privileges.
- `s / start`: <span class="text-red">**Host only**</span> Starts the match. All players will automatically restart the level and begin the match.
- `goto {0}`: <span class="text-red">**Host only**</span> Transfers all players in the room to another level, while keeping the room intact.
  - `{0}`: The number of the target level, e.g., `5-3`, `2-b`, etc.

### During a Match

Operations available during a match.

- `d / dnf`: Did not finish (forfeits the match).
- `q / quit`: Forcibly quits the current match.
- `restart`: <span class="text-red">**Host only**</span> Restarts the match.
