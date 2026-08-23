import type { Metadata } from "next"; import ServicePage,{serviceData} from "../service-page";
export const dynamic = "force-static";
export const metadata:Metadata={title:`${serviceData.personas.title} | Hammurabi Risk`,description:serviceData.personas.intro};
export default function Page(){return <ServicePage slug="personas"/>}
