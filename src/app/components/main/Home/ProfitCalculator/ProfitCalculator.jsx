"use client";
import { useState } from "react";
import { options } from "./options";
import Container from "@/utils/Container";
import CustomSelect from "../../../common/CustomSelect";
import { rangeInputData } from "./rangeInputData";
import RangeInput from "./RangeInput";

export default function ProfitCalculator() {
  const [checksPerDay, setChecksPerDay] = useState(30);
  const [establishments, setEstablishments] = useState(3);
  const [months, setMonths] = useState(3);
  const [selectedOption, setSelectedOption] = useState("restaurant");

  const currentOption = options.find(
    (option) => option.value === selectedOption
  );
  const calculateProfit = () =>
    currentOption?.formula(checksPerDay, establishments, months) || 0;

  return (
    <Container>
      <div id="calculator" className="pb-[120px] lg:pb-[180px]">
        <div className="flex flex-col sm:flex-row gap-6 sm:justify-between mb-8 ">
          <div>
            <h2 className="text-white text-3xl font-michelin mb-3 sm:mb-5">
              Калькулятор прибутку
            </h2>
            <p className="text-white max-w-[66%] sm:max-w-full text-ml">
              Прогнозований прибуток є орієнтовним, не оферта
            </p>
          </div>
          <div className="sm:w-[170px]">
            <CustomSelect
              variant="default"
              options={options}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
          </div>
        </div>
        <ul className="flex flex-col sm:flex-row gap-5 mb-5 md:mb-[62px]">
          {rangeInputData.map(({ label, maxValue }, index) => (
            <RangeInput
              key={index}
              label={label}
              maxValue={maxValue}
              value={
                index === 0
                  ? checksPerDay
                  : index === 1
                  ? establishments
                  : months
              }
              handleChange={(newValue) => {
                if (index === 0) setChecksPerDay(newValue);
                else if (index === 1) setEstablishments(newValue);
                else setMonths(newValue);
              }}
            />
          ))}
        </ul>

        <div className="bg-yellow-gradient flex justify-between items-center w-full sm:max-w-[360px] h-[53px] sm:h-[67px] px-4 sm:mx-auto rounded-md">
          <span className="text-base-m font-bold">Чистий прибуток: </span>
          <span className="font-michelin text-ml font-bold dark-txt-gradient">
            {calculateProfit()} ГРН
          </span>
        </div>
      </div>
    </Container>
  );
}
