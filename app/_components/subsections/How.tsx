import React, { useState } from "react";
import AnimatedPane from "./AnimatedPane/AnimatedPane";
import Header from "./AnimatedPane/Header";
import CenteredVStack from "../CenteredVStack";
import PaneFooter from "./AnimatedPane/PaneFooter";
import { twMerge } from "tailwind-merge";
import FooterButton from "./Footer/FooterButton";
import StrobeBlack from "@/public/strobe-black.png";

// See excalidraw https://app.excalidraw.com/l/5Q2hRCW2FRh/3GhMO1emfjN
function How() {
  const [activeIndex, setActiveIndex] = useState(0);
  const strobeStack = [
    {
      label: "crypto-native apps and protocols",
      items: [1, 2, 3], // 3 items as depicted in the excalidraw. Feel free to change
      // array content if string needs to be shown
      caption:
        "The next generation of crypto-native applications and protcols will rely on verifiablity as a lever to incorporate more data from the real world, scale compute, and bootstrap faster, smarter, and harder. Builders need full control to do it right. ",
      tier: 3,
    },
    {
      label: "application modules",
      items: [1, 2],
      caption:
        "Application modules allow apps + protocols to programmably interact with the real world. Whether issuing NFTs, distributing incentives, staking, or settling a market - modules are designed to request proofs and trigger actions. Learn more about our modules in our docs here (link).",
      tier: 2,
    },
    {
      label: "base protocol",
      items: [1],
      caption:
        "The base protocol is a thin, unopinonated smart contract layer solely concerned with the requests and verification of proofs. This is our hyperstructure (link).",
      tier: 1,
    },
    {
      label: "verification interfaces",
      items: [1, 2],
      caption:
        "On the other side of the protocol, interfaces give builders control of how information and compute are verified, or who can supply it. An app can design its own mechanism for capturing MEV or token incentives. ",
      tier: 2,
    },
    {
      label: "suppliers",
      items: [1, 2, 3],
      caption:
        "We're lucky to build on the progress of communities bootstrapped by proving networks, aggregators, and verifiable oracles. But it's not just the big players - not only can Alice supply proofs on her laptop, but she has the tools to bootstrap entirely new information markets or hardware networks- herself. ",
      tier: 3,
    },
  ];

  const containerColor = "B58F1C";
  const boxColor = "F9C31B";
  const borderColor = "D88811";

  const handleBackPress = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleNextPress = () => {
    if (activeIndex < strobeStack.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  return (
    <AnimatedPane href={"how"} startingXOffset={"20vw"} endingXOffset={"34vw"}>
      <Header id={"how"}>how</Header>

      <CenteredVStack className="h-full gap-16 relative pt-12 text-black  w-full px-24">
        <div className="flex justify-between  w-full">
          <div className="flex flex-col justify-around gap-6 w-1/2">
            {strobeStack.map(({ label, items, caption, tier }, index) => (
              <div className={twMerge("text-xl font-bold", 
                index === activeIndex ? "opacity-100" : "opacity-0"


              )}>{label}</div>
            ))}
          </div>
          <div className="flex flex-col gap-6 items-center ">
            {strobeStack.map(({ label, items, caption, tier }, index) => (
              <div
                className={twMerge(
                  "flex w-1/2 gap-2 items-center px-2 h-auto py-2 rounded-md",
                  tier == 3 &&
                    `  ${index == activeIndex ? "opacity-60" : "opacity-40"}`,
                  tier == 2 &&
                    ` w-auto  ${index == activeIndex ? "opacity-80" : "opacity-70"}`,
                  tier == 1 &&
                    ` w-[10vw] ${index == activeIndex ? "opacity-100" : "opacity-80"}`
                )}
                style={{
                  backgroundColor: `#${tier == 1 ? boxColor : containerColor}`,
                  border: `1px solid #${tier == 1 ? boxColor : borderColor}`,
                }}
                onMouseOver={() => setActiveIndex(index)}
              >
                {items.map((_, index) => (
                  <div
                    key={index}
                    className={twMerge(
                      " h-10 text-white rounded-md flex items-center justify-center w-full",
                      tier == 3 && ` w-[18vw]`,
                      tier == 2 && `w-[8vw]`
                    )}
                    style={{
                      backgroundColor: `#${boxColor}`,
                    }}
                  >
                    {tier == 1 && <img src={StrobeBlack.src} alt="strobe" className="h-auto w-20"/>}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-[15%] flex gap-2 items-center ">
          <FooterButton onClick={handleBackPress} className="h-auto "
          disabled={activeIndex === 0}
          >
            Back
          </FooterButton>
          <div className="w-[80%]">
            <div className="text-sm whitespace-pre-wrap px-4  text-center">
              {strobeStack[activeIndex].caption}
            </div>
          </div>
          <FooterButton onClick={handleNextPress} className="h-auto "
          disabled={activeIndex === strobeStack.length - 1}
          >
            Next
          </FooterButton>
        </div>
        <PaneFooter className="animate-pulse">scroll to read more.</PaneFooter>
      </CenteredVStack>
    </AnimatedPane>
  );
}

export default How;
