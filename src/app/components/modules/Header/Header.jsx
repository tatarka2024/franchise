"use client";

import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
} from "@heroui/react";
import Logo from "../../common/Logo";
import Navigation from "./Navigation";
import Image from "next/image";
import BurgerMenu from "./BurgerMenu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll
      className={`mx-auto bg-zinc navbar w-full  `}
    >
      <div className="max-w-[1280px] w-full flex justify-between px-7 l:px-20 py-8 l:py-9 mx-auto">
        {/* Брендинг */}
        <NavbarContent>
          <NavbarBrand>
            <Logo variant="header" />
          </NavbarBrand>
        </NavbarContent>

        {/* Навигационные ссылки для десктопа */}
        <Navigation />

        <NavbarMenuToggle
          icon={
            isMenuOpen ? (
              <Image
                src="/icons/close.svg"
                alt="іконка закриття"
                width={32}
                height={32}
              />
            ) : (
              <Image
                src="/icons/menu.svg"
                alt="іконка меню"
                width={35}
                height={35}
              />
            )
          }
          aria-label={isMenuOpen ? "Закрити меню" : "Відкрити меню"}
          className={`${
            isMenuOpen ? "w-[32px] h-[32px]" : "w-[35px] h-[35px]"
          } md:hidden`}
        />

        {/* Бургер-меню */}
        <BurgerMenu
          onClick={() => {
            setIsMenuOpen(false);
          }}
        />
      </div>
    </Navbar>
  );
}
