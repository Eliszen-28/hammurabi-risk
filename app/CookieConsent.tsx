"use client";

import { useEffect, useState } from "react";

type Consent = "accepted" | "essential";
const STORAGE_KEY = "hammurabi-cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setVisible(!window.localStorage.getItem(STORAGE_KEY)));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  function save(choice: Consent) {
    window.localStorage.setItem(STORAGE_KEY, choice);
    document.cookie = `${STORAGE_KEY}=${choice}; Max-Age=31536000; Path=/; SameSite=Lax`;
    setVisible(false);
  }

  if (!visible) return null;

  return <aside className="cookie-banner" role="dialog" aria-modal="false" aria-labelledby="cookie-title">
    <div>
      <strong id="cookie-title">Tu privacidad importa.</strong>
      <p>Usamos almacenamiento esencial para recordar tus preferencias. Las cookies no esenciales solo se habilitarán con tu autorización. Consulta nuestro <a href="/aviso-privacidad#cookies">aviso de privacidad y cookies</a>.</p>
    </div>
    <div className="cookie-actions">
      <button type="button" className="cookie-secondary" onClick={() => save("essential")}><span aria-hidden="true">○</span> Solo esenciales</button>
      <button type="button" className="cookie-primary" onClick={() => save("accepted")}><span aria-hidden="true">✓</span> Aceptar todas</button>
    </div>
  </aside>;
}
