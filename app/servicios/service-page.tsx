import SiteFooter from "../SiteFooter";

export const serviceData = {
  personas:{title:"Seguros para personas",kicker:"Protege tu presente y tu futuro",intro:"Coberturas claras y cercanas para cuidar tu salud, tu familia, tu hogar y la forma en que te mueves.",items:["Gastos Médicos","Vida","Casa Habitación","Automóviles"],accent:"Lo que más valoras merece una protección que sí entiendas."},
  empresas:{title:"Seguros para empresas",kicker:"Tu negocio, siempre en movimiento",intro:"Diseñamos programas integrales para proteger activos, equipos, personas, operaciones y responsabilidades.",items:["Responsabilidad civil","Property","RC D&O","RC Profesional","Ingeniería","Gastos Médicos colectivos","Vida Grupo","Cascos marítimos","Aviones","Flotillas","Descuento por nómina","Agencias UDIS","Crédito"],accent:"Entendemos el riesgo antes de recomendar la cobertura."},
  fianzas:{title:"Fianzas",kicker:"Respaldo para cada compromiso",intro:"Te acompañamos en la selección y gestión de la fianza adecuada para cumplir tus obligaciones con certeza.",items:["Fidelidad","Administrativas","Judiciales y penales","Crédito","Especiales"],accent:"Solidez, seguimiento y asesoría desde la solicitud hasta la liberación."},
  riesgos:{title:"Consultoría de riesgos",kicker:"Anticipar es proteger",intro:"Identificamos, analizamos y tratamos los riesgos que pueden impedir que tu organización alcance sus objetivos.",items:["Operacionales","Laborales","Estratégicos","Financieros y otros"],accent:"Metodología basada en ISO 31000 y buenas prácticas internacionales."}
} as const;
export type ServiceSlug = keyof typeof serviceData;

export default function ServicePage({slug}:{slug:ServiceSlug}){
  const d=serviceData[slug];
  return <main className="detail-page">
    <header className="nav shell"><a className="brand" href="/"><img src="/isotipo.jpg" alt=""/><span>Hammurabi Risk</span></a><a className="back-link" href="/#servicios">← Todos los servicios</a><div className="header-actions"><a className="header-claim" href="https://wa.me/526566696738?text=Hola%2C%20necesito%20reportar%20un%20siniestro" target="_blank" rel="noreferrer">Reportar siniestro</a><a className="button small" href="/#contacto">Cotiza ahora</a></div></header>
    <section className="detail-hero shell"><div><p className="eyebrow">{d.kicker}</p><h1>{d.title}</h1><p className="lead">{d.intro}</p><a className="button" href={`mailto:aguilar@grupohammurabi.com?subject=Quiero%20información%20sobre%20${encodeURIComponent(d.title)}`}>Hablar con un asesor</a></div><div className="detail-mascot"><img src={slug==="empresas"||slug==="riesgos"?"/mascota-perfil.png":"/mascota-camina.png"} alt="Mascota Hammurabi Risk"/><p>{d.accent}</p></div></section>
    <section className="coverage shell"><p className="eyebrow">Coberturas y soluciones</p><h2>Una respuesta para<br/>cada necesidad.</h2><div className="coverage-grid">{d.items.map((x,i)=><article key={x}><span>{String(i+1).padStart(2,"0")}</span><h3>{x}</h3><p>Evaluamos tu necesidad y te presentamos alternativas claras entre las mejores compañías.</p></article>)}</div></section>
    <section className="detail-cta"><div className="shell"><h2>¿Listo para sentirte<br/>mejor protegido?</h2><a className="button white" href="/#contacto">Contáctanos</a></div></section>
    <SiteFooter />
  </main>
}
