<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import Card from "./components/Card.vue";
import Footer from "./components/Footer.vue";
import { defineAsyncComponent } from "vue";

const Projects = defineAsyncComponent(function() { return import('./components/Projects.vue') });
</script>

<template>
    <Navbar />
    <main>
        <Card />
        <Projects />
    </main>
    <Footer />
</template>

<style scoped>
</style>
