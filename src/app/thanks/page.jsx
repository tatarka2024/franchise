import Image from "next/image";
import Link from "next/link";

export default function Thanks() {
  return (
    <div className="h-[70vh] flex justify-center items-center">
      <div className="w-[84.4%] max-w-[440px] rounded-md bg-white pt-[50px] sm:pt-10 flex flex-col justify-between h-[347px] gap-4 overflow-hidden">
        <div className="px-10 text-center">
          <h3 className="font-michelin dark-txt-gradient text-lg l:text-[28px] mb-3">
            Дякуємо!
          </h3>
          <p className="mb-5 text m-resp leading-[1.22]">
            Найближчим часом наш <br /> менеджер звʼяжеться з Вами.
          </p>
          <Link
            href="/"
            className="bg-dark-to-yellow-grad text-white rounded-md font-michelin font-medium text-center py-2 px-4"
          >
            На головну
          </Link>
        </div>
        <div className="w-full ">
          <Image
            src="/images/thanks.webp"
            alt="страва закладу Татарка"
            width={402}
            height={400}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
