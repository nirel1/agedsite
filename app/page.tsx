"use client";

import { useEffect, useState } from "react";
import Preloader from "./_components/Preloader";
import Footer from "./_components/Footer";
import Background from "./_components/subsections/Background/Background";
import Hero from "./_components/subsections/Hero";
import Partners from "./_components/subsections/Partners";
import Beliefs from "./_components/subsections/Beliefs";
import Join from "./_components/subsections/Join";
import MobileScreen from "./_components/MobileScreen";
import { SelectedButtonProvider } from './SelectedButtonContext';

export default function Home() {
  const [isPreloaderOpen, setIsPreloaderOpen] = useState(true);
  const [isBGLoaded, setIsBGLoaded] = useState(false);
  const [isManualSelection, setIsManualSelection] = useState(false);

  useEffect(() => {
    console.log("isBGLoaded", isBGLoaded);
    if (isBGLoaded) {
      setTimeout(() => {
        setIsPreloaderOpen(false);
      }, 500);
    }
  }, [isBGLoaded]);

  return (
    <>
      <MobileScreen />
      {isPreloaderOpen && <Preloader />}
      <Background setIsBGLoaded={setIsBGLoaded} />
      <SelectedButtonProvider>
        <div>
          <main className="min-h-full w-screen absolute top-0 left-0 font-msSans hidden md:block">
            <Hero />
            {/* <Partners /> */}
            <Beliefs />
            <Join />
          </main>
          <Footer />
        </div>
      </SelectedButtonProvider>
    </>
  );
}
