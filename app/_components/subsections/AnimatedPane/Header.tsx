import React from "react";

function Header({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <div
      id={id}
      className="w-full py-[0.15rem] pl-1 bg-gradient-to-r from-black to-transparent text-xs"
    >
      <div id={id}/>
      {children}
    </div>
  );
}

export default Header;
