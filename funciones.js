
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");
if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const opened = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(opened));
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }));
}

const whatsappNumber = "593980359510";
function sendToWhatsApp(message) {
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener");
}

const appointmentForm = document.querySelector("#appointment-form");
if (appointmentForm) {
  appointmentForm.addEventListener("submit", event => {
    event.preventDefault();
    if (!appointmentForm.reportValidity()) return;
    const data = new FormData(appointmentForm);
    const message = [
      "SOLICITUD DE CITA - MSc. William Paguay C.",
      `Nombre: ${data.get("nombre")}`,
      `Teléfono: ${data.get("telefono")}`,
      `Tipo de asesoría: ${data.get("servicio")}`,
      `Fecha solicitada: ${data.get("fecha") || "Por coordinar"}`,
      `Hora solicitada: ${data.get("hora") || "Por coordinar"}`,
      `Motivo: ${data.get("motivo") || "No especificado"}`,
      "",
      "Entiendo que esta es una solicitud y que la cita debe ser confirmada por el despacho."
    ].join("\n");
    sendToWhatsApp(message);
    const status = document.querySelector("#form-status");
    if (status) status.textContent = "Se abrió WhatsApp con tu solicitud. Envíala desde allí para completar el proceso.";
  });
}

const contactForm = document.querySelector("#contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", event => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;
    const data = new FormData(contactForm);
    const message = [
      "CONSULTA - MSc. William Paguay C.",
      `Nombre: ${data.get("nombre")}`,
      `Teléfono: ${data.get("telefono")}`,
      `Asunto: ${data.get("asunto")}`,
      `Mensaje: ${data.get("mensaje")}`
    ].join("\n");
    sendToWhatsApp(message);
    const status = document.querySelector("#form-status");
    if (status) status.textContent = "Se abrió WhatsApp con tu consulta. Envíala desde allí para completar el proceso.";
  });
}
