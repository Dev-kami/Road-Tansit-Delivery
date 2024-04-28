import Image from "next/image";
//import { lobster } from "@/app/layout";
import { lobster } from "@/app/page";

const Services = () => {
  return (
    <section className="px-36 py-20 text-center">
      <h3 className={lobster.className + " text-3xl text-primary pb-4"}>
        Our Services
      </h3>
      <p className="pb-6">
        We understand the importance of reliable and efficient logistics
        solutions for businesses of all sizes.
      </p>

      <div className="flex justify-between items-center">
        <div>
          <Image
            className="w-full h-full mb-5"
            src="/images/3d-delivery-truck.png"
            alt=""
            width={500}
            height={500}
          />
          <p className="text-primary">Transportation</p>
        </div>
        <div>
          <Image
            className="w-full h-full mb-5"
            src="/images/kingdom-warehouse.png"
            alt=""
            width={500}
            height={500}
          />
          <p className="text-primary">Warehousing</p>
        </div>
        <div>
          <Image
            className="w-full h-full mb-5"
            src="/images/cherry-cargo-transportation.png"
            alt=""
            width={500}
            height={500}
          />
          <p className="text-primary">Supply Chain Management</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
