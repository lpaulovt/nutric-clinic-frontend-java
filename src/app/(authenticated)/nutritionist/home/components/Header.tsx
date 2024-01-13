"use client";

import { Greetings } from "../../components/Greetings";
import { Statistic } from "../../components/Statistic";

export function Header() {
  return (
    <div className="flex flex-row justify-between items-center w-full border border-gray100 rounded-md p-4 ">
      <Greetings name="Paulo Vitor" crn="234-23" />
      <div className="flex flex-row justify-between items-center gap-4">
        <Statistic type="patient" value="02" />
        <Statistic type="consultation" value="02" />
        <Statistic type="message" value="02" />
      </div>
    </div>
  );
}
