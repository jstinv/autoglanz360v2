import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Dienstleistungen from '../views/DienstleistungenView.vue'
import Galerie from '../views/GalerieView.vue'
import Kontakt from '../views/KontaktView.vue'
import Impressum from '../views/ImpressumView.vue'
import Agb from '../views/AgbView.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/dienstleistungen', name: 'Dienstleistungen', component: Dienstleistungen },
  { path: '/galerie', name: 'Galerie', component: Galerie },
  { path: '/kontakt', name: 'Kontakt', component: Kontakt },
  { path: '/impressum', name: 'Impressum', component: Impressum },
  { path: '/agb', name: 'AGB', component: Agb },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    // Immer ganz nach oben scrollen beim Seitenwechsel
    return { top: 0 }
  },
})

export default router
