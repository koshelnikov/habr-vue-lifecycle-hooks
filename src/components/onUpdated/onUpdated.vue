<script setup lang="ts">

import {onUpdated, ref} from "vue";

const count = ref(0)
const divRef = ref<HTMLDivElement | null>(null)

onUpdated(() => {
  const divCountValue = parseInt(divRef.value.innerHTML)
  // divCountValue === count => true
  console.log(divCountValue === count.value)
})

</script>

<template>
  <div ref="divRef">{{count}}</div>
  <button @click="count++">Count</button>
</template>

<style scoped>

</style>