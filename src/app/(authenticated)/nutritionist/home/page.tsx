import { Header } from "./components/Header";
import { MessagesSection } from "./components/MessagesSection";
import { PatientsSection } from "./components/PatientsSection";

export default function Home() {
  return (
    <main className="flex flex-col w-full gap-8">
      <Header />
      <MessagesSection />
      <PatientsSection />
    </main>
  );
}
