"use client";

import Image from "next/image";

export default function Logo() {
  return (
    <a
      href="#home"
      className="flex items-center transition-transform duration-300 hover:scale-105"
    >
      <Image
        src="/logo.png"
        alt="Cosmos BrandFlow"
        width={220}
        height={60}
        priority
        className="
          h-12
          w-auto
          sm:h-14
          lg:h-14
        "
      />
    </a>
  );
}