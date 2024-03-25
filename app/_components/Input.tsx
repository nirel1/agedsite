import React from "react";
import { twMerge } from "tailwind-merge";

function Input({
  label,
  placeholder,
  onChange,
  className,
}: {
  label: string;
  placeholder: string;
  onChange: (value: string) => void;
  className?: string;
}) {
  return (
    <div
      className={twMerge("flex text-sm text-black  flex-col gap-4 w-full", className)}
    >
      <div>{label}</div>
      <div className="border-2 border-[#D5D6D8] w-full">
        <input
          className="border-2 w-full border-[#ADAEB0] ring-0 focus:ring-0 outline-0 p-2"
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Input;
