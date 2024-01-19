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
import { Appointment } from "./components/Appointment/Appointment.component";
//import { ScheduleModal } from "./components/ScheduleModal";

export function Content() {
  return (
    <main className="flex flex-col w-full gap-6">
      <Title
        title="Consultas"
        underlineWidth="50%"
        showRightButton
        // rightButton={<ScheduleModal type="CREATE" />}
        onClick={() => {}}
      />

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="flex flex-row justify-between items-center w-full">
              <h3 className="text-[18px] text-black font-semibold">
                11/12/2023
              </h3>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <Appointment />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  );
}
