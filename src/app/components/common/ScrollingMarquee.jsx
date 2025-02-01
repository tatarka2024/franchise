import Image from "next/image";
import React from "react";

export default function ScrollingMarquee({ variant }) {
  const items = Array(10).fill("ПРИБУТОК ВІД 2000$");

  return (
    <div
      className={`relative z-[2] mt-[-1px] max-w-full ${
        variant === "yellow" ? "bg-yellow" : "bg-white"
      }  overflow-hidden mx-auto py-[12px] l:py-[22px]`}
    >
      <div className="flex gap-[26px] sm:gap-[48px] w-[200%] animate-scroll">
        {items.map((text, index) => (
          <div key={index} className="flex gap-[13px] items-center sm:gap-6">
            <Image
              src={`${
                variant === "yellow"
                  ? "/icons/ellipse-white.svg"
                  : "/icons/ellipse-yell.svg"
              }`}
              alt="іконка"
              width={18}
              height={18}
              className="w-[10px] h-[10px] sm:w-[18px] sm:h-[18px]"
            />
            <p className="text-xs font-michelin font-medium whitespace-nowrap w-full">
              {text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
