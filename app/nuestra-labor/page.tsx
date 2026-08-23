import type { Metadata } from "next";
import SiteFooter from "../SiteFooter";
export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Cuando nuestra labor cobra sentido | Hammurabi Risk",
  description: "Estar presentes antes del riesgo, durante el problema y después del siniestro.",
};

const moments = ["Un diagnóstico inesperado", "Un accidente", "Una pérdida patrimonial", "Una operación que se detiene", "Una llamada que nadie esperaba recibir"];

export default function OurWorkPage() {
  return <main className="our-work-page">
    <header className="nav shell"><a className="brand" href="/" aria-label="Hammurabi Risk, inicio"><img src="/isotipo.jpg" alt="" /><span>Hammurabi Risk</span></a><nav aria-label="Navegación principal"><a href="/#servicios">Servicios</a><a href="/#especialistas-riesgos">Riesgos</a><a href="/#experiencia">Nuestra labor</a><a href="/#contacto">Contacto</a></nav><div className="header-actions"><a className="header-claim" href="https://wa.me/526566696738?text=Hola%2C%20necesito%20reportar%20un%20siniestro" target="_blank" rel="noreferrer">Reportar siniestro</a><a className="button small" href="/#contacto">Cotiza ahora</a></div></header>

    <section className="work-hero shell"><p className="eyebrow">Acompañamiento Hammurabi</p><h1>Cuando nuestra labor<br /><em>cobra sentido.</em></h1><p className="work-principle">Es en los momentos más difíciles donde demostramos nuestro verdadero valor.</p></section>

    <section className="work-preparation"><div className="shell"><div className="work-prep-title"><span>01</span><h2>Antes de que algo ocurra, ya estamos trabajando.</h2></div><div className="work-prep-copy"><p>Durante gran parte del tiempo, nuestro trabajo ocurre lejos de los momentos difíciles. Analizamos, prevenimos, diseñamos, revisamos condiciones, negociamos, damos seguimiento y nos preparamos.</p><p>Pero existen momentos en los que todo aquello que construimos deja de ser una estrategia sobre el papel y se enfrenta a la realidad.</p></div></div></section>

    <section className="work-moments shell"><div className="moments-heading"><p className="eyebrow">Cuando la realidad cambia</p><h2>Una llamada puede cambiarlo todo.</h2></div><div className="moments-track">{moments.map((moment,index)=><article key={moment}><span>{String(index+1).padStart(2,"0")}</span><h3>{moment}</h3></article>)}</div><p className="moments-turn">Es entonces cuando nuestra profesión adquiere su verdadero significado.</p></section>

    <section className="work-human"><div className="shell"><div className="work-human-visual"><div className="human-circle"></div><img src="/mascota-quienes-somos.png" alt="Mascota de Hammurabi Risk presente para acompañar a nuestros clientes" /><span>Estamos presentes</span></div><div className="work-human-copy"><p className="eyebrow light">Detrás de cada expediente</p><h2>Siempre existe<br />una historia.</h2><p>Un número de siniestro puede representar para una aseguradora un proceso administrativo; para una familia puede representar uno de los días más difíciles de su vida.</p><blockquote>La empatía no sustituye el conocimiento técnico. <strong>Lo complementa.</strong></blockquote></div></div></section>

    <section className="work-responsibility shell"><div><p className="eyebrow">Responsabilidad profesional</p><h2>Acompañar no es prometer.<br /><em>Es responder.</em></h2></div><div className="responsibility-copy"><p>Acompañar tampoco significa prometer que todo será procedente. Defender los intereses de nuestros clientes significa hacerlo con argumentos, conocimiento, objetividad y responsabilidad.</p><p>No medimos nuestro trabajo únicamente por montos recuperados. También lo medimos por problemas resueltos, llamadas atendidas, incertidumbre reducida y decisiones tomadas con mayor claridad.</p></div></section>

    <section className="work-presence"><div className="shell"><p className="eyebrow light">Nuestra forma de estar</p><h2>Presentes en cada momento.</h2><div className="presence-grid"><article><span>Antes</span><h3>Prevenir</h3><p>Analizamos y construimos la protección.</p></article><article><span>Durante</span><h3>Responder</h3><p>Actuamos con claridad cuando surge el problema.</p></article><article><span>Después</span><h3>Acompañar</h3><p>Damos seguimiento hasta recuperar la tranquilidad.</p></article></div></div></section>

    <section className="work-closing shell"><span>La diferencia está en estar</span><blockquote>Nuestra labor cobra verdadero sentido cuando aquello que durante meses fue una póliza se convierte en una <em>necesidad real.</em></blockquote><a className="button" href="/nuestra-promesa">Conoce nuestra promesa</a></section>

    <SiteFooter />
  </main>;
}
