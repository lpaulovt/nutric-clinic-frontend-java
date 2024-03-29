"use client";

import { useAuth } from "@/app/(authenticated)/hooks/useAuth";
import { Greetings } from "../../components/Greetings";
import { Statistic } from "../../components/Statistic";

export function Header() {
  const { profile } = useAuth();

  return (
    <div className="flex flex-row justify-between items-center w-full border border-gray100 rounded-md p-4 ">
      <Greetings name={profile?.fullName} crn={profile?.crn} />
      <div className="flex flex-row justify-between items-center gap-4">
        <Statistic type="patient" value="02" />
        <Statistic type="consultation" value="02" />
        <Statistic type="message" value="02" />
      </div>
    </div>
  );
}
