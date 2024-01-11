"use client";

import Image from "next/image";
import nutricionistBackground from "@/assets/nutricionistBackground.png";

import { usePathname } from "next/navigation";

export function BackgroundImage() {
  const pathname = usePathname();
  return (
    <Image
      width={720}
      height={1024}
      src={nutricionistBackground}
      alt="Fruits"
      className="w-full h-screen object-cover"
    />
  );
}
