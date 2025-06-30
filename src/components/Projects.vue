<script setup lang="ts">
import { Octokit } from '@octokit/rest';

const octokit = new Octokit();
octokit.rest.repos.listForOrg({ org: "Cesio137", type: "public", })
    .then(function ({ data }) {
        // handle data
        data
    });
</script>

<template>
    <section id="projects" class="projects-section">
        
    </section>
</template>

<style scoped></style>
