<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <!-- Hero Section -->
  <section class="hero-section text-center py-5 bg-light">
    <div class="container">
      <img
        src="/images/logo.jpg"
        alt="Auto-Glanz360 Logo"
        class="hero-logo img-fluid mb-4"
      />
      <p class="lead mb-4">Professionelle Fahrzeugaufbereitung und Pflege in Schney</p>
      <RouterLink to="/buchung" class="btn btn-primary btn-lg me-2">Jetzt Termin anfragen</RouterLink>
      <RouterLink to="/dienstleistungen" class="btn btn-secondary btn-lg">Unsere Dienstleistungen</RouterLink>
    </div>
  </section>

  <section class="py-5">
    <h2 class="text-center mb-5">Warum Auto-Glanz360?</h2>
    <div class="row text-center g-4">
      <div class="col-md-4">
        <div class="feature-icon bg-primary bg-gradient text-white rounded-3 mb-3">
          <i class="bi bi-gem"></i>
        </div>
        <h5 class="fw-bold">Höchste Qualität</h5>
        <p class="text-muted">
          Wir verwenden nur hochwertige Produkte und Techniken, um das beste Ergebnis für Ihr
          Fahrzeug zu erzielen.
        </p>
      </div>
      <div class="col-md-4">
        <div class="feature-icon bg-primary bg-gradient text-white rounded-3 mb-3">
          <i class="bi bi-heart-fill"></i>
        </div>
        <h5 class="fw-bold">Leidenschaft & Detail</h5>
        <p class="text-muted">Jedes Fahrzeug wird mit größter Sorgfalt und Liebe zum Detail behandelt, als wäre es unser eigenes.</p>
      </div>
      <div class="col-md-4">
        <div class="feature-icon bg-primary bg-gradient text-white rounded-3 mb-3">
          <i class="bi bi-graph-up-arrow"></i>
        </div>
        <h5 class="fw-bold">Werterhalt</h5>
        <p class="text-muted">Eine professionelle Aufbereitung schützt den Lack und erhält den Wert Ihres Fahrzeugs langfristig.</p>
      </div>
    </div>
  </section>

  <section class="py-5 bg-light">
    <div class="container">
      <h2 class="text-center mb-4">Einblicke in unsere Arbeit</h2>
      <div class="row g-4 justify-content-center">
        <div class="col-md-5">
          <RouterLink to="/galerie">
            <img src="/gallery/mcLaren1.webp" alt="Aufbereitetes Fahrzeug 1" class="img-fluid rounded shadow-sm gallery-preview-img" />
          </RouterLink>
        </div>
        <div class="col-md-5">
          <RouterLink to="/galerie">
            <img src="/gallery/mcLaren2.webp" alt="Aufbereitetes Fahrzeug 2" class="img-fluid rounded shadow-sm gallery-preview-img" />
          </RouterLink>
        </div>
      </div>
      <div class="text-center mt-4">
        <RouterLink to="/galerie" class="btn btn-primary">Zur Galerie</RouterLink>
      </div>
    </div>
  </section>

  <section class="py-5">
    <div class="container text-center">
      <h2 class="mb-3">Bereit für den perfekten Glanz?</h2>
      <p class="lead mb-4 mx-auto" style="max-width: 600px;">
        Kontaktieren Sie uns noch heute für ein unverbindliches Angebot und lassen Sie Ihr Fahrzeug
        in neuem Licht erstrahlen.
      </p>
      <RouterLink to="/buchung" class="btn btn-primary btn-lg">Jetzt unverbindlich anfragen</RouterLink>
    </div>
  </section>
</template>

<style scoped>
.hero-logo {
  max-height: 250px;
}

.feature-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  font-size: 2rem;
}

.gallery-preview-img {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.gallery-preview-img:hover {
  transform: scale(1.03);
  box-shadow: 0 0.5rem 1.5rem rgba(0,0,0,0.2) !important;
}

.btn-primary {
  background-color: #0056b3;
  border-color: #0056b3;
  transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;
}
.btn-primary:hover {
  background-color: #004085;
  border-color: #003772;
}
</style>
