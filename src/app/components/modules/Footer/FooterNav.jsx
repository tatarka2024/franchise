import { routes } from "@/utils/routes";
import Link from "next/link";

export default function FooterNav() {
  return (
    <div className="pr-[6.25%] lg:pr-[14.25%]">
      <h3 className="mb-3 text-base font-michelin">Навігація</h3>
      <div className="flex flex-col gap-[10px] xs:flex-row xs:gap-8 md:gap-[97px]">
        <ul className="flex flex-col gap-[6px] l:gap-[10px]">
          {routes.slice(0, 4).map((route) => (
            <li
              key={route.path}
              className="hover:text-yellow hover:underline transition-default"
            >
              <Link href={route.path} className="text-m-resp">
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col gap-[6px] l:gap-[10px]">
          {routes.slice(4).map((route) => (
            <li
              key={route.path}
              className="hover:text-yellow hover:underline transition-default"
            >
              <Link href={route.path} className="text-m-resp">
                {route.name}
              </Link>
            </li>
          ))}
          <li className="hover:text-yellow hover:underline transition-default">
            <Link href="/public-contract" className="text-m-resp">
              Публічний договір
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
