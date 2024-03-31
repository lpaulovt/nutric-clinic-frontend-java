"use client";

import { ListItem } from "@/components/designSystem/ListItem";
import { Title } from "@/components/designSystem/Title";
import { Button } from "@/components/ui/button";
import { PieChart } from "lucide-react";

export function ContentMessages() {
  // const { data, isLoading, refetch } = useFindAllMessages();

  return (
    <main className="flex flex-col w-full gap-6">
      <Title
        title="Plano alimentar"
        underlineWidth="50%"
        showRightButton={false}
        onClick={() => {}}
      />

      <div className="flex flex-col">
        <ListItem
          icon={<PieChart className="text-white" />}
          iconBgColor="bg-brand"
          chevronColor="text-brand"
          title="Plano alimentar para Paulo"
          subtitle="Todos os dias"
          onClick={() => {}}
          rightContent={<Button variant={"ghost"}>Ver mais</Button>}
        />
      </div>

      {/*!isLoading && (
        <div className="w-full flex flex-row flex-wrap gap-4">
          {data?.map((item) => (
            <CardMessage
              key={item.id}
              message={item.message}
              id={item.id}
              type="DELETE"
              postAction={() => refetch()}
            />
          ))}

          {data?.length === 0 && <p>Não há recados cadastrados ainda.</p>}
        </div>
          )*/}

      {/*isLoading && <Spin />*/}
    </main>
  );
}
