<script setup>
import { defineProps } from "vue";

defineProps({
  discount: String,
  image: String,
  title: Text,
  price: String,
  button: String,
});
</script>

<template>
  <section>
    <div
      class="relative flex flex-col items-center border border-black rounded-[10px] w-56 h-[260px] p-[10px]"
    >
      <div
        class="absolute bg-yellow-300 text-sm px-[10px] py-1 rounded-3xl font-medium top-2 right-2"
      >
        {{ discount }}
      </div>
      <img :src="image" width="150" height="150" />
      <p>{{ title }}</p>
      <br />
      <div class="flex flex-row items-center gap-x-14">
        <p class="text-gray-400">{{ price }}</p>
        <button
          class="flex flex-row items-center border-2 border-solid border-black py-1 px-2 rounded"
        >
          <i class="pi pi-shopping-cart"></i>
          <span class="pl-2">{{ button }}</span>
        </button>
      </div>
    </div>
  </section>
</template>
