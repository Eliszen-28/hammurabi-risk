import type { Metadata } from "next"; import ServicePage,{serviceData} from "../service-page";
export const dynamic = "force-static";
export const metadata:Metadata={title:`${serviceData.riesgos.title} | Hammurabi Risk`,description:serviceData.riesgos.intro};
export default function Page(){return <ServicePage slug="riesgos"/>}
