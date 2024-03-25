import React from "react";
import AnimatedPane from "./AnimatedPane/AnimatedPane";
import Header from "./AnimatedPane/Header";
import CenteredVStack from "../CenteredVStack";
import BeliefsBlurb from "./Beliefs/BeliefsBlurb";
import PaneFooter from "./AnimatedPane/PaneFooter";

function Beliefs() {
  return (
    <AnimatedPane href={"belief"} startingXOffset={"20vw"} endingXOffset={"34vw"}>
      <Header id={"belief"}>beliefs</Header>

      <CenteredVStack className="h-full gap-20 relative pt-24 text-black">
        <div className="text-center text-black text-xl  px-44">
        We believe humans in the loop keep blockchains from achieving their potential, 
        <br/>
        and more resilient systems of the future will rely on better ways to 
        <br/>
        verify data + computation. {" "}
        
        <br/>
        <br/>
        Our vision is to power new crypto apps and markets that
        <br/>
        couldn’t exist before, which allow users to build, exchange, and interact 
        <br/>
        without permission or trust.
        </div>

        <BeliefsBlurb />
        <br/>

        <PaneFooter className="animate-pulse">Scroll to read more.</PaneFooter>
      </CenteredVStack>
    </AnimatedPane>
  );
}

export default Beliefs;
