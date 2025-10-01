import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import kaliImage from "@/assets/tool-kali.jpg";
import burpImage from "@/assets/tool-burp.jpg";
import wiresharkImage from "@/assets/tool-wireshark.jpg";
import metasploitImage from "@/assets/tool-metasploit.jpg";

const tools = [
  {
    id: 1,
    name: "Kali Linux",
    category: "Penetration Testing",
    image: kaliImage,
    description: "Primary OS for penetration testing with 600+ pre-installed security tools",
  },
  {
    id: 2,
    name: "Burp Suite",
    category: "Web Security",
    image: burpImage,
    description: "Industry-leading web application security testing platform",
  },
  {
    id: 3,
    name: "Wireshark",
    category: "Network Analysis",
    image: wiresharkImage,
    description: "Network protocol analyzer for deep packet inspection and forensics",
  },
  {
    id: 4,
    name: "Metasploit",
    category: "Exploitation",
    image: metasploitImage,
    description: "Framework for developing and executing exploit code against targets",
  },
];

export const Arsenal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const nextTool = () => {
    setCurrentIndex((prev) => (prev + 1) % tools.length);
  };

  const prevTool = () => {
    setCurrentIndex((prev) => (prev - 1 + tools.length) % tools.length);
  };

  return (
    <section id="arsenal" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold font-mono">
              <span className="text-primary">#</span> ARSENAL
            </h2>
            <p className="text-muted-foreground">Tools and frameworks I use to secure systems</p>
          </div>

          {/* Masonry Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all hover:shadow-elegant"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={tool.image}
                    alt={`${tool.name} security tool interface`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 space-y-3">
                  <Badge variant="secondary" className="text-xs font-mono">
                    {tool.category}
                  </Badge>
                  <h3 className="font-mono font-semibold text-lg">{tool.name}</h3>
                  <p className="text-sm text-muted-foreground">{tool.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTool}
              aria-label="Previous tool"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="font-mono text-sm text-muted-foreground">
              {currentIndex + 1} / {tools.length}
            </span>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTool}
              aria-label="Next tool"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* View More Button */}
          <div className="text-center">
            <Button
              variant="outline"
              onClick={() => setModalOpen(true)}
              className="shadow-elegant"
            >
              View More Tools
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Modal */}
          <Dialog open={modalOpen} onOpenChange={setModalOpen}>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="font-mono text-2xl">Complete Arsenal</DialogTitle>
              </DialogHeader>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                {[...tools, ...tools].map((tool, index) => (
                  <div key={index} className="border border-border rounded-lg p-4 space-y-2">
                    <h4 className="font-mono font-semibold">{tool.name}</h4>
                    <Badge variant="secondary" className="text-xs">{tool.category}</Badge>
                    <p className="text-sm text-muted-foreground">{tool.description}</p>
                  </div>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        </motion.div>
      </div>
    </section>
  );
};
