"use client";

import Image from "next/image";
import { Heart, Leaf, Sparkles } from "lucide-react";

export default function SpecializationSection() {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-center 
    py-16 px-6 lg:px-20 bg-lighter ">
      {/* Left box with vertical text */}
      <div className="relative flex-shrink-0">
        <div className="relative flex items-center justify-center
         bg-dark text-lighter w-72 h-80  ">
          {/* Vertical Text */}
          <span className="absolute -left-9 top-1/2 -translate-y-1/2 -rotate-90 origin-center text-sm tracking-widest uppercase font-light">
            Our Services
          </span>
</div>
          {/* Image */}
          <div className="absolute left-8 top-1/2 -translate-y-1/2 w-72 h-64">
            <Image
              src="/images/collage7.png"
              alt="Interior"
              width={400}
              height={500}
              className="object-cover w-full h-full"
            />
          
        </div>
      </div>

      {/* Right content */}
      <div className="lg:ml-20 mt-8 lg:mt-0 max-w-xl">
        <h2 className="text-dark font-heading italic text-2xl mb-2">
          Title for your services here
        </h2>
        <p className="text-darker font-body text-sm mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero natus cum voluptates unde. Molestias optio, dolores provident accusamus quo quidem illo iusto. Non illo laboriosam nulla quasi accusamus sunt aperiam?
        </p>

        {/* Bottom icons/labels */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex flex-col items-center justify-center bg-darker text-lighter py-8  text-center font-light">
            <Leaf className="w-4 h-4 text-lighter mb-2" strokeWidth={1} />
            <p className="text-sm font-light uppercase">SERVICE</p>
          </div>
          <div className="bg-light py-4 px-6 text-center text-darker ">
            <p className="text-sm font-light uppercase">SERVICE</p>
          </div>
          <div className="bg-light py-4 px-6 text-center text-darker ">
            <p className="text-sm font-light uppercase">SERVICE</p>
          </div>
          <div className="bg-light py-4 px-6 text-center text-darker ">
            <p className="text-sm font-light uppercase">SERVICE</p>
          </div>
        </div>
      </div>
    </section>
  );
}
