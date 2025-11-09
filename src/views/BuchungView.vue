<template>
  <section class="booking container my-5">
    <h2 class="text-center mb-4">Unverbindliche Buchungsanfrage</h2>
    <p class="lead text-center mb-4">
      Bitte füllen Sie das Formular aus, um eine professionelle Fahrzeugaufbereitung anzufragen. Wir
      melden uns schnellstmöglich bei Ihnen mit einem individuellen Angebot.
    </p>

    <div class="row justify-content-center">
      <div class="col-md-8">
        <form @submit.prevent="sendBooking" class="p-4 shadow-sm bg-light rounded">
          <h5 class="mb-3">Ihre Kontaktdaten</h5>
          <div class="mb-3">
            <label for="name" class="form-label">Ihr Name*</label>
            <input type="text" class="form-control" id="name" v-model="form.name" required @blur="touched.name = true" :class="{ 'is-invalid': touched.name && !form.name.trim() }" />
            <div v-if="touched.name && !form.name.trim()" class="invalid-feedback">Bitte geben Sie Ihren Namen an.</div>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Ihre E-Mail-Adresse*</label>
            <input type="email" class="form-control" id="email" v-model="form.email" required @blur="touched.email = true" :class="{ 'is-invalid': touched.email && !isEmailValid }" />
            <div v-if="touched.email && !isEmailValid" class="invalid-feedback">Bitte geben Sie eine gültige E-Mail-Adresse an.</div>
          </div>
          <div class="mb-3">
            <label for="phone" class="form-label">Ihre Telefonnummer*</label>
            <input type="tel" class="form-control" id="phone" v-model="form.phone" required @blur="touched.phone = true" :class="{ 'is-invalid': touched.phone && !isPhoneValid }" />
            <div v-if="touched.phone && !isPhoneValid" class="invalid-feedback">Bitte geben Sie eine gültige Telefonnummer an.</div>
          </div>

          <hr />
          <h5 class="mb-3">Fahrzeug- & Service-Details</h5>

          <div class="mb-3">
            <label for="car_model" class="form-label">Marke und Modell*</label>
            <input
              type="text"
              class="form-control"
              id="car_model"
              v-model="form.car_model"
              required
              @blur="touched.car_model = true"
              :class="{ 'is-invalid': touched.car_model && !form.car_model.trim() }"
            />
            <div v-if="touched.car_model && !form.car_model.trim()" class="invalid-feedback">Bitte geben Sie Marke und Modell Ihres Fahrzeugs an.</div>
          </div>
          <div class="mb-3">
            <label class="form-label">Gewünschte Dienstleistung(en)*</label>
            <div v-for="service in services" :key="service.id" class="mb-2">
                <h6 class="mt-2 text-muted">{{ service.title }}</h6>
                <div v-for="pkg in service.packages" :key="pkg.name" class="form-check">
                    <input 
                        class="form-check-input" 
                        type="checkbox" 
                        :value="`${service.title} - ${pkg.name}`" 
                        :id="`pkg-${service.id}-${pkg.name}`" 
                        v-model="form.selectedServices" 
                        @change="touched.selectedServices = true">
                    <label class="form-check-label" :for="`pkg-${service.id}-${pkg.name}`">{{ pkg.name }}</label>
                </div>
            </div>
            <div v-if="touched.selectedServices && form.selectedServices.length === 0" class="text-danger small mt-1">Bitte wählen Sie mindestens eine Dienstleistung aus.</div>
          </div>
          
          <div class="mb-3">
            <label for="additional_data" class="form-label">Zusätzliche Infos / Wünsche</label>
            <textarea
              class="form-control"
              id="additional_data"
              rows="3"
              v-model="form.additional_data"
              placeholder="Haben Sie spezielle Wünsche oder Fragen? (z.B. Terminvorstellungen, Zustand des Autos, Spezielle Dienstleisungen, etc.)"
            ></textarea>
          </div>

          <div class="form-check mb-3">
            <input
              class="form-check-input"
              type="checkbox"
              id="privacyCheck"
              v-model="form.privacyAccepted"
              @change="touched.privacyAccepted = true"
              :class="{ 'is-invalid': touched.privacyAccepted && !form.privacyAccepted }"
            />
            <label class="form-check-label" for="privacyCheck">
              Ich habe die <router-link to="/datenschutz" target="_blank">Datenschutzerklärung</router-link> zur Kenntnis genommen und stimme der Verarbeitung meiner Daten zu.*
            </label>
          </div>

          <div class="text-center mt-4">
            <button type="submit" class="btn btn-primary btn-lg" :disabled="isSending || isFormInvalid">
              <span v-if="isSending" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
              {{ isSending ? 'Wird gesendet...' : 'Anfrage senden' }}
            </button>
          </div>
          <div v-if="message" :class="messageClass" class="alert mt-3 text-center" role="alert">
            {{ message }}
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import emailjs from '@emailjs/browser'
import { servicesData as services } from '../components/services/servicesData.js'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  car_model: '',
  selectedServices: [],
  additional_data: '',
  privacyAccepted: false
})

const isSending = ref(false)
const touched = reactive({
  name: false,
  email: false,
  phone: false,
  car_model: false,
  selectedServices: false,
  privacyAccepted: false
});

const message = ref('')
const messageClass = ref('')

const isEmailValid = computed(() => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(form.email);
});

const isPhoneValid = computed(() => {
  const phoneRegex = /^[0-9\s+()-]+$/;
  return form.phone.trim().length > 5 && phoneRegex.test(form.phone);
});

const isFormInvalid = computed(() => {
  return (
    !form.name.trim() ||
    !isEmailValid.value ||
    !isPhoneValid.value ||
    !form.car_model.trim() ||
    form.selectedServices.length === 0 ||
    !form.privacyAccepted
  )
})

const SERVICE_ID = 'service_98n5yye'//icloud service
const TEMPLATE_ID = 'template_buchung'//mail template

const sendBooking = async () => {
  // Mark all fields as touched to show all errors
  Object.keys(touched).forEach(key => {
    touched[key] = true;
  });

  if (isFormInvalid.value) return;

  isSending.value = true
  message.value = ''
  messageClass.value = ''

  const templateParams = {
    from_name: form.name,
    from_email: form.email,
    phone_number: form.phone,
    car_model: form.car_model,
    service_details: form.selectedServices.join(', '),
    additional_data: form.additional_data || 'Keine zusätzlichen Informationen.'
  }

  try {
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
    message.value = 'Ihre Buchungsanfrage wurde erfolgreich gesendet. Wir melden uns in Kürze bei Ihnen mit einem Angebot!'
    messageClass.value = 'alert-success'
    form.name = ''
    form.email = ''
    form.phone = ''
    form.car_model = ''
    form.selectedServices = []
    form.additional_data = ''
    form.privacyAccepted = false
    // Reset touched state
    Object.keys(touched).forEach(key => {
      touched[key] = false;
    });
  } catch (error) {
    console.error('EmailJS Fehler beim Senden:', error)
    message.value = 'Beim Senden der Anfrage ist ein Fehler aufgetreten. Sollte der Fehler erneut auftreten, senden Sie ihre Daten gerne direkt via E-Mail an autoglanz360@gmx.de\n Fehler: ' + error.status
    messageClass.value = 'alert-danger'
  } finally {
    isSending.value = false
  }
}
</script>

<style scoped>
.booking {
  max-width: 900px;
}

.btn-primary {
  background-color: #0056b3;
  border-color: #0056b3;
}
.btn-primary:hover {
  background-color: #004085;
  border-color: #004085;
}
</style>