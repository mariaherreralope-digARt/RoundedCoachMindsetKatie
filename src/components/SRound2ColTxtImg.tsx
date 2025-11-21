import Image from "next/image";

export default function SRound2ColTxtImg() {
  return (
   <section className="w-full h-[70vh] overflow-visible  pt-0 bg-lighter z-50 ">
  <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center  ">
    {/* left */}
    <div className="relative flex flex-col items-center justify-center pb-16 w-1/2 z-10 md:px-16 text-center">
      <p className="oversection text-lighter font-light">Workshops & Experiences</p>
        <h1 className="heading  py-4 text-dark normal-case">Grow Through Real Practice</h1>
        <p className="paragraph text-center  text-darker pb-4 ">
         Join guided workshops that help you shift your mindset, understand your energy, and explore deeper spiritual work. Each experience is hands-on, beginner-friendly, and designed to help you integrate what you learn into daily life.</p>
        <button className="w-48 btn-rounded ">Contact Katie</button>
         
     
          </div>
          <div className="relative top-0 overflow-hidden w-[35vw] h-[80vh]  rounded-br-[12rem] rounded-bl-[12rem] z-50">
            <Image 
              src={"/images/collage6.png"} 
              alt={""}
              fill
              className="object-cover"
              // width={300}
              // height={300}
              priority/>

</div>
{/* <div
  className="bg-white"
  style={{
    clipPath: "ellipse(90% 50% at 50% 0%)",
  }}
></div> */}
          </div>
          </section>
  )}