<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="contact container my-5">
    <h2 class="text-center mb-4">Kontakt & Anfahrt</h2>

    <div class="contact-info text-center">
      <p class="lead mb-4">
        Sie möchten einen Termin vereinbaren oder ein unverbindliches Angebot anfordern?
        Nutzen Sie unseren bevorzugten Weg:
      </p>
      
      <p class="mb-5">
        <i class="bi bi-calendar-check-fill text-primary me-2"></i>
        <RouterLink 
          to="/buchung" 
          class="text-decoration-none fw-bold fs-5"
          style="color: #0056b3;"
        >
          Zum Online-Buchungsformular
        </RouterLink>
      </p>

      <p class="lead mt-4 mb-3">
        Alternativ erreichen Sie uns hier direkt:
      </p>

      <p class="mb-3">
        <i class="bi bi-telephone"></i>&nbsp;
        <a href="tel:+491743664793" class="text-reset text-decoration-none footer-link"
          >0174 3664793</a
        >
      </p>

      <p class="mb-3">
        <i class="bi bi-envelope"></i>&nbsp;
        <a
          href="mailto:autoglanz360@gmx.de"
          class="text-reset text-decoration-none footer-link"
        >
          autoglanz360@gmx.de
        </a>
      </p>

      <p class="mb-5">
        <i class="bi bi-instagram"></i>&nbsp;
        <a
          href="https://www.instagram.com/auto_glanz360"
          target="_blank"
          class="text-reset text-decoration-none footer-link"
          rel="noopener noreferrer"
        >
          auto_glanz360
        </a>
      </p>

      <h5 class="mt-5">Standort</h5>
      <p class="mb-0">
        Wir sind in 96215 Schney für Sie da. <br>Bitte vereinbaren Sie immer vorab einen Termin!
      </p>
    </div>
  </section>
</template>

<style scoped>
.contact {
  max-width: 700px;
}

.footer-link:hover {
  text-decoration: underline !important;
}
</style>