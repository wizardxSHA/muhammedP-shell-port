import { Button } from "./ui/button";
import { useAccent } from "@/contexts/AccentContext";

export const ColorToggle = () => {
  const { accent, setAccent } = useAccent();

  return (
    <div className="flex gap-3">
      <Button
        variant={accent === "blue" ? "default" : "outline"}
        size="lg"
        onClick={() => setAccent("blue")}
        className="font-mono text-sm px-6"
        aria-label="Switch to blue mode"
      >
        --mode=blue
      </Button>
      <Button
        variant={accent === "red" ? "default" : "outline"}
        size="lg"
        onClick={() => setAccent("red")}
        className="font-mono text-sm px-6"
        aria-label="Switch to red mode"
      >
        --mode=red
      </Button>
    </div>
  );
};
