import Image from "next/image";

type TestimonialType = {
  testimonial: { name: string; body: string; imageUrl: string };
  currentIndex: number;
  isActive: number;
};

const Testimonial = ({
  testimonial,
  currentIndex,
  isActive,
}: TestimonialType) => {
  return (
    <>
      {currentIndex === isActive && (
        <div className="flex">
          <div className="flex-1">
            <Image
              src={testimonial.imageUrl}
              alt={testimonial.name}
              height={200}
              width={200}
            />
          </div>

          <div className="flex flex-col flex-1 gap-y-5">
            <p className="text-sm">{testimonial.body}</p>
            <h4 className="font-semibold text-sm">{testimonial.name}</h4>
          </div>
        </div>
      )}
    </>
  );
};

export default Testimonial;
