"use client";

import { CardBirthday } from "@/components/designSystem/CardBirthday";
import { Title } from "@/components/designSystem/Title";
import { useMemo } from "react";

export function BirthdaysSection() {
  const data = [
    {
      id: 1,
    },
    {
      id: 2,
    },
  ];

  const filteredData = useMemo(() => {
    return data?.slice(0, 3);
  }, [data]);

  if (filteredData?.length === 0) {
    return <></>;
  }

  return (
    <div className="flex flex-col gap-4">
      <Title title="Aniversariantes do mês " underlineWidth="50%" />
      <div className="flex flex-row gap-4 justify-start items-center">
        {filteredData.map((item) => (
          <CardBirthday key={item.id} />
        ))}
      </div>
    </div>
  );
}
