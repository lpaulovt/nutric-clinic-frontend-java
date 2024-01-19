"use client";

export interface TagProps {
  type: "ACTIVE" | "INACTIVE";
  content: string;
  onClick?: () => void;
}

export function Tag({ type, content, onClick }: TagProps) {
  return (
    <div
      onClick={() => onClick && onClick()}
      className={`w-fit px-4 py-2 rounded-[8px] cursor-pointer  ${
        type === "ACTIVE" ? "bg-brand" : "bg-[#F1F5F9]"
      }`}
    >
      <span
        className={`text-[12px] leading-3 font-semibold ${
          type === "ACTIVE" ? "text-white" : "text-black"
        }`}
      >
        {content}
      </span>
    </div>
  );
}
