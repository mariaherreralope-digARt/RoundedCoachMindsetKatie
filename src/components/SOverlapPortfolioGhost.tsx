// components/InfoSection.tsx
import Image from 'next/image';
// aspect squeare forced 
export default function SOverlapPortfolioGhost() {
  return (
    <section className="relative bg-lighter ">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2  items-center py-20 px-20">
       

        {/* Left Box */}
        <div className="relative bg-lighter px-20 py-12  md:-mr-36 z-10 flex items-center justify-center">
<div className=''>
          <h3 className="text-xs uppercase text-gray-500 mb-2 tracking-wide">
            Nature and Calm
          </h3>


          <h2 className="text-xl mt-7 italic text-gray-700 mb-2">
            Lorem ipsum dolor sit amet
          </h2>

          <p className="text-sm text-gray-600 mb-6 leading-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        
          </p>
          </div>
          <div className=''>
          <span className="absolute right-10 top-1/2 -translate-y-1/2  text-btt text-3xl">→</span></div>
{/* 
          <button className="bg-[#a6b39d] text-white px-6 py-2 text-sm tracking-wide uppercase">
            Read More
          </button> */}
        </div>
         {/* Right Image */}
        <div className="relative w-[700px] h-[350px] overflow-hidden -ml-26 ">
          <Image
            src="/images/collage6.png"
            alt="Nature Scene"
             fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
