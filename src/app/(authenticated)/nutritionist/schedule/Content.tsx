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

export function Content() {
  return (
    <main className="flex flex-col w-full gap-6">
      <Title
        title="Agenda"
        underlineWidth="50%"
        showRightButton
        rightButton={<ScheduleModal type="CREATE" />}
        onClick={() => {}}
      />

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="flex flex-row justify-between items-center w-full">
              <h3 className="text-[18px] text-black font-semibold">
                11/12/2023
              </h3>

              <div className="flex flex-row items-center gap-3 pr-3">
                <DeleteModal
                  title="Tem certeza que deseja excluir o dia "
                  subtitle="Isso ira excluir permanentemente o dia de atendimento."
                  onConfirm={() => {}}
                />

                {/* <MealModal type="UPDATE" /> */}
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex flex-row gap-4 items-start flex-wrap">
            <Tag type="ACTIVE" content="10:00" />
            <Tag type="INACTIVE" content="11:00" />
            <Tag type="ACTIVE" content="12:00" />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  );
}
