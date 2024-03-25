import React from "react";
import AlongsideLogo from "@/public/Alongside.svg";
import ElixirLogo from "@/public/Elixir.svg";
import Image from "next/image";
function PartnerLogos() {
  return (
    <div className="flex flex-col gap-6 mt-6 w-full flex-wrap md:flex-nowrap">
      <div className=" flex  gap-10 flex-wrap md:flex-nowrap">
        <Image
          src={AlongsideLogo}
          alt="logo"
          className="w-24 h-auto"
          priority
        />
        <Image
          src={AlongsideLogo}
          alt="logo"
          className="w-24 h-auto"
          priority
        />
        <Image src={ElixirLogo} alt="logo" className="w-20 h-auto" priority />
        <Image src={ElixirLogo} alt="logo" className="w-20 h-auto" priority />
        <Image
          src={AlongsideLogo}
          alt="logo"
          className="w-24 h-auto"
          priority
        />
        <Image src={ElixirLogo} alt="logo" className="w-20 h-auto" priority />
      </div>
      <div className=" flex  gap-10 flex-wrap md:flex-nowrap">
        <Image
          src={AlongsideLogo}
          alt="logo"
          className="w-24 h-auto"
          priority
        />
        <Image
          src={AlongsideLogo}
          alt="logo"
          className="w-24 h-auto"
          priority
        />
        <Image src={ElixirLogo} alt="logo" className="w-20 h-auto" priority />
        <Image src={ElixirLogo} alt="logo" className="w-20 h-auto" priority />
        <Image
          src={AlongsideLogo}
          alt="logo"
          className="w-24 h-auto"
          priority
        />
        <Image src={ElixirLogo} alt="logo" className="w-20 h-auto" priority />
      </div>
    </div>
  );
}

export default PartnerLogos;
