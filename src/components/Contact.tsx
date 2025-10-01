import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send, Shield } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "I'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold font-mono">
              <span className="text-primary">#</span> GET IN TOUCH
            </h2>
            <p className="text-muted-foreground">
              Let's discuss security, collaboration, or opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-mono text-muted-foreground">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="bg-secondary/50 border-border focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-mono text-muted-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="bg-secondary/50 border-border focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-mono text-muted-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message here..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  className="bg-secondary/50 border-border focus:border-primary resize-none"
                />
              </div>

              <div className="flex items-start gap-2 text-xs text-muted-foreground">
                <Shield className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <p>
                  Usually respond within 24 hours • All messages are encrypted
                </p>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full shadow-elegant hover:shadow-glow rounded-2xl group"
              >
                Send Message
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>

            {/* Social Links */}
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-4">
                <h3 className="font-mono font-semibold text-lg">Connect with me</h3>
                <p className="text-muted-foreground text-sm">
                  Follow my work and connect on social platforms
                </p>
              </div>

              <div className="space-y-4">
                <Button
                  variant="outline"
                  className="w-full justify-start group"
                  asChild
                >
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-3 h-5 w-5" />
                    <span className="flex-1 text-left">GitHub</span>
                    <Mail className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </Button>

                <Button
                  variant="outline"
                  className="w-full justify-start group"
                  asChild
                >
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="mr-3 h-5 w-5" />
                    <span className="flex-1 text-left">LinkedIn</span>
                    <Mail className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </Button>
              </div>

              <div className="pt-8 border-t border-border">
                <p className="font-mono text-sm text-terminal-green">
                  <span className="text-muted-foreground">email@</span>
                  security:~$ contact@d0p3w0lf.dev
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
