import React from "react";
import CenteredVStack from "../../CenteredVStack";
import BeliefsBlurb from "../Beliefs/BeliefsBlurb";

function MobileBeliefs() {
  return (
    <CenteredVStack className="h-full gap-20 relative pt-24 text-black">
      {/* <div className="text-center text-black text-md md:text-xl  px-10 md:px-44">
        We believe cryptographic proofs provide a new source of leverage for{" "}
        <br />
        DeFi builders to unlock new forms of permissionless innovation.
      </div> */}
      <div className="text-center text-black text-md md:text-xl px-10 md:px-44">
        We believe humans in the loop keep blockchains from 
        <br/>
        achieving their potential, 
        and more resilient systems of the future will rely 
        <br/>
        on better ways to verify data + computation. {" "}
        
        <br/>
        <br/>
        Our vision is to power new crypto apps and markets that
        <br/>
        couldn’t exist before, which allow users to build, exchange,  
        <br/>
        and interact without permission or trust.
        </div>

      <BeliefsBlurb />
    </CenteredVStack>
  );
}

export default MobileBeliefs;