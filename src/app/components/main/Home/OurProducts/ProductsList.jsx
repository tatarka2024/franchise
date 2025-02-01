import Image from "next/image";
import { motion } from "framer-motion";
import { products } from "./products";
import { variantsAnimation } from "@/app/helpers/animation";

export default function ProductsList() {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-3  md:items-end gap-7 md:gap-2 lg:gap-5">
      {products.map(({ img, title, txt }, index) => (
        <motion.li
          key={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variantsAnimation}
          custom={index}
        >
          <div className="w-full h-[237px] xs:h-[320] md:h-[160px] l:h-[200px] lg:h-[234px] overflow-hidden rounded-b-md">
            <Image
              src={img}
              alt={title}
              width={304}
              height={252}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="bg-white rounded-t-xl rounded-b-md p-[18px] md:p-2 l:p-[18px] mt-[-16px] relative z-[1]">
            <h3
              className="mb-1 font-michelin text-black text-[16px] md:text-[14px] l:text-[16px] leading-[1.22] font-bold"
              dangerouslySetInnerHTML={{ __html: title }}
            />

            <p className="text-[16px] leading-[1.22] font-medium">{txt}</p>
          </div>
        </motion.li>
      ))}
    </ul>
  );
}
