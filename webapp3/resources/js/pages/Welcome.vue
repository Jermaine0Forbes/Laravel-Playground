<script setup lang="ts">
import { Head, Link } from "@inertiajs/vue3";
import { dashboard, login } from "@/routes";
import { register } from "@/routes";
import { ref } from "vue";
import NavBarDefault from "@/components/NavBarDefault.vue";

const count = ref(0);

const increment = () => count.value++;
</script>

<template>
  <Head title="Welcome">
    <link rel="preconnect" href="https://rsms.me/" />
    <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
  </Head>
  <div
    class="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]"
  >
    <NavBarDefault />
    <div
      class="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0"
    >
      <main
        class="flex w-full max-w-[335px] flex-col overflow-hidden rounded-lg lg:max-w-4xl"
      >
        <h1 class="text-xl mb-6">Testing out vue</h1>
        <section>
          <h2>Count</h2>
          <button @click="increment"class="bg-teal-400 block p-2 border text-white">increment count</button>
          {{ count }}
        </section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
      </main>
    </div>
    <div class="hidden h-14.5 lg:block"></div>
  </div>
</template>
