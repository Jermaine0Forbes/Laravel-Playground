<script setup lang="ts">
import { Head, Link } from "@inertiajs/vue3";
import { ref } from "vue";
import NavBarDefault from "@/components/NavBarDefault.vue";

const count = ref(0);
const food = ref("taco");
const ticketTot = ref(0);
const ticketAmt = ref(0);
const ticketPrc = ref(0);

const increment = () => count.value++;
const decrement = () => count.value--;
const updateFood = (e: any) => (food.value = e?.target?.value);

const updateTicketPrc = (e: any) => (ticketPrc.value = e?.target?.value);
const addTicket = (n: number) => (ticketAmt.value += n);
const ticketTotal = () => {};
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
      class="flex w-full justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0"
    >
      <main class="flex w-full max-w-[335px] flex-col rounded-lg lg:max-w-4xl">
        <h1 class="text-2xl font-bold mb-6 text-center">Testing out vue features</h1>

        <section class="section-block">
          <hgroup class="mb-2">
            <h2 class="font-sans text-xl font-bold">Updating Count Timer</h2>
            <p>
              Testing out the <span class="code">emit </span> function with the
              <span class="code">@click </span> event to see how it updates state
            </p>
          </hgroup>
          <h3>Choose Tickets</h3>
          <div>
            <select>
              <option value="1.99" @change="updateTicketPrc">NFL</option>
              <option value="2.99"  @change="updateTicketPrc">Drag Queen Show</option>
              <option value="3.99"  @change="updateTicketPrc">Slap Boxing Competition</option>
            </select>
          </div>
          <div>
            <button class="btn-teal">increase tickets</button>
            <button class="btn-teal">calculate tickets</button>
          </div>
          <h3>Ticket Total</h3>
          <p>${{ Number(ticketTot).toFixed(2) }}</p>
        </section>
        <section class="section-block">
          <hgroup class="mb-2">
            <h2 class="font-sans text-xl font-bold">Count</h2>
            <p>Testing out the @click event to see how it updates state</p>
          </hgroup>
          <div>
            <button @click="increment" class="btn-teal">increment count</button>
            <button @click="decrement" class="btn-teal">decrement count</button>
          </div>
          {{ count }}
        </section>
        <section class="section-block">
          <hgroup class="mb-2">
            <h2 class="font-sans text-xl font-bold">Count</h2>
            <p>Testing out the @click event to see how it updates state</p>
          </hgroup>
          <div>
            <button @click="increment" class="btn-teal">increment count</button>
            <button @click="decrement" class="btn-teal">decrement count</button>
          </div>
          {{ count }}
        </section>

        <section class="section-block">
          <hgroup class="mb-2">
            <h2 class="font-sans text-xl font-bold">Change options</h2>
            <p>
              Testing out the <span class="code">@change</span> event by updating the
              radio buttons
            </p>
            <p class="text-gray-400 italic">
              the <span class="code">v-model</span> allows you to select & deselect radios
              input
            </p>
          </hgroup>
          <p class="w-25 text-center capitalize">{{ food }}</p>
          <div class="flex">
            <div class="flex flex-col mr-2">
              <input
                @change="updateFood"
                type="radio"
                id="taco"
                value="taco"
                v-model="food"
              />
              <label for="taco">Taco</label>
            </div>
            <div class="flex flex-col mr-2">
              <input
                @change="updateFood"
                type="radio"
                id="burger"
                value="burger"
                v-model="food"
              />
              <label for="burger">Burger</label>
            </div>
            <div class="flex flex-col mr-2">
              <input
                @change="updateFood"
                type="radio"
                id="hotdog"
                value="hotdog"
                v-model="food"
              />
              <label for="hotdog">Hotdog</label>
            </div>
          </div>
        </section>

        <section></section>
        <section></section>
      </main>
    </div>
    <div class="hidden h-14.5 lg:block"></div>
  </div>
</template>
