import type { Metadata } from "next";
import SiteFooter from "../SiteFooter";
export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Administración integral de riesgos | Hammurabi Risk",
  description: "Comprender, administrar y controlar los riesgos para proteger la continuidad, las operaciones y el patrimonio.",
};

const scenarios = ["Accidente laboral", "Incendio", "Enfermedad de alta especialidad", "Ciberataque", "Responsabilidad civil", "Interrupción de una operación crítica", "Pérdida de mercancía en traslado"];

export default function RiskManagementPage() {
  return <main className="risk-management-page">
    <header className="nav shell"><a className="brand" href="/" aria-label="Hammurabi Risk, inicio"><img src="/isotipo.jpg" alt="" /><span>Hammurabi Risk</span></a><a className="back-link" href="/">← Volver al inicio</a><div className="header-actions"><a className="header-claim" href="https://wa.me/526566696738?text=Hola%2C%20necesito%20reportar%20un%20siniestro" target="_blank" rel="noreferrer">Reportar siniestro</a><a className="button small" href="/#contacto">Cotiza ahora</a></div></header>

    <section className="risk-book-hero shell"><p className="eyebrow">Hammurabi Risk · Gestión estratégica</p><h1>La administración<br /><em>integral de riesgos.</em></h1><div className="risk-hero-bottom"><p>El riesgo no puede eliminarse. Pero sí puede <strong>comprenderse, administrarse y controlarse.</strong></p></div></section>

    <section className="risk-context shell"><div className="risk-context-lead"><span>01</span><h2>Todo comienza por hacer visible lo invisible.</h2></div><div className="risk-context-copy"><p>Toda organización enfrenta riesgos. Algunos son evidentes. Otros permanecen ocultos hasta el momento en que provocan una pérdida.</p><p>Cada uno de estos escenarios tiene la capacidad de afectar la estabilidad financiera, la continuidad operativa y el patrimonio construido durante años.</p></div></section>

    <section className="risk-scenarios"><div className="shell"><div className="risk-scenarios-head"><p className="eyebrow light">Escenarios reales</p><h2>Un evento puede cambiar<br />el rumbo de una operación.</h2></div><div className="scenario-grid">{scenarios.map((scenario,index)=><article key={scenario}><span>{String(index+1).padStart(2,"0")}</span><h3>{scenario}</h3></article>)}</div></div></section>

    <section className="risk-truth shell"><div className="risk-truth-art"><div className="risk-ring"></div><img src="/mascota-perfil.png" alt="Mascota de Hammurabi Risk observando y anticipando riesgos" /><span>Preparación</span></div><div className="risk-truth-copy"><p className="eyebrow">La verdadera exposición</p><h2>El riesgo no es que ocurra.<br /><em>Es no estar preparado.</em></h2><p>En Hammurabi Risk entendemos que la administración de riesgos va mucho más allá de contratar una póliza de seguro. Consiste en identificar amenazas, evaluar su impacto, implementar medidas preventivas y establecer mecanismos que reduzcan sus consecuencias.</p><p>El seguro representa una herramienta fundamental dentro de ese proceso, pero nunca constituye la estrategia completa.</p></div></section>

    <section className="risk-program"><div className="shell"><div><p className="eyebrow light">Nuestra responsabilidad</p><h2>Protección sólida.<br />Flexible. Evolutiva.</h2></div><div className="risk-program-copy"><p>Nuestra responsabilidad consiste en ayudar a nuestros clientes a comprender su exposición al riesgo y acompañarlos en la construcción de un programa de protección sólido, flexible y preparado para evolucionar junto con sus necesidades.</p><p>Porque proteger un patrimonio requiere mucho más que transferir un riesgo a una aseguradora. Requiere <strong>conocimiento, planeación y una visión de largo plazo.</strong></p><a className="button white" href="/#contacto">Hablar con un consultor</a></div></div></section>

    <section className="risk-closing shell"><span>Una visión de largo plazo</span><blockquote>La administración de riesgos no consiste en evitar que ocurran los problemas. Consiste en estar preparados para que ninguno de ellos <em>detenga el futuro</em> de quienes confían en nosotros.</blockquote></section>

    <SiteFooter />
  </main>;
}
