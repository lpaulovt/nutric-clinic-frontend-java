"use client";

import { Title } from "@/components/designSystem/Title";
import { PatientModal } from "../../../components/PatientModal";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { getInitialLetters } from "@/utils/getInitialLetters";
import { LabelRow } from "@/components/designSystem/LabelRow";
import { useData } from "@/app/hooks/useData";

interface PersonalDataSectionProps {
  onSuccess?: () => void;
}

export function PersonalDataSection({ onSuccess }: PersonalDataSectionProps) {
  const { patient } = useData();
  return (
    <div className="flex flex-col gap-4">
      <Title
        title="Dados Pessoais"
        underlineWidth="50%"
        showRightButton
        rightButton={
          <PatientModal type="UPDATE" values={patient} onSuccess={onSuccess} />
        }
        onClick={() => {}}
      />
      <div className="flex flex-row items-center gap-6">
        <Avatar className="w-[100px] h-[100px] bg-brand">
          <AvatarFallback
            className={`text-white text-[32px] font-bold ${
              true ? "bg-brand" : "bg-gray400"
            }`}
          >
            {getInitialLetters(patient.name)}
          </AvatarFallback>
        </Avatar>

        <div className="flex flex-col gap-2">
          <h3 className="text-[18px] font-semibold text-black">
            {patient.name}
          </h3>
          <div className="flex flex-row gap-4">
            <div>
              <LabelRow label="Idade:" value={`${patient.age} anos`} />
              <LabelRow label="Sexo:" value={patient.gender} />
              <LabelRow label="CPF:" value={patient.cpf} />
            </div>
            <div>
              <LabelRow label="Telefone:" value={patient.phone} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
