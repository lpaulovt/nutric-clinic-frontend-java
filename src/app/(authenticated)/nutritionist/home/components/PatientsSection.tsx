"use client";

import { IPatient } from "@/app/types/Patient";
import { EmptyState } from "@/components/designSystem/EmptyState";
import { PatientShortcut } from "@/components/designSystem/PatientShortcut";
import { Title } from "@/components/designSystem/Title";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import peopleIllustration from "@/assets/peopleIllustration.svg";
import { PRIVATE_ROUTES } from "@/app/infrastructure/navigation";

export function PatientsSection() {
  const router = useRouter();

  const data = [
    {
      showAge: true,
      patient: {
        name: "Paulo Vitor",
        age: "21",
        cpf: "123.123.123.123-12",
        status: "ACTIVE",
      } as IPatient,
    },
    {
      showAge: true,
      patient: {
        name: "Caio Rafael",
        age: "21",
        cpf: "123.123.123.123-12",
        status: "INACTIVE",
      } as IPatient,
    },
  ];

  const filteredData = useMemo(() => {
    return data?.slice(0, 5);
  }, [data]);

  const handlePatientDetails = (patient: IPatient) => {
    console.log(patient);
  };

  const handleNavigateToPatients = () => {
    router.push(PRIVATE_ROUTES.NUTRITIONIST_PATIENTS);
  };

  if (filteredData?.length === 0)
    return (
      <EmptyState
        imageSrc={peopleIllustration}
        messageFirstPart="Você ainda não possui pacientes, "
        messageLink="clique aqui"
        messageLastPart=" para ir cadastrar um."
        onClick={handleNavigateToPatients}
      />
    );

  return (
    <div className="flex flex-col gap-4">
      <Title title="Pacientes" underlineWidth="100%" />
      <div className="flex flex-row gap-5 justify-start items-center">
        {filteredData.map((item) => (
          <PatientShortcut
            onClick={handlePatientDetails}
            key={item.patient.cpf}
            {...item}
          />
        ))}
        <div
          onClick={handleNavigateToPatients}
          className="flex flex-col justify-center items-center gap-2 cursor-pointer"
        >
          <div className="w-[50px] h-[50px] flex justify-center items-center border-2 border-brand rounded-full">
            <Plus className="text-brand font-bold w-[20px] h-[20px]" />
          </div>
          <span className="text-[12px] text-brand font-semibold">Ver mais</span>
        </div>
      </div>
    </div>
  );
}
