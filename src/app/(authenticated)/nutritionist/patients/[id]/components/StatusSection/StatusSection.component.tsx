"use client";

import { Status } from "@/components/designSystem/Status";
import { Title } from "@/components/designSystem/Title";

export function StatusSection() {
  return (
    <div className="flex flex-col gap-4">
      <Title
        title="Status"
        underlineWidth="50%"
        showRightButton
        onClick={() => {}}
      />
      <Status status="INACTIVE" />
    </div>
  );
}
