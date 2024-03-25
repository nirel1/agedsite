import React from "react";
import AnimatedPane from "./AnimatedPane/AnimatedPane";
import Header from "./AnimatedPane/Header";
import CenteredVStack from "../CenteredVStack";
import PaneFooter from "./AnimatedPane/PaneFooter";
import TrustedBy from "./Partners/TrustedBy";
import Testimonials from "./Partners/Testimonials";

function Partners() {
  return (
    
    <AnimatedPane href={"trusted"} startingXOffset={"2vw"} endingXOffset={"11vw"}>
      <Header id={"trusted"}>Trusted By</Header>
      <CenteredVStack className="h-full gap-16 relative pt-14 text-black">
        <TrustedBy />
        <Testimonials />
        <PaneFooter className="animate-pulse">Scroll to read more.</PaneFooter>
      </CenteredVStack>
    </AnimatedPane>
  );
}

export default Partners;
