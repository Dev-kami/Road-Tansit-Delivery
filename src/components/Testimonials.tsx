"use client";

import { testimonialsData } from "@/data/testimonialData";
import Testimonial from "./Testimonial";
import { useState } from "react";
import { NextFont } from "next/dist/compiled/@next/font";

const Testimonials = ({ lobster }: { lobster: NextFont }) => {
  const testimonials = testimonialsData;
  const [isActive, setIsActive] = useState(0);

  const handleInc = () => {
    setIsActive((isActive) => (isActive += 1));
    if (isActive === testimonials.length - 1) setIsActive(0);
  };

  const handleDec = () => {
    if (isActive === 0) setIsActive(testimonials.length);

    setIsActive((isActive) => (isActive -= 1));
  };

  return (
    <section className="bg-primary px-36 py-10 text-white">
      <h3 className={lobster.className + " text-3xl mb-5 text-center pl-32"}>
        Testimonial
      </h3>

      {testimonials.map((testimonial, i) => (
        <Testimonial
          key={i}
          testimonial={testimonial}
          currentIndex={i}
          isActive={isActive}
          handleInc={handleInc}
          handleDec={handleDec}
        />
      ))}

      {/* <div className="flex gap-x-5 justify-center pl-[6.5rem]">
        <button
          onClick={handleDec}
          className="bg-white text-primary font-extrabold px-3 rounded-sm"
        >
          &larr;
        </button>
        <button
          onClick={handleInc}
          className="bg-white text-primary font-extrabold px-3 rounded-sm"
        >
          &rarr;
        </button>
      </div> */}
    </section>
  );
};

export default Testimonials;
