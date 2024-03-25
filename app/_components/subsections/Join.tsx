import React, { useState } from "react";
import AnimatedPane from "./AnimatedPane/AnimatedPane";
import Header from "./AnimatedPane/Header";
import CenteredVStack from "../CenteredVStack";
import StrobeBlack from "@/public/strobe-black.png";
import Image from "next/image";
import PaneFooter from "./AnimatedPane/PaneFooter";
import Input from "../Input";
import FooterButton from "./Footer/FooterButton";
import Form from "./Join/Form";

function Join() {
  return (
    <AnimatedPane href={"join"} startingXOffset={"37vw"} endingXOffset={"58vw"}>
      <Header id={"join"}>join us</Header>
      <CenteredVStack className="h-full gap-16 relative pt-24 px-72 text-black">
        <div>
          <Image src={StrobeBlack} alt="logo" className="w-44 h-auto" />
          <div className="text-xs text-center mt-4">
            be resilient.
          </div>
        </div>
        <div className="text-center  text-base -mt-4">
          Interested in increasing the capabilites of your DeFi protocol?
        </div>

        <Form />

        <PaneFooter className="w-full right-0 px-4 flex items-center justify-between">
          <div>2024 Strobe Development, Inc.</div>
          <div className="flex gap-2">
            <a href="../../../terms.html" target="_blank" className="underline text-blue-500">
              Terms
            </a>
            <a href="../../../privacy.html" target="_blank" className="underline text-blue-500">
              Privacy
            </a>
          </div>
        </PaneFooter>
      </CenteredVStack>
    </AnimatedPane>
  );
}

export default Join;
