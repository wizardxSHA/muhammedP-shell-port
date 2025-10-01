import { motion } from "framer-motion";
import { Shield, Award, Target } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Terminal Header */}
          <div className="font-mono text-sm md:text-base">
            <span className="text-destructive">root@security</span>:
            <span className="text-terminal-cyan">~</span># whoami <span className="animate-blink">_</span>
          </div>

          {/* Bio */}
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-lg">
              I'm a passionate <strong className="text-foreground">cybersecurity professional</strong> specializing
              in penetration testing, vulnerability assessment, and security research. With hands-on experience in
              identifying and mitigating security risks, I help organizations strengthen their defense against
              cyber threats.
            </p>

            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <h3 className="font-mono font-semibold text-foreground">Experience</h3>
                </div>
                <ul className="space-y-1 text-sm">
                  <li>• 5+ years in cybersecurity</li>
                  <li>• Red team operations</li>
                  <li>• Incident response</li>
                </ul>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  <h3 className="font-mono font-semibold text-foreground">Education</h3>
                </div>
                <ul className="space-y-1 text-sm">
                  <li>• BS Computer Science</li>
                  <li>• Security certifications</li>
                  <li>• Continuous learning</li>
                </ul>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  <h3 className="font-mono font-semibold text-foreground">Journey</h3>
                </div>
                <ul className="space-y-1 text-sm">
                  <li>• CTF competitor</li>
                  <li>• Bug bounty hunter</li>
                  <li>• Security researcher</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
