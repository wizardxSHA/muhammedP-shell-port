import { TypeAnimation } from "react-type-animation";
import { Button } from "./ui/button";
import { ArrowRight, FileText } from "lucide-react";
import { motion } from "framer-motion";
import profileImage from "@/assets/profile.jpg";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto max-w-6xl">
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
                  <TypeAnimation
                    sequence={[
                      500,
                      "Abhijeet Kumar",
                    ]}
                    wrapper="span"
                    speed={50}
                    cursor={true}
                  />
                </div>
              </div>
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
