<script setup>
import Header from "./components/header/Header.vue";
import Content from "./components/content/Content.vue";
import Navbar from "./components/navbar/Navbar.vue";
</script>

<template>
  <main class="flex">
    <div class="">
      <Navbar />
    </div>
    <div class="flex-1">
      <router-view></router-view>
    </div>
    <div class="w-[200px] flex justify-center " >
      Avatar
    </div>
  </main>
</template>


