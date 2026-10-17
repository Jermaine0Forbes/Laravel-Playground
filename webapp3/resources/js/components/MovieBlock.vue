<script setup lang="ts">
import { ref, Ref, watchEffect } from "vue";
import { Movie } from "@/lib/types";
const { name, genre, rating, year, updated } = defineProps<Movie>();
const highlight: Ref<boolean> = ref(false);
watchEffect(async () => {
  if (updated) {
    highlight.value = false;
  }
});
</script>

<template>
  <div
    @click="highlight = true"
    class="grid grid-cols-4 gap-2 border border-gray-400 p-2 mb-2"
    :class="{ 'bg-gray-400 text-white': highlight, 'bg-teal-300 text-white': updated }"
  >
    <div>name: {{ name }}</div>
    <div>genre: {{ genre }}</div>
    <div>rating: {{ rating }}</div>
    <div>year: {{ year }}</div>
  </div>
</template>
