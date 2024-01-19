"use client";

import { Title } from "@/components/designSystem/Title";
import { MessageModal } from "./components/MessageModal";
import {
  CardMessage,
  CardMessageProps,
} from "@/components/designSystem/CardMessage";

export function ContentMessages() {
  const data = [
    {
      id: 1,
      message: "Durante os dias 01/20 estarei abrindo a agenda para consultas.",
      type: "DELETE",
    },
    {
      id: 2,
      message:
        "Consultório em reforma, voltarei a atender na segunda-feira (23/12/2023)",
      type: "DELETE",
    },
  ] as CardMessageProps[];

  return (
    <main className="flex flex-col w-full gap-6">
      <Title
        title="Recados"
        underlineWidth="50%"
        showRightButton
        rightButton={<MessageModal type="CREATE" />}
        onClick={() => {}}
      />

      <div className="w-full flex flex-row flex-wrap gap-4">
        {data?.map((item) => (
          <CardMessage key={item.id} {...item} />
        ))}
      </div>
    </main>
  );
}
