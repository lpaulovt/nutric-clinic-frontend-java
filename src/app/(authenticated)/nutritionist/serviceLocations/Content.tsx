"use client";

import { Title } from "@/components/designSystem/Title";

import { ServiceLocationModal } from "./components/ServiceLocationModal";
import { ServiceLocationItem } from "./components/ServiceLocationItem";
import { IServiceLocation } from "@/app/types/ServiceLocation";

export function Content() {
  const data = [
    {
      id: 1,
      fullName: "Consultório 1",
      city: "São Miguel",
      state: "RN",
      zipcode: "59920-000",
      neighborhood: "Centro",
      street: "Rua Coronel",
      number: "10",
    },
    {
      id: 2,
      fullName: "Consultório 2",
      city: "São Miguel",
      state: "RN",
      zipcode: "59920-000",
      neighborhood: "Centro",
      street: "Rua Coronel",
      number: "10",
    },
  ] as IServiceLocation[];

  return (
    <main className="flex flex-col w-full gap-6">
      <Title
        title="Locais de atendimento"
        underlineWidth="50%"
        showRightButton
        rightButton={<ServiceLocationModal type="CREATE" />}
        onClick={() => {}}
      />

      <div className="w-full flex flex-row flex-wrap">
        {data?.map((item) => (
          <ServiceLocationItem key={item.id} {...item} />
        ))}
      </div>
    </main>
  );
}
