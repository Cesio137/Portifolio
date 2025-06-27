<script setup lang="ts">
import { useDark } from "@vueuse/core";
import { SunIcon, MoonIcon } from "@heroicons/vue/20/solid";

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
    <nav>
        <div class="nav-links">
            <a>INICIO</a>
            <a>PROJETOS</a>
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
    </nav>
</template>

<style scoped></style>
