import React from "react";
import AnimatedPane from "./AnimatedPane/AnimatedPane";
import Header from "./AnimatedPane/Header";
import CenteredVStack from "../CenteredVStack";
import StrobeBlack from "@/public/strobe-black.png";
import Image from "next/image";
import PaneFooter from "./AnimatedPane/PaneFooter";
import { useEffect } from 'react';
import { useSelectedButton } from '../../SelectedButtonContext.js';


function Hero() {
  const { setSelectedButton } = useSelectedButton();

  return (
    <div id={"hero"}>
      <AnimatedPane
      href={"hero"} 
        openByDefault
        startingXOffset={"0vw"}
        endingXOffset={"-12vw"}
      >
        <Header>welcome</Header>
        <CenteredVStack className="h-full gap-20 relative pt-24">
          <Image src={StrobeBlack} alt="logo" className="w-44 h-auto" />
          <div className="text-center text-black text-xl">
            strobe is building a protocol for <span className="gradient-text">trust-minimized</span> markets. <br/>
            <br/> 
            we are working to enable new kinds <br/>
            of  economic interactions.
          </div>

          <PaneFooter className="animate-pulse">
            scroll to read more.
          </PaneFooter>
        </CenteredVStack>
      </AnimatedPane>
    </div>
  );
}



export default Hero;
