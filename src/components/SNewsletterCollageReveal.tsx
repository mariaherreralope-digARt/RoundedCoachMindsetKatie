"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SNewsletterCollageReveal() {
  const images = [
    {
      src: "/images/collage3.png",
      alt: "Facial treatment",
      className: "top-5 right-[20%] w-[200px]",
    },
    {
      src: "/images/collage2.png",
      alt: "Spa bathroom",
      className: "left-[15%] top-[35%] w-[220px]",
    },
    {
      src: "/images/collage1.png",
      alt: "Clay pot",
      className: "bottom-[0%] right-[5%] w-[350px]",
    },
    {
      src: "/images/collage4.png",
      alt: "Relaxing face",
      className: "bottom-[5%] left-[5%] w-[150px]",
    },
  ];

  return (
    <section className="relative bg-[#F9F6EE] py-24 flex justify-center items-center overflow-hidden">
      {/* Background images with animation */}
      <div className="absolute inset-0">
        {images.map((img, i) => (
          <motion.div
            key={i}
            className={`absolute  overflow-hidden  ${img.className}`}
            initial={{
  opacity: 0,
  scale: 0.4,
  
}}

            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
              y: 0,
              
            }}
            transition={{
              duration: 1,
              delay: i * 0.3, // slight stagger
              ease: "easeOut",
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={300}
              height={300}
              className="object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Central content box */}
      <motion.div
        className="relative z-10 bg-darker text-lighter text-center px-10 py-8 max-w-sm shadow-xl"
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="uppercase tracking-widest text-sm text-light mb-3">
          Visit our studio
        </p>
        <h2 className="text-xl font-heading md:text-3xl  italic mb-4">
          Where nature meets your beauty
        </h2>
        <p className="text-light mb-8 leading-relaxed text-sm font-body">
          Whether you're juggling remote work, building a business, or just
          trying to get through a to-do list without burning out, we’ve got the
          support and tools to help you thrive.
        </p>
        <button className="bg-[#EAE8E1] text-[#606652] px-4 py-2 text-sm font-medium uppercase tracking-wide hover:bg-white transition">
          Our Beauty Studio
        </button>
      </motion.div>
    </section>
  );
}
