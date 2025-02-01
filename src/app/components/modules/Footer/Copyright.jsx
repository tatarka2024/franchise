import Link from "next/link";

export default function Copyright() {
  return (
    <p className="text-[16px] font-medium leading-[1.17] text-white text-center l:pr-[26px]">
      Сайт розробили -{" "}
      <Link
        href="https://www.cyanidium.dev/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-yellow transition-default"
      >
        cyanidium.dev
      </Link>
    </p>
  );
}
