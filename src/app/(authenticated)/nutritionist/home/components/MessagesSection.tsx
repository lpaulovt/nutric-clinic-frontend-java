"use client";

import { CardMessage } from "@/components/designSystem/CardMessage";
import { Title } from "@/components/designSystem/Title";

export function MessagesSection() {
  const data = [
    {
      id: 1,
      message: "Durante os dias 01/20 estarei abrindo a agenda para consultas.",
    },
    {
      id: 2,
      message:
        "Consultório em reforma, voltarei a atender na segunda-feira (23/12/2023)",
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      <Title title="Recados" underlineWidth="100%" />
      <div className="flex flex-row gap-4 justify-start items-center">
        {data.map((item) => (
          <CardMessage key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
