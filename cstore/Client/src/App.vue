<script setup>
import NAV from "@/components/nav.vue"
import { RouterView } from "vue-router" 
</script>

<template>
    <div class="d-flex flex-column min-vh-100">
        <NAV />
        <RouterView />
    </div>
</template>

