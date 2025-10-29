<script setup>

import { withBase } from 'vitepress'

</script>

# Tricks

## Test Map Mode

- After entering any map, you can enter `/t` or `/testmap` in the console to enter test map mode.
- In test map mode, you can control the ball to fly or sink. The corresponding keys can be set in the game settings.
- In test map mode, you can enter `/s` or `/spawn` in the console to set the respawn point at the current position.
- In test map mode, the destination **cannot** be activated.
- **_Dying_** will not exit test map mode; you need to **_Restart_** to exit it.
- <span class="text-red">To ensure the game experience, it is strongly recommended to clear the map at least once before deciding whether to enable test map mode to explore the map.</span>

::: tip

The hotkey to open the console can be set in the game settings.

:::

## Exclusive Fullscreen

::: warning

- Due to issues such as game freezes and non-functional hotkeys caused by exclusive fullscreen, this feature has been removed from the game.
- If you really need exclusive fullscreen, you can set it up using the following method.

:::

- Download the <a :href="withBase('/patches/release/ExclusiveFullscreen.patch')" download>`ExclusiveFullscreen.patch`</a> file here or from the [QQ Group](https://qm.qq.com/q/2mIPnK8JIk).

::: details maxider

- If you are in the [`maxider`](#Beta-Version) group, please download this <a :href="withBase('/patches/maxider/ExclusiveFullscreen.patch')" download>`ExclusiveFullscreen.patch`</a> file instead.

:::

- Create a `Patch` folder in the `%USERPROFILE%\AppData\LocalLow\Mushreb\B2HDRP` directory.
- Place the `ExclusiveFullscreen.patch` file into the `Patch` folder.
- Then the in-game `Full Screen` setting will become `Exclusive Fullscreen` (without the patch, `Full Screen` is `Borderless Fullscreen`).
- <span class="text-red">Exclusive fullscreen may cause issues like game freezes and non-functional hotkeys. Please use with caution.</span>

## Beta Version

The beta version is also called the maxider test. In this version, you can preview new features that have not been officially released.

- In the Steam client, right-click the game and select `Properties...`.
- In the `Betas` tab, enter the code `mushrebgames` under `Private Betas`.
- After successfully unlocking the beta, select `maxider - maxider` from the `Beta Participation` dropdown above. The beta version of the game will then download automatically.
- After the download is complete, launch the game and check the version number in the bottom-right corner of the main menu. If it has the `Maxider` suffix, you have successfully entered the beta version.

::: danger

- Some changes in the beta version may be altered at any time, and game stability is not guaranteed.
- After joining the beta version, you may encounter issues such as game bugs, save file loss, or non-functional features.
- <span class="text-red">Unless you know exactly what you are doing and can accept the corresponding risks, please do not join the beta version.</span>

:::
