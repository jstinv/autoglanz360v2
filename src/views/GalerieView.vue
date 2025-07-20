<script setup>
import { ref } from 'vue'

import before1 from '../assets/galleryPictures/mcLaren1.jpg'
import after1 from '../assets/galleryPictures/mcLaren2.jpg'
import before2 from '../assets/galleryPictures/mcLaren2.jpg'
import after2 from '../assets/galleryPictures/mcLaren1.jpg'
import before3 from '../assets/galleryPictures/mcLaren2.jpg'
import after3 from '../assets/galleryPictures/mcLaren1.jpg'
import before4 from '../assets/galleryPictures/mcLaren1.jpg'
import after4 from '../assets/galleryPictures/mcLaren2.jpg'

const images = ref([
  {
    id: 1,
    before: before1,
    after: after1,
    alt: 'McLaren',
    description: 'McLaren MP8 (3 Stufige Politur, Keramik-Versieglung)',
  },
  {
    id: 2,
    before: before2,
    after: after2,
    alt: 'BMW X3',
    description: 'BMW X3 (1 Stufige Politur, Keramik-Versieglung)',
  },
  {
    id: 3,
    before: before3,
    after: after3,
    alt: 'Mercedes S63',
    description: 'Mercedes S63 Coupè (3 Stufige Politur, Keramik-Versieglung)',
  },
  {
    id: 4,
    before: before4,
    after: after4,
    alt: 'Corvette C8',
    description: 'Corvette C8 (3 Stufige Politur, Keramik-Versieglung)',
  },
])
</script>

<template>
  <section class="gallery container my-5">
    <h2 class="text-center mb-4">Galerie – Vorher & Nachher</h2>
    <div class="grid-container">
      <div v-for="image in images" :key="image.id" class="card shadow-sm no-border">
        <div class="before-after-wrapper">
          <img :src="image.before" :alt="image.alt + ' vorher'" class="img before-img" />
          <img :src="image.after" :alt="image.alt + ' nachher'" class="img after-img" />
        </div>
        <div class="image-description mt-2 text-center">
          <p>{{ image.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

/* Entferne border und Schatten komplett von card */
.card.no-border {
  border: none !important;
  box-shadow: none !important;
  background: transparent;
}

/* Container für Bilder */
.before-after-wrapper {
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border-radius: 10px;
  aspect-ratio: 4 / 3;

  border: none !important;
  outline: none !important;
  box-shadow: none !important;
  background-color: transparent;
}

.img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;

  top: 0;
  left: 0;

  transition: opacity 0.4s ease;

  border: none !important;
  outline: none !important;
  box-shadow: none !important;
  background-color: transparent;
}

.before-img {
  opacity: 1;
  z-index: 1;
  position: relative;
}

.after-img {
  opacity: 0;
  z-index: 2;
}

.before-after-wrapper:hover .after-img {
  opacity: 1;
}

.before-after-wrapper:hover .before-img {
  opacity: 0;
}

/* Für kleinere Bildschirme 1 Bild pro Zeile */
@media (max-width: 576px) {
  .grid-container {
    grid-template-columns: 1fr;
  }
}

/* Styling für die Bildbeschreibung */
.image-description {
  font-size: 0.9rem;
  color: #333;
  padding: 0.5rem;
  line-height: 1.4;
}

.image-description p {
  margin: 0;
  color: #666;
}
</style>
