<template>
  <section class="container my-5">
    <h2 class="text-center mb-5">Unsere Dienstleistungen</h2>
    <div class="row g-4 justify-content-center">
      <div v-for="service in services" :key="service.id" class="col-12 col-lg-4 d-flex">
        <div class="card h-100 shadow-sm p-4 hover-lift w-100">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title mb-3">{{ service.title }}</h5>
            <div v-for="(pkg, index) in service.packages" :key="pkg.name" class="mb-4">
              <div class="d-flex justify-content-between align-items-baseline">
                <h6 class="fw-bold">{{ pkg.name }}</h6>
                <span class="badge bg-primary rounded-pill">{{ pkg.price }}</span>
              </div>
              <ul class="ps-3 mt-2">
                <li v-for="feature in pkg.features" :key="feature">{{ feature }}</li>
              </ul>
              <hr v-if="index < service.packages.length - 1" class="my-3" />
            </div>
            <p v-if="service.note" class="mt-auto mb-0"><small class="fst-italic">{{ service.note }}</small></p>
          </div>
        </div>
      </div>
    </div>
    <br /><br />
    <hr />
  </section>
  <section class="container my-5 text-center">
    <div class="p-4 rounded-3 bg-light d-inline-block">
      <h4 class="mb-3"><i class="bi bi-info-circle-fill text-primary me-2"></i>Gut zu wissen</h4>
      <p class="mx-auto" style="max-width: 700px">
        Die hier genannten Preise dienen als Orientierung. Da jedes Fahrzeug einzigartig ist, hängt
        der endgültige Preis vom genauen Zustand, dem Fahrzeugtyp und dem gewünschten
        Leistungsumfang ab.
        <br /><br />
        Für ein präzises und faires Angebot, das perfekt auf Ihre Wünsche zugeschnitten ist,
        <RouterLink to="/buchung" class="fw-bold text-decoration-none" style="color: #0056b3"
          >fordern Sie einfach eine unverbindliche Anfrage an</RouterLink
        >.
      </p>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { servicesData as services } from '../components/services/servicesData.js'
</script>

<style scoped>
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.hover-lift:hover {
  transform: translateY(-5px);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}
</style>
