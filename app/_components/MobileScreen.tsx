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

function MobileScreen() {
  const Spacer = () => <div className="mt-2" />;

  return (
    <div className="md:hidden font-msSans bg-[#FFFBEA] w-screen h-2xscreen absolute top-0 left-0  flex flex-col gap-10 px-6 z-[100] text-black py-10">
      <MobileHero />

      {/* <TrustedBy /> */}
      {/* <Testimonials /> */}

      <MobileBeliefs />
      {/* <Spacer /> */}

      <Spacer />
      <MobileForm />
      <Spacer />
      <Spacer />
      {/* <Spacer />
      <Spacer /> */}

      <MobileFooter />

      {/* <div className="text-xs">
        <Image src={StrobeBlack} alt={"logo"} className={`w-20 h-auto`} />
        <div className="mt-2">be resilient.</div>
      </div>
      <div>
        strobe is a DeFi scaling network that uses proofs to increase trust of
        off-chain work.
      </div>

      <div className="mt-2" />
      <Form />
      <div className="mt-[auto] w-full ">
      <div>2024 Strobe Development, Inc.</div>
          <div className="flex gap-2">
            <a href="../../terms.html" target="_blank" className="underline text-blue-500">
              Terms
            </a>
            <a href="../../privacy.html" target="_blank" className="underline text-blue-500">
              Privacy
            </a>
          </div>
      </div> */}
    </div>
  );
}

export default MobileScreen;


// function MobileScreen() {
//   const Spacer = () => <div className="mt-2" />;

//   return (
//     <div className="md:hidden font-msSans bg-[#BFBFBF] w-screen  absolute top-0 left-0  flex flex-col gap-10 px-6 z-[100] text-black py-10">
//       <MobileHero />

//       {/* <TrustedBy /> */}
//       {/* <Testimonials /> */}

//       <MobileBeliefs />
//       <Spacer />

//       <Spacer />
//       <MobileForm />
//       <Spacer />
//       <Spacer />

//       <MobileFooter />
//     </div>
//   );
// }

// export default MobileScreen;