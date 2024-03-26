"use client";

import { useEffect, useState } from "react";
import Script from 'next/script/;
import Preloader from "./_components/Preloader";
import Footer from "./_components/Footer";
import Background from "./_components/subsections/Background/Background";
import Hero from "./_components/subsections/Hero";
import Partners from "./_components/subsections/Partners";
import Beliefs from "./_components/subsections/Beliefs";
import Join from "./_components/subsections/Join";
import MobileScreen from "./_components/MobileScreen";
import { SelectedButtonProvider } from "./SelectedButtonContext";

export default function Home() {
  const [isPreloaderOpen, setIsPreloaderOpen] = useState(true);
  const [isBGLoaded, setIsBGLoaded] = useState(false);
  const [isManualSelection, setIsManualSelection] = useState(false);

  useEffect(() => {
    console.log("isBGLoaded", isBGLoaded);
    if (isBGLoaded) {
      setTimeout(() => {
        setIsPreloaderOpen(false);
      }, 1500);
    }
  }, [isBGLoaded]);

  return (
    <>
      <Script strategy="afterInteractive" async src="https://www.googletagmanager.com/gtag/js?id=G-FN4X02CBQN" />
      <Script
        id='google-analytics'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-FN4X02CBQN', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
      <MobileScreen />
      {isPreloaderOpen && <Preloader />}
      <Background setIsBGLoaded={setIsBGLoaded} />
      {!isPreloaderOpen && (
        <SelectedButtonProvider>
          <div>
            <main className="min-h-full w-screen absolute top-0 left-0 font-msSans hidden md:block invisible md:visible">
              <Hero />
              {/* <Partners /> */}
              <Beliefs />
              <Join />
            </main>
            <Footer />
          </div>
        </SelectedButtonProvider>
      )}
    </>
  );
}
