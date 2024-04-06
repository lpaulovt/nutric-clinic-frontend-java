"use client";

import { EmptyState } from "@/components/designSystem/EmptyState";
import { Title } from "@/components/designSystem/Title";
import peopleIllustration from "@/assets/peopleIllustration.svg";
import { PatientShortcut } from "@/components/designSystem/PatientShortcut";
import { IPatient } from "@/app/types/Patient";
import { PatientModal } from "./components/PatientModal/PatientModal.component";
import { useRouter } from "next/navigation";
import { useFindAllPatients } from "@/app/services/patient/useFindAll";
import { Spin } from "@/components/designSystem/Spin";
import { useData } from "@/app/hooks/useData";

export function ContentPatients() {
  const router = useRouter();
  const { setPatient } = useData();
  const { data, isLoading, refetch } = useFindAllPatients();

  const handlePatientDetails = (patient: IPatient) => {
    setPatient(patient);
    router.push(`patients/${patient.id}`);
  };

  return (
    <main className="flex flex-col w-full gap-6">
      <Title
        title="Pacientes"
        underlineWidth="50%"
        showRightButton
        rightButton={<PatientModal type="CREATE" onSuccess={() => refetch()} />}
        onClick={() => {}}
      />

      <div className="w-full flex flex-row flex-wrap gap-4">
        {isLoading && <Spin />}

        {!isLoading && data?.patients?.length === 0 && (
          <EmptyState
            imageSrc={peopleIllustration}
            messageFirstPart="Você ainda não possui pacientes, "
            messageLink="clique aqui"
            messageLastPart=" para ir cadastrar um."
            onClick={() => {}}
          />
        )}

        {!isLoading &&
          data?.patients?.length !== 0 &&
          data?.patients.map((item) => (
            <PatientShortcut
              onClick={handlePatientDetails}
              key={item.id}
              patient={item}
              showAge
            />
          ))}
      </div>
    </main>
  );
}
