import Image from "next/image";

export default function TextBlock() {
  return (
    <div className="hidden sm:block py-16 md:py-[115px] w-[48.5%] lg:w-full max-w-[518px] l:ml-[8%] relative px-7 l:px-0">
      <Image
        src="/icons/form/arr1.svg"
        alt="іконка стрілки"
        width={198}
        height={191}
        className="absolute right-0 l:right-[-4%] lg:right-[-72px] bottom-[8%] md:bottom-[104px] l:bottom-[10%] lg:bottom-[104px] w-[28%] l:w-[198px] "
      />
      <h3 className="yellow-txt-gradient text-3xl font-michelin mb-6">
        Відкрийте свій успішний бізнес разом з нами!
      </h3>
      <p className="text-white text-[18px] leading-[1.17]">
        Приєднуйтесь до мережі "Татарка: Чебуреки по-кримськи" та станьте
        частиною бренду, що поєднує традиції, якість та сучасний підхід. Ми
        пропонуємо готову бізнес-модель, підтримку на всіх етапах запуску та
        впізнаваний продукт, який люблять тисячі гостей.
      </p>
    </div>
  );
}
