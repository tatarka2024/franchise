import Container from "@/utils/Container";
import Image from "next/image";
import AbsoluteElements from "./AbsoluteElements";
import ScrollingMarquee from "@/app/components/common/ScrollingMarquee";
import FormBtn from "../../../common/Buttons/FormBtn";

export default function Hero() {
  return (
    <div className="bg-yellow">
      {/* Mobile: classic stacked hero — image first, yellow card overlaps upward */}
      <div className="relative max-w-[1280px] mx-auto sm:hidden">
        <AbsoluteElements />
        <div className="w-full">
          <Image
            src="/images/hero/hero.webp"
            alt="заклад Татарка"
            width={360}
            height={402}
            className="w-full h-auto"
            priority
          />
        </div>
        <div className="relative z-10 bg-yellow rounded-t-2xl mt-[-73px] pt-[68px] pb-10">
          <Container>
            <div className="mb-6 flex w-full justify-center">
              <Image
                src="/images/logo-dark.webp"
                alt="логотип закладу Татарка"
                width={395}
                height={127}
                className="w-auto max-w-[200px] h-auto"
                priority
              />
            </div>
            <div className="mb-4 flex flex-col items-center gap-[9px]">
              <p className="text-mlg leading-[1.17] font-medium text-center">
                16+ ресторанів
              </p>
              <p className="text-mlg leading-[1.17] font-medium text-center">
                Окупність від 14 місяців
              </p>
            </div>
            <h1 className="font-michelin text-2xl font-black dark-txt-gradient text-center mb-8">
              Ваш шлях до стабільного прибутку від 2000$
            </h1>
            <div className="flex justify-center">
              <FormBtn text="Стати франчайзі" variant="black" />
            </div>
          </Container>
        </div>
      </div>

      {/* Desktop / tablet: layered composition */}
      <div className="relative max-w-[1280px] mx-auto hidden sm:block">
        <div
          className="
            relative
            min-h-0
            sm:min-h-[480px] md:min-h-[520px] lg:min-h-[560px] xl:min-h-[600px] 2xl:min-h-[640px]
          "
        >
          <AbsoluteElements />

          <div
            className="
              relative z-0 min-h-[280px] w-full
              sm:absolute sm:inset-y-0 sm:right-0 sm:left-[38%]
            "
          >
            <Image
              src="/images/hero/hero.webp"
              alt="заклад Татарка"
              fill
              priority
              sizes="(max-width: 639px) 100vw, 62vw"
              className="object-cover object-[40%_center]"
            />
          </div>

          <div
            className="
              relative z-10 flex flex-col w-full
              sm:w-[56%]
              sm:pl-7 l:pl-20 sm:pr-0 md:pr-0
            "
          >
            <div
              className="
                bg-yellow
              "
            >
              <Container>
                <div className="pt-[68px] pb-6 sm:pb-8 lg:pb-10">
                  <div className="mb-4 sm:mb-10 flex w-full justify-center sm:grid sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-x-4">
                    <span className="hidden sm:block min-w-0" aria-hidden />
                    <Image
                      src="/images/logo-dark.webp"
                      alt="логотип закладу Татарка"
                      width={395}
                      height={127}
                      className="w-auto max-w-[200px] sm:max-w-[220px] h-auto"
                      priority
                    />
                    <span
                      className="hidden sm:block min-h-[40px] min-w-[100px] max-w-[200px] justify-self-end"
                      aria-hidden
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-[9px] md:gap-4 lg:gap-[50px] justify-center items-center sm:justify-start sm:items-start">
                    <p className="text-mlg leading-[1.17] font-medium text-center mb-2 sm:mb-4 sm:text-start">
                      16+ ресторанів
                    </p>
                    <p className="text-mlg leading-[1.17] font-medium text-center mb-2 sm:mb-4 sm:text-start">
                      Окупність від 14 місяців
                    </p>
                  </div>
                  <h1 className="font-michelin text-2xl font-black dark-txt-gradient text-center sm:text-start">
                    Ваш шлях до стабільного прибутку від 2000$
                  </h1>
                </div>
              </Container>
            </div>

            <div className="pb-10 sm:pb-12 pt-4 sm:pt-5 md:pt-6">
              <Container>
                <div className="flex justify-start">
                  <FormBtn text="Стати франчайзі" variant="black" />
                </div>
              </Container>
            </div>
          </div>
        </div>
      </div>

      <ScrollingMarquee />
    </div>
  );
}
