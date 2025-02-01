import { routes } from "@/utils/routes";
import { NavbarMenu, NavbarMenuItem } from "@heroui/react";
import Image from "next/image";

import Link from "next/link";

export default function BurgerMenu({ onClick }) {
  return (
    <NavbarMenu className="bg-zinc flex flex-col gap-[30px] px-7 py-[74px] ">
      {routes.map((route) => (
        <NavbarMenuItem key={route.path} className="max-w-[304px] mx-auto">
          <Link
            onClick={onClick}
            className="w-full text-l leading-[1.17] text-white pb-[15px] font-medium"
            href={route.path}
            size="lg"
          >
            {route.name}
          </Link>
          <Image
            src="/icons/arrow.svg"
            alt="arrow icon"
            width={304}
            height={0}
            className="w-full h-[17px]"
          />
        </NavbarMenuItem>
      ))}
    </NavbarMenu>
  );
}
