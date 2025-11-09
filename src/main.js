import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import emailjs from '@emailjs/browser'

import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

emailjs.init('ZPyNqt215CUD9S_nO') 

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')