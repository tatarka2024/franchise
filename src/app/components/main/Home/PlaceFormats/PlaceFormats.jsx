"use client";
import { motion } from "framer-motion";
import Container from "@/utils/Container";
import { data } from "./data";
import PlaceItem from "./PlaceCard/PlaceItem";
import { titleAnimation, variantsAnimation } from "@/app/helpers/animation";

export default function PlaceFormats() {
  return (
    <Container>
      <div id="locations" className="pb-[120px] lg:pb-[180px]">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={titleAnimation}
          className="text-white font-michelin text-4xl font-bold mb-8 md:mb-[46px] text-center"
        >
          Формати закладів
        </motion.h2>
        <ul className="grid grid-cols-1 s:grid-cols-2 md:grid-cols-3 gap-10 s:gap-2 l:gap-4 lg:gap-5 justify-center ">
          {data.map(({ img, title, square, details }, index) => (
            <motion.li
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={variantsAnimation}
              custom={index}
              className={
                index === data.length - 1 ? "s:col-span-2 md:col-span-1" : ""
              }
            >
              <PlaceItem
                img={img}
                title={title}
                square={square}
                details={details}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
