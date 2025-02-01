"use client";
import { motion } from "framer-motion";
import Container from "@/utils/Container";
import { data } from "./data";
import Card from "./Card";
import { titleAnimation } from "@/app/helpers/animation";

export default function OurSuperiority() {
  return (
    <Container>
      <div className="pb-[120px] lg:pb-[180]">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={titleAnimation}
          className="text-white font-michelin text-center text-[20px] xs:text-4xl font-bold mb-8"
        >
          Чому конкуренти
          <br /> бояться нас?
        </motion.h2>
        <ul className="flex flex-col sm:flex-row flex-wrap gap-8 sm:gap-5 sm:justify-center">
          {data.map(({ title, txt, img }, index) => (
            <Card key={index} title={title} txt={txt} img={img} index={index} />
          ))}
        </ul>
      </div>
    </Container>
  );
}
