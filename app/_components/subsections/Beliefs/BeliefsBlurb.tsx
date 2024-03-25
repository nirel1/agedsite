import React from "react";
import VerifyIcon from "@/public/Verify.png";
import EvilIcon from "@/public/Evil.png";
import AutomationIcon from "@/public/Automation.png";
import Image from "next/image";

function BeliefsBlurb() {
  return (
    <div className="flex flex-col gap-2 w-[40%]">
      <div className="flex gap-4 items-center ">
        <div className="flex items-center gap-4">
          <div>
            <Image
              src={VerifyIcon}
              alt="logo"
              className="w-20 h-auto"
              unoptimized
            />
          </div>
          <div className="line-through">don&apos;t trust</div>
        </div>
        <div className="text-left ml-8">verify</div>
      </div>

      <div className="flex gap-4 items-center ">
        <div className="flex items-center gap-4">
          <div>
            <Image
              src={EvilIcon}
              alt="logo"
              className="w-20 h-auto"
              unoptimized
            />
          </div>
          <div className="line-through">don&apos;t be evil</div>
        </div>
        <div className="ml-4">can&apos;t be evil</div>
      </div>

      <div className="flex gap-4 items-center ">
        <div className="flex items-center gap-4">
          <div>
            <Image
              src={AutomationIcon}
              alt="logo"
              className="w-20 h-auto"
              unoptimized
            />
          </div>
          <div className="line-through">human judges</div>
        </div>
        <div>automation</div>
      </div>
    </div>
  );
}

export default BeliefsBlurb;
