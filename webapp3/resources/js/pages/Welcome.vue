<script setup lang="ts">
import { Head, Link } from "@inertiajs/vue3";
import { computed, ref } from "vue";
import NavBarDefault from "@/components/NavBarDefault.vue";
import AdjustTicketBtns from "@/components/examples/AdjustTicketBtns.vue";

const count = ref(0);
const food = ref("taco");
const ticketTot = ref(0);
const ticketAmt = ref(1);
const ticketPrc = ref(0);

const increment = () => count.value++;
const decrement = () => count.value--;
const updateFood = (e: any) => (food.value = e?.target?.value);

const handleTicketAmt = (n: number) => (ticketAmt.value += n);
const noShow = computed(() => Number(ticketPrc.value) <= 0);
const ticketTotal = () => {
  ticketTot.value = ticketPrc.value * ticketAmt.value;
};
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
            <h2 class="font-sans text-xl font-bold">
              Using event modifiers within forms
            </h2>
            <p>
              Testing out the event modifiers within different forms to see how the page
              responds
            </p>
            <p class="text-gray-400 italic"></p>
          </hgroup>
          <h3 class="text-lg font-bold mt-3 mb-1">submitting a form with no event modifiers</h3>
          <p>will cause the page to reload because the form is not sending the data to an actual endpoint</p>
          <form @submit="(e) => (console.log(e))">
           <input type="text" name="username" placeholder="insert username"/>
           <input class="btn-teal" type="submit" value="submit"/>
          </form>

          <h3 class="text-lg font-bold mt-3 mb-1">submitting a form with the <span class="code">@prevent</span> modifier</h3>
          <form @submit.prevent="(e) => (console.log(e))">
           <input type="text" name="username" placeholder="insert username"/>
           <input class="btn-teal" type="submit" value="submit"/>
          </form>

        </section>
        <section class="section-block">
          <hgroup class="mb-2">
            <h2 class="font-sans text-xl font-bold">Updating Count Timer</h2>
            <p>
              Testing out the <span class="code">emit </span> function with the
              <span class="code">@click </span> event to see how it updates state
            </p>
            <p class="text-gray-400 italic">
              So custom event handlers that use the emit keyword allow you to pass data
              that's in a child component all the way back to a parent component. So in a
              way, it similar to useContext within react because the data/prop can get
              updated by a child so that the parent can receive the most updated state.
              Except, with useContext it was also supposed to prevent prop drilling, which
              I don't think the custom events actually resolves. I would have to do more
              experiments to see if it's possible. Okay, well doing a simple google search
              I found out that the custom events are only reliable for child component
              that's only one level down. If you want to have a global data that can be
              shared like useContext, then you need to use
              <span class="code">provide</span> and <span class="code">inject</span>
            </p>
          </hgroup>
          <h3>Choose Tickets</h3>
          <div>
            {{ ticketAmt }} x
            <select v-model="ticketPrc">
              <option value="0">Choose a show</option>
              <option value="1.99">NFL</option>
              <option value="2.99">Drag Queen Show</option>
              <option value="3.99">Slap Boxing Competition</option>
            </select>
          </div>
          <div>
            <AdjustTicketBtns @adjust-ticket="handleTicketAmt" />
            <button class="btn-teal" @click="ticketTotal" :disabled="noShow">
              calculate tickets
            </button>
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
      </main>
    </div>
    <div class="hidden h-14.5 lg:block"></div>
  </div>
</template>
