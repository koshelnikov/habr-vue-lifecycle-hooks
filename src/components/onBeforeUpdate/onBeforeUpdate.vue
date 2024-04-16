<script setup lang="ts">
import {onBeforeMount, onBeforeUpdate, onMounted, ref} from "vue";
const isLoading = ref(true);
const users = ref<{id: number, name: string}[]>([]);
const liElements = ref<(HTMLLIElement | undefined) []>([])

// регистрируем загрузку данных до отображения компонента
onBeforeMount(async () => {
  users.value = await fetch("https://jsonplaceholder.typicode.com/users").then(data =>
      new Promise(res => setTimeout(() => res(data.json()), 2000)));
  isLoading.value = false;
})

onBeforeUpdate(() => {
  liElements.value = []
})

const onUpdateRef = (e: any, index: number) =>
    liElements.value[index] = e;


const onItemClick = (id: number) =>
    users.value = users.value.filter(item => item.id !== id);


// Emulate async data after some time
setTimeout(() => {
  const highlightedUserId = 3
  const userIndex = users.value.findIndex(user => user.id === highlightedUserId)
  liElements.value[userIndex]!.focus()
}, 4000)

</script>

<template>
  <h2>Users</h2>
  <div>

    <ul v-if="!isLoading">
      <li v-for="(user, index) in users"
          :ref="e => onUpdateRef(e, index)"
          :key="user.id"
          tabindex="1"
          @click="onItemClick(user.id)">{{user.name}}</li>
    </ul>
    <div v-else>Please wait...</div>
  </div>
</template>

<style scoped>

li:focus {
  background-color: lightcoral;
}
</style>