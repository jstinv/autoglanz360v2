<template>
  <footer class="bg-light text-center text-lg-start mt-auto shadow-sm">
    <div class="container p-4">
      <div class="row">
        <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
          <h5 class="text-uppercase fw-bold">Auto-Glanz360</h5>
          <p>
            Professionelle Fahrzeugaufbereitung & Pflege.<br />
            Telefon:
            <a class="text-reset text-decoration-none" href="tel:+491743664793"> +49 174 3664793</a
            ><br />
            E-Mail:
            <a
              class="text-reset text-decoration-none"
              href="mailto:autoglanz360@gmx.de?subject=Anfrage%20zu%20Dienstleistungen&body=Guten%20Tag,%20ich%20habe%20eine%20Frage%20bezüglich%20ihrer%20Dienstleistungen.%0A%0A>%0A%0AMit%20freundlichen%20Grüßen,%0A"
            >
              autoglanz360@gmx.de
            </a>
          </p>
        </div>

        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h6 class="text-uppercase fw-bold">Links</h6>
          <ul class="list-unstyled mb-0">
            <li><RouterLink to="/" class="text-reset text-decoration-none">Home</RouterLink></li>
            <li>
              <RouterLink to="/fahrzeugaufbereitung" class="text-reset text-decoration-none"
                >Fahrzeugaufbereitung</RouterLink
              >
            </li>
            <li>
              <RouterLink to="/dienstleistungen" class="text-reset text-decoration-none"
                >Dienstleistungen</RouterLink
              >
            </li>
            <li>
              <RouterLink to="/galerie" class="text-reset text-decoration-none">Galerie</RouterLink>
            </li>
            <li>
              <RouterLink to="/kontakt" class="text-reset text-decoration-none">Kontakt</RouterLink>
            </li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h6 class="text-uppercase fw-bold">Folge uns</h6>
          <a href="#" class="me-3 text-reset"> <i class="bi bi-facebook"></i> Facebook </a><br />
          <a href="#" class="me-3 text-reset"> <i class="bi bi-instagram"></i> Instagram </a><br />
          <a href="#" class="text-reset"> <i class="bi bi-twitter"></i> Twitter </a>
        </div>
      </div>
    </div>

    <div class="text-center p-1 bg-secondary text-white">
      © 2025 AutoGlanz360 - Alle Rechte vorbehalten
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
