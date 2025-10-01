import { TypeAnimation } from "react-type-animation";
import { Button } from "./ui/button";
import { ArrowRight, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import profileImage from "@/assets/profile.jpg";
import { useAccent } from "@/contexts/AccentContext";
import { FallingCommands } from "./FallingCommands";
import { useState, useEffect } from "react";

const generateRandomHash = () => {
  const chars = "0123456789abcdef";
  return Array.from({ length: 16 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
};

export const Hero = () => {
  const { accent } = useAccent();
  const [showHash, setShowHash] = useState(false);
  const [displayName, setDisplayName] = useState("Abhijeet Kumar");

  useEffect(() => {
    setShowHash(true);
    const timer = setTimeout(() => {
      setShowHash(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [accent]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const jobTitles = accent === "blue"
    ? [
        1000,
        "Defensive Security",
        2000,
        "Incident Response",
        2000,
        "SIEM Engineering",
        2000,
        "SOC Analyst",
        2000,
      ]
    : [
        1000,
        "Offensive Security",
        2000,
        "Penetration Tester",
        2000,
        "Adversary Simulation",
        2000,
        "Exploit Development",
        2000,
      ];

  const quote = accent === "blue"
    ? "Defense in depth is not a strategy, it's survival."
    : "Every lock has a key — I just find it faster.";

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden">
      <FallingCommands />
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Terminal & Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Terminal Prompt */}
            <div className="font-mono text-sm md:text-base space-y-2">
              <div className="text-terminal-green">
                <span className="text-muted-foreground">abhijeet@linux</span>:
                <span className="text-terminal-cyan">~</span>$ ./D0p3W0lf_init.sh
              </div>
              <div className="text-terminal-cyan flex items-start gap-2">
                <span className="text-muted-foreground">whoami</span>
                <div className="flex-1">
                  <AnimatePresence mode="wait">
                    {showHash ? (
                      <motion.span
                        key="hash"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-terminal-yellow"
                      >
                        {generateRandomHash()}
                      </motion.span>
                    ) : (
                      <motion.span
                        key="name"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        {displayName}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              
              {/* Job Titles */}
              <div className="text-muted-foreground flex items-start gap-2">
                <span className="text-terminal-green">role</span>
                <span>&gt;</span>
                <div className="flex-1 text-primary">
                  <TypeAnimation
                    key={accent}
                    sequence={jobTitles}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    cursor={true}
                  />
                </div>
              </div>

              {/* Quote with decrypt effect */}
              <motion.div
                key={`quote-${accent}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-muted-foreground text-xs md:text-sm flex items-start gap-2 pt-2"
              >
                <span className="text-terminal-cyan">quote</span>
                <span>&gt;</span>
                <div className="flex-1">
                  <TypeAnimation
                    key={`quote-anim-${accent}`}
                    sequence={[
                      500,
                      "Decrypting... " + generateRandomHash(),
                      1000,
                      quote,
                    ]}
                    wrapper="span"
                    speed={70}
                    cursor={false}
                  />
                </div>
              </motion.div>
            </div>

            {/* Hero Title */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold font-mono tracking-tight">
                CYBERSECURITY
                <br />
                <span className="text-primary animate-glow-pulse">PORTFOLIO</span>
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="text-lg md:text-xl text-muted-foreground tracking-hero"
              >
                ETHICAL HACKER · PENETRATION TESTER
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("arsenal")}
                className="group shadow-elegant hover:shadow-glow rounded-2xl"
              >
                Explore My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="rounded-2xl"
              >
                Contact Me
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-terminal-cyan hover:text-terminal-cyan"
              >
                <FileText className="mr-2 h-4 w-4" />
                Blue Resume
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="hidden md:flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
              <img
                src={profileImage}
                alt="Cybersecurity Professional Profile"
                className="relative w-80 h-80 object-cover rounded-2xl shadow-glow border-2 border-primary/30"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
