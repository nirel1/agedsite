"use client";
import {
  useMotionValue,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { ReactNode, useRef, useState } from "react";
import Header from "./Header";
import { twMerge } from "tailwind-merge";
import { useSelectedButton } from '../../../SelectedButtonContext.js';
import { useEffect } from 'react';

function AnimatedPane({
  children,
  openByDefault,
  startingXOffset,
  endingXOffset,
  href,
  shouldCloseOnScroll = true,
}: {
  children: ReactNode;
  openByDefault?: boolean;
  startingXOffset: string;
  endingXOffset: string;
  href: string;
  shouldCloseOnScroll?: boolean;
}) {
  const ref = useRef(null);
  const { setSelectedButton, isManualSelection } = useSelectedButton();
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const transitionRanges = {
    maximized: [0, 0.6], // Start and end points for maximized state
    minimized: [0.8, 1], // Start and end points for minimized state
    switching: [0.6, 0.8], // Range for switching between windows
  };

  const sectionScrollPositions: { [key: string]: number } = {
    hero: 0,
    belief: 1000,
    join: 1600,
    // Add other sections as needed
  };

  const sectionOrder = ['hero', 'belief', 'join']; // Define the order of your sections

  function calculateScrollPosition(currentHref: string, direction: 0 | 1) {
    const currentIndex = sectionOrder.findIndex(section => section === currentHref);
    let targetIndex = currentIndex;
  
    if (direction === 1) { // Next
      targetIndex = Math.min(sectionOrder.length - 1, currentIndex + 1);
    } else if (direction === 0) { // Previous
      targetIndex = Math.max(0, currentIndex - 1);
    }
  
    const targetHref = sectionOrder[targetIndex];
    return sectionScrollPositions[targetHref] ?? 0;
  }

  function smoothScrollTo(targetPosition: number) {
    let start = window.scrollY;
    let distance = targetPosition - start;
    let startTime: number | null = null;
  
    function animation(currentTime: number) {
      if (startTime === null) startTime = currentTime;
      let timeElapsed = currentTime - startTime;
      let nextScrollY = easeFunction(timeElapsed, start, distance, 600); // 600ms duration
  
      window.scrollTo(0, nextScrollY);
      if (timeElapsed < 600) requestAnimationFrame(animation);
    }
    requestAnimationFrame(animation);
  }
  
  // Example easing function - can be replaced with any suitable easing function
  function easeFunction(t:number, b:number, c:number, d:number) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }
  

  useEffect(() => {
    let lastScrollY = 0; // To keep track of the last scroll position

    const handleScrollChange = () => {
      // const currentScrollY = scrollYProgress.get();
      // const scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';
      // lastScrollY = currentScrollY; // Update lastScrollY for the next call

      // console.log('animated pane is changing selection');

      // // Adjusting the condition to include direction
      // if (scrollDirection === 'down' && scrollY > .25) {
      //   // scrollYProgress.get() > .1
      //   // Snap forward when scrolling down
      //   const scrollTo = calculateScrollPosition(href, 1);
      //   console.log('next!');
      //   console.log(scrollTo);
      //   smoothScrollTo(scrollTo);
      //   // window.scrollTo({ top: scrollTo, behavior: 'smooth' });
      // } else if (scrollDirection === 'up' && scrollY > .75) {
      //   // scrollYProgress.get() < -.1
      //   // Snap backward when scrolling up
      //   const scrollTo = calculateScrollPosition(href, 0);
      //   console.log('previous!');
      //   console.log(scrollTo);
      //   smoothScrollTo(scrollTo);
      //   // window.scrollTo({ top: scrollTo, behavior: 'smooth' });
      // }

      setSelectedButton(href);
    };

    if (!isManualSelection) {
      const unsubscribe = scrollYProgress.onChange(handleScrollChange);
      return () => unsubscribe();
    }
  }, [scrollYProgress, setSelectedButton, href, isManualSelection]);


  const width = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 0.9, 1],
    [openByDefault || !shouldCloseOnScroll ? "100%" : "0%", "100%", "100%", "6%", "0%"]
  );

  const translateY = useTransform(
    scrollYProgress,
    [0, 0.2, 0.75, 0.9],
    [openByDefault || !shouldCloseOnScroll ? "0vh" : "100vh", "0vh", "0vh", "100vh"]
  );

  const translateX = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    [startingXOffset, "0vw", "0vw", endingXOffset]
  );

  const height = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    [openByDefault || !shouldCloseOnScroll ? "80vh" : "0vh", "80vh", "80vh", "0vh"]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.7, 1],
    [openByDefault || !shouldCloseOnScroll ? 1 : 0, 1, 1, 0]
  );

  return (
    <div
      className={twMerge(
        "w-full px-52 z-20",
        openByDefault ? "h-[150vh]" : "h-[300vh]"
      )}
      ref={ref}
    >
      <motion.div
        className="border sticky top-10 left-0 bg-[#FFFBEA] w-[15vw] p-[0.10rem] overflow-hidden !whitespace-nowrap"
        style={{
          width,
          translateY,
          translateX,
          height,
          opacity,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default AnimatedPane;
