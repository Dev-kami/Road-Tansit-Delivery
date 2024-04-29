"use client";

import { testimonialsData } from "@/data/testimonialData";
import Testimonial from "./Testimonial";
import { useState } from "react";

const Testimonials = () => {
  const testimonials = testimonialsData;
  const [isActive, setIsActive] = useState(0);

  const handleInc = () => {
    setIsActive((isActive) => (isActive += 1));
    if (isActive === testimonials.length - 1) return;
  };

  const handleDec = () => {
    if (isActive === 0) return;

    setIsActive((isActive) => (isActive -= 1));
  };

  return (
    <section className="bg-primary md:px-36 px-10 py-10 text-white">
      <h3 className="font-lobster text-3xl mb-5 text-center md:pl-32">
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
          testimonialLength={testimonials.length}
        />
      ))}
    </section>
  );
};

export default Testimonials;
