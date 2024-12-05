<script setup></script>

<template>
  <section>
    <hr />
    <div class="flex items-center px-3">
      <img src="@/assets/images/NAF.png" width="120" height="120" />
      <div class="py-[10px] pl-1">
        <h3 class="font-semibold text-sm">T-shirt</h3>
        <span class="text-blue-500 font-extralight text-xs">$15</span>
        <div class="flex items-center space-x-1 py-2">
          <div
            class="flex items-center justify-center border-2 border-black rounded w-6 h-6"
          >
            1
          </div>
          <div
            class="flex items-center justify-center border-2 border-black w-4 h-4"
          >
            +
          </div>
          <div
            class="flex items-center justify-center border-2 border-black w-4 h-4"
          >
            -
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center pl-64 space-x-5">
        <span class="font-bold text-base">$15</span>
        <i class="pi pi-times-circle text-gray-300"></i>
      </div>
    </div>
    <hr />
  </section>
</template>
