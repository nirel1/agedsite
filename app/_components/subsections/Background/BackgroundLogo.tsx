import Image from 'next/image'
import React from 'react'
import StrobeLogo from "@/public/strobe-pixelate.svg";

function BackgroundLogo() {
  return (
    <div className="fixed bottom-10 left-10">
    <Image src={StrobeLogo} alt="logo" className="w-72 h-auto" />
  </div>
  )
}

export default BackgroundLogo