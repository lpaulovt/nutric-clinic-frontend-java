"use client";

import { useAuth } from "@/app/(authenticated)/hooks/useAuth";

import { Greetings } from "@/app/(authenticated)/nutritionist/components/Greetings";
import { Title } from "@/components/designSystem/Title";

export function Header() {
  const { profile } = useAuth();

  return (
    <div className="flex flex-col gap-2">
      <Title title="Seu Profissional" underlineWidth="100%" />
      <div className="flex flex-row justify-between items-center w-full border-b border-gray100  p-2 ">
        <Greetings name={profile?.fullName} crn={profile?.crn} />
      </div>
    </div>
  );
}
