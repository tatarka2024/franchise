import { routes } from "@/utils/routes";
import { NavbarContent, NavbarItem } from "@heroui/react";
import Link from "next/link";

export default function Navigation() {
  return (
    <NavbarContent className="hidden md:flex gap-4 lg:gap-8" justify="end">
      {routes.map((route) => (
        <NavbarItem key={route.path}>
          <Link
            className="text-[14px] l:text-l text-white leading-[1.17]"
            href={route.path}
          >
            {route.name}
          </Link>
        </NavbarItem>
      ))}
    </NavbarContent>
  );
}
