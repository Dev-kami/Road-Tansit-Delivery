import RequestQuoteButton from "@/ui/RequestQuoteButton";
import Image from "next/image";

const About = () => {
  return (
    <section className="px-36 h-full flex justify-between w-full">
      <div className="flex flex-col flex-1 items-start justify-center">
        <h2 className="font-lobster text-primary text-5xl before:h-16 relative before:w-1 before:bg-gradient-to-b from-primary to-white before:absolute before:-left-2">
          Fast & Secured way <br /> of road transit <br /> delivery
        </h2>
        <ul className="text-primary font-medium mt-4">
          <li>Pick up service</li>
          <li>Pick up service</li>
          <li>Pick up service</li>
          <li>Pick up service</li>
        </ul>
        <RequestQuoteButton className="mt-5 bg-primary text-white p-3 rounded-lg">
          Request Quote
        </RequestQuoteButton>
      </div>

      <div className="relative h-full w-full flex-1">
        <Image
          className="absolute -top-10 right-0"
          src="/images/delivery-trailer-2.png"
          alt="Delivery Trailer 2"
          width={370}
          height={370}
        />
        <Image
          className="absolute -bottom-16 -left-20"
          src="/images/delivery-trailer-3.png"
          alt="Delivery Trailer 3"
          width={370}
          height={370}
        />
      </div>
    </section>
  );
};

export default About;
