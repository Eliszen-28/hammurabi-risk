import type { Metadata } from "next"; import ServicePage,{serviceData} from "../service-page";
export const dynamic = "force-static";
export const metadata:Metadata={title:"Consultoría y administración de riesgos",description:"Identificación, análisis y prevención de riesgos operacionales, laborales, estratégicos y financieros con metodología basada en ISO 31000.",alternates:{canonical:"/servicios/riesgos"}};
export default function Page(){return <ServicePage slug="riesgos"/>}
