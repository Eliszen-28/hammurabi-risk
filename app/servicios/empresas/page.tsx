import type { Metadata } from "next"; import ServicePage,{serviceData} from "../service-page";
export const dynamic = "force-static";
export const metadata:Metadata={title:"Seguros para empresas y negocios",description:"Programas de seguros empresariales para responsabilidad civil, activos, flotillas, ingeniería, vida grupo y continuidad operativa.",alternates:{canonical:"/servicios/empresas"}};
export default function Page(){return <ServicePage slug="empresas"/>}
