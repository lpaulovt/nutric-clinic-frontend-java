"use client";

import { LabelRow } from "@/components/designSystem/LabelRow";
import { Title } from "@/components/designSystem/Title";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { getInitialLetters } from "@/utils/getInitialLetters";
import { MyDataModal } from "./components/MyDataModal";

export function Content() {
  return (
    <main className="flex flex-col w-full gap-6">
      <Title
        title="Dados pessoais"
        underlineWidth="50%"
        showRightButton
        rightButton={<MyDataModal type="UPDATE" />}
        onClick={() => {}}
      />

      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-2 items-center">
          <Avatar className="w-[50px] h-[50px] bg-brand">
            <AvatarFallback className="text-white bg-brand">
              {getInitialLetters("Paulo Vitor")}
            </AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <h3 className="text-[20px] font-semibold text-black">
              Paulo Vitor Lopes da Silva
            </h3>

            <span className="text-[12px] font-semibold text-gray500">
              21 anos (27/11/2001) - Masculino
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-start">
          <h3 className="text-[18px] font-semibold text-black">Contato</h3>
          <LabelRow label="E-mail" value="paulo@gmail.com" />
          <LabelRow label="Telefone" value="(84) 99999-9999" />
        </div>
        <div className="flex flex-col gap-2 items-start">
          <h3 className="text-[18px] font-semibold text-black">Profissional</h3>
          <LabelRow label="Especialidade" value="Nutricionista" />
          <LabelRow label="CRN" value="000-00" />
        </div>
      </div>
    </main>
  );
}
