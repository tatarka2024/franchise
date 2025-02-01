import Image from "next/image";
import { motion } from "framer-motion";
import { data } from "./data";
import { variantsAnimation } from "@/app/helpers/animation";

export default function WhyUsList() {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-4 items-end gap-7 md:gap-2 l:gap-5 md:relative z-[2]">
      {data.map(({ img, title, txt }, index) => (
        <motion.li
          key={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variantsAnimation}
          custom={index}
          className={`bg-white rounded-md p-4 pb-6 md:p-2 lg:p-[26px] md:pb-[41px] ${
            index === data.length - 1
              ? "md:h-[488px] l:h-[530px]"
              : index === 0
              ? "md:h-[356px] l:h-[411px]"
              : "md:h-[274px]"
          }`}
        >
          {img && (
            <div
              className={`w-full mb-6 sm:mb-[18px] ${
                index === data.length - 1
                  ? "h-[237px] sm:h-[405px] md:h-[270px] overflow-hidden"
                  : "h-auto"
              }`}
            >
              <Image
                src={img}
                alt={title}
                width={272}
                height={194}
                className="w-full h-full object-cover rounded-[4px]"
              />
            </div>
          )}
          <h3
            className={`${
              !img && "mt-[8px] md:mt-[54px] l:mt-8"
            } text-lg font-michelin mb-[12px] sm:mb-5`}
          >
            {title}
          </h3>
          <p
            className={`text-m leading-[1.22]`}
            dangerouslySetInnerHTML={{ __html: txt }}
          />
        </motion.li>
      ))}
    </ul>
  );
}
