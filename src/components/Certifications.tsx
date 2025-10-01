import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import oscpImage from "@/assets/cert-oscp.jpg";
import cehImage from "@/assets/cert-ceh.jpg";
import secPlusImage from "@/assets/cert-secplus.jpg";

const certifications = [
  {
    id: 1,
    name: "OSCP",
    fullName: "Offensive Security Certified Professional",
    issuer: "Offensive Security",
    date: "2024",
    image: oscpImage,
    verifyUrl: "#",
  },
  {
    id: 2,
    name: "CEH",
    fullName: "Certified Ethical Hacker",
    issuer: "EC-Council",
    date: "2023",
    image: cehImage,
    verifyUrl: "#",
  },
  {
    id: 3,
    name: "Security+",
    fullName: "CompTIA Security+ Certification",
    issuer: "CompTIA",
    date: "2022",
    image: secPlusImage,
    verifyUrl: "#",
  },
];

export const Certifications = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
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
              <span className="text-primary">#</span> CERTIFICATIONS
            </h2>
            <p className="text-muted-foreground">
              Industry-recognized security certifications
            </p>
          </div>

          {/* Horizontal Scroll Container */}
          <div className="relative">
            <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex-shrink-0 w-80 snap-center"
                >
                  <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all hover:shadow-elegant group">
                    <div className="aspect-square overflow-hidden bg-secondary/50">
                      <img
                        src={cert.image}
                        alt={`${cert.fullName} certification badge`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6 space-y-3">
                      <h3 className="font-mono font-bold text-xl text-primary">
                        {cert.name}
                      </h3>
                      <p className="text-sm font-semibold">{cert.fullName}</p>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <p>Issued by: {cert.issuer}</p>
                        <p>Date: {cert.date}</p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full group/btn"
                        asChild
                      >
                        <a
                          href={cert.verifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Verify
                          <ExternalLink className="ml-2 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
