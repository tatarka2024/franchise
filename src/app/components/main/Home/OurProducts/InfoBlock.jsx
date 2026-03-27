import Image from "next/image";
import { motion } from "framer-motion";
import { variantsAnimation } from "@/app/helpers/animation";

export default function InfoBlock() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variantsAnimation}
      className="bg-white rounded-md p-4 pb-6 md:p-2 lg:p-[26px] md:w-[32%] lg:pb-[30px]"
    >
      <div className="w-full h-[136px] xs:h-[320px] md:h-[136px] rounded-[4px] overflow-hidden mb-[26px]">
        <Image
          src="/images/products/img1.webp"
          alt="срава закладу Татарка"
          width={213}
          height={136}
          className="w-full h-full object-cover rounded-[4px]"
        />
      </div>
      <h3 className="font-michelin text-black text-[20px] font-bold leading-[1.22] mb-[18px]">
        Наш асортимент
      </h3>
      <p className="text-[12px] leading-[1.17]">
        З самого початку нашою основною стравою були чебуреки та янтики — саме
        ці позиції й сьогодні формують левову частку продажів.
      </p>
      <p className="text-[12px] leading-[1.17]">
        Втім, ми не зупинилися на цьому. Асортимент було розширено мантами,
        справжнім кримським пловом, шурпою та авторськими десертами, що
        дозволило суттєво збільшити попит і залучити нову аудиторію.
      </p>
    </motion.div>
  );
}
