import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nuestra metodología | Hammurabi Risk",
  description: "Siete etapas para transformar un seguro en una estrategia de protección personalizada.",
};

const stages = [
  ["01", "Diagnóstico", "Comprender la realidad del cliente."],
  ["02", "Análisis", "Identificar riesgos y áreas de oportunidad."],
  ["03", "Diseño", "Construir una estrategia personalizada."],
  ["04", "Implementación", "Convertir la estrategia en protección real."],
  ["05", "Seguimiento", "Mantener la estrategia actualizada."],
  ["06", "Atención de Siniestros", "Actuar cuando más se necesita."],
  ["07", "Mejora Continua", "Evolucionar junto con nuestros clientes."],
];

export default function MethodologyPage() {
  return <main className="methodology-page">
    <header className="nav shell"><Link className="brand" href="/" aria-label="Hammurabi Risk, inicio"><img src="/isotipo.jpg" alt="" /><span>Hammurabi Risk</span></Link><nav aria-label="Navegación principal"><Link href="/#servicios">Servicios</Link><Link href="/administracion-riesgos">Riesgos</Link><Link href="/#experiencia">Nuestra labor</Link><Link href="/#contacto">Contacto</Link></nav><div className="header-actions"><a className="header-claim" href="tel:+526566696738">Reportar siniestro</a><a className="button small" href="/#contacto">Cotiza ahora</a></div></header>

    <section className="method-hero shell">
      <div className="method-intro"><p className="eyebrow">Hammurabi Risk · Libro Maestro</p><h1>Nuestra<br /><em>metodología.</em></h1><p className="method-principle">La confianza no se improvisa.<br /><strong>Se construye con procesos.</strong></p><p className="method-lead">En Hammurabi Risk entendemos que la administración de riesgos no puede depender de la intuición ni de soluciones estandarizadas.</p></div>
      <div className="method-mascot"><span className="method-orbit">7 etapas</span><img src="/mascota-camina.png" alt="Mascota de Hammurabi Risk acompañando nuestra metodología" /><p>Análisis · Prevención · Acompañamiento</p></div>
    </section>

    <section className="method-story shell">
      <p className="story-large">Cada empresa tiene una historia distinta. Cada familia enfrenta riesgos diferentes. Cada patrimonio requiere una estrategia diseñada específicamente para proteger aquello que ha tomado años construir.</p>
      <div className="story-columns"><p>Por esa razón desarrollamos una metodología de trabajo basada en el análisis, la prevención y el acompañamiento permanente. No creemos en las soluciones genéricas. Creemos en comprender antes de recomendar.</p><p>Nuestra metodología nos permite ofrecer estrategias de protección alineadas con la realidad de cada cliente, garantizando que cada decisión responda a un objetivo claro: reducir la incertidumbre y fortalecer su capacidad de enfrentar cualquier eventualidad.</p></div>
    </section>

    <section className="method-stages"><div className="shell"><div className="stages-title"><p className="eyebrow light">Nuestro proceso</p><h2>Nuestra metodología<br />en siete etapas.</h2></div><div className="stage-list">{stages.map(([number,title,text])=><article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p><b aria-hidden="true">→</b></article>)}</div></div></section>

    <section className="method-manifesto shell"><span>La diferencia Hammurabi</span><blockquote>Las pólizas pueden adquirirse en muchos lugares. La diferencia está en contar con una metodología que transforme un seguro en una verdadera estrategia de <em>protección.</em></blockquote><Link className="button" href="/#contacto">Diseñemos tu estrategia</Link></section>

    <footer><div className="shell footer-top"><Link className="brand inverse" href="/"><img src="/isotipo.jpg" alt="" /><span>Hammurabi Risk</span></Link><p>Consultores de riesgos y seguros</p><a href="tel:+526566696738">656 669 6738</a></div><div className="shell copyright">HAMMURABI RISK | LIBRO MAESTRO</div></footer>
  </main>;
}
