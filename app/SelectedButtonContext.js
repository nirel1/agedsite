// Create a new file named SelectedButtonContext.js
import { createContext, useContext, useState } from 'react';

const SelectedButtonContext = createContext();

export function useSelectedButton() {
  return useContext(SelectedButtonContext);
}

export function SelectedButtonProvider({ children }) {
  const [selectedButton, setSelectedButton] = useState('hero');
  const [isManualSelection, setIsManualSelection] = useState(false);

  // console.log({selectedButton, isManualSelection});

  return (
    <SelectedButtonContext.Provider value={{ selectedButton, setSelectedButton, isManualSelection, setIsManualSelection}}>
      {children}
    </SelectedButtonContext.Provider>
  );
}
