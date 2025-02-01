import FormBtn from "@/app/components/common/Buttons/FormBtn";
import CustomBtn from "@/app/components/common/Buttons/СustomBtn";
import MotivationTxt from "@/app/components/common/MotivationTxt";
import ScrollingMarquee from "@/app/components/common/ScrollingMarquee";
import Image from "next/image";

export default function StartWithUs() {
  return (
    <section className="mb-[120px] lg-[mb-180px]">
      <div className="sm:flex items-stretch h-full max-w-[1280px] mx-auto">
        <div className="hidden sm:block relative w-[34.4%] flex-shrink-0">
          <Image
            src="/images/startWithUs/img.webp"
            alt="заклад Татарка"
            width={440}
            height={598}
            className="w-full h-full object-cover object-left"
          />
          <div className="absolute top-0 left-0">
            <MotivationTxt />
          </div>
        </div>
        <div className="bg-dark-to-yellow-2  py-[84px] l:py-[102px] px-7 lg:px-[122px] sm:max-w-[65.6%]">
          <h2 className="text-white font-michelin text-3xl mb-6">
            Відкрийте свій прибутковий заклад під нашим брендом!
          </h2>
          <p className="text-white text-ml mb-6">
            Мережа "Татарка: Чебуреки по-кримськи" - це успішний бізнес з
            перевіреною моделлю та автентичним продуктом, який люблять тисячі
            клієнтів. Станьте нашим партнером, відкрийте свій заклад i отримуйте
            стабільний дохід
          </p>
          <FormBtn text="Залишити заявку" variant="yellow-grad" />
        </div>
      </div>
      <ScrollingMarquee />
    </section>
  );
}
