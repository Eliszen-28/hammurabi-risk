import type { Metadata } from "next"; import ServicePage,{serviceData} from "../service-page";
export const dynamic = "force-static";
export const metadata:Metadata={title:"Seguros para personas en Ciudad Juárez",description:"Asesoría en seguros de gastos médicos, vida, casa habitación y automóviles para proteger a tu familia y patrimonio.",alternates:{canonical:"/servicios/personas"}};
export default function Page(){return <ServicePage slug="personas"/>}
