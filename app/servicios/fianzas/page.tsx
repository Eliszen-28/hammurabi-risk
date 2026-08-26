import type { Metadata } from "next"; import ServicePage,{serviceData} from "../service-page";
export const dynamic = "force-static";
export const metadata:Metadata={title:"Fianzas administrativas, judiciales y de crédito",description:"Asesoría y gestión de fianzas de fidelidad, administrativas, judiciales, penales, de crédito y especiales.",alternates:{canonical:"/servicios/fianzas"}};
export default function Page(){return <ServicePage slug="fianzas"/>}
