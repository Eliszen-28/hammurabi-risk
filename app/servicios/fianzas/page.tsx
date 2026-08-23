import type { Metadata } from "next"; import ServicePage,{serviceData} from "../service-page";
export const dynamic = "force-static";
export const metadata:Metadata={title:`${serviceData.fianzas.title} | Hammurabi Risk`,description:serviceData.fianzas.intro};
export default function Page(){return <ServicePage slug="fianzas"/>}
