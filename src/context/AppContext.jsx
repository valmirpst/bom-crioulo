import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context)
    throw new Error("useAppContext precisa estar em DataContextProvider");
  else return context;
}

export function AppContextProvider({ children }) {
  const [activePage, setActivePage] = useState("home");

  const data = {
    activePage,
    setActivePage,
  };

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
}
