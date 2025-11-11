<template>
    <transition name="fade">
        <div v-if="show" class="back-to-top-container" @click="scrollToTop" :title="buttonTitle">
            <svg class="progress-ring" width="50" height="50">
                <defs>
                    <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="var(--grad-color-1)" />
                        <stop offset="50%" stop-color="var(--grad-color-2)" />
                        <stop offset="100%" stop-color="var(--grad-color-3)" />
                    </linearGradient>
                </defs>

                <circle class="progress-ring__circle-bg" stroke-width="4" fill="transparent" r="20" cx="25" cy="25" />
                <circle class="progress-ring__circle-progress" stroke="url(#progress-gradient)" stroke-width="4"
                    fill="transparent" r="20" cx="25" cy="25"
                    :style="{ strokeDasharray: circumference, strokeDashoffset: strokeDashoffsetValue }" />
            </svg>

            <div class="inner-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 19V5M5 12l7-7 7 7" />
                </svg>
            </div>
        </div>
    </transition>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue"
import { useData } from "vitepress"

const { lang } = useData()
const buttonTitle = computed(() => ({ "zh-Hans": "回到顶部", "en-US": "Back to Top" }[lang.value]))

const show = ref(false)
const scrollThreshold = 200

const scrollToTop = () => {
    const duration = 300
    const startPos = window.scrollY
    const startTime = performance.now()
    const scrollStep = (timestamp: number) => {
        const elapsed = (timestamp || performance.now()) - startTime
        window.scrollTo(0, startPos * (1 - (t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t)(Math.min(elapsed / duration, 1))))
        if (elapsed < duration) requestAnimationFrame(scrollStep)
    }
    requestAnimationFrame(scrollStep)
}

const progress = ref(0)
const radius = 20
const circumference = 2 * Math.PI * radius
const strokeDashoffsetValue = computed(() => circumference * (1 - progress.value))

const handleScroll = () => {
    show.value = window.scrollY > scrollThreshold
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
    progress.value = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0
}

onMounted(() => window.addEventListener("scroll", handleScroll))
onUnmounted(() => window.removeEventListener("scroll", handleScroll))
</script>


<style>
:root {
    --grad-color-1: #bd34fe;
    --grad-color-2: #647eff;
    --grad-color-3: #41d1ff;
}

.dark {
    --grad-color-1: #bd34fe;
    --grad-color-2: #647eff;
    --grad-color-3: #41d1ff;
}
</style>

<style scoped>
.back-to-top-container {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    z-index: 100;
    width: 50px;
    height: 50px;
    cursor: pointer;
}

.inner-button {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: var(--vp-c-bg-soft);
    box-shadow: var(--vp-shadow-2);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.3s, box-shadow 0.3s;
}

.back-to-top-container:hover .inner-button {
    background-color: var(--vp-c-bg-soft-up);
    box-shadow: var(--vp-shadow-3);
}

.inner-button svg {
    color: var(--vp-c-text-1);
}

.progress-ring {
    width: 100%;
    height: 100%;
}

.progress-ring__circle-bg {
    stroke: var(--vp-c-divider);
}

.progress-ring__circle-progress {
    stroke-linecap: round;
    transform-origin: 50% 50%;
    transform: rotate(-90deg);
    transition: stroke-dashoffset 0.1s linear;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

@media (max-width: 768px) {
    .back-to-top-container {
        display: none;
    }
}
</style>
