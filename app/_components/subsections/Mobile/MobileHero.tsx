import Image from "next/image";
import React from "react";
import StrobeWhite from "@/public/strobe.png";
import NoiseImg from "@/public/Noise.png";

function MobileHero() {
  return (
    <div>
      <Image src={NoiseImg} alt={"logo"} className={`w-screen absolute top-0 left-0 h-full z-[-1] opacity-20`} />
      <div className="text-xs  flex items-center justify-center pt-14">
        <Image src={StrobeWhite} alt={"logo"} className={`w-36 h-auto`} />
      </div>
      <br></br>
      <div className="text-center text-white text-xl">
        strobe is where offchain innovation <br />
        meets onchain execution. <br />
        <br />
        we are working to enable new kinds <br />
        of <span className="gradient-text">trust-minimized</span> markets.
      </div>
    </div>
  );
}

export default MobileHero;
