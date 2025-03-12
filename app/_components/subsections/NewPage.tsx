import { Playfair_Display } from 'next/font/google'
import React from 'react'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
})

function NewPage() {
  return (
    <div className={`flex flex-col  h-screen bg-black ${playfair.className}`}>
      <div className="text-2xl font-semibold text-white">contact@strobe.org</div>
    </div>
  );
}

export default NewPage;
