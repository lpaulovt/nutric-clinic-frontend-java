"use client";

import { Title } from "@/components/designSystem/Title";
import { Appointment } from "../../components/Appointment";
import { useMemo } from "react";
import { EmptyState } from "@/components/designSystem/EmptyState";
import doctorIllustration from "@/assets/doctorIllustration.svg";
import { useRouter } from "next/navigation";
import { PRIVATE_ROUTES } from "@/app/infrastructure/navigation";

export function NextAppointmentsSection() {
  const router = useRouter();

  const data = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
  ];

  const filteredData = useMemo(() => {
    return data?.slice(0, 5);
  }, [data]);

  const handleNavigateToConsultations = () => {
    router.push(PRIVATE_ROUTES.NUTRITIONIST_CONSULTATIONS);
  };

  if (filteredData?.length === 0)
    return (
      <EmptyState
        imageSrc={doctorIllustration}
        messageFirstPart="Não há consultas marcadas, "
        messageLink="clique aqui"
        messageLastPart=" para  editar seus horários."
        onClick={handleNavigateToConsultations}
      />
    );

  return (
    <div className="flex flex-col gap-4">
      <Title title="Próximas consultas" underlineWidth="50%" />
      <div className="flex flex-col">
        {filteredData.map((item) => (
          <Appointment key={item.id} />
        ))}
      </div>
    </div>
  );
}
