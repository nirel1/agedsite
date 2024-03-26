"use client";
import React, { useMemo, SetStateAction, useState, useEffect } from "react";
import Image from "next/image";
import FooterButton from "./subsections/Footer/FooterButton";
import Column from "./Column";
import StrobeBlack from "@/public/strobe-black.png";
import HomeIcon from "@/public/home.png";
import TrustIcon from "@/public/trust.png";
import BeliefIcon from "@/public/Beliefs.png";
import JoinIcon from "@/public/Join.png";
import RealtekIcon from "@/public/Realtek.png";
import TrashIcon from "@/public/Trash.png";
import SoundIcon from "@/public/Sound.png";
// In Footer.js
import { useSelectedButton } from "../SelectedButtonContext";

const footerButtons = [
  { icon: StrobeBlack, label: "", width: "w-14", href: "hero" },
  { icon: HomeIcon, label: "welcome", width: "w-8", href: "hero" },
  // { icon: TrustIcon, label: "Trusted By", width: "w-8", href: "trusted" },
  { icon: BeliefIcon, label: "beliefs", width: "w-8", href: "belief" },
  { icon: JoinIcon, label: "join us", width: "w-8", href: "join" },
];

function Footer() {
  const {
    selectedButton,
    setSelectedButton,
    setIsManualSelection,
    isManualSelection,
  } = useSelectedButton();
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
          timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        })
      );
    };

    updateTime(); // Update time immediately on mount and then every minute
    const intervalId = setInterval(updateTime, 60000); // Update time every minute

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  // const TimeDisplay = () => {
  //   const userTimeZone = useMemo(() => {
  //     return Intl.DateTimeFormat().resolvedOptions().timeZone;
  //   }, [])};

  const scrollToSection = (href: string) => {
    const sectionScrollPositions: { [key: string]: number } = {
      hero: 0,
      belief: 1000,
      join: 1600,
      // Add other sections as needed
    };

    const targetScrollPosition = sectionScrollPositions[href];
    console.log({ href, targetScrollPosition });
    if (targetScrollPosition !== undefined) {
      window.scrollTo({ top: targetScrollPosition, behavior: "auto" });
    }
  };

  return (
    <div className="bg-[#FFFBEA] h-9 fixed bottom-0 left-0 w-screen px-2 flex items-center py-1 border-t border-[#F5FCFD] gap-2">
      {footerButtons.map(({ icon, label, width, href }, index) => (
        <React.Fragment key={index}>
          {index === 1 && <Column />}
          <FooterButton
            className={label == "" ? "w-auto px-3" : "px-0"}
            href={href}
            onClick={() => {
              setIsManualSelection(true);

              setSelectedButton(href);
              scrollToSection(href);

              setTimeout(() => {
                setIsManualSelection(false);
              }, 300);
            }}
            isSelected={selectedButton === href} // Pass the selected state
          >
            <Image
              src={icon}
              alt={label || "logo"}
              className={`${width} h-auto`}
            />
            {label}
          </FooterButton>
        </React.Fragment>
      ))}
      <div className="self-end ml-[auto] flex items-center h-full">
        <Column />
        <div>
          <Image src={RealtekIcon} alt={"icon"} className={`w-auto h-8`} />
        </div>
        <div>
          <Image src={TrashIcon} alt={"icon"} className={`w-auto h-8`} />
        </div>
        <div>
          <Image src={SoundIcon} alt={"icon"} className={`w-auto h-8`} />
        </div>
        <div className="text-xs text-black font-msSans">
          {/* display time- only hours and minutes */}
          {currentTime}
        </div>
      </div>
    </div>
  );
}

export default Footer;
