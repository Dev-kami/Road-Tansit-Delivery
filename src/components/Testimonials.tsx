"use client";

import { testimonialsData } from "@/data/testimonialData";
import Testimonial from "./Testimonial";
import { useState } from "react";
import { NextFont } from "next/dist/compiled/@next/font";
// import { lobster } from "@/app/layout";

const Testimonials = ({ lobster }: { lobster: NextFont }) => {
  const testimonials = testimonialsData;
  const [isActive, setIsActive] = useState(0);

  const handleInc = () => {
    setIsActive((isActive) => (isActive += 1));
    if (isActive === testimonials.length - 1) setIsActive(0);
  };

  const handleDec = () => {
    setIsActive((isActive) => (isActive -= 1));
    // if (isActive === testimonials.length) setIsActive(testimonials.length);
  };

  return (
    <section className="bg-primary px-36 py-10 text-white">
      <h3 className={lobster.className + " text-3xl mb-5"}>Testimonial</h3>

      {testimonials.map((testimonial, i) => (
        <Testimonial
          key={i}
          testimonial={testimonial}
          currentIndex={i}
          isActive={isActive}
        />
      ))}

      <div className="flex gap-x-5 mt-5">
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
      </div>
    </section>
  );
};

export default Testimonials;
