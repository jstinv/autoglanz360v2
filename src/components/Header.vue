<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top">
      <div class="container">
        <a class="navbar-brand fw-bold" href="#">AutoGlanz360</a>
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
              <RouterLink class="nav-link" to="/">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/fahrzeugaufbereitung"
                >Fahrzeugaufbereitung</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/dienstleistungen">Dienstleistungen</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/galerie">Galerie</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/kontakt">Kontakt</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
