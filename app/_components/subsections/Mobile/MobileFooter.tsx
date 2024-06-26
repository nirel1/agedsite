import React from "react";
import StrobePixelated from "@/public/StrobePixelated.png";
import Image from "next/image";
function MobileFooter() {
  return (
    <div className="mt-[auto] w-full text-sm relative text-white">
      <div>2024 Strobe Development, Inc.</div>
      <div className="flex gap-2">
        <a
          href="../../../../terms.html"
          target="_blank"
          className="underline text-blue-500"
        >
          Terms
        </a>
        <a
          href="../../../../privacy.html"
          target="_blank"
          className="underline text-blue-500"
        >
          Privacy
        </a>
      </div>

      <div className="flex items-center justify-center w-screen  -ml-6">
        <Image
          src={StrobePixelated}
          alt="logo"
          className="w-[90vw] h-auto mix-blend-screen"
          unoptimized
        />
      </div>
    </div>
  );
}

export default MobileFooter;
