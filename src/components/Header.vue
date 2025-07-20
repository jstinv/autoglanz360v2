<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top">
      <div class="container">
        <a class="navbar-brand fw-bold" href="#">
          <RouterLink class="nav-link" to="/">Auto-Glanz360</RouterLink>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <RouterLink class="nav-link" to="/" @click="closeMenu">Startseite</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/dienstleistungen" @click="closeMenu"
                >Dienstleistungen</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/galerie" @click="closeMenu">Galerie</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/kontakt" @click="closeMenu">Kontakt</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

// Function to close the navbar after clicking a link
const closeMenu = () => {
  const navbarCollapse = document.getElementById('navbarNav')
  // Check if the collapse menu is already expanded and close it
  if (navbarCollapse.classList.contains('show')) {
    navbarCollapse.classList.remove('show')
  }
}
</script>

<style scoped>
/* Optional: Anpassungen, um das Dropdown sauber zu verstecken */
.navbar-collapse {
  display: none !important;
}

.navbar-collapse.show {
  display: block !important;
}
</style>
