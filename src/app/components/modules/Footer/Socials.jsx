import { socialLinks } from "@/utils/routes";
import Link from "next/link";
import Copyright from "./Copyright";

export default function Socials() {
  return (
    <div>
      <h3 className="mb-6 text-base font-michelin text-center sm:text-left">
        Слідкуйте за нами в соц. мережах
      </h3>
      <div className="flex flex-col gap-[60px] sm:flex-row sm:gap-4 sm:justify-between sm:items-end">
        <ul className="flex justify-center items-center gap-[18px]">
          {socialLinks.map((social, index) => (
            <li key={index}>
              <Link
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:drop-shadow-[0_4px_8px_rgba(255,255,255,0.7)] transition-shadow duration-300 ease-in-out"
              >
                <social.icon className="w-9 h-9" />
              </Link>
            </li>
          ))}
        </ul>
        <Copyright />
      </div>
    </div>
  );
}
