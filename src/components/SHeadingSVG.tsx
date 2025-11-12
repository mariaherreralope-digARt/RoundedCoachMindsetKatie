"use client";

import React from "react";

export default function SHeadingSVG() {
  return (
    <section className="relative flex flex-col md:flex-row bg-darker text-white min-h-[350px]">
      {/* Left geometric pattern */}
      <div className="relative flex-1 bg-sacred -translate-x-1 transform animate-spin-slow stroke-light h-[350px]" />
      


      {/* Right content */}
      <div className="relative flex-1 flex flex-col justify-center px-10 py-16">
        <span className="absolute left-0 w-[5px] h-[120px] top-1/2 transform -translate-y-1/2 bg-lighter"></span>
        <h2 className="text-sm tracking-widest font-semibold mb-4">
          OUR EXPERTISE
        </h2>
        <p className="text-light leading-relaxed max-w-md">
          RJ Investments brings luxury living to the rental market through
          bespoke renovations, at affordable prices with quality property
          management.
        </p>
      </div>
    </section>
  );
}
