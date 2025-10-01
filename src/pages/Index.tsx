import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Arsenal } from "@/components/Arsenal";
import { Blog } from "@/components/Blog";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Arsenal />
        <Blog />
        <Certifications />
        <Contact />
      </main>
      <footer className="border-t border-border py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p className="font-mono">
              © 2024 D0p3W0lf. Built with React + Vite + Tailwind CSS
            </p>
            <p className="font-mono text-terminal-cyan">
              <span className="text-terminal-green">$</span> Stay secure
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
