<script setup>
 const emit = defineEmits(["adjustTicket"])
</script>

<template>
  <button class="btn-teal" @click="$emit('adjustTicket', 1)">increase tickets</button>
  <button class="btn-teal" @click="$emit('adjustTicket', -1)">decrease tickets</button>
</template>
