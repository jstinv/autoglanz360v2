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
              <RouterLink class="nav-link cta-link" to="/buchung" @click="closeMenu">
                Jetzt Termin anfragen
              </RouterLink>
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

const closeMenu = () => {
  const navbarCollapse = document.getElementById('navbarNav')
  if (navbarCollapse.classList.contains('show')) {
    navbarCollapse.classList.remove('show')
  }
}
</script>

<style scoped>
/* Mobile-only styles for the collapsible menu */
@media (max-width: 991.98px) {
  .navbar-collapse {
    background-color: #f8f9fa;
    padding: 0 1rem 1rem 1rem;
  }

  /* Animation start state for mobile */
  .navbar-nav .nav-item {
    opacity: 0;
    transform: translateY(-15px);
    transition: opacity 0.3s ease-out, transform 0.3s ease-out;
  }

  /* Animation end state for mobile when menu is open */
  .navbar-collapse.show .nav-item {
    opacity: 1;
    transform: translateY(0);
  }
}

.nav-link.router-link-exact-active {
  font-weight: 600;
}

.cta-link {
  color: #0056b3 !important;
  font-weight: 600;
  transition: color 0.2s ease-in-out;
}

.cta-link:hover {
  color: #004085 !important;
}
</style>