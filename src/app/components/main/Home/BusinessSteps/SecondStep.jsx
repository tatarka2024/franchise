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
        <div className="relative hidden aspect-[455/102] w-full overflow-hidden rounded-md sm:mt-[30px] sm:block">
          <Image
            src="/images/second-step/img2.webp"
            alt="продукція закладу Татарка"
            fill
            sizes="(max-width: 660px) 100vw, 455px"
            className="object-cover object-center"
          />
        </div>
      </div>

      <div className="relative h-[245px] w-full overflow-hidden rounded-xl xs:h-[340px] sm:h-[212px] sm:max-w-[57.6%] l:max-w-[57.6%]">
        <Image
          src="/images/second-step/img.webp"
          alt="чоловік купує продукцію закладy Татарка"
          fill
          sizes="(max-width: 660px) 100vw, 400px"
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}
