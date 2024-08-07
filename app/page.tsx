"use client";
import { useEffect, useState } from "react";
import Script from "next/script";
import Preloader from "./_components/Preloader";
import Background from "./_components/subsections/Background/Background";
import MobileScreen from "./_components/MobileScreen";
import DesktopScreen from "./_components/DesktopScreen";
// import ReactGA from "react-ga4";

// ReactGA.initialize("G-FN4X02CBQN");

export default function Home() {
  const [isPreloaderOpen, setIsPreloaderOpen] = useState(true);
  const [isBGLoaded, setIsBGLoaded] = useState(false);
  // const [isManualSelection, setIsManualSelection] = useState(false);
  const [isNonMobileViewport, setIsNonMobileViewport] = useState(false);

  useEffect(() => {
    const checkViewport = () => {
      setIsNonMobileViewport(window.innerWidth > 768); // 768px is a common breakpoint for mobile devices
    };

    checkViewport(); // Check on initial load

    window.addEventListener("resize", checkViewport); // Update on viewport resize

    return () => window.removeEventListener("resize", checkViewport); // Cleanup listener
  }, []);

  useEffect(() => {
    if (isBGLoaded) {
      setTimeout(() => {
        setIsPreloaderOpen(false);
      }, 1500);
    }
  }, [isBGLoaded]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-FN4X02CBQN"
      />
      <Script
        id="google-analytics"
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
      {isPreloaderOpen && isNonMobileViewport && <Preloader />}
      {isNonMobileViewport && <Background setIsBGLoaded={setIsBGLoaded} />}
      {!isPreloaderOpen && isNonMobileViewport && <DesktopScreen />}
    </>
  );
}
