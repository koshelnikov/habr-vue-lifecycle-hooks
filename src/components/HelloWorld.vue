<script setup lang="ts">
import {onBeforeMount, onBeforeUnmount, onErrorCaptured, onMounted, onUnmounted, ref} from "vue";

defineProps<{
  msg: string
}>()

const users = ref<{id: number, name: string}[]>([]);

onBeforeMount(async () => {
  const response = await fetch("http://localhost:3000/users");
  users.value = await response.json()
})

onBeforeMount(() => {
  window.addEventListener('click', () => {
    console.log('click')
  })
})

/*
onMounted(() => {
  console.log('onMounted')
})

onBeforeUnmount(() => {
  console.log('onBeforeUnmount')
})

onUnmounted(() => {
  console.log('onUnmounted')
})

onErrorCaptured(() => {
  console.log('onErrorCaptured')
})
 */
console.log('setup')
</script>

<template>
  <div class="greetings" ref="$devElement" data-template-value="10">
    <h1 class="green">{{ msg }}</h1>
    <div v-for="user of users">
      {{user.name}}
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
