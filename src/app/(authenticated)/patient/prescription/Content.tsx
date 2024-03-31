"use client";

import { ListItem } from "@/components/designSystem/ListItem";
import { Title } from "@/components/designSystem/Title";
import { ViewPrescriptionModal } from "@/components/designSystem/ViewPrescriptionModal";
import { FileHeart } from "lucide-react";

export function Content() {
  // const { data, isLoading, refetch } = useFindAllMessages();

  return (
    <main className="flex flex-col w-full gap-6">
      <Title
        title="Receitas"
        underlineWidth="50%"
        showRightButton={false}
        onClick={() => {}}
        underlineColor="after:bg-[#3B82F6]"
      />

      <div className="flex flex-col">
        <ListItem
          icon={<FileHeart className="text-white" />}
          iconBgColor="bg-[#3B82F6]"
          chevronColor="text-[#3B82F6]"
          title="Receita para Franciso Júnior Silva"
          subtitle="13/12/2023"
          rightContent={
            <div className="flex flex-row items-center gap-2">
              <ViewPrescriptionModal />
            </div>
          }
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
