import { createContext } from "react";
import StringConstants from '../assets/Lang/lang';

export const StringContext = createContext({});

export const StringProvider = ({ children }) => {
  return (
    <StringContext.Provider value={StringConstants}>
        {children}
    </StringContext.Provider>
  );
}