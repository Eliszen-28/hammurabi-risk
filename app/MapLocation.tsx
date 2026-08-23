"use client";

import { useState } from "react";

const MAP_URL = "https://www.google.com/maps?q=Plaza%20Hatria%2C%20Blvd.%20G%C3%B3mez%20Mor%C3%ADn%2C%20Ciudad%20Ju%C3%A1rez%2C%20Chihuahua&output=embed";
const DIRECTIONS_URL = "https://www.google.com/maps/search/?api=1&query=Plaza%20Hatria%2C%20Blvd.%20G%C3%B3mez%20Mor%C3%ADn%2C%20Ciudad%20Ju%C3%A1rez%2C%20Chihuahua";

export default function MapLocation(){
  const [loaded,setLoaded]=useState(false);
  return <section className="map-section" aria-labelledby="map-title"><div className="shell map-heading"><div><p className="eyebrow">Nuestra ubicación</p><h2 id="map-title">Visítanos en<br/>Plaza Hatria.</h2></div><div><p>Blvd. Gómez Morín, local 17<br/>Ciudad Juárez, Chihuahua</p><a href={DIRECTIONS_URL} target="_blank" rel="noreferrer">Abrir indicaciones <span aria-hidden="true">↗</span></a></div></div><div className="shell map-frame">{loaded?<iframe src={MAP_URL} title="Mapa de la ubicación de Hammurabi Risk en Plaza Hatria" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>:<div className="map-placeholder"><span aria-hidden="true">📍</span><strong>Hammurabi Risk</strong><p>El mapa de Google se cargará únicamente cuando elijas verlo.</p><button type="button" onClick={()=>setLoaded(true)}>Ver mapa interactivo</button></div>}</div></section>;
}
