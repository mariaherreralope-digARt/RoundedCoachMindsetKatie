// components/InfoSection.tsx
import Image from 'next/image';
// aspect squeare forced 
export default function Overlap2colPT() {
  return (
    <section className="relative bg-white py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2  items-center">
        {/* Left Image */}
        <div className="relative w-full aspect-square overflow-hidden">
          <Image
            src="/images/collage5.png"
            alt="Nature Scene"
             fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Right Box */}
        <div className="relative bg-[#f4f3ec] px-20 py-10 shadow-sm md:-ml-16 z-10">

          <h3 className="text-xs uppercase text-gray-500 mb-2 tracking-wide">
            Nature and Calm
          </h3>

 <span className="absolute my-2 left-0 right-0 h-px bg-[#cfc7b043]" />
          <h2 className="text-xl mt-7 italic text-gray-700 mb-4">
            Lorem ipsum dolor sit amet
          </h2>

          <p className="text-sm text-gray-600 mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim
            facilisis gravida neque convallis a cras semper auctor. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
        
          </p>

          <button className="bg-[#a6b39d] text-white px-6 py-2 text-sm tracking-wide uppercase">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}
