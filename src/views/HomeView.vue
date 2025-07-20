<script setup></script>

<template>
  <section class="hero text-center py-5 bg-light container-fluid">
    <div class="mx-auto" style="max-width: 90vb">
      <img
        src="../components/images/logo.jpg"
        alt="AutoGlanz360"
        class="mb-3 img-fluid"
        style="max-height: 250px; width: auto"
      />
      <h1 class="display-3 fw-bold">Auto-Glanz360</h1>
      <p class="lead">Professionelle Fahrzeugaufbereitung und Pflege in Schney</p>
    </div>
  </section>
  <section class="container my-5 text-center">
    <h2 class="mb-4">Jetzt Termin buchen!</h2>
    <p class="lead">
      Vereinbaren Sie hier Ihren Termin oder fordern Sie ein unverbindliches Angebot an:
    </p>
    <a
      href="mailto:autoglanz360@gmx.de?subject=Anfrage%20Angebot%20zur%20Fahrzeugaufbereitung&body=Guten%20Tag,%0A%0Aich%20interessiere%20mich%20für%20eine%20professionelle%20Fahrzeugaufbereitung%20und%20bitte%20Sie%20um%20ein%20unverbindliches%20Angebot.%0A%0AGenauere%20Infos%20zu%20meinem%20Fahrzeug/Anfrage:%0A%3E%0A%0AVielen%20Dank%20im%20Voraus.%0A%0AMit%20freundlichen%20Grüßen"
      class="btn btn-danger btn-lg"
      style="background-color: #0056b3; border-color: #0056b3"
      >Jetzt Termin anfragen</a
    >
  </section>
  <section class="container my-5">
    <h2 class="text-center mb-4">Unsere Dienstleistungen</h2>
    <div class="row justify-content-center">
      <div class="col-md-8">
        <p class="lead text-center">
          Von der gründlichen Innenreinigung über professionelle Außenaufbereitung bis hin zu
          hochwertigen Versiegelungen – wir bieten maßgeschneiderte Pflege für Ihr Fahrzeug.
        </p>
        <div class="text-center">
          <RouterLink
            to="/dienstleistungen"
            class="btn btn-danger"
            style="background-color: #0056b3; border-color: #0056b3"
          >
            Mehr erfahren
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
