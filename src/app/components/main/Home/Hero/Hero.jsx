import Container from "@/utils/Container";
import Image from "next/image";
import AbsoluteElements from "./AbsoluteElements";
import ScrollingMarquee from "@/app/components/common/ScrollingMarquee";
import FormBtn from "../../../common/Buttons/FormBtn";

export default function Hero() {
  return (
    <div className="bg-yellow">
      <div className="sm:flex flex-row-reverse items-stretch relative max-w-[1280px] mx-auto">
        <AbsoluteElements />
        <div className="w-full sm:w-[42%] flex flex-grow">
          <Image
            src="/images/hero/hero.webp"
            alt="заклад Татарка"
            width={360}
            height={402}
            className="w-full h-auto"
            priority
          />
        </div>

        <div className="bg-yellow rounded-t-2xl sm:rounded-none py-[68px] relative mt-[-173px] sm:mt-0 sm:w-[58%] flex flex-col justify-center">
          <Container>
            <p className="text-mlg leading-[1.17] font-medium text-center mb-2 sm:mb-4 sm:text-start">
              Ваш шлях до стабільного прибутку
            </p>
            <h1 className="font-michelin text-4xl font-black dark-txt-gradient text-center sm:text-start mb-7 sm:mb-8">
              ОКУПНІСТЬ <br className="hidden sm:block" /> ВІД 10&nbsp;МІСЯЦІВ
              <br />
              ПРИБУТОК ВІД 2000$
            </h1>
            <div className="flex flex-col s:flex-row sm:flex-col md:flex-row gap-[9px] md:gap-4 lg:gap-[39px]">
              <FormBtn text="Стати франчайзі" variant="black" />
              <FormBtn
                presentation
                text="Переглянути презентацію"
                variant="transparent"
              />
            </div>
          </Container>
        </div>
      </div>
      <ScrollingMarquee />
    </div>
  );
}
