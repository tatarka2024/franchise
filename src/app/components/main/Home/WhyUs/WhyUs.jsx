"use client";
import { motion } from "framer-motion";
import Container from "@/utils/Container";
import WhyUsList from "./WhyUsList";
import { imageAnimation } from "@/app/helpers/animation";

export default function WhyUs() {
  return (
    <div id="why-us" className="relative pb-[120px] l:pb-[80px]">
      <div className="md:absolute top-[53px] z-[1] md:left-7 l:left-20 xl:left-[50%] xl:-translate-x-1/2 w-full sm:w-[92%] l:w-[84.5%] xl:w-[1120px] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageAnimation}
          className="bg-yellow-gradient px-[55px] py-[42px] sm:pt-7 sm:pb-[52px] flex justify-center   mb-14  rounded-md "
        >
          <h2 className="font-michelin text-3xl">
            Чому варто
            <br /> обрати нашу
            <br /> франшизу?
          </h2>
        </motion.div>
      </div>

      <Container>
        <WhyUsList />
      </Container>
    </div>
  );
}
