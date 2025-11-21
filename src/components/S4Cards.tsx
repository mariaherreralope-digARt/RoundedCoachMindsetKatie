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

export default function S4Cards(){
  return (
    <section className="bg-light flex flex-col items-center justify-center py-16 px-4  md:px-8">
      <div className="max-w-2xl mx-auto flex flex-col items-center justify-center text-dark">
       <p className="oversection text-darker pb-4 ">
          Videos
        </p>
      <h1 className="title text-center mb-4">
        Learn at Your Own Pace
      </h1>
      <p className="paragraph text-center mb-12">
        Explore Katie’s latest videos on energy, mindset, manifestation, and spiritual growth. Simple explanations, powerful insights, and practical tools to help you transform from within. Updated weekly. 
      </p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-16 justify-items-center">
        {cardsData.map(card => (
          <div key={card.id} className="flex flex-col items-center">
            <div className="relative w-[200px] h-[200px] overflow-hidden ">
              <Image
                src={card.imgSrc}
                alt={card.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* <h2 className="relative text-dark text-sm title-italic mt-4 text-center">
              {card.title}
            </h2>
            <span className="w-48 mt-4 left-4 right-4 h-px bg-lighter"></span>
            <p className="text-darker paragraph text-center py-4 ">{card.description}</p> */}

          </div>
        ))}
      </div>
    </section>
  );
}
