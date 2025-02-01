"use client";
import { Button } from "@heroui/react";

export default function CustomBtn({ variant, modal, text, onPress, type }) {
  const baseStyles =
    "font-michelin w-full sm:w-[265px] h-12 sm:h-[53px] rounded-[4px] flex justify-center items-center text-zinc text-m font-medium";
  const variantStyles = {
    black: "bg-zinc text-white",
    transparent:
      "bg-transparent font-raleway border-[1.5px] border-solid border-zinc",
    yellow: "bg-yellow xs:w-[265px] md:w-[220px] l:w-[265px]",
    form: "bg-white sm:bg-zinc sm:text-white sm:w-full sm:h-[47px]",
    modal: "bg-zinc text-white sm:w-full sm:h-[47px]",
    "yellow-grad": "bg-yellow-gradient",
    "black-grad": "bg-dark-to-yellow-2 text-white",
  };

  const selectedStyles = variantStyles[variant] || "";

  return (
    <Button
      type={type}
      onPress={onPress}
      className={`${baseStyles} ${selectedStyles} `}
    >
      {text}
    </Button>
  );
}
