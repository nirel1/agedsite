import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

function PaneFooter({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={twMerge(
        "absolute bottom-8 right-2 text-black text-xs",
        className
      )}
    >
      {children}
    </div>
  );
}

export default PaneFooter;
