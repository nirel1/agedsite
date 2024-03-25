import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

function CenteredVStack({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={twMerge(
        "flex items-center  flex-col",
        className
      )}
    >
      {children}
    </div>
  );
}

export default CenteredVStack;
