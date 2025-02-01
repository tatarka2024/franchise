import { routes, footerLinks, socialLinks } from "@/utils/routes";
import Logo from "../../common/Logo";
import Link from "next/link";
import FooterNav from "./FooterNav";
import Socials from "./Socials";

export default function Footer() {
  return (
    <footer className="bg-footer-mob-bg l:bg-yellow-to-dark w-full">
      <div className="mx-auto w-full max-w-screen-xl px-7 l:px-20 py-[86px] sm:py-14">
        <div className="flex flex-col sm:flex-row items-center text-white gap-[60px] sm:gap-5 sm:justify-between">
          {/* Логотип */}
          <Logo />

          <div className="flex flex-col gap-[52px] xs:gap-[27px] w-full max-w-[440px] sm:max-w-[65.6%] l:max-w-[57.6%]">
            <div className="flex w-full justify-between  ">
              <div>
                <h3 className="mb-3 text-base font-michelin">Контакти</h3>
                <Link
                  href={"tel:+380985603484"}
                  className="text-m-resp hover:text-yellow transition duration-300 ease-in-out"
                >
                  +38(098) 560 34 84
                </Link>
              </div>

              {/* Ссылки футера */}
              <FooterNav />
            </div>
            <Socials />
          </div>
        </div>
      </div>
    </footer>
  );
}
