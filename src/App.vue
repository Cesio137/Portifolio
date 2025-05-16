<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark({
    onChanged(isDark) {
        if (isDark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    },
});
const toggleDark = useToggle(isDark);
</script>

<template>
    <nav class="text-center"><h1>NAVBAR</h1></nav>

    <button
        @click="toggleDark()"
        class="m-4 p-2 border rounded bg-neutral-200 dark:bg-neutral-700 dark:text-white"
    >
        Toggle to {{ isDark ? "light mode" : "dark mode" }}
    </button>

    <h1 class="text-3xl font-bold text-center">Hello world!</h1>
</template>

<style scoped>
</style>
