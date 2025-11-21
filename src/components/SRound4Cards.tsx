"use client";

import Image from "next/image";

const cardsData = [
  { id: 1, 
    imgSrc: "/images/collage5.png", 
    title: "Energy Alignment Sessions",  
    description: "A 1:1 experience designed to help you understand your energetic patterns, shift unhelpful beliefs, and find clarity about your next steps. " },

  { id: 2, 
    imgSrc: "/images/collage6.png", 
    title: "Intuitive Clarity Readings" , 
    description: "Guidance for anyone seeking direction, reassurance, or insight into the energetic themes shaping their current life chapter." },

  { id: 3, 
    imgSrc: "/images/collage7.png", 
    title: "Personalized Growth Roadmaps" ,
    description: "A customized plan that connects your mindset, goals, and energy so you can move forward with confidence and consistency."
  },
  { id: 4, 
    imgSrc: "/images/collage8.png", 
    title: "Manifestation Mentoring", 
    description: "A supportive pathway for those ready to understand manifestation beyond trends — learning how intention, vibration, and aligned action come together to create real change." },
];

export default function Hero1Round3PicsText(){
  return (
    <section className="bg-gradient-to-b from-lighter via-light/50 to-light flex flex-col items-center justify-center py-16 px-4  md:px-8">
      <div className="max-w-2xl mx-auto flex flex-col items-center justify-center text-dark">
       <p className="oversection text-darker mb-6 ">
          Our Services
        </p>
      <h1 className="title text-center mb-4">
        Guidance, Clarity, and Support for Your Inner Transformation
      </h1>
      <p className="paragraph text-center mb-12">
        Our services are designed to help you understand your energy, shift limiting beliefs, and step into a more aligned and empowered version of yourself. Whether you're taking your first steps into spirituality or deepening your personal growth, each offering provides practical tools, intuitive insight, and gentle guidance. 
      </p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
        {cardsData.map(card => (
          <div key={card.id} className="flex flex-col items-center">
            <div className="relative w-[250px] h-[350px] overflow-hidden rounded-tr-[8rem] rounded-tl-[8rem]">
              <Image
                src={card.imgSrc}
                alt={card.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            <h2 className="relative text-dark text-sm title-italic mt-4 text-center">
              {card.title}
            </h2>
            <span className="w-48 mt-4 left-4 right-4 h-px bg-lighter"></span>
            <p className="text-darker paragraph text-center py-4 ">{card.description}</p>

          </div>
        ))}
      </div>
    </section>
  );
}
