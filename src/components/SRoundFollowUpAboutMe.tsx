import { section } from "motion/react-client";
import Image from "next/image";

export default function SRoundFollowUpAboutMe() {
  return (
    <section className="w-full h-screen bg-[url('/images/collage6.png')] bg-cover bg-center">
      <div className="max-w-6xl mx-auto flex items-center justify-end">
        <div className="bg-lighter w-[50vw] h-[50vh] -mt-4 mr-12 rounded-br-[8rem] rounded-bl-[8rem]"></div>
      </div>
      <div
  className="bg-white"
  style={{
    clipPath: "ellipse(90% 50% at 50% 0%)",
  }}
></div>
    </section>
  );
}