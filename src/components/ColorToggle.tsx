import { useState, useEffect } from "react";
import { Button } from "./ui/button";

export const ColorToggle = () => {
  const [accent, setAccent] = useState<"blue" | "red">("blue");

  useEffect(() => {
    const root = document.documentElement;
    if (accent === "red") {
      root.setAttribute("data-accent", "red");
    } else {
      root.removeAttribute("data-accent");
    }
  }, [accent]);

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setAccent(accent === "blue" ? "red" : "blue")}
      className="font-mono text-xs"
      aria-label="Toggle accent color"
    >
      <span className={accent === "blue" ? "text-primary" : "text-muted-foreground"}>
        BLUE
      </span>
      <span className="mx-1">/</span>
      <span className={accent === "red" ? "text-primary" : "text-muted-foreground"}>
        RED
      </span>
    </Button>
  );
};
