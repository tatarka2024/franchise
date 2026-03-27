import Image from "next/image";
import Details from "./Details";

export default function PlaceItem({ img, title, details }) {
  return (
    <div className="flex flex-col gap-[18px] sm:gap-5 ">
      <div className="bg-white rounded-md px-[30] py-8 sm:py-11 s:px-3 lg:px-[30] flex flex-col justify-between min-h-[250px] l:min-h-[300px]">
        <div>
          <h3
            className="dark-txt-gradient font-michelin text-lg mb-3 text-center"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          {/* <p className="text-center text-base-m font-semibold leading-[1.17]">
            {square}
          </p> */}
        </div>
        <Details details={details} />
      </div>
      <div className="relative w-full aspect-[3/2] overflow-hidden rounded-md">
        <Image
          src={img}
          alt={title}
          fill
          sizes="(max-width: 550px) 100vw, (max-width: 768px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}
