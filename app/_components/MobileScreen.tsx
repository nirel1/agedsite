import Image from "next/image";
import React from "react";
import StrobeBlack from "@/public/strobe-black.png";
import TrustedBy from "./subsections/Partners/TrustedBy";
import Form from "./subsections/Join/Form";
import MobileHero from "./subsections/Mobile/MobileHero";
import MobileFooter from "./subsections/Mobile/MobileFooter";
import Testimonials from "./subsections/Partners/Testimonials";
import BeliefsBlurb from "./subsections/Beliefs/BeliefsBlurb";
import CenteredVStack from "./CenteredVStack";
import MobileBeliefs from "./subsections/Mobile/MobileBeliefs";
import MobileForm from "./subsections/Mobile/MobileForm";
import NoiseImg from "@/public/Noise.png";

function MobileScreen() {
  const Spacer = () => <div className="mt-2" />;

  return (
    <div className="md:hidden font-msSans mobile-screen-bg w-screen h-2xscreen absolute top-0 left-0  flex flex-col gap-4 px-6 z-[100] text-black py-10">
      <MobileHero />

      <MobileBeliefs />

      <Spacer />
      <MobileForm />
      <Spacer />
      <Spacer />

      <MobileFooter />
    </div>
  );
}

export default MobileScreen;
