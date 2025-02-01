import CustomSelect from "@/app/components/common/CustomSelect";
import PlacesList from "./PlacesList";
import Link from "next/link";

export default function PlacesCard({
  variant,
  title,
  selectedOption,
  setSelectedOption,
  options,
  filteredPlaces,
}) {
  return (
    <div className="flex flex-col gap-5 sm:gap-10">
      <div
        className={`${
          variant === "upcoming" ? "bg-yellow-gradient" : "bg-white"
        } w-full h-[98px] sm:h-[172px] flex justify-center items-center rounded-md`}
      >
        <h2
          className="text-2xl text-center font-michelin"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </div>
      <CustomSelect
        options={options}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        variant={variant}
      />
      <div>
        <PlacesList filteredPlaces={filteredPlaces} />
        {/* <Link
          href={"/"}
          className="font-michelin text-white rounded-[4px] bg-dark-to-yellow-2 py-[14px] sm:py-6 flex justify-center items-center text-s mt-5 sm:mt-[26px]"
        >
          Переглянути всі заклади
        </Link> */}
      </div>
    </div>
  );
}
