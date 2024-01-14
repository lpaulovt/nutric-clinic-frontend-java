import { BirthdaysSection } from "./components/BirthdaysSection";
import { Header } from "./components/Header";
import { MessagesSection } from "./components/MessagesSection";
import { NextAppointmentsSection } from "./components/NextAppointmentsSection";
import { PatientsSection } from "./components/PatientsSection";

export default async function HomeScreen() {
  return (
    <main className="flex flex-col w-full gap-8">
      <Header />
      <MessagesSection />
      <PatientsSection />
      <NextAppointmentsSection />
      <BirthdaysSection />
    </main>
  );
}
