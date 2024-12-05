<template>
    <header>
      <div class="logo">
        SparkFoot
        <img :src="shoes" alt="Logo" class="logo-img" />
      </div>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link :to="{ name: 'Aboutus' }">About us</router-link>
        <router-link to="/categories">Categories</router-link>
        <router-link :to="{ name: 'contactus' }">Contact us</router-link>
        <div class="form-search">
        <input type="text" v-model="input" placeholder="Search here..." />
        <font-awesome-icon class="icon-white" :icon="['fas', 'magnifying-glass']"/>
        </div>
        <div class="icons">
          <font-awesome-icon :icon="['fas', 'cart-shopping']"/>
          <font-awesome-icon :icon="['fas', 'user']" />
        </div>
      </nav>
    </header>
  </template>
  <script setup>
import Aboutus from '../Views/Aboutus.vue';
import shoes from '../assets/images/logo.png';  
  import { ref } from "vue";
  let input = ref("");

  const fruits = ["apple", "banana", "orange"];
  function filteredList() {
  return fruits.filter((fruit) =>
    fruit.toLowerCase().includes(input.value.toLowerCase())
  );
}   
</script>

  
  <style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
  header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px 30px;
    background-color: black;
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
  }
  
  body {
    margin-top: 4rem;
    background-color: white;
  }
  
  header .logo {
    font-size: 1.5rem;
    font-weight: bold;
    display: flex;
    align-items: center;
  }
  
  .logo-img {
    width: 50px;    
    height: auto;    
    margin-left: 10px;   
    border-radius: 10px;  
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);  
  }
  
  nav {
    display: flex;
    gap: 1rem;
     
  }
  
  nav a {
    color: white;
    text-decoration: none;
  }
  
  nav a:hover {
    background-color: rgb(255, 255, 255);
    color: black;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    height: auto;
    width: auto;
    border-radius: 15px;
  }
  
  .icon-white{
    position: absolute;
    color:white;
    margin-left: 300px;
    margin-top: -25px;  
  }
  input {
  position: relative;
  display: block;
  width: 330px;
  padding: 10px  ;
  background-color: rgb(138, 138, 138);
  font-size: 12px;
  border: none;
  border-radius: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  
}
input::placeholder {
  color: white;  
  font-style: italic;  
  opacity: 0.8;  
}
.icons{
  padding-left: 80px;
  color: white;
  display: flex;
  justify-content: space-between;
  gap: 30px;
  font-size: 20px;
  margin-top: 5px;
}

  </style>
  