"use client";

import { Title } from "@/components/designSystem/Title";
import { PatientModal } from "./PatientModal/";
import { useRouter } from "next/navigation";

export function ContentPatientDetails() {
  const router = useRouter();

  return (
    <main className="flex flex-col w-full gap-6">
      <Title
        title="Dados Pessoais"
        underlineWidth="50%"
        showRightButton
        rightButton={<PatientModal type="UPDATE" />}
        onClick={() => {}}
      />
    </main>
  );
}
