import { Button } from "./ui/button";
import { useAccent } from "@/contexts/AccentContext";

export const ColorToggle = () => {
  const { accent, toggleAccent } = useAccent();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleAccent}
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
