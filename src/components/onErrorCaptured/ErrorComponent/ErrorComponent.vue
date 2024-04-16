<script setup lang="ts">

import {onBeforeMount, onBeforeUnmount, onBeforeUpdate, onErrorCaptured, onMounted, onUnmounted, onUpdated} from "vue";

const throwError = (message: string) => {
  throw new Error(message)
}

onErrorCaptured((err, instance, info) => {
  console.log(err, info)
})

onBeforeMount(() => {
  throwError('onBeforeMount')
})

onMounted(() => {
  throwError('onMounted')
})

onBeforeUpdate(() => {
  throwError('onUpdated')
})

onUpdated(() => {
  throwError('onUpdated')
})

onBeforeUnmount(() => {
  throwError('onBeforeUnmount')
})

onUnmounted(() => {
  throwError('onUnmounted')
})

</script>

<template>
  {{throwError('Render')}}
</template>

<style scoped>

</style>