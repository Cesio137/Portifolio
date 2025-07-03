<script setup lang="ts">
import { Search } from 'lucide-vue-next'

interface Props {
    modelValue: string
    placeholder: string
}

defineProps<Props>()
const emit = defineEmits<{
    (e: 'update:modelValue', val: string): void
}>()
</script>

<template>
    <div class="search-bar">
        <div>
            <input :value="modelValue" @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
                type="text" :placeholder="placeholder"
                class="" />
            <Search class="search-icon" />
        </div>
    </div>
</template>