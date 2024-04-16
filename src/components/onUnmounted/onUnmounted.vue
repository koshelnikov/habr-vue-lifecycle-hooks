<script setup lang="ts">
import {onMounted, onUnmounted, ref} from "vue";
const size = ref({width: window.innerWidth, height: window.innerHeight})

const resize = () => {
  size.value.width = window.innerWidth
  size.value.height = window.innerHeight
}

onMounted(() => {
  window.addEventListener('resize', resize)
})

onUnmounted(() => {
  window.removeEventListener('resize', resize)
})

</script>

<template>
  {{size}}
</template>

<style scoped>

</style>