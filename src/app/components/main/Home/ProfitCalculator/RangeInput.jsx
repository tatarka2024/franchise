"use client";
import { Slider } from "@heroui/react";

export default function RangeInput({ label, value, maxValue, handleChange }) {
  return (
    <li className="w-full bg-white py-[26px] px-[22px] sm:py-[39px] rounded-md min-h-[167px] sm:min-h-[190px]">
      <Slider
        classNames={{
          track: "bg-zinc h-[2px] border-x-[0px]",
          filler: "bg-transparent h-[2px]",
          label: " font-bold mb-[43px] rangeLabel",
          value: "hidden",
          startContent:
            " absolute bottom-[-34px] text-[20px] font-michelin font-bold",
          endContent:
            "absolute bottom-[-34px] right-0 text-[20px] font-michelin font-bold",
        }}
        label={label}
        size="sm"
        renderThumb={(props) => (
          <div
            {...props}
            className="relative group p-[1px] top-1/2 bg-white border-small rounded-full cursor-grab data-[dragging=true]:cursor-grabbing"
          >
            {/* Значення над thumb */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-yellow-gradient text-[14px] font-medium font-michelin w-[35px] h-[27px] sm:w-[42px] rounded-md flex justify-center items-center">
              {value}
            </div>
            {/* Стилізований thumb */}
            <div className="transition-transform bg-zinc rounded-full w-5 h-5 block group-data-[dragging=true]:scale-80" />
          </div>
        )}
        value={value}
        onChange={handleChange}
        minValue={1}
        maxValue={maxValue}
        step={1}
        aria-label="quantity"
        startContent="1"
        endContent={maxValue}
      />
    </li>
  );
}
