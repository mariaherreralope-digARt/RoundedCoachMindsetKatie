// import Image from "next/image";

export default function HeroBorderLines() {
   return (
    <section className="relative bg-[#fbf8f3] overflow-hidden h-screen py-0">
      <div className="relative w-full mx-auto flex flex-col items-center  h-full ">
    <div
      className="w-full h-64 md:h-1/2 px-10 md:px-30 z-0 
      bg-[url('/images/bkgMenu.png')] bg-cover bg-center max-w-l mx-auto"
    ></div>
      <div className="relative flex flex-col items-center max-w-4xl  bg-[#b7a887] -mt-28  z-10 px-6 py-12 h-max mx-6">
        {/* <div className="absolute inset-0  pointer-events-none before:content-[''] before:absolute before:inset-5 before:border before:border-[#d3c8af] before:pointer-events-none" /> */}
        {/* Top line */}
  <span className="absolute top-4 left-0 right-0 h-px bg-[#d3c8af]"></span>
  {/* Bottom line */}
  <span className="absolute bottom-4 left-0 right-0 h-px bg-[#d3c8af]"></span>
  {/* Left line */}
  <span className="absolute top-0 bottom-0 left-4 w-px bg-[#d3c8af]"></span>
  {/* Right line */}
  <span className="absolute top-0 bottom-0 right-4 w-px bg-[#d3c8af]"></span>
        <h2 className="font-serif text-center text-md md:text-lg font-medium italic text-slate-100">
          Introduction Goes Here
        </h2>
        <p className="font-body italic text-sm text-slate-200 text-center max-w-lg mx-auto px-12 my-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, non ea. Deleniti recusandae aliquid neque culpa rem repellat laborum. 
        </p>
        <button className="py-2 px-4 uppercase text-xs bg-[#d3a87c] text-slate-200">Learn More</button>
      </div>
      <div className="relative z-10 max-w-full md:max-w-2/3 mx-auto">
        <h2 className="text-5xl pt-16 uppercase font-heading mb-6 leading-tight text-darker">
          NOT YET DEFINED
        </h2>
</div>

</div>
</section>   );
}