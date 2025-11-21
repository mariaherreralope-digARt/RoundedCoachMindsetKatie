import Image from "next/image";

export default function SRound2ColTxtImg() {
  return (
    <section className="relative w-full h-auto md:h-[70vh] overflow-visible py-16 md:pt-0 bg-[url('/images/collage6.png')] bg-cover bg-center md:bg-none md:bg-lighter z-50">
      <div className="absolute inset-0 bg-white/50 backdrop-blur-0"></div>

      <div className="relative max-w-6xl px-16 md:px-0 mx-auto flex flex-col md:flex-row items-center justify-center">

        {/* left */}
        <div className="relative flex flex-col items-center justify-center pb-16 w-full md:w-1/2 z-10 md:px-16 text-center">
          <p className="oversection text-darker ">Workshops & Experiences</p>
          <h1 className="heading py-4 text-dark normal-case">
            Grow Through Real Practice
          </h1>
          <p className="paragraph text-center text-darker pb-4">
            Join guided workshops that help you shift your mindset, understand your energy, and explore deeper spiritual work. Each experience is hands-on, beginner-friendly, and designed to help you integrate what you learn into daily life.
          </p>
          <button className="w-48 btn-rounded">Contact Katie</button>
        </div>

        {/* right image only visible on md+ */}
        <div className="relative hidden md:block top-0 overflow-hidden w-[35vw] h-[80vh] rounded-br-[12rem] rounded-bl-[12rem] z-50">
          <Image
            src="/images/collage6.png"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>

      </div>
    </section>
  );
}
