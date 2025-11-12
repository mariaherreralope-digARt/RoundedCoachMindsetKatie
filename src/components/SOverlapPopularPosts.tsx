import Image from "next/image";
export default function OverlapPopularPosts() {
  return (
    <section className="relative bg-white flex flex-col items-center py-20">
    <div className="relative bg-dark flex flex-col items-center justify-center px-6 py-10 max-w-4xl">
      <h2 className="font-serif font-medium text-2xl mb-6 italic  text-primary">Popular Posts</h2>
<div className="relative grid md:grid-cols-2 gap-10 py-4">
  <div className="relative flex items-center justify-center">
    <Image
      src="/images/collage7.png"
      alt="Popular Post 1"
      width={300} 
      height={150}

  />
    <div className="absolute bg-light py-4 px-6 flex flex-col items-center self-end -mb-8">
      <h3 className="text-md font-serif italic mb-2 text-slate-100">Exploring the Mountains</h3>
      <button className=" bg-black py-2 px-4 uppercase text-xs text-light ">Learn More</button>
    </div>
  </div>
   <div className="relative flex items-center justify-center">
    <Image
      src="/images/collage8.png"
      alt="Popular Post 1"
      width={300} 
      height={150}

  />
    <div className="absolute bg-light py-4 px-6 flex flex-col items-center self-end -mb-8">
      <h3 className="text-md font-serif italic mb-2 text-slate-100">Exploring the Mountains</h3>
      <button className=" bg-black py-2 px-4 uppercase text-xs text-light ">Learn More</button>
    </div>
  </div>
</div>
    </div>
    </section>
  )
}