import { TypeAnimation } from "react-type-animation";
import { Button } from "./ui/button";
import { ArrowRight, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import profileImage from "@/assets/profile.jpg";
import { useAccent } from "@/contexts/AccentContext";
import { FallingCommands } from "./FallingCommands";
import { useState, useEffect } from "react";

const generateRandomChar = () => {
  const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*";
  return chars[Math.floor(Math.random() * chars.length)];
};

const generateRandomHash = () => {
  const chars = "0123456789abcdef";
  return Array.from({ length: 16 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
};

export const Hero = () => {
  const { accent } = useAccent();
  const [displayName, setDisplayName] = useState("");
  const [displayQuote, setDisplayQuote] = useState("");
  const [isDecrypting, setIsDecrypting] = useState(true);
  const realName = "MUHAMMED\nPATEL";

  useEffect(() => {
    setIsDecrypting(true);
    setDisplayName("");
    setDisplayQuote("");
    
    // Name decrypt animation
    const decryptDuration = 1200;
    const frameInterval = 50;
    const frames = decryptDuration / frameInterval;
    let currentFrame = 0;

    const decryptInterval = setInterval(() => {
      currentFrame++;
      const progress = currentFrame / frames;
      
      const newName = realName.split('').map((char, index) => {
        if (char === ' ') return ' ';
        if (char === '\n') return '\n';
        
        const charProgress = Math.max(0, (progress * realName.length - index) / 3);
        
        if (charProgress >= 1) {
          return char;
        } else if (charProgress > 0) {
          return Math.random() > 0.5 ? char : generateRandomChar();
        } else {
          return generateRandomChar();
        }
      }).join('');
      
      setDisplayName(newName);
      
      if (currentFrame >= frames) {
        clearInterval(decryptInterval);
        setDisplayName(realName);
        setIsDecrypting(false);
      }
    }, frameInterval);

    // Quote decrypt animation (longer duration, faster interval)
    const quoteDecryptDuration = 1800;
    const quoteFrameInterval = 30;
    const quoteFrames = quoteDecryptDuration / quoteFrameInterval;
    let quoteCurrentFrame = 0;

    const quoteDecryptInterval = setInterval(() => {
      quoteCurrentFrame++;
      const quoteProgress = quoteCurrentFrame / quoteFrames;
      
      const newQuote = quote.split('').map((char, index) => {
        if (char === ' ') return ' ';
        if (char === '\n') return '\n';
        
        const charProgress = Math.max(0, (quoteProgress * quote.length - index) / 3);
        
        if (charProgress >= 1) {
          return char;
        } else if (charProgress > 0) {
          return Math.random() > 0.5 ? char : generateRandomChar();
        } else {
          return generateRandomChar();
        }
      }).join('');
      
      setDisplayQuote(newQuote);
      
      if (quoteCurrentFrame >= quoteFrames) {
        clearInterval(quoteDecryptInterval);
        setDisplayQuote(quote);
      }
    }, quoteFrameInterval);

    return () => {
      clearInterval(decryptInterval);
      clearInterval(quoteDecryptInterval);
    };
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
          {/* Left Column - Title & Animations */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Name Title with Character-by-Character Decryption */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold font-mono tracking-tight min-h-[8rem] md:min-h-[10rem]">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="block"
                >
                  {displayName.split('\n').map((line, i) => (
                    <div key={i}>
                      <span className={i === 1 ? "text-primary animate-glow-pulse" : ""}>
                        {line}
                      </span>
                    </div>
                  ))}
                </motion.span>
              </h1>

              {/* Job Titles Typewriter */}
              <div className="text-lg md:text-xl tracking-hero">
                <TypeAnimation
                  key={accent}
                  sequence={jobTitles}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  cursor={true}
                  className="text-primary font-mono"
                />
              </div>

              {/* Quote with Character-by-Character Decrypt Effect */}
              <motion.div
                key={`quote-${accent}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
                className="text-sm md:text-base text-muted-foreground font-mono"
              >
                {displayQuote}
              </motion.div>
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
