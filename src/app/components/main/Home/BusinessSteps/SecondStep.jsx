import Image from "next/image";

export default function SecondStep() {
  return (
    <div className="flex flex-col sm:flex-row-reverse gap-6 sm:gap-5 sm:items-end">
      <div className="sm:max-w-[40.7%]">
        <h3 className="text-white font-michelin mb-3 sm-mb-[10px] text-lg">
          Формалізація відносин
        </h3>
        <p className="text-white text-m-resp leading-[1.22]">
          між франчайзером та франчайзі через укладення договору. Цей крок
          визначає права та обов'язки обох сторін для успішного співпраці.
        </p>
        <div className="hidden sm:block sm:mt-[30px]">
          <Image
            src="/images/second-step/img2.webp"
            alt="продукція закладу Татарка"
            width={455}
            height={102}
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="w-full sm:max-w-[57.6%] l:max-w-[57.6%] h-[245] xs:h-[340px] sm:h-[212px] overflow-hidden rounded-xl">
        <Image
          src="/images/second-step/img.webp"
          alt="чоловік купує продукцію закладy Татарка"
          width={265}
          height={245}
          className="w-full h-full object-cover object-top rounded-xl"
        />
      </div>
    </div>
  );
}
