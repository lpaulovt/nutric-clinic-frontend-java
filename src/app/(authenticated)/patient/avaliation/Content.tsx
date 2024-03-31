"use client";

import { ListItem } from "@/components/designSystem/ListItem";
import { Title } from "@/components/designSystem/Title";
import { ViewAssessmentModal } from "@/components/designSystem/ViewAssessmentModal";
import { Ruler } from "lucide-react";

export function Content() {
  // const { data, isLoading, refetch } = useFindAllMessages();

  return (
    <main className="flex flex-col w-full gap-6">
      <Title
        title=" Avaliações antropométricas "
        underlineWidth="50%"
        showRightButton={false}
        onClick={() => {}}
        underlineColor="after:bg-[#6366F1]"
      />

      <div className="flex flex-col">
        <ListItem
          icon={<Ruler className="text-white" />}
          iconBgColor="bg-[#6366F1]"
          chevronColor="text-[#6366F1]"
          title="Primeira Avaliação"
          subtitle="13/12/2023"
          rightContent={
            <div className="flex flex-row items-center gap-2">
              <ViewAssessmentModal />
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
