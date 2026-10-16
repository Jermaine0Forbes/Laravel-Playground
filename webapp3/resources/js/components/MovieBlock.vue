<script setup lang="ts">
import { ref, Ref } from "vue";
import { Movie } from "@/lib/types";
const { name, genre, rating, year } = defineProps<Movie>();
</script>

<template>
  <div class="grid grid-cols-4 gap-2 border border-gray-400 p-2 mb-2">
    <div>name: {{ name }}</div>
    <div>genre: {{ genre }}</div>
    <div>rating: {{ rating }}</div>
    <div>year: {{ year }}</div>
  </div>
</template>
