import React from "react";
import BackgroundLogo from "./BackgroundLogo";
import Image from "next/image";
import BG from "@/public/bg-min.png";

function Background({
  setIsBGLoaded,
}: {
  setIsBGLoaded: (isBGLoaded: boolean) => void;
}) {
  return (
    <>
      <div className="fixed top-0 left-0 z-[-1] w-screen h-screen overflow-hidden">
        <div className="absolute w-full h-full bg-gradient-to-br from-[#002171] via-[#004D40] to-[#000000] opacity-100"></div>
        <div className="absolute w-full h-full bg-gradient-to-br from-[#004D40] to-[#002171] opacity-100"></div>
        <div className="absolute w-full h-full mix-blend-screen">
          <Image
            src={BG}
            alt={"Background"}
            style={{
              objectFit: "cover",
            }}
            layout="fill"
            className="grayscale"
            priority // Ensures the image is preloaded
            onLoad={() => setIsBGLoaded(true)}
            placeholder="blur"
          />
        </div>
      </div>
      <BackgroundLogo />
    </>
  );
}

export default Background;




