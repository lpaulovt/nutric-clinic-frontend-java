"use client";

import { AssessmentSection } from "./components/AssessmentSection";
import { DietPlanSection } from "./components/DietPlanSection";
import { PersonalDataSection } from "./components/PersonalDataSection";
import { PrescriptionSection } from "./components/PrescriptionSection";
import { StatusSection } from "./components/StatusSection";

export function ContentPatientDetails() {
  return (
    <main className="flex flex-col w-full gap-6">
      <PersonalDataSection />
      <StatusSection />
      <DietPlanSection />
      <AssessmentSection />
      <PrescriptionSection />
    </main>
  );
}
