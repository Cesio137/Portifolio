<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";
import HelloWorld from "./components/HelloWorld.vue";
import Navbar from "./components/Navbar.vue";

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
    <Navbar msg="navbar"></Navbar>
    <h1 class="text-3xl font-bold text-center">Hello world!</h1>
</template>

<style scoped>
</style>
