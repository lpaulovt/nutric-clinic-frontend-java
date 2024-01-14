"use client";

import { EmptyState } from "@/components/designSystem/EmptyState";
import { Title } from "@/components/designSystem/Title";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { patientData } from "@/mock";
import peopleIllustration from "@/assets/peopleIllustration.svg";
import { PatientShortcut } from "@/components/designSystem/PatientShortcut";
import { IPatient } from "@/app/types/Patient";
import { RegisterModal } from "./RegisterModal";
import { useRouter } from "next/navigation";
import { PRIVATE_ROUTES } from "@/app/infrastructure/navigation";

export function ContentPatientDetails() {
  const router = useRouter();

  return (
    <main className="flex flex-col w-full gap-6">
      <Title
        title="Pacientes"
        underlineWidth="50%"
        showRightButton
        rightButton={<RegisterModal />}
        onClick={() => {}}
      />
    </main>
  );
}
