"use client";

import { Title } from "@/components/designSystem/Title";

import { ServiceLocationModal } from "./components/ServiceLocationModal";
import { ServiceLocationItem } from "./components/ServiceLocationItem";
import { useFindAllAddress } from "@/app/services/address/useFindAll";
import { Spin } from "@/components/designSystem/Spin";

export function Content() {
  const { data, isLoading, refetch } = useFindAllAddress();

  return (
    <main className="flex flex-col w-full gap-6">
      <Title
        title="Locais de atendimento"
        underlineWidth="50%"
        showRightButton
        rightButton={
          <ServiceLocationModal type="CREATE" postAction={() => refetch()} />
        }
        onClick={() => {}}
      />

      {!isLoading && (
        <div className="w-full flex flex-row flex-wrap">
          {data?.results?.map((item) => (
            <ServiceLocationItem
              key={item.id}
              {...item}
              postAction={() => refetch()}
            />
          ))}

          {data?.count === 0 && <p>Não há endereços cadastrados ainda.</p>}
        </div>
      )}

      {isLoading && <Spin />}
    </main>
  );
}
