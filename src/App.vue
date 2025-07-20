<template>
  <div class="d-flex flex-column min-vh-100">
    <Header />
    <main class="flex-grow-1 container my-4">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { RouterView } from 'vue-router'
</script>
