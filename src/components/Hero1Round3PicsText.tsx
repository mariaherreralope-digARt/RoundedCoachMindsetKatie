import Image from "next/image";

export default function Hero1Round3PicsText() {
  return (
   <section className="w-full bg-gradient-to-b from-light via-light/50 to-lighter ">
  <div className="relative max-w-6xl mx-auto  ml-56 md:px-18">
    <div className="relative grid md:grid-cols-2 items-end justify-center gap-[16px] py-16 w-full">
      {/* left */}
      <div className="relative flex flex-col pt-8 justify-end items-end text-left w-full ">
        {/* <p className="oversection"> Gentle spiritual tools</p> */}
        <h1 className="title pb-4 text-dark">Unlock Your Inner Guidance. Align Your Energy. Transform Your Life.</h1>
        <p className="paragraph text-center md:text-left text-darker pb-8">
          Welcome to a space designed to help you reconnect with your purpose, understand your energy, and create a life that feels aligned, abundant, and deeply meaningful. Whether you’re just beginning your spiritual journey or you’re ready to expand your awareness, this is where clarity, intuition, and inspired action come together.
        </p>

        <div className="relative w-full max-w-[500px] h-[250px]  overflow-hidden rounded-tl-[8rem] mt-0 mb-0">
          <Image
            src="/images/collage1.png"
            alt="Nature Scene"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>

      {/* right */}
      <div className="flex flex-col justify-center items-start w-full">
        <div className="relative w-full max-w-[200px] h-[250px] overflow-hidden rounded-tr-[8rem] mt-0">
          <Image
            src="/images/collage8.png"
            alt="Nature Scene"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
        <div className="relative w-full max-w-[200px] h-[200px] overflow-hidden rounded-br-[8rem] mt-4">
          <Image
            src="/images/collage5.png"
            alt="Nature Scene"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </div>
  </div>
</section>


  );
}