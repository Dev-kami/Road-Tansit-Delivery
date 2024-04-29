import Image from "next/image";

const GetStarted = () => {
  return (
    <section className="lg:pl-36 md:pl-10 bg-primary">
      <div className="text-white flex md:flex-row flex-col justify-between gap-y-10">
        <div className="flex flex-col w-[80%] justify-center md:pl-0 pl-10">
          <h3 className="font-lobster text-3xl mb-5 md:mt-0 mt-5">
            Get Started Today
          </h3>
          <p>
            Ready to take your logistics to the next level? Contact <br /> us to
            learn more about our services and how we <br /> can help your
            business thrive. Experience the <br /> difference with [ company
            name ] &mdash; your trusted <br /> logistics partner.
          </p>
        </div>

        <div className="w-full bg-primary">
          <Image
            src="/images/delivery-trailer-4.png"
            alt="Delivery Trailer 4"
            width={1000}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
