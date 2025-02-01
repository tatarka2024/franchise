import Image from "next/image";
import Link from "next/link";

export default function PlacesList({ filteredPlaces }) {
  return (
    <ul className="flex flex-col gap-3 sm:gap-5">
      {filteredPlaces.map(({ id, img, name, address, href }) => (
        <li key={id}>
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-md flex px-3 py-[10px] items-center l:px-[18px] sm:py-[14px] gap-[10px] justify-between group transition-transform"
          >
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="w-[50px] xs:w-[91px] h-[50px] xs:h-[90px] overflow-hidden rounded-md">
                <Image
                  src={img}
                  alt="заклад Татарка"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover object-center rounded-md"
                />
              </div>
              <div>
                <h3 className="text-[14px] l:text-[24px] font-semibold leading-[1.17] mb-[6px]">
                  {name}
                </h3>
                <p className="text-[10px] sm:text-[16px] leading-[1.17]">
                  {address}
                </p>
              </div>
            </div>
            <Image
              src="/icons/arrow-in-circle.svg"
              alt="іконка стрілки"
              width={71}
              height={71}
              className="w-10 lg:w-[71px] transform transition-transform duration-300 group-hover:-rotate-90"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
