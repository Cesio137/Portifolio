<script setup lang="ts">
import { useDark } from "@vueuse/core";
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from "@heroicons/vue/20/solid";

const isDark = useDark({
    onChanged(isDark) {
        if (isDark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    },
});
//const toggleDark = useToggle(isDark);
</script>

<template>
    <nav class="flex flex-col">
        <div class="w-full flex">
            <div class="nav-links">
                <input type="checkbox" id="navmenu" class="navmenu-input"/>
                <label for="navmenu">
                    <div>
                        <Bars3Icon class="hamburger-icon" />
                        <XMarkIcon class="x-icon" />
                    </div>
                </label>
                <div>
                    <a>INICIO</a>
                    <a>PROJETOS</a>
                </div>
            </div>
            <div class="nav-configs">
                <input type="checkbox" id="darkmode-toggle" class="darkmode-input" v-model="isDark" />
                <label for="darkmode-toggle" class="darkmode-label">
                    <div class="darkmode-toggle-circle">
                        <MoonIcon class="darkmode-toggle-moon" />
                        <SunIcon class="darkmode-toggle-sun" />
                    </div>
                </label>
            </div>
        </div>
        <div class="nav-mobile-links">
            <a>INICIO</a>
            <a>PROJETOS</a>
        </div>
    </nav>
</template>

<style scoped>
</style>
