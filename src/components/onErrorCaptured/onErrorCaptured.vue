<script setup lang="ts">
import ErrorComponent from "@/components/onErrorCaptured/ErrorComponent/ErrorComponent.vue";
import {onErrorCaptured, ref} from "vue";

const error = ref<string | undefined>()

onErrorCaptured((err, instance, info) =>{
  error.value = err.message;
})

</script>

<template>
  <ErrorComponent v-if="!error"/>
  <div v-if="error">Error: {{error}}</div>
</template>

<style scoped>

</style>