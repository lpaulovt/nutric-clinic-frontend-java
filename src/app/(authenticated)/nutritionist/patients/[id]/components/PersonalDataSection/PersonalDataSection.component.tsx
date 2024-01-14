"use client";

import { Title } from "@/components/designSystem/Title";
import { PatientModal } from "../../../components/PatientModal";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { getInitialLetters } from "@/utils/getInitialLetters";
import { LabelRow } from "@/components/designSystem/LabelRow";

export function PersonalDataSection() {
  return (
    <div className="flex flex-col gap-4">
      <Title
        title="Dados Pessoais"
        underlineWidth="50%"
        showRightButton
        rightButton={<PatientModal type="UPDATE" />}
        onClick={() => {}}
      />
      <div className="flex flex-row items-center gap-6">
        <Avatar className="w-[100px] h-[100px] bg-brand">
          <AvatarFallback
            className={`text-white text-[32px] font-bold ${
              true ? "bg-brand" : "bg-gray400"
            }`}
          >
            {getInitialLetters("Paulo Vitor")}
          </AvatarFallback>
        </Avatar>

        <div className="flex flex-col gap-2">
          <h3 className="text-[18px] font-semibold text-black">
            Paulo Vitor Lopes da Silva
          </h3>
          <div className="flex flex-row gap-4">
            <div>
              <LabelRow label="Idade:" value="22 anos" />
              <LabelRow label="Sexo:" value="Masculino" />
              <LabelRow label="CPF:" value="123.123.123-12" />
            </div>
            <div>
              <LabelRow label="E-mail:" value="paulo@gmail.com" />
              <LabelRow label="Telefone:" value="(84) 99999-9999" />
              <LabelRow
                label="Endereço:"
                value="Rua, 12, bairro, São Miguel/RN"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
