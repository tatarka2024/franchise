import Image from "next/image";
import { motion } from "framer-motion";
import { variantsAnimation } from "@/app/helpers/animation";

function TextBlock({ txt }) {
  const base = "text-s leading-[1.22]";
  if (Array.isArray(txt)) {
    return (
      <ul className={`${base} list-disc space-y-2 pl-5 marker:text-zinc`}>
        {txt.map((line, i) => (
          <li key={i}>{line}</li>
        ))}
      </ul>
    );
  }
  return <p className={base}>{txt}</p>;
}

export default function Card({ title, txt, img, index }) {
  return (
    <motion.li
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variantsAnimation}
      custom={index}
      className="w-full rounded-lg bg-white pt-11 flex flex-col h-[476px] gap-4 overflow-hidden sm:w-[48.3%] l:w-[31.3%] xl:w-[360px]"
    >
      <div className="shrink-0 px-4 xxs:px-[37.5px] sm:px-3 lg:px-5 xl:px-[53px]">
        <h3 className="font-michelin dark-txt-gradient text-lg mb-5">
          {title}
        </h3>
        <TextBlock txt={txt} />
      </div>
      <div className="relative min-h-0 flex-1 w-full">
        <Image
          src={img}
          alt={title}
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 360px"
          className="object-cover object-bottom"
        />
      </div>
    </motion.li>
  );
}
