"use client";

import { useEffect } from "react";
import Lenis from 'lenis';
import Katie from "@/components/Katie";
import Hero1Round3PicsText from "@/components/Hero1Round3PicsText";
import SRound4Cards from "@/components/SRound4Cards";
import SRoundAboutMe from "@/components/SRoundAboutMe";
import TextOsTPBtn from "@/components/TextOsTPBtn";
import SFeaturesDivideLineIcons from "@/components/SFeaturesDivideLineIcons";
import SRound2ColTxtImg from "@/components/SRound2ColTxtImg";
import S4Cards from "@/components/S4Cards";
import TextRoundBoxBtn from "@/components/TextRoundBoxBtn";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
// import SRoundFollowUpAboutMe from "@/components/SRoundFollowUpAboutMe";

export default function HomePage() {
  // const words = paragraph.split(" ");

  useEffect(() => {
// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});


    });

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Background gradient effect */}
      {/* <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-/20 to-/20 rounded-full blur-[80px] -z-10"></div> */}

{/* <Katie /> */}
<Hero1Round3PicsText />
<TextOsTPBtn />
<SRoundAboutMe />
<SFeaturesDivideLineIcons />
<Newsletter />

<SRound4Cards />
<SRound2ColTxtImg />
<S4Cards />
<TextRoundBoxBtn />
<Footer />


{/* <SRoundFollowUpAboutMe /> ADVANCED */}
    </main>

  );
}
