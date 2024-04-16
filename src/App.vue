<script setup lang="ts">
import OnBeforeMount from './components/onBeforeMount/onBeforeMount.vue';
import OnMounted from "@/components/onMounted/onMounted.vue";
import OnBeforeUpdate from "@/components/onBeforeUpdate/onBeforeUpdate.vue";
import OnUpdated from "@/components/onUpdated/onUpdated.vue";
import OnUnmounted from "@/components/onUnmounted/onUnmounted.vue";
import OnErrorCaptured from "@/components/onErrorCaptured/onErrorCaptured.vue";
import {onErrorCaptured} from "vue";

onErrorCaptured((error, instance, info) =>{
  console.log(error, instance, info)
  return true;
})
</script>

<template>
  <header>
    <h1>Vue3 Component Lifecycle Hooks</h1>
  </header>
  <main>
<!--    <OnBeforeMount/>-->
<!--    <OnMounted/>-->
<!--    <OnBeforeUpdate/>-->
<!--    <OnUpdated/>-->
<!--    <OnUnmounted/>-->
    <OnErrorCaptured/>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  display: flex;
  place-items: center;
  padding-right: calc(var(--section-gap) / 2);

}
</style>
