"use client";

import { useFindOnePatient } from "@/app/services/patient/useFindOne";
import { DietPlanSection } from "./components/DietPlanSection";
import { PersonalDataSection } from "./components/PersonalDataSection";
import { StatusSection } from "./components/StatusSection";
import { Spin } from "@/components/designSystem/Spin";
import { useEffect } from "react";
import { useData } from "@/app/hooks/useData";
import { Title } from "@/components/designSystem/Title";
import { DeleteModal } from "../components/DeleteModal";
import { useDeletePatient } from "@/app/services/patient/useDelete";
import { ErrorHandler } from "@/utils/errorHandler";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { InformationModal } from "../components/InformationModal";
import { useSendMealPlan } from "@/app/services/patient/useSendMealPlan";
import { useToast } from "@/components/ui/use-toast";

interface ContentPatientDetailsProps {
  id: string;
}

export function ContentPatientDetails({ id }: ContentPatientDetailsProps) {
  const router = useRouter();
  const { toast } = useToast();

  const { data, isLoading, refetch } = useFindOnePatient(id || "");
  const { mutateAsync: sendMealPlans } = useSendMealPlan();
  const { mutateAsync: deletePatient } = useDeletePatient();

  const { setPatient, patient } = useData();

  useEffect(() => {
    if (!data) return;

    setPatient(data.patient);
  }, [data]);

  async function handleDeletePatient() {
    try {
      await deletePatient(data?.patient.id || "");
      router.back();
    } catch (error) {
      ErrorHandler(error);
    }
  }

  async function handleSendMealPlan() {
    try {
      await sendMealPlans(data?.patient.id || "");

      toast({
        title: "Tudo pronto!",
        description: "Planos enviados com sucesso!",
      });
    } catch (error) {
      ErrorHandler(error);
    }
  }

  return (
    <>
      {isLoading && <Spin />}
      {!isLoading && patient && (
        <main className="flex flex-col w-full gap-6">
          <PersonalDataSection onSuccess={() => refetch()} />
          <StatusSection onSuccess={() => refetch()} />
          <DietPlanSection />
          <div className="flex flex-col gap-2">
            <Title title="Compartilhar com paciente " showRightButton={false} />
            <InformationModal
              title="Compartilhar plano alimentar"
              subtitle="Ao compartilhar será enviado um link para visualização dos planos alimentares que o paciente possui."
              onConfirm={() => handleSendMealPlan()}
              buttonModal={
                <div>
                  <Button variant={"outline"} className="w-auto">
                    Compartilhar
                  </Button>
                </div>
              }
            />
          </div>
          <div className="flex flex-col gap-2">
            <Title title="Excluir " showRightButton={false} />
            <DeleteModal
              title="Tem certeza que deseja este paciente?"
              subtitle="Uso ira excluir permanentemente todos os dados do paciente."
              onConfirm={() => handleDeletePatient()}
              buttonModal={
                <div>
                  <Button variant={"outline"} className="w-auto">
                    Excluir paciente
                  </Button>
                </div>
              }
            />
          </div>
        </main>
      )}
    </>
  );
}
