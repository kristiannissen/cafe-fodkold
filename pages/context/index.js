/**
 *
 * @file context.js
 */
import { createContext, useContext } from "react";

const AppContext = createContext();

export const AppWrapper = ({ children }) => {
  let sharedContext = {
    user: { lat: "", lng: "" },
  };

  return (
    <AppContext.Provider value={sharedContext}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
