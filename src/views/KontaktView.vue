<script setup></script>

<template>
  <section class="contact container my-5">
    <h2 class="text-center mb-4">Kontaktieren Sie uns</h2>

    <div class="contact-info text-center">
      <p class="lead mb-4">
        Haben Sie Fragen oder möchten Sie mehr über unsere Dienstleistungen erfahren? Zögern Sie
        nicht, uns zu kontaktieren. Wir freuen uns auf Ihre Anfrage!
      </p>

      <!-- Telefonnummer -->
      <p class="mb-3">
        <i class="bi bi-telephone"></i>&nbsp;
        <a href="tel:+491743664793" class="text-reset text-decoration-none footer-link"
          >0174 3664793</a
        >
      </p>

      <!-- E-Mail -->
      <p class="mb-3">
        <i class="bi bi-envelope"></i>&nbsp;
        <a
          href="mailto:autoglanz360@gmx.de?subject=Anfrage%20Angebot%20zur%20Fahrzeugaufbereitung&body=Guten%20Tag,%0A%0Aich%20interessiere%20mich%20für%20eine%20professionelle%20Fahrzeugaufbereitung%20und%20bitte%20Sie%20um%20ein%20unverbindliches%20Angebot.%0A%0AGenauere%20Infos%20zu%20meinem%20Fahrzeug/Anfrage:%0A%3E%0A%0AVielen%20Dank%20im%20Voraus.%0A%0AMit%20freundlichen%20Grüßen"
          class="text-reset text-decoration-none footer-link"
        >
          autoglanz360@gmx.de
        </a>
      </p>

      <!-- Instagram -->
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
  </section>
</template>

<style scoped>
.contact {
  background-color: #f8f9fa;
  padding: 80px 20px; /* Padding für den gesamten Bereich */
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px; /* Maximale Breite des Containers */
}

.contact-info {
  font-size: 1.25rem; /* Größere Schrift für bessere Lesbarkeit */
  line-height: 1.6;
  padding: 20px; /* Padding für die inneren Inhalte */
}

footer .footer-link {
  font-size: 1.2rem;
  color: #333;
  text-decoration: none;
}

footer .footer-link:hover {
  color: #ff9800;
}

.mb-1,
.mb-3,
.mb-4 {
  margin-bottom: 1rem;
}

i {
  color: #0056b3;
  font-size: 1.4rem; /* Größere Icons */
}

@media (max-width: 576px) {
  .contact-info {
    font-size: 1.1rem; /* Etwas kleinere Schrift auf kleinen Bildschirmen */
  }

  i {
    font-size: 1.3rem;
  }
}
</style>
