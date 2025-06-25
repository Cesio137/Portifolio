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
    <nav class="w-7xl h-16 pl-3 pr-3 fixed flex rounded-2xl">
        <div class="flex items-center">
            <a class="font-medium ml-0.5 mr-0.5 px-2 py-0.5 rounded">INICIO</a>
            <a class="font-medium ml-0.5 mr-0.5 px-2 py-0.5 rounded">PROJETOS</a>
        </div>
        <div class="flex items-center ml-auto">
            <input type="checkbox" id="darkmode-toggle" class="darkmode-input" v-model="isDark" />
            <label for="darkmode-toggle" class="darkmode-label relative bg-neutral-200 dark:bg-neutral-700 shadow-inner shadow-neutral-400 dark:shadow-neutral-500 rounded-full">
                <div class="darkmode-toggle-circle relative flex items-center justify-center bg-neutral-100 dark:bg-neutral-800 rounded-full shadow-md shadow-neutral-400 dark:shadow-neutral-500">
                    <MoonIcon class="darkmode-toggle-svg darkmode-toggle-moon fill-blue-100" />
                    <SunIcon class="darkmode-toggle-svg darkmode-toggle-sun fill-amber-500" />
                </div>
            </label>
        </div>
    </nav>
</template>

<style scoped></style>
