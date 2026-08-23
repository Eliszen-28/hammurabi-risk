"use client";

import { useState } from "react";

const DESTINATION = "Plaza Hatria, Blvd. Gómez Morín, Ciudad Juárez, Chihuahua";
const MAP_URL = `https://www.google.com/maps?q=${encodeURIComponent(DESTINATION)}&output=embed`;
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(DESTINATION)}`;
const WAZE_URL = `https://www.waze.com/ul?q=${encodeURIComponent(DESTINATION)}&navigate=yes`;

export default function MapLocation(){
  const [loaded,setLoaded]=useState(false);
  return <section className="map-section" aria-labelledby="map-title">
    <div className="shell map-heading">
      <div><p className="eyebrow">Nuestra ubicación</p><h2 id="map-title">Visítanos en<br/>Plaza Hatria.</h2></div>
      <div><p>Blvd. Gómez Morín, local 17<br/>Ciudad Juárez, Chihuahua</p><div className="map-desktop-actions"><span>Abrir indicaciones:</span><a href={DIRECTIONS_URL} target="_blank" rel="noreferrer" aria-label="Abrir indicaciones en Google Maps"><img src="/map-apps/google-maps.svg" alt=""/>Google Maps</a><a href={WAZE_URL} target="_blank" rel="noreferrer" aria-label="Abrir indicaciones en Waze"><img src="/map-apps/waze.svg" alt=""/>Waze</a></div></div>
    </div>
    <nav className="shell map-mobile-actions" aria-label="Abrir ubicación en una aplicación de mapas">
      <a className="maps-button" href={DIRECTIONS_URL} target="_blank" rel="noreferrer"><span aria-hidden="true"><img src="/map-apps/google-maps.svg" alt=""/></span>Google Maps</a>
      <a className="waze-button" href={WAZE_URL} target="_blank" rel="noreferrer"><span aria-hidden="true"><img src="/map-apps/waze.svg" alt=""/></span>Waze</a>
    </nav>
    <div className="shell map-frame">{loaded?<iframe src={MAP_URL} title="Mapa de la ubicación de Hammurabi Risk en Plaza Hatria" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>:<div className="map-placeholder"><span aria-hidden="true">📍</span><strong>Hammurabi Risk</strong><p>El mapa de Google se cargará únicamente cuando elijas verlo.</p><button type="button" onClick={()=>setLoaded(true)}>Ver mapa interactivo</button></div>}</div>
  </section>;
}
