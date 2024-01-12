"use client";

export interface PageDescriptionProps {
  title: string;
  description: string;
}

export function PageDescription({ title, description }: PageDescriptionProps) {
  return (
    <div className="w-full flex flex-col gap-2">
      <p className="text-4xl font-semibold ">{title}</p>
      <p className="text-[16px] text-normal">{description}</p>
    </div>
  );
}
