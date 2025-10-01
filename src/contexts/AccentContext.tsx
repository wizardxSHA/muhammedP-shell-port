import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type AccentType = "blue" | "red";

interface AccentContextType {
  accent: AccentType;
  setAccent: (accent: AccentType) => void;
  toggleAccent: () => void;
}

const AccentContext = createContext<AccentContextType | undefined>(undefined);

export const AccentProvider = ({ children }: { children: ReactNode }) => {
  const [accent, setAccent] = useState<AccentType>("blue");

  useEffect(() => {
    const root = document.documentElement;
    if (accent === "red") {
      root.setAttribute("data-accent", "red");
    } else {
      root.removeAttribute("data-accent");
    }
  }, [accent]);

  const toggleAccent = () => {
    setAccent((prev) => (prev === "blue" ? "red" : "blue"));
  };

  return (
    <AccentContext.Provider value={{ accent, setAccent, toggleAccent }}>
      {children}
    </AccentContext.Provider>
  );
};

export const useAccent = () => {
  const context = useContext(AccentContext);
  if (!context) {
    throw new Error("useAccent must be used within AccentProvider");
  }
  return context;
};
