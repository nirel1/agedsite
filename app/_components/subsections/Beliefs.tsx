import React from "react";
import AnimatedPane from "./AnimatedPane/AnimatedPane";
import Header from "./AnimatedPane/Header";
import CenteredVStack from "../CenteredVStack";
import BeliefsBlurb from "./Beliefs/BeliefsBlurb";
import PaneFooter from "./AnimatedPane/PaneFooter";

function Beliefs() {
  return (
    <AnimatedPane
      href={"belief"}
      startingXOffset={"20vw"}
      endingXOffset={"34vw"}
    >
      <Header id={"belief"}>beliefs</Header>

      <CenteredVStack className="h-full gap-16 relative pt-24 text-black">
        <div className="text-center text-black text-xl  px-44 whitespace-pre-wrap">
          we believe humans in the loop keep blockchains from achieving their
          potential, and more resilient systems of the future will rely on
          better ways to verify data + computation. <br />
          <br />
          our vision is to power apps and markets that couldn&apos;t exist
          before, which allow users to build, exchange, and interact without
          permission or trust.
        </div>

        <BeliefsBlurb />
        <br />

        <PaneFooter className="animate-pulse">scroll to read more.</PaneFooter>
      </CenteredVStack>
    </AnimatedPane>
  );
}

export default Beliefs;
