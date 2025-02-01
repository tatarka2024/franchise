import Image from "next/image";

export default function AbsoluteArr() {
  return (
    <Image
      src="/icons/steps/arr.svg"
      alt="іконка стрілки"
      width={130}
      height={128}
      className="absolute w-[146px] md:w-[226px] bottom-[-40px] right-[-9%] xs:right-0 sm:rotate-[80deg] sm:right-full md:right-[54px] sm:translate-x-full sm:bottom-[-90px] "
    />
  );
}
