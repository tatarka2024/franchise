import Image from "next/image";
import { motion } from "framer-motion";
import { variantsAnimation } from "@/app/helpers/animation";

export default function Card({ title, txt, img, index }) {
  return (
    <motion.li
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variantsAnimation}
      custom={index}
      className="w-full rounded-lg bg-white pt-11 flex flex-col justify-between h-[476px] gap-4 overflow-hidden sm:w-[48.3%] l:w-[31.3%] xl:w-[360px]"
    >
      <div className="px-4 xxs:px-[37.5px] sm:px-3 lg:px-5 xl:px-[53px]">
        <h3 className="font-michelin dark-txt-gradient text-lg mb-5">
          {title}
        </h3>
        <p className="text m-resp leading-[1.22]">{txt}</p>
      </div>
      <div className="w-full ">
        <Image
          src={img}
          alt={title}
          width={402}
          height={400}
          className="w-full h-auto"
        />
      </div>
    </motion.li>
  );
}
