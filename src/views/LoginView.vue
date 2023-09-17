<template>
  <div class="mt-6">
    <span v-for="(item, index) in items" :key="index">
      {{ item }}
    </span>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios';

const items = ref([])

onMounted(async () => {
  const { data } = await axios.get('http://localhost:3004/posts');
  items.value = data.data
})
</script>

<style scoped>

</style>