import Image from "next/image";
import React from "react";
import StrobeBlack from "@/public/strobe-black.png";

function MobileHero() {
  return (
    <>
      <div className="text-xs">
        <Image src={StrobeBlack} alt={"logo"} className={`w-20 h-auto`} />
        <div className="mt-2">be resilient.</div>
      </div>
      <br></br>
      <div className="text-center text-black text-xl">
            strobe is where offchain innovation <br />
            meets onchain execution. <br/>
            <br/> 
            we are working to enable new kinds <br/>
            of <span className="gradient-text">trust-minimized</span> markets.
          </div>
    </>
  );
}

export default MobileHero;