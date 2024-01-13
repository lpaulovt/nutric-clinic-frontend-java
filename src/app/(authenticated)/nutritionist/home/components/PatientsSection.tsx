"use client";

import { IPatient } from "@/app/types/Patient";
import { PatientShortcut } from "@/components/designSystem/PatientShortcut";
import { Title } from "@/components/designSystem/Title";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

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

  const handlePatientDetails = (patient: IPatient) => {
    console.log(patient);
  };

  const handleNavigateToPatients = () => {
    router.push(`/nutritionist/patients`);
  };
  return (
    <div className="flex flex-col gap-4">
      <Title title="Pacientes" underlineWidth="100%" />
      <div className="flex flex-row gap-5 justify-start items-center">
        {data.map((item) => (
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
