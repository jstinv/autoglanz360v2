<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const images = ref([
  {
    id: 1,
    sources: ['/gallery/mcLaren1.webp', '/gallery/mcLaren2.webp'],
    currentIndex: 0,
    isLoading: true,
    alt: 'McLaren MP8',
    description: 'McLaren MP8 (3 Stufige Politur, Keramik-Versieglung)',
  },
])

let intervalId = null

onMounted(() => {
  intervalId = setInterval(() => {
    images.value.forEach((imageGroup) => {
      imageGroup.currentIndex = (imageGroup.currentIndex + 1) % imageGroup.sources.length
    })
  }, 4000)
})

onUnmounted(() => {
  clearInterval(intervalId)
})

const onImageLoad = (imageGroup) => {
  // Hide spinner only after the first image of a group is loaded
  if (imageGroup.isLoading) {
    imageGroup.isLoading = false;
  }
}
</script>

<template>
  <section class="gallery container my-5">
    <h2 class="text-center mb-4">Galerie</h2>
    <p class="lead text-center">
      Hier können Sie einige der bereits aufbereiteten Fahrzeuge sehen.
    </p>
    <br />
    <div class="grid-container">
      <div v-for="imageGroup in images" :key="imageGroup.id" class="card shadow-sm no-border">
        <div class="slideshow-wrapper">
          <div v-if="imageGroup.isLoading" class="spinner-container">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
          <template v-for="(source, index) in imageGroup.sources" :key="source">
            <img
              :src="source"
              :alt="imageGroup.alt"
              class="img-fluid slideshow-image"
              :class="{ 'active': index === imageGroup.currentIndex }"
              loading="lazy"
              decoding="async"
              @load="onImageLoad(imageGroup)"
            />
          </template>
        </div>
        <div class="image-description mt-2 text-center">
          <p>{{ imageGroup.description }}</p>
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
.card.no-border {
  border: none !important;
  box-shadow: none !important;
  background: transparent;
}
.slideshow-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  aspect-ratio: 4 / 3;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}
.slideshow-wrapper:hover {
  transform: scale(1.03);
}
.slideshow-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.8s ease-in-out;
}
.slideshow-image.active {
  opacity: 1;
}

.spinner-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
/* kleine Bildschirme 1 Bild pro Zeile */
@media (max-width: 576px) {
  .grid-container {
    grid-template-columns: 1fr;
  }
}
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
