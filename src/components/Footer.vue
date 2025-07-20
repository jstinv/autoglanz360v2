<template>
  <footer class="bg-light text-center text-lg-start mt-auto shadow-sm">
    <div class="container p-4">
      <div class="row">
        <div class="col-lg-6 col-md-12 mb-4 mb-md-0 text-lg-start text-center">
          <h5 class="text-uppercase fw-bold">Auto-Glanz360</h5>
          <p>Professionelle Fahrzeugaufbereitung &amp; Pflege</p>
        </div>

        <div class="col-lg-3 col-md-6 mb-4 mb-md-0 text-lg-start text-center">
          <h6 class="text-uppercase fw-bold">Rechtliches</h6>
          <ul class="list-unstyled mb-0">
            <li>
              <RouterLink to="/agb" class="text-reset text-decoration-none footer-link"
                >AGB</RouterLink
              >
            </li>
            <li>
              <RouterLink to="/impressum" class="text-reset text-decoration-none footer-link"
                >Impressum</RouterLink
              >
            </li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-6 mb-4 mb-md-0 text-lg-start text-center">
          <h6 class="text-uppercase fw-bold">Kontakt</h6>

          <p class="mb-1">
            <i class="bi bi-telephone"></i>&nbsp;
            <a href="tel:+491743664793" class="text-reset text-decoration-none footer-link"
              >0174 3664793</a
            >
          </p>

          <p class="mb-1">
            <i class="bi bi-envelope"></i>&nbsp;
            <a
              href="mailto:autoglanz360@gmx.de?subject=Anfrage%20Angebot%20zur%20Fahrzeugaufbereitung&body=Guten%20Tag,%0A%0Aich%20interessiere%20mich%20für%20eine%20professionelle%20Fahrzeugaufbereitung%20und%20bitte%20Sie%20um%20ein%20unverbindliches%20Angebot.%0A%0AGenauere%20Infos%20zu%20meinem%20Fahrzeug/Anfrage:%0A%3E%0A%0AVielen%20Dank%20im%20Voraus.%0A%0AMit%20freundlichen%20Grüßen"
              class="text-reset text-decoration-none footer-link"
            >
              autoglanz360@gmx.de
            </a>
          </p>

          <p class="mb-0">
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
        </div>
      </div>
    </div>

    <div class="text-center p-2 bg-secondary text-white small">
      © 2025 Auto-Glanz360 - Alle Rechte vorbehalten
    </div>
  </footer>
</template>

<style scoped>
.footer-link {
  transition:
    color 0.3s ease,
    transform 0.2s ease;
}

.footer-link:hover,
.footer-link:focus {
  color: #ff9800;
  transform: scale(1.05);
  text-decoration: none;
  outline: none;
}

@media (max-width: 991.98px) {
  footer .text-lg-start {
    text-align: center !important;
  }

  footer .row > div {
    margin-bottom: 1.5rem;
  }
}
</style>
