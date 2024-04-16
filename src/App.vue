<script setup lang="ts">
import OnBeforeMount from './components/onBeforeMount/onBeforeMount.vue';
import OnMounted from "@/components/onMounted/onMounted.vue";
import OnBeforeUpdate from "@/components/onBeforeUpdate/onBeforeUpdate.vue";
import OnUpdated from "@/components/onUpdated/onUpdated.vue";
import OnUnmounted from "@/components/onUnmounted/onUnmounted.vue";
import OnErrorCaptured from "@/components/onErrorCaptured/onErrorCaptured.vue";
import {computed, onErrorCaptured, ref} from "vue";
import NotFound from "@/components/not-found/NotFound.vue";
import OnBeforeUnmount from "@/components/onBeforeUnmount/onBeforeUnmount.vue";

const routes = {
  '/': OnBeforeMount,
  '/on-mounted': OnMounted,
  '/on-before-update': OnBeforeUpdate,
  '/on-updated': OnUpdated,
  '/on-before-unmount': OnBeforeUnmount,
  '/on-unmounted': OnUnmounted,
  '/on-error-captured': OnErrorCaptured
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound;
})


onErrorCaptured((error, instance, info) =>{
  console.log(error, instance, info)
})
</script>

<template>
  <header>
    <h1>Vue3 Component Lifecycle Hooks</h1>
    <nav>
      <a href="#/">onBeforeMount</a> |
      <a href="#/on-mounted">onMounted</a> |
      <a href="#/on-before-update">onBeforeUpdate</a> |
      <a href="#/on-updated">onUpdated</a> |
      <a href="#/on-before-unmount">onBeforeUnmount</a> |
      <a href="#/on-unmounted">onUnmounted</a> |
      <a href="#/on-error-captured">onErrorCaptured</a>
    </nav>
  </header>
  <main>
    <component :is="currentView" />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  display: flex;
  flex-flow: column;
  place-items: center;
  padding-right: calc(var(--section-gap) / 2);
}

main {
  display: flex;
  flex-flow: column;
  place-items: center;
  padding-right: calc(var(--section-gap) / 2);
}
</style>
