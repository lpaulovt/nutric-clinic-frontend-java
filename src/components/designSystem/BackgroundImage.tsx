"use client";

import Image from "next/image";
import nutricionistBackground from "@/assets/nutricionistBackground.png";

export function BackgroundImage() {
  return (
    <Image
      width={720}
      height={1024}
      src={nutricionistBackground}
      alt="Fruits"
      className="w-1/2 h-full object-cover fixed left-0"
    />
  );
}
