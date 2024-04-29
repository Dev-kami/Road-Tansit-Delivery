import Image from "next/image";

const Footer = () => {
  const h3Style =
    "font-lobster text-primary text-3xl before:h-16 relative before:w-1 before:bg-gradient-to-b from-primary to-white before:absolute before:-left-2";

  return (
    <section className="lg:px-36 px-10 py-5 flex sm:flex-row flex-col justify-between sm:gap-y-0 gap-y-5">
      <div className="flex flex-col gap-y-5">
        <h3 className={h3Style}>Contact Us</h3>
        <span className="flex items-center text-sm font-medium ">
          <Image
            src="/images/location-check_svgrepo.com.png"
            alt="Location"
            width={30}
            height={30}
          />
          <p>19, civic street, Ivory Towers.</p>
        </span>
        <span className="flex items-center text-sm font-medium">
          <Image
            src="/images/call-medicine_svgrepo.com.png"
            alt="Call"
            width={25}
            height={25}
          />
          <p className="ml-2">080 977 2966</p>
        </span>
      </div>
      <div className="flex flex-col gap-y-5">
        <h3 className={h3Style}>Home</h3>
        <ul className="flex flex-col gap-y-2 text-sm font-medium">
          <li>About</li>
          <li>Services</li>
          <li>Testimonial</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="flex flex-col gap-y-5">
        <h3 className={h3Style}>Business Hour</h3>
        <ul className="flex flex-col gap-y-2 text-sm font-medium">
          <li>
            Monday - Friday <br /> 8:00am - 5:00pm
          </li>
          <li>
            Saturday <br /> 8:00am - 3:00pm
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
