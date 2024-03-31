"use client";

import { useFindAllMessages } from "@/app/services/messages/useFindAll";
import { CardMessage } from "@/components/designSystem/CardMessage";
import { Title } from "@/components/designSystem/Title";

export function MessagesSection() {
  const { data, isLoading } = useFindAllMessages();

  if (isLoading) return <></>;

  if (data?.count === 0) {
    return <></>;
  }

  return (
    <div className="flex flex-col gap-4">
      <Title title="Recados" underlineWidth="100%" />
      <div className="flex flex-row gap-4 justify-start items-center">
        {data?.results?.map((item) => (
          <CardMessage key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
