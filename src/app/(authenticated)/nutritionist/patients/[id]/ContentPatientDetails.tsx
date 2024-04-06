"use client";

import { useFindOnePatient } from "@/app/services/patient/useFindOne";
import { DietPlanSection } from "./components/DietPlanSection";
import { PersonalDataSection } from "./components/PersonalDataSection";
import { StatusSection } from "./components/StatusSection";
import { Spin } from "@/components/designSystem/Spin";
import { useEffect } from "react";
import { useData } from "@/app/hooks/useData";

interface ContentPatientDetailsProps {
  id: string;
}

export function ContentPatientDetails({ id }: ContentPatientDetailsProps) {
  const { data, isLoading, refetch } = useFindOnePatient(id || "");
  const { setPatient, patient } = useData();

  useEffect(() => {
    if (!data) return;

    setPatient(data.patient);
  }, [data]);

  return (
    <>
      {isLoading && <Spin />}
      {!isLoading && patient && (
        <main className="flex flex-col w-full gap-6">
          <PersonalDataSection onSuccess={() => refetch()} />
          <StatusSection onSuccess={() => refetch()} />
          <DietPlanSection />
        </main>
      )}
    </>
  );
}
