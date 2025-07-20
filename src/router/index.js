import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Fahrzeugaufbereitung from '../views/FahrzeugaufbereitungView.vue'
import Dienstleistungen from '../views/DienstleistungenView.vue'
import Galerie from '../views/GalerieView.vue'
import Kontakt from '../views/KontaktView.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/fahrzeugaufbereitung', name: 'Fahrzeugaufbereitung', component: Fahrzeugaufbereitung },
  { path: '/dienstleistungen', name: 'Dienstleistungen', component: Dienstleistungen },
  { path: '/galerie', name: 'Galerie', component: Galerie },
  { path: '/kontakt', name: 'Kontakt', component: Kontakt },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
