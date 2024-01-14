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

export function ContentPatients() {
  const router = useRouter();

  const handlePatientDetails = (patient: IPatient) => {
    console.log(patient);
    router.push(`${PRIVATE_ROUTES.NUTRITIONIST_PATIENTS}/${patient.id}`);
  };

  return (
    <main className="flex flex-col w-full gap-6">
      <Title
        title="Pacientes"
        underlineWidth="50%"
        showRightButton
        rightButton={<RegisterModal />}
        onClick={() => {}}
      />

      <Tabs defaultValue="ALL" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="ALL">Todos</TabsTrigger>
          <TabsTrigger value="ACTIVE">Ativos</TabsTrigger>
          <TabsTrigger value="INACTIVE">Inativos</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="w-full flex flex-row flex-wrap gap-4">
        {patientData?.length === 0 && (
          <EmptyState
            imageSrc={peopleIllustration}
            messageFirstPart="Você ainda não possui pacientes, "
            messageLink="clique aqui"
            messageLastPart=" para ir cadastrar um."
            onClick={() => {}}
          />
        )}

        {patientData?.length !== 0 &&
          patientData.map((item) => (
            <PatientShortcut
              onClick={handlePatientDetails}
              key={item.patient.cpf}
              {...item}
            />
          ))}
      </div>
    </main>
  );
}
