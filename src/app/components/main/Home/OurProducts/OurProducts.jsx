"use client";
import { motion } from "framer-motion";
import Container from "@/utils/Container";
import InfoBlock from "./InfoBlock";
import ProductsList from "./ProductsList";
// import CustomBtn from "@/app/components/common/Buttons/СustomBtn";
import { imageAnimation, titleAnimation } from "@/app/helpers/animation";

export default function OurProducts() {
  return (
    <Container>
      <div className="pb-[120px] lg:pb-[180px]">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={titleAnimation}
          className="text-white font-michelin text-3xl mb-8 text-center md:text-start md:hidden"
        >
          Наша <br /> продукція
        </motion.h2>
        <div className="flex flex-col md:flex-row items-end gap-7 md:gap-2 lg:gap-5 mb-7 md:mb-0">
          <InfoBlock />
          <div className="w-full">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={imageAnimation}
              className="hidden md:flex w-full justify-between items-center mb-10 pl-[10px]"
            >
              <h2 className=" text-white font-michelin text-3xl text-start">
                Наша <br /> продукція
              </h2>

              {/* <CustomBtn text="Переглянути меню" variant="yellow" /> */}
            </motion.div>
            <ProductsList />
          </div>
        </div>
        {/* <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageAnimation}
          className="md:hidden flex justify-center"
        >
          <CustomBtn text="Переглянути меню" variant="yellow" />
        </motion.div> */}
      </div>
    </Container>
  );
}
