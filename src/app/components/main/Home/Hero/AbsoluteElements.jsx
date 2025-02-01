import MotivationTxt from "@/app/components/common/MotivationTxt";
import Image from "next/image";

export default function AbsoluteElements() {
  return (
    <>
      <div className="absolute top-0 right-0 sm:top-full sm:-translate-y-full">
        <MotivationTxt />
      </div>
      <div className="hidden sm:block absolute top-[76px] right-[38%] w-[19.2%] z-[1]">
        <Image
          src="/icons/hero/arrow.svg"
          alt="іконка стрілки"
          width={245}
          height={242}
          className="w-full h-auto"
        />
      </div>
    </>
  );
}
