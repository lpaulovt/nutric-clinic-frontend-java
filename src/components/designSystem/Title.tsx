"use client";

export interface TitleProps {
  title: string;
  underlineWidth?: string;
  className?: string;
}

export function Title({
  title,
  className,
  underlineWidth = "60%",
}: TitleProps) {
  return (
    <div className="flex flex-row gap-3 items-center">
      <h1
        className={`font-semibold text-[24px] after:block w-fit after:h-[3px] after:w-[${underlineWidth}] after:bg-brand mb-2 ${className}`}
      >
        {title}
      </h1>
    </div>
  );
}
