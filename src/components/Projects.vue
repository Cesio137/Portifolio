<script setup lang="ts">
import { Octokit } from '@octokit/rest';

const octokit = new Octokit();
octokit.rest.repos.listForOrg({ org: "Cesio137", type: "public", })
.then(function({ data }) {
    // handle data
    data
});
</script>

<template>
    <h1>ola mundo</h1>
    <h1>ola mundo</h1>
    <h1>ola mundo</h1>
</template>

<style scoped>
</style>
