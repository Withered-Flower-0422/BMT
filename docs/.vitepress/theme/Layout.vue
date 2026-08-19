<script setup lang="ts">
import { useData } from "vitepress"
import DefaultTheme from "vitepress/theme"
import { provide } from "vue"
import BackToTop from "./components/BackToTop.vue"

const { isDark } = useData()
provide("toggle-appearance", () =>
  document.startViewTransition(() => (isDark.value = !isDark.value)),
)
</script>

<template>
  <DefaultTheme.Layout />
  <BackToTop />
</template>

<style>
::view-transition-old(root) {
  animation: none;
}

::view-transition-new(root) {
  animation: reveal 300ms ease-in;
}

@keyframes reveal {
  from {
    clip-path: circle(0px at 50% 50%);
  }

  to {
    clip-path: circle(100vmax at 50% 50%);
  }
}

.VPSwitchAppearance {
  width: 22px !important;
}

.VPSwitchAppearance .check {
  transform: none !important;
}
</style>
