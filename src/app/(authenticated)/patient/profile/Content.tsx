"use client";

import { LabelRow } from "@/components/designSystem/LabelRow";
import { Title } from "@/components/designSystem/Title";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { getInitialLetters } from "@/utils/getInitialLetters";
import { useFindOneProfile } from "@/app/services/profiles/useFindOne";
import { useAuth } from "../../hooks/useAuth";
import { Spin } from "@/components/designSystem/Spin";
import { formatDate } from "@/utils/formatDate";
import { GenderEnum } from "@/app/types/Profile";

export function Content() {
  const { profile } = useAuth();

  const { data, isLoading, refetch } = useFindOneProfile(profile?.id);

  return (
    <main className="flex flex-col w-full gap-6">
      <Title
        title="Dados pessoais"
        underlineWidth="50%"
        showRightButton={false}
        onClick={() => {}}
      />

      {!isLoading && (
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-2 items-center">
            <Avatar className="w-[50px] h-[50px] bg-brand">
              <AvatarFallback className="text-white bg-brand">
                {getInitialLetters(data?.fullName)}
              </AvatarFallback>
            </Avatar>

            <div className="flex flex-col">
              <h3 className="text-[20px] font-semibold text-black">
                {data?.fullName}
              </h3>

              <span className="text-[12px] font-semibold text-gray500">
                {profile?.dateOfBirth && formatDate(profile?.dateOfBirth)} -{" "}
                {GenderEnum[profile?.gender as any]}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <h3 className="text-[18px] font-semibold text-black">Contato</h3>
            <LabelRow label="E-mail" value={profile?.email || ""} />
            <LabelRow label="Telefone" value={profile?.phone || ""} />
          </div>
          <div className="flex flex-col gap-2 items-start">
            <h3 className="text-[18px] font-semibold text-black">Endereço</h3>
            <LabelRow label="CEP" value={profile?.cep || ""} />
            <LabelRow label="Estado" value={profile?.state || ""} />
            <LabelRow label="Cidade" value={profile?.city || ""} />
            <LabelRow label="Bairro" value={profile?.neighborhood || ""} />
            <LabelRow label="Rua" value={profile?.street || ""} />
            <LabelRow label="Número" value={profile?.number || ""} />
          </div>
        </div>
      )}

      {isLoading && <Spin />}
    </main>
  );
}
