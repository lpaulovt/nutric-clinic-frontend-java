import { MessagesSection } from "../../nutritionist/home/components/MessagesSection";
import { NextAppointmentsSection } from "../../nutritionist/home/components/NextAppointmentsSection";
import { DietPlanSection } from "./components/DietPlanSection";
import { Header } from "./components/Header";

export default async function HomeScreen() {
  return (
    <main className="flex flex-col w-full gap-8">
      <Header />
      <MessagesSection />
      <NextAppointmentsSection />
      <DietPlanSection />
    </main>
  );
}
