import React, { useState } from "react";
import AnimatedPane from "./AnimatedPane/AnimatedPane";
import Header from "./AnimatedPane/Header";
import CenteredVStack from "../CenteredVStack";
import PaneFooter from "./AnimatedPane/PaneFooter";
import { twMerge } from "tailwind-merge";
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
        "The next generation of crypto-native applications and protocols will rely on verifiability as a lever to incorporate more data from the real world, scale compute, and bootstrap faster, smarter, and harder. Builders need full control to do it right.",
      tier: 3,
    },
    {
      label: "application modules",
      items: [1, 2],
      caption:
        "Application modules allow apps + protocols to programmably interact with the real world. Whether issuing NFTs, distributing incentives, staking, or settling a market - modules are designed to request proofs and trigger actions. Learn more about our modules in our docs (link).",
      tier: 2,
      link: "https://strobe.org", // Replace with the actual link
    },
    {
      label: "base protocol",
      items: [1],
      caption:
        "The base protocol is a thin, unopinionated smart contract layer solely concerned with the requests and verification of proofs. This is our hyperstructure (link).",
      tier: 1,
      link: "https://strobe.org", // Replace with the actual link
    },
    {
      label: "verification interfaces",
      items: [1, 2],
      caption:
        "On the other side of the protocol, interfaces give builders control of how information and compute are verified, or who can supply it. An app can design its own mechanism for capturing MEV or token incentives.",
      tier: 2,
    },
    {
      label: "suppliers",
      items: [1, 2, 3],
      caption:
        "We're lucky to build on the progress of communities bootstrapped by proving networks, aggregators, and verifiable oracles. But it's not just the big players - not only can Alice supply proofs on her laptop, but she has the tools to bootstrap entirely new information markets or hardware networks- herself.",
      tier: 3,
    },
  ];

  const containerColor = "087C7C";
  const boxColor = "11B4D8";
  const borderColor = "11B4D8";

  const renderCaption = (caption: string, link?: string) => {
    if (!link) return caption;
    const parts = caption.split("(link)");
    return (
      <>
        {parts[0]}
        <a
          href={link}
          className="text-blue-500 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        {parts[1]}
      </>
    );
  };

  return (
    <AnimatedPane
      href={"how"}
      startingXOffset={"20vw"}
      endingXOffset={"34vw"}
      // This is having some issues
      // shouldCloseOnScroll={
      //   activeIndex == 0 || activeIndex == strobeStack.length - 1
      // }
    >
      <Header id={"how"}>how</Header>

      <CenteredVStack className="h-full gap-16 relative pt-12 text-black  w-full px-24">
        <div className="flex justify-between  w-full">
          <div className="flex flex-col justify-around gap-6 w-1/2">
            {strobeStack.map(({ label, items, caption, tier }, index) => (
              <div
                className={twMerge(
                  "text-xl font-bold",
                  index === activeIndex ? "opacity-100" : "opacity-0"
                )}
              >
                {label}
              </div>
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
                    ` w-auto  ${
                      index == activeIndex ? "opacity-80" : "opacity-70"
                    }`,
                  tier == 1 &&
                    ` w-[10vw] ${
                      index == activeIndex ? "opacity-100" : "opacity-80"
                    }`
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
                    {tier == 1 && (
                      <img
                        src={StrobeBlack.src}
                        alt="strobe"
                        className="h-auto w-20"
                      />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-[12vh] flex items-center justify-start " style={{ transform: "translateY(-20%)" }}>
          <div className="w-full h-full flex items-center justify-start py-2 border border-gray-400">
            <div className="text-md whitespace-pre-wrap px-4 text-left ">
              <div>
                
                {renderCaption(
                  strobeStack[activeIndex].caption,
                  strobeStack[activeIndex].link
                )}
              </div>
            </div>
          </div>
        </div>
        <PaneFooter className={twMerge("animate-pulse text-[#11B4D8]")}>
          hover on each row to see what we're building
        </PaneFooter>
      </CenteredVStack>
    </AnimatedPane>
  );
}

export default How;
