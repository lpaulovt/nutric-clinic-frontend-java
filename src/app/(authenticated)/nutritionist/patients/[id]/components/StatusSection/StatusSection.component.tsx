"use client";

import { Status } from "@/components/designSystem/Status";
import { Title } from "@/components/designSystem/Title";
import { StatusModal } from "../../../components/StatusModal";
import { useData } from "@/app/hooks/useData";

interface StatusSectionProps {
  onSuccess?: () => void;
}
export function StatusSection({ onSuccess }: StatusSectionProps) {
  const { patient } = useData();
  return (
    <div className="flex flex-col gap-4">
      <Title
        title="Status"
        underlineWidth="50%"
        showRightButton
        rightButton={<StatusModal onSuccess={onSuccess} />}
        onClick={() => {}}
      />
      <Status status={patient.status} />
    </div>
  );
}
