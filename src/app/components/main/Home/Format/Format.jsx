import Container from "@/utils/Container";
import { data } from "./data";
import FormatCard from "./FormatCard";
import Image from "next/image";

export default function Format() {
  return (
    <Container>
      <div id="format" className="pb-[120px] lg:pb-[180px] sm:relative">
        <Image
          src="/icons/format/arrow-left.svg"
          alt="іконка стрілки"
          width={274}
          height={306}
          className="hidden sm:block absolute top-[-8%] md:top-[-12%] lg:top-[-112px] left-[6%] md:left-[75px] w-[24.5%]"
        />
        <Image
          src="/icons/format/arrow-right.svg"
          alt="іконка стрілки"
          width={274}
          height={306}
          className="hidden sm:block absolute top-[-8%] md:top-[-12%] lg:top-[-116px] right-[7%] md:right-[63px] w-[24.5%]"
        />
        <h2 className="text-white font-michelin text-4xl font-bold text-center mb-8 sm:mb-[46px]">
          Обирай формат франшизи
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-7 sm:gap-5">
          {data.map(({ title, descr, info }, index) => (
            <FormatCard key={index} title={title} descr={descr} info={info} />
          ))}
        </ul>
      </div>
    </Container>
  );
}
