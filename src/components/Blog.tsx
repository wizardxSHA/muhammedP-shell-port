import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Tag } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const categories = ["All", "CTF", "Lab", "Research", "Incident Response", "Exam Prep"];

const posts = [
  {
    id: 1,
    title: "HackTheBox Writeup: Advanced Buffer Overflow",
    category: "CTF",
    readTime: "8 min",
    date: "2024-09-15",
    excerpt: "Deep dive into exploiting a custom buffer overflow vulnerability with DEP bypass techniques",
  },
  {
    id: 2,
    title: "Building a Home Security Lab with Proxmox",
    category: "Lab",
    readTime: "12 min",
    date: "2024-09-10",
    excerpt: "Complete guide to setting up an isolated penetration testing lab environment",
  },
  {
    id: 3,
    title: "Analyzing APT29 Tactics in Enterprise Networks",
    category: "Research",
    readTime: "15 min",
    date: "2024-09-05",
    excerpt: "Research on advanced persistent threat techniques and detection strategies",
  },
  {
    id: 4,
    title: "Responding to Ransomware: A Case Study",
    category: "Incident Response",
    readTime: "10 min",
    date: "2024-08-28",
    excerpt: "Real-world incident response to a targeted ransomware attack",
  },
  {
    id: 5,
    title: "OSCP Preparation: Tips and Resources",
    category: "Exam Prep",
    readTime: "6 min",
    date: "2024-08-20",
    excerpt: "My journey and recommendations for the OSCP certification exam",
  },
  {
    id: 6,
    title: "TryHackMe Red Teaming Path Review",
    category: "CTF",
    readTime: "7 min",
    date: "2024-08-15",
    excerpt: "Comprehensive review of the red teaming learning path and key takeaways",
  },
];

export const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  return (
    <section id="blog" className="py-20 px-4">
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
              <span className="text-primary">#</span> BLOG & NOTES
            </h2>
            <p className="text-muted-foreground">
              Writeups, research, and security insights
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="font-mono text-xs"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:shadow-elegant cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Badge variant="secondary" className="font-mono">
                      {post.category}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                    <span>{post.date}</span>
                  </div>

                  <h3 className="font-mono font-semibold text-lg group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="pt-2">
                    <span className="text-sm text-primary font-mono group-hover:underline">
                      Read more →
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
