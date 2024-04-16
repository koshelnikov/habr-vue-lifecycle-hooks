<script setup lang="ts">
import {onBeforeMount, ref} from "vue";
const isLoading = ref(true);
// создание реактивной ссылки
const users = ref<{id: number, name: string}[]>([]);

// регистрируем загрузку данных до отображения компонента
onBeforeMount(async () => {
  users.value = await fetch("https://jsonplaceholder.typicode.com/users").then(data =>
      new Promise(res => setTimeout(() => res(data.json()), 2000)));
  isLoading.value = false;
})

onBeforeMount(() => {
  window.addEventListener('resize', () => {
    console.log(window.innerWidth, window.innerHeight)
  })
})

</script>

<template>
  <h2>Users</h2>
  <div>

    <ul v-if="!isLoading">
      <li v-for="user of users">{{user.name}}</li>
    </ul>
    <div v-else>Please wait...</div>
  </div>
</template>

<style scoped>

</style>