import MotivationTxt from "@/app/components/common/MotivationTxt";
import Image from "next/image";

export default function FranchiseBenefits() {
  return (
    <section className="w-full max-w-[1280px] pb-[120px] lg:pb-[180px] sm:px-7 l:px-20 mx-auto">
      <div className="w-full border-gradient-rounded py-[90px] px-9 relative sm:absolute sm:w-[90%] l:w-[84%] xl:w-[1120px]">
        <div className="absolute bottom-0 right-0 sm:right-full sm:translate-x-full sm:translate-y-full">
          <MotivationTxt />
        </div>

        <div className="relative w-[270px] mx-auto sm:mx-0 sm:w-[57%] l:w-[51%] l:left-[4%] lg:left-[9.2%]">
          <Image
            src="/icons/benefits/icon.svg"
            alt="іконка закриті лапки"
            width={60}
            height={100}
            className="absolute w-[38px] sm:w-[60px] top-[-12px] -translate-y-full sm:top-[12px] right-0 sm:right-[-56px] l:right-[-70px] lg:right-[-36px]"
          />
          <h2 className=" text-white font-medium font-michelin text-base-l leading-[1.48]">
            Франшиза для закладів <br className="hidden l:block" /> харчування -
            ваш шлях
            <br className="hidden l:block" /> до стабільного
            <br className="hidden l:block" /> прибутку.
          </h2>
        </div>
      </div>
      <div className="w-full h-[248px] mt-8 px-7 sm:px-0 rounded-md xs:h-[383px] sm:w-[32%] sm:h-[340px] l:h-[383px] sm:ml-auto sm:relative z-[1] sm:mt-0">
        <Image
          src="/images/benefits/img.webp"
          alt="інтерʼєр закладу Татарка"
          width={304}
          height={248}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
    </section>
  );
}
