<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const currentYear = computed(function() { 
    return new Date().getFullYear() 
});
</script>

<template>
    <footer class="bg-white dark:bg-neutral-900 text-neutral-700 dark:text-white py-8">
        <div class="flex flex-col items-center justify-center">
            <p class="text-center">© {{ currentYear }} Nathan Miguel. {{ t('footer.rights') }}</p>
        </div>
    </footer>
</template>

<style scoped>
</style>