import React from "react";
import PartnerLogos from "./PartnerLogos";

function TrustedBy() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 w-full md:px-36">
      <div className="w-full text-xs md:text-base">Trusted By</div>
      <PartnerLogos />
    </div>
  );
}
// 'minimizing trust with'

export default TrustedBy;
