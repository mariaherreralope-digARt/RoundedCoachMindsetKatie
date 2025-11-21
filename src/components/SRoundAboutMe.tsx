import Image from "next/image";

export default function SRoundAboutMe() {
  return (
   <section className="relative w-full h-screen  pt-8 bg-[url('/images/collage6.png')] bg-cover bg-center md:bg-none  md:bg-light  ">
    <div className="absolute inset-0 bg-white/50 backdrop-blur-0 md:hidden"></div>
  <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center  px-16">
    {/* left */}
    <div className="relative flex flex-col items-center md:items-left justify-center pt-8 md:w-1/2 z-10">
      <p className="oversection text-darker ">ABOUT KATIE</p>
        <h1 className="heading text-center md:text-left py-4 text-dark normal-case">Guiding You Back to Your Own Inner Wisdom</h1>
        <p className="paragraph text-center md:text-left text-darker pb-4 ">
         Katie Clarke is a spiritual content creator and teacher who blends mindset work, energy awareness, manifestation principles, and practical spirituality to help people reconnect with their highest potential.</p>
         <p className="paragraph text-center md:text-left text-darker pb-4 ">
         Her journey began with a deep desire to understand why life sometimes feels out of alignment — why we feel stuck, disconnected, or unsure of our path. Through years of self-study, intuitive development, and transformational practices, she discovered a truth that now shapes all of her teachings:</p>
         
     
          </div>
          <div className="relative hidden md:block overflow-hidden w-[50vw] h-[110vh] -mt-24 -ml-16 rounded-tr-[16rem] rounded-tl-[16rem] ">
            <Image 
              src={"/images/collage6.png"} 
              alt={""}
              fill
              className="object-cover opacity-50"
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