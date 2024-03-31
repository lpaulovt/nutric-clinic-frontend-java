"use client";

import { Title } from "@/components/designSystem/Title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DeleteModal } from "../patients/components/DeleteModal";
import { Tag } from "@/components/designSystem/Tag";
import { ScheduleModal } from "./components/ScheduleModal";
import { useFindAllSchedules } from "@/app/services/schedule/useFindAll";
import { Spin } from "@/components/designSystem/Spin";
import { formatDate } from "@/utils/formatDate";
import { useDeleteSchedule } from "@/app/services/schedule/useDelete";
import { ErrorHandler } from "@/utils/errorHandler";

export function Content() {
  const { data, isLoading, refetch } = useFindAllSchedules();
  const { mutateAsync: deleteSchedule } = useDeleteSchedule();
  return (
    <main className="flex flex-col w-full gap-6">
      <Title
        title="Agenda"
        underlineWidth="50%"
        showRightButton
        rightButton={
          <ScheduleModal type="CREATE" postAction={() => refetch()} />
        }
        onClick={() => {}}
      />

      {!isLoading && (
        <Accordion type="single" collapsible>
          {data?.results?.map((item) => {
            const handleDeleteSchedule = async () => {
              try {
                await deleteSchedule(item.id);
                refetch();
              } catch (error) {
                ErrorHandler(error);
              }
            };
            return (
              <AccordionItem key={item.id} value="item-1">
                <AccordionTrigger>
                  <div className="flex flex-row justify-between items-center w-full">
                    <h3 className="text-[18px] text-black font-semibold">
                      {formatDate(item.date_appointments)}
                    </h3>

                    <div className="flex flex-row items-center gap-3 pr-3">
                      <DeleteModal
                        title="Tem certeza que deseja excluir o dia "
                        subtitle="Isso ira excluir permanentemente o dia de atendimento."
                        onConfirm={handleDeleteSchedule}
                      />
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="flex flex-row gap-4 items-start flex-wrap">
                  <Tag type="ACTIVE" content="10:00" /> {/*//TODO */}
                  <Tag type="INACTIVE" content="11:00" />
                  <Tag type="ACTIVE" content="12:00" />
                </AccordionContent>
              </AccordionItem>
            );
          })}

          {data?.count === 0 && <p>Ainda não há agenda cadastrada.</p>}
        </Accordion>
      )}
      {isLoading && <Spin />}
    </main>
  );
}
