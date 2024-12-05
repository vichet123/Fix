<script setup>
import CheckoutComponent from "@/components/CheckoutComponent.vue";
</script>

<template>
  <section>
    <div class="flex justify-center items-center mt-10">
      <div class="w-[750px] h-auto">
        <div class="flex justify-between items-center px-10">
          <img src="@/assets/images/Brand.png" width="200" height="80" />
          <div class="flex items-center justify-center">
            <i class="pi pi-question-circle text-black"></i>
            <span class="pl-1 font-semibold text-base">Need Help</span>
          </div>
        </div>
        <div class="bg-gray-50 w-[750px] h-auto pt-[10px] pb-5">
          <div class="flex items-center pl-[10px]">
            <i class="pi pi-angle-left"></i>
            <span class="pl-[1px] py-3 text-base">Back</span>
          </div>
          <div class="flex items-center justify-center">
            <div class="border-2 border-black w-[550px]">
              <h1
                class="text-blue-500 flex items-center justify-center py-3 text-2xl font-extrabold"
              >
                Checkout
              </h1>
              <div class="flex pl-10">
                <i class="pi pi-shopping-bag text-blue-500"></i>
                <span class="text-blue-500 text-sm font-extralight pl-[5px]"
                  >0 items</span
                >
              </div>
              <div class="h-auto pb-7 pt-4">
                <!-- CheckoutComponent -->
                <CheckoutComponent />
              </div>
              <div class="flex justify-center mb-6">
                <div
                  class="flex items-center justify-between bg-blue-500 border-2 border-black w-[360px] h-[50px] px-5"
                >
                  <span class="text-white font-semibold text-xl">Checkout</span>
                  <div
                    class="flex items-center justify-center bg-white h-[40px] px-10 rounded font-bold text-lg"
                  >
                    $0
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
