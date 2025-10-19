import { createContext, useState, useContext } from "react";

const LangContext = createContext();

export function LangProvider({ children }) {
  const [lang, setLang] = useState("EN");

  const toggleLang = () => {
    setLang((prev) => (prev === "EN" ? "AR" : "EN"));
    document.documentElement.dir = lang === "EN" ? "rtl" : "ltr";
  };

  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}

// Custom hook for easy use
export const useLang = () => useContext(LangContext);
