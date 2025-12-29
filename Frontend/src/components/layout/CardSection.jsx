"use client";

import React, { useRef } from "react";
import { cardsList } from "../../assets/cardLists.js";
import Card from "../home/Card";
import { useScroll, useTransform } from "framer-motion";

const CardSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef });
  // Each card will have a different scale and range for effect
  return (
    <section ref={sectionRef} className="w-full min-h-screen py-16 bg-[#FDFBF7] flex flex-col items-center">
      <h2 className="text-3xl md:text-5xl font-serif text-[#2F3B32] text-center">Featured Cards</h2>
      <div className="relative w-full flex flex-col gap-0">
        {cardsList.map((card, i) => {
          // Each card gets a different scale and range for a stacked effect
          const range = [0, 1];
          const targetScale = 0.85 + (cardsList.length - i) * 0.03;
          return (
            <Card
              key={card.id}
              {...card}
              index={i}
              targetScale={targetScale}
              range={range}
              progress={scrollYProgress}
            />
          );
        })}
      </div>
    </section>
  );
};

export default CardSection;
