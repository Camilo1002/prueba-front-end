"use strict";

// SELECCIONAR EL FORMULARIO CON JA
const form = document.getElementById("form")

// ESCUCHA EVENTO ENVIAR
form.addEventListener("submit", (event) => {

  // EVITAR RECARFA DE LA PÁGINA POR EL FORMULARIO
  event.preventDefault();

  // CHECK SI ES VALIDO
  if (form.checkValidity()) {
    // SI EL VALIDO...
    // ALERTA
    alert("Suscripcion exitosa");
    // RECARGA LA ÁGINA
    window.location.reload()
  }
  // AGREGA CLASE DE ESTILO DE BOOTSTRAP
  form.classList.add("was-validated");
}, false);
