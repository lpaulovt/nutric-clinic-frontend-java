"use client";

import { Status } from "@/components/designSystem/Status";
import { ChevronRight } from "lucide-react";
import { LabelColumn } from "@/components/designSystem/LabelColumn";
import { ListItemProps } from ".";

export function ListItem({
  icon,
  iconBgColor,
  chevronColor,
  title,
  subtitle,
  status,
  rightContent,
  ...props
}: ListItemProps) {
  return (
    <div
      className="flex flex-row justify-between items-center border-b border-b-gray100 px-2 py-4 cursor-pointer hover:bg-[#F5F5F5]"
      {...props}
    >
      <div className="flex flex-row items-center gap-4">
        <div
          className={`flex justify-center items-center w-[40px] h-[40px] rounded-full ${iconBgColor}`}
        >
          {icon}
        </div>

        <LabelColumn
          label={title}
          value={subtitle}
          status={status ? "ativo" : "inativo"}
        />
      </div>
      {rightContent ? (
        rightContent
      ) : (
        <div className="flex flex-row gap-6 items-center">
          {status !== undefined && (
            <div className="hidden sm:flex">
              <Status status={status ? "ativo" : "inativo"} />
            </div>
          )}
          <ChevronRight className={` ${chevronColor} `} />
        </div>
      )}
    </div>
  );
}
