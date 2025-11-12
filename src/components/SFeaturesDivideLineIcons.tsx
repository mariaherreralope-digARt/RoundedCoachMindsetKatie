import { Building2, Layers, MapPin } from "lucide-react";

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
};
const features: Feature[] = [
  {
    icon: <Building2 className="w-8 h-8 text-btt/70" strokeWidth={1} />,
    title: "Exclusive Locations",
    description:
      "Our retreats",
  },
  {
    icon: <Layers className="w-8 h-8 text-btt/70" strokeWidth={1} />,
    title: "Holistic Experiences",  
    description:
      "Activities, workshops, and relaxation",
  },
  { icon: <MapPin className="w-8 h-8 text-btt/70" strokeWidth={1} />,
    title: "Personalized Service",
    description:
      "Our team",
  },
];

export default function SFeaturesDivideLineIcons() {
  return (
    <div className="bg-dark py-10 ">
      <div className="max-w-4xl mx-auto sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center  divide-y-[3px] divide-light/30  md:divide-x-[3px] md:divide-y-0">
        {features.map((f, i) => (
          <div key={i} className="flex flex-col items-center text-center px-12 py-12">
            <div className="mb-4 darker">{f.icon}</div>
            <h3 className=" font-heading text-lighter mb-0">{f.title}</h3>
            <p className="text-light font-body">{f.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}