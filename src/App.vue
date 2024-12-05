<script setup>
import Navbar from "./components/Navbar.vue";
import { RouterView } from "vue-router";
import Footer from "./components/Footer.vue";
import Promobox from "./components/Promobox.vue";
</script>

<template>
  <div class="layout">
    <Navbar />
    <div class= "promobox-container ">
      <Promobox />
    </div>
    <RouterView />
    <Footer />
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
body {
  background-color: white;
}
.promobox-container{
  background-color: white;
  padding: 20px;
  box-shadow: 0 2px 10 px rgba(0, 0, 0, 0.1);
  z-index: 1;
}
RouterView{
  flex: 1;
}
footer {
  margin-top: auto;
}
</style>