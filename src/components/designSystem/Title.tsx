"use client";

import { PlusCircle } from "lucide-react";

export interface TitleProps {
  title: string;
  underlineWidth?: string;
  underlineColor?: string;
  className?: string;
  showRightButton?: boolean;
  rightButton?: React.ReactNode;
  onClick?: () => void;
}

export function Title({
  title,
  className,
  underlineWidth = "60%",
  showRightButton,
  underlineColor = "brand",
  rightButton,
  onClick,
}: TitleProps) {
  return (
    <div className="flex flex-row gap-1 items-center">
      <h1
        className={`font-semibold text-[24px] after:block w-fit after:h-[3px] after:w-[${underlineWidth}] after:bg-${underlineColor}  mb-2 ${className}`}
      >
        {title}
      </h1>
      {showRightButton && (
        <button
          className="mb-2  cursor-pointer"
          onClick={() => onClick && onClick()}
        >
          {rightButton ? rightButton : <PlusCircle className="text-brand" />}
        </button>
      )}
    </div>
  );
}
