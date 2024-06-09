import React, { ReactNode, useState } from "react";
import { twMerge } from "tailwind-merge";
import { useSelectedButton } from '../../../SelectedButtonContext.js';

function FooterButton({
  children,
  onClick,
  className,
  href,
  disabled,
  isSelected, // Add this prop
}: {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  isSelected?: boolean; // Add this prop
}) {
  const [isMouseDown, setIsMouseDown] = useState(false);
  // const { setSelectedButton } = useSelectedButton() || {};

  // const scrollToSection = (href: string) => {
  //   // Example positions; adjust based on your actual layout and requirements
  //   const sectionScrollPositions: { [key: string]: number } = {
  //     hero: 0,
  //     beliefs: 0,
  //     joinUs: 1600,
  //     // Add other sections as needed
  //   };
  
  //   const targetScrollPosition = sectionScrollPositions[href];
  //   console.log(targetScrollPosition);

  //   if (targetScrollPosition !== undefined) {
  //     window.scrollTo({ top: targetScrollPosition, behavior: 'smooth' });
  //   }
  // };

  // // Custom click handler to programmatically navigate and update state
  // const handleClick = () => {
  //   // setSelectedButton(href); // Update selected state
  //   // Programmatically navigate if needed, or ensure the scroll to the target section is triggered here
  //   console.log('clicked!');
  //   if (href !== undefined) {
  //     scrollToSection(href);
  //   };
  // };

  // Add a conditional class for the selected state
  const selectedClass = isSelected ? 
    'text-blue-500 font-bold outline outline-black outline-1 bg-red-200' : ''; // Adjust the color as needed

  if (href) {
    return (
      <a
        href={`#${href}`}
        onMouseDown={() => setIsMouseDown(true)}
        onMouseUp={() => setIsMouseDown(false)}
        onClick={onClick}
        className={twMerge(
          `bg-[#FFFBEA] h-full border border-l-[#e0dcca] border-t-[#e0dcca] text-black font-msSans text-xs 
        border-r-[black] border-b-[black] flex items-center justify-start py-1 px-3 w-[12%] cursor-pointer`,
          (isMouseDown || disabled) && "bg-[#FFFBEA] border-[#e0dcca] text-[#e4e4e4b9] ",
          className,
          selectedClass // Add the selected class here
        //   "bg-red-500"
        )}
      >
        {children}
      </a>
    );
  }
  
  return (
    <div
      onMouseDown={() => setIsMouseDown(true)}
      onMouseUp={() => setIsMouseDown(false)}
      onClick={onClick}
      className={twMerge(
        `bg-[#FFFBEA] h-full border border-l-[#e0dcca] border-t-[e0dcca] text-black font-msSans text-xs 
    border-r-[black] border-b-[black] flex items-center justify-start py-1 px-3 w-[12%] cursor-pointer`,
        (isMouseDown || disabled) && "bg-[#FFFBEA] border-[#e0dcca] text-[#e4e4e4b9] ",
        disabled && "cursor-not-allowed pointer-events-none",
        className,
        selectedClass // Add the selected class here
      )}
    >
      {children}
    </div>
  );
}

export default FooterButton;
