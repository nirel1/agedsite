import React from "react";
import { SelectedButtonProvider } from "../SelectedButtonContext";
import Hero from "./subsections/Hero";
import Beliefs from "./subsections/Beliefs";
import Join from "./subsections/Join";
import Footer from "./Footer";

function DesktopScreen() {
  return (
    <>
      <SelectedButtonProvider>
        <div>
          <main className="min-h-full w-screen absolute top-0 left-0 font-msSans">
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

export default DesktopScreen;
