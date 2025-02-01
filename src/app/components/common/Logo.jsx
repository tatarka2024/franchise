import Image from "next/image";
import Link from "next/link";

export default function Logo({ variant }) {
  return (
    <Link href="/">
      <Image
        src="/icons/logo.svg"
        alt="логотип закладу Татарка"
        width={165}
        height={24}
        className={`${
          variant === "header"
            ? "w-[138px] h-5 sm:w-[165px] sm:h-6"
            : "w-[165px] h-6"
        } `}
      />
    </Link>
  );
}
