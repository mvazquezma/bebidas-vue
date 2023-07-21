<script setup>
    import { RouterLink } from 'vue-router';

    defineProps({
        to: {
            type: String
        }
    })
</script>

<template>
    <RouterLink
        :to="{name: to}"
        class="text-white uppercase font-bold"
        active-class="text-orange-500"
    >
        <slot></slot>
    </RouterLink>
</template>