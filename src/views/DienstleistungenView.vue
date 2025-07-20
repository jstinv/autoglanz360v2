<template>
  <section class="container my-5">
    <h2 class="text-center mb-5">Unsere Dienstleistungen</h2>
    <div class="row g-4">
      <div class="col-12 col-lg-4">
        <div
          class="card h-100 shadow-sm p-4"
          @mouseenter="hover = 'innen'"
          @mouseleave="hover = null"
          :class="{ 'shadow-lg hover-lift': hover === 'innen' }"
        >
          <div class="card-body">
            <h5 class="card-title mb-3">Innenaufbereitung</h5>
            <ul class="ps-3 mb-0">
              <li>
                Intensive Reinigung von Cockpit, Kunststoffteilen, Einstiegsleisten und ABC-Säulen
              </li>
              <li>Tiefgründige Nassreinigung</li>
              <li>Behandlung mit Tornado-Gerät inklusive Dachhimmel und Fleckenentfernung</li>
              <li>Fleckenentfernung an Türen und Sitzbezügen</li>
              <li>Reinigung von Textil und Leder, inklusive Politur mit Lederschutz-Creme*</li>

              <li>Fensterreinigung innen</li>
              <li>Abschließende Versiegelung von Cockpit und Kunststoffteilen</li>
              <li><small class="fst-italic">*Lederschutz-Creme gegen Aufpreis</small></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-4">
        <div
          class="card h-100 shadow-sm p-4"
          @mouseenter="hover = 'aussen'"
          @mouseleave="hover = null"
          :class="{ 'shadow-lg hover-lift': hover === 'aussen' }"
        >
          <div class="card-body">
            <h5 class="card-title mb-3">Außenaufbereitung</h5>
            <ul class="ps-3 mb-0">
              <li>Intensive Fahrzeugvorwäsche</li>
              <li>Entfernung von Insekten, Teer, Flugrost von der Oberfläche</li>
              <li>Handwäsche des Fahrzeugs</li>
              <li>Reinigung der Glasflächen</li>
              <li>Lackpolitur (ein- bis dreistufig)</li>
              <li>Hochwertige Keramik-Versiegelung</li>
              <li>
                <small class="fst-italic">Standzeit der Versiegelung variiert je nach Pflege</small>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-4">
        <div
          class="card h-100 shadow-sm p-4 d-flex flex-column justify-content-center"
          @mouseenter="hover = 'felgen'"
          @mouseleave="hover = null"
          :class="{ 'shadow-lg hover-lift': hover === 'felgen' }"
        >
          <div class="card-body">
            <h5 class="card-title mb-3">Felgenpflege & Keramikversiegelung</h5>
            <ul class="ps-3 mb-0">
              <li>Gründliche Felgenreinigung</li>
              <li>Professionelle Keramik-Versiegelung für dauerhaften Schutz und Glanz</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <br /><br />
    <hr />
  </section>

  <section class="container my-5">
    <h2 class="text-center mb-4">Preisinformationen</h2>
    <p class="text-center mx-auto" style="max-width: 700px; font-size: 1.1rem">
      Die Preise veriieren je nach Umfang der Leistung, Fahrzeugtyp und Zustand des Fahrzeugs.
      <br />
      Für einen genauen Preis nehmen Sie bitte
      <a
        href="mailto:autoglanz360@gmx.de?subject=Anfrage%20Angebot%20zur%20Fahrzeugaufbereitung&body=Guten%20Tag,%0A%0Aich%20interessiere%20mich%20für%20eine%20professionelle%20Fahrzeugaufbereitung%20und%20bitte%20Sie%20um%20ein%20unverbindliches%20Angebot.%0A%0AGenauere%20Infos%20zu%20meinem%20Fahrzeug/Anfrage:%0A%3E%0A%0AVielen%20Dank%20im%20Voraus.%0A%0AMit%20freundlichen%20Grüßen"
        style="color: #0056b3"
        class="text-decoration-none"
        >Kontakt mit uns auf</a
      >. Hier erhalten Sie ein individuelles Angebot nach Ihren Anforderungen.
    </p>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const hover = ref(null)
</script>

<style scoped>
.hover-lift {
  transform: translateY(-5px);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}
</style>
