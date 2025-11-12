import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative bg-[#fbf8f3] overflow-hidden py-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center relative">
        {/* Label */}
        <p className="uppercase tracking-[0.3em] text-[#b87a5b] text-sm font-medium mb-4 z-0">
          Wellness Retreats
        </p>

        {/* Large centered headline */}
        <h1 className="text-[6rem] sm:text-[8rem] md:text-[10rem] font-serif font-light text-[#d98e6f] scale-y-120 transform leading-none tracking-[0.1em] z-30">
          REVIVAL
        </h1>

       <div className="relative grid grid-cols-1 md:grid-cols-3 items-center justify-items-center gap-4 -mt-16 z-10 w-full max-w-6xl">
          {/* Left image */}
          <div className="relative w-48 h-48 md:w-56 md:h-56 bg-[#e7d7c9] overflow-hidden justify-self-end">
            <Image
              src="/images/collage6.png"
              alt="Best selling wellness retreat"
              fill
              className="object-cover"
            />
          </div>

          {/* Center image */}
          <div className="relative w-56 h-72 md:w-80 md:h-120  overflow-hidden justify-self-center">
            <Image
              src="/images/collage5.png"
              alt="Wellness retreat experience"
              fill
              className="object-cover"
            />
          </div>

          {/* Right text block */}
          <div className="text-left justify-self-start w-48 md:w-56 md:h-72 flex flex-col justify-center">
            <h2 className="text-lg md:text-xl font-serif text-[#d98e6f] mb-6 leading-tight">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h2>
            <p className="text-gray-600 text-sm leading-tight mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor 
            </p>
            <button className="bg-[#d98e6f] hover:bg-[#c3795d] text-white text-xs  font-medium uppercase px-6 py-2  transition self-start">
              View Portfolio
            </button>
          </div>
        </div>
      </div>

       

      {/* Optional subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#fbf8f3]/20 to-[#fbf8f3] pointer-events-none" />
    </section>
  );
}
