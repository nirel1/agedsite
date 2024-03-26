import React from "react";

function MobileFooter() {
  return (
    <div className="mt-[auto] w-full text-sm">
      <div>2024 Strobe Development, Inc.</div>
      <div className="flex gap-2">
        <a href="../../../../terms.html" target="_blank" className="underline text-blue-500">
          Terms
        </a>
        <a href="../../../../privacy.html" target="_blank" className="underline text-blue-500">
          Privacy
        </a>
      </div>
    </div>
  );
}

export default MobileFooter;