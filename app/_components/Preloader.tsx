"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { UAParser } from "ua-parser-js";
import StrobeWhite from "@/public/strobe.png";

function Preloader() {
  const [userAgentInfo, setUserAgentInfo] = useState<UAParser.IResult | null>(
    null
  );

  useEffect(() => {
    const parser = new UAParser();
    setUserAgentInfo(parser.getResult());
  }, []);

  return (
    <div className="fixed top-0 left-0 z-50 w-screen h-screen bg-[#040404] flex items-center flex-col  font-msSans text-white justify-between">
      <Image
        src={StrobeWhite}
        className="h-auto w-96  mt-28 opacity-70"
        alt={"logo"}
      />

      {userAgentInfo && (
        <div className="flex flex-col justify-center items-center opacity-70">
          <div>
            {`${userAgentInfo?.device?.vendor} ${userAgentInfo?.device?.model}; ${userAgentInfo?.os.name}`}
          </div>
          <div>{`${userAgentInfo?.browser?.name} Browser`}</div>
        </div>
      )}

      <div className="flex flex-col justify-center items-center pb-8 relative opacity-70">
        <div className="absolute -top-14 animate-pulse bg-clip-text text-transparent bg-gradient-to-t from-red-500 to-yellow-500">LOADING...</div>
        <div>Copyright (c) Strobe Development Inc, 2024.</div>
        <div>All Rights Reserved.</div>
      </div>
    </div>
  );
}

export default Preloader;
