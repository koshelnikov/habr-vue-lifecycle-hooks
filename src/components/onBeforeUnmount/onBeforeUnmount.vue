<script setup lang="ts">

import {onBeforeUnmount, onMounted} from "vue";

let intervalId;

onMounted(() => {
  intervalId = setInterval(() => {
    console.log('interval')

  },1000)
})

onBeforeUnmount(() => {
  clearInterval(intervalId)
})
</script>

<template>

</template>

<style scoped>

</style>