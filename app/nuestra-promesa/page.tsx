import type { Metadata } from "next";
import SiteFooter from "../SiteFooter";
export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Nuestra promesa | Hammurabi Risk",
  description: "Una promesa que trasciende las pólizas: trabajar cada día para seguir mereciendo tu confianza.",
};

const promises = [
  ["01", "Escucharte", "antes de recomendar."],
  ["02", "Explicarte", "antes de contratar."],
  ["03", "Acompañarte", "durante el camino."],
  ["04", "Responder", "cuando nos necesites."],
  ["05", "Trabajar cada día", "para seguir mereciendo tu confianza."],
];

export default function PromisePage() {
  return <main className="promise-page">
    <header className="nav shell"><a className="brand" href="/" aria-label="Hammurabi Risk, inicio"><img src="/isotipo.jpg" alt="" /><span>Hammurabi Risk</span></a><a className="back-link" href="/">← Volver al inicio</a><div className="header-actions"><a className="header-claim" href="https://wa.me/526566696738?text=Hola%2C%20necesito%20reportar%20un%20siniestro" target="_blank" rel="noreferrer">Reportar siniestro</a><a className="button small" href="/#contacto">Cotiza ahora</a></div></header>

    <section className="promise-hero shell"><p className="eyebrow">Hammurabi Risk · Nuestro compromiso</p><h1>Una promesa que<br /><em>trasciende las pólizas.</em></h1><p className="promise-principle">Podemos proteger muchas cosas. Pero existe una que debemos ganar todos los días: <strong>tu confianza.</strong></p></section>

    <section className="promise-limits shell"><div><p className="eyebrow">Lo que no controlamos</p><h2>No podemos prometer que nada ocurrirá.</h2></div><div className="limits-list"><p>No podemos evitar todas las enfermedades.</p><p>No podemos controlar un incendio.</p><p>No podemos detener una tormenta.</p><p>No podemos dominar cada circunstancia.</p></div></section>

    <section className="promise-actions"><div className="shell"><div className="actions-heading"><p className="eyebrow light">Lo que sí podemos hacer</p><h2>Prepararnos.<br />Y responder.</h2></div><div className="action-words"><span>Analizar.</span><span>Prevenir.</span><span>Diseñar.</span><span>Explicar.</span><span>Anticiparnos.</span><span>Responder.</span></div><p className="action-closing">Pero, sobre todo, podemos hacer algo mucho más sencillo: <strong>estar.</strong></p></div></section>

    <section className="promise-presence shell"><article><span>Antes</span><h3>Estar</h3><p>Cuando todavía podemos analizar con calma.</p></article><article><span>Durante</span><h3>Estar</h3><p>Cuando aparece el problema.</p></article><article><span>Después</span><h3>Estar</h3><p>Cuando llega el momento de reconstruir, aprender y continuar.</p></article></section>

    <section className="promise-future"><div className="shell"><div className="promise-mascot"><div className="promise-disc"></div><img src="/mascota-camina.png" alt="Mascota de Hammurabi Risk avanzando junto a nuestros clientes" /><span>Seguimos contigo</span></div><div className="future-copy"><p className="eyebrow light">Mirar hacia adelante</p><h2>Protegemos lo construido.<br />Y lo que aún está por construirse.</h2><p>No queremos mirar únicamente aquello que podría perderse. Queremos proteger todo aquello que todavía puede construirse.</p><p>Porque cuando alguien decide confiar en Hammurabi Risk, no solamente nos entrega la administración de sus seguros. Nos confía parte de aquello que ha dedicado su vida a construir.</p><p>Y esa responsabilidad merece <strong>conocimiento, transparencia, compromiso y acompañamiento.</strong></p></div></div></section>

    <section className="promise-declaration shell"><blockquote>Porque al final, nuestra responsabilidad no termina cuando entregamos una póliza. <em>Comienza en el momento en que alguien decide confiar en nosotros.</em></blockquote></section>

    <section className="promise-list"><div className="shell"><div className="promise-list-title"><p className="eyebrow light">Nuestro compromiso diario</p><h2>Nuestra promesa<br />es sencilla.</h2></div><div className="promise-items">{promises.map(([number,title,text])=><article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="promise-final shell"><p>Conocimiento. Transparencia. Compromiso. Acompañamiento.</p><h2>Tu confianza es aquello que elegimos ganar <em>todos los días.</em></h2><a className="button" href="/#contacto">Comencemos una relación</a></section>

    <SiteFooter />
  </main>;
}
