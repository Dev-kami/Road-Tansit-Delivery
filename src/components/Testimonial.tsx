import Image from "next/image";

type TestimonialType = {
  testimonial: { name: string; body: string; imageUrl: string };
  currentIndex: number;
  isActive: number;
  handleInc: () => void;
  handleDec: () => void;
};

const Testimonial = ({
  testimonial,
  currentIndex,
  isActive,
  handleInc,
  handleDec,
}: TestimonialType) => {
  return (
    <>
      {currentIndex === isActive && (
        <div className="flex">
          <div className="flex-1">
            <Image
              src={testimonial.imageUrl}
              alt={testimonial.name}
              height={300}
              width={300}
              className="rounded-full"
            />
          </div>

          <div className="flex flex-col flex-1 gap-y-5 justify-center">
            <p className="text-sm">{testimonial.body}</p>
            <h4 className="font-semibold text-sm">{testimonial.name}</h4>

            <div className="flex gap-x-5">
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
          </div>
        </div>
      )}
    </>
  );
};

export default Testimonial;
