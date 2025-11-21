// import { Trash2, HeartPulse, SplitSquareHorizontal, Lightbulb, Leaf, MapPin } from "lucide-react";
// import { UserCheck, Zap, Eye, Map } from "lucide-react";
import { RefreshCw, Star, Eye, Zap, Compass, Wind, Sun,  } from "lucide-react";

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
};
const features: Feature[] = [
  {
    icon: <RefreshCw className="w-8 h-8 text-btt" strokeWidth={1.5} />,
    title: "Shift limiting beliefs",
    description:
      "Gently uncover the stories that hold you back and replace them with practical, empowering beliefs. This work frees up your energy so you can take calmer, clearer action toward what you want.",
  },
    { icon: <Star className="w-8 h-8 text-btt" strokeWidth={1.5} />,
    title: "Align with higher timelines",
    description:
      "Learn how small shifts in focus, choices, and frequency can open a new path forward — one that feels more aligned with who you truly are. This practice helps you move from reactivity into intentional creation.",
  },
   { icon: <Eye className="w-8 h-8 text-btt" strokeWidth={1.5} />,
    title: "Reconnect with intuition",
    description:
      "Cultivate the habit of listening to your inner guidance so decisions feel easier and more certain. Simple practices help you distinguish quiet intuition from fear or habit.",
  },

  {
    icon: <Zap className="w-8 h-8 text-btt" strokeWidth={1.5} />,
    title: "Manifest intentionally",  
    description:
      "Combine clear intention, aligned emotion, and practical steps to manifest with purpose rather than guesswork. This is manifestation that’s grounded, repeatable, and tailored to your life.",
  },
    {
    icon: <Compass className="w-8 h-8 text-btt" strokeWidth={1.5} />,
    title: "Explore your soul’s purpose",  
    description:
      "Reflective exercises and guided prompts that reveal recurring themes, passions, and gifts — helping you map a life that feels meaningful. It’s about listening to deeper longings and translating them into everyday choices.",
  },
  {
    icon: <Wind className="w-8 h-8 text-btt" strokeWidth={1.5} />,
    title: "Understand energy flow",  
    description:
      "Learn how energy moves through your day, relationships, and decisions so you can manage overwhelm and cultivate momentum. Small energy checks and adjustments create big changes over time.",
  },
// {
//     icon: <Sun className="w-8 h-8 text-btt" strokeWidth={1.5} />,
//     title: "Live with clarity, calm, and direction",  
//     description:
//       "Practical routines and mindset tools that simplify choices, reduce noise, and keep you steady through uncertainty. The result: clearer priorities, less reactivity, and sustained forward motion.",
//   },
];

export default function SFeaturesDivideLineIcons() {
  return (
    <div className=" bg-gradient-to-b from-transparent via-light/50 to-lighter py-16 md:pt-24 ">
      <div className="flex flex-col items-center text-center px-16 sm:px-6 lg:px-8 max-w-3xl mx-auto">
         <p className="oversection text-darker mb-6 ">
          Aligned Practices
        </p>
        <h2 className="heading text-dark md:text-3xl  mb-6">
          Transform Your Energy, Align Your Life
        </h2>
        <p className="text-darker mb-16 paragraph leading-relaxed font-semibold">
          Each of these core practices supports you on your path of self-growth and energetic alignment. Whether you're shifting old patterns, reconnecting with your intuition, or learning to manifest with intention, these tools help you move closer to your highest timeline. Explore the pillars of this journey and discover the inner clarity, confidence, and purpose you’ve been seeking.
       
        </p>
        </div>

 <div className="
  max-w-5xl mx-auto py-16 md:pt-0 px-6 
  grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 
  gap-8 justify-items-center
">
  {features.map((f, i) => (
    <div key={i} className="flex flex-col items-center text-center px-6">
      <div className="mb-6">{f.icon}</div>
      <h3 className="title-italic-boxed text-sm not-italic font-normal text-dark mb-4">
        {f.title}
      </h3>
      <p className="text-darker paragraph pb-8">{f.description}</p>
    </div>
  ))}
</div>

      <div className="absolute inset-0  pointer-events-none" />
    </div>
  );
}