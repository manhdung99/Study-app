<script setup>
import Header from './components/header/Header.vue';
import Content from './components/content/Content.vue';
import Navbar from './components/navbar/Navbar.vue';
</script>

<template>
  <header>
    <div>
      <Header />
    </div>
  </header>
  <main class="flex">
    <div class="w-1/5">
    <Navbar />
    </div>
    <div>
    <Content />
    </div>
  </main>
</template>


