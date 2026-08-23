"use client";

import { FormEvent, useEffect, useState } from "react";

const ATTENTION_WHATSAPP = "526561423871";

export default function SalesAssistant() {
  const [open, setOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const update = () => setShowTop(window.scrollY > 500);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  function sendToWhatsApp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      "Hola, quiero recibir asesoría de Hammurabi Risk.",
      "",
      `Nombre: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Teléfono: ${data.get("phone")}`,
      `Servicio: ${data.get("service")}`,
      `Descripción: ${data.get("description")}`,
    ].join("\n");

    window.open(`https://wa.me/${ATTENTION_WHATSAPP}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return <>
    <div className="floating-actions" aria-label="Acciones rápidas">
      {showTop && <button className="back-to-top" type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Volver al inicio">↑<span>Inicio</span></button>}
      <button className="sales-launcher" type="button" onClick={() => setOpen(true)} aria-haspopup="dialog" aria-expanded={open}><span aria-hidden="true">✦</span><b>Habla con un asesor</b></button>
    </div>

    {open && <div className="sales-overlay" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setOpen(false)}>
      <section className="sales-dialog" role="dialog" aria-modal="true" aria-labelledby="sales-title">
        <button className="sales-close" type="button" onClick={() => setOpen(false)} aria-label="Cerrar asistente">×</button>
        <div className="sales-intro"><span className="sales-mark"><img src="/mascota-quienes-somos.png" alt="Mascota de Hammurabi Risk" /></span><p>Asesor Hammurabi</p></div>
        <h2 id="sales-title">Cuéntanos qué necesitas.</h2>
        <p className="sales-subtitle">Déjanos tus datos y abriremos WhatsApp con tu solicitud lista para enviarse.</p>
        <form onSubmit={sendToWhatsApp}>
          <div className="sales-fields">
            <label>Nombre<input name="name" type="text" autoComplete="name" required placeholder="Tu nombre completo" /></label>
            <label>Email<input name="email" type="email" autoComplete="email" required placeholder="nombre@correo.com" /></label>
            <label>Teléfono<input name="phone" type="tel" autoComplete="tel" required placeholder="656 000 0000" /></label>
            <label>Tipo de servicio<select name="service" required defaultValue=""><option value="" disabled>Selecciona una opción</option><option>Personas</option><option>Empresas</option><option>Fianzas</option><option>Gestión de riesgos</option></select></label>
          </div>
          <label>Describe el seguro o servicio que buscas<textarea name="description" required rows={4} placeholder="Cuéntanos brevemente qué necesitas proteger o resolver." /></label>
          <button className="sales-submit" type="submit">Continuar por WhatsApp <span aria-hidden="true">→</span></button>
          <small>Tu información solo se utilizará para atender esta solicitud.</small>
        </form>
      </section>
    </div>}
  </>;
}
