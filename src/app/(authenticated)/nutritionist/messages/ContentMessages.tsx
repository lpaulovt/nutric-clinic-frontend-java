"use client";

import { Title } from "@/components/designSystem/Title";
import { MessageModal } from "./components/MessageModal";
import { CardMessage } from "@/components/designSystem/CardMessage";
import { useFindAllMessages } from "@/app/services/messages/useFindAll";
import { Spin } from "@/components/designSystem/Spin";

export function ContentMessages() {
  const { data, isLoading, refetch } = useFindAllMessages();

  return (
    <main className="flex flex-col w-full gap-6">
      <Title
        title="Recados"
        underlineWidth="50%"
        showRightButton
        rightButton={
          <MessageModal type="CREATE" postAction={() => refetch()} />
        }
        onClick={() => {}}
      />

      {!isLoading && (
        <div className="w-full flex flex-row flex-wrap gap-4">
          {data?.results?.map((item) => (
            <CardMessage
              key={item.id}
              message={item.message}
              id={item.id}
              type="DELETE"
              postAction={() => refetch()}
            />
          ))}

          {data?.count === 0 && <p>Não há recados cadastrados ainda.</p>}
        </div>
      )}

      {isLoading && <Spin />}
    </main>
  );
}
