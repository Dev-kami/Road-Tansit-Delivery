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
    </section>
  );
};

export default Testimonials;
