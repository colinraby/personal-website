"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Newspaper,
  Video,
  Radio,
  ExternalLink,
  Play,
  Filter,
} from "lucide-react";
import { newsItems } from "@/data/site-data";
import { cn } from "@/lib/utils";

type NewsType = "all" | "article" | "video" | "radio";

const typeIcons: Record<string, React.ReactNode> = {
  article: <Newspaper className="w-5 h-5" />,
  video: <Video className="w-5 h-5" />,
  radio: <Radio className="w-5 h-5" />,
};

const typeColors: Record<string, string> = {
  article: "bg-neon-blue/10 text-neon-blue",
  video: "bg-neon-purple/10 text-neon-purple",
  radio: "bg-neon-green/10 text-neon-green",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1] as const,
    },
  },
};

export function News() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState<NewsType>("all");

  const filteredNews =
    filter === "all"
      ? newsItems
      : newsItems.filter((item) => item.type === filter);

  const filterOptions: { value: NewsType; label: string }[] = [
    { value: "all", label: "All" },
    { value: "article", label: "Articles" },
    { value: "video", label: "Video" },
    { value: "radio", label: "Radio/Podcast" },
  ];

  return (
    <section id="news" className="py-24 sm:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              In The <span className="text-gradient">News</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Media coverage, interviews, and press features.
            </p>
          </motion.div>

          {/* Filter buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {filterOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setFilter(option.value)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  filter === option.value
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary hover:bg-secondary/80 text-foreground"
                )}
              >
                {option.label}
              </button>
            ))}
          </motion.div>

          {/* News grid */}
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {filteredNews.map((item, index) => (
              <motion.a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group glass-card rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -4 }}
              >
                {/* Thumbnail area */}
                <div className="relative aspect-video bg-gradient-to-br from-secondary to-muted">
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 text-primary-foreground ml-1" />
                      </div>
                    </div>
                  )}
                  {item.type === "radio" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-neon-green/20 flex items-center justify-center">
                        <Radio className="w-8 h-8 text-neon-green" />
                      </div>
                    </div>
                  )}
                  {item.type === "article" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Newspaper className="w-12 h-12 text-muted-foreground/50" />
                    </div>
                  )}

                  {/* Type badge */}
                  <div
                    className={cn(
                      "absolute top-3 left-3 px-2 py-1 rounded-full flex items-center gap-1.5 text-xs font-medium",
                      typeColors[item.type]
                    )}
                  >
                    {typeIcons[item.type]}
                    <span className="capitalize">{item.type}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <span className="font-medium">{item.publication}</span>
                    <span>•</span>
                    <span>{item.date}</span>
                  </div>

                  <h3 className="font-semibold mb-2 line-clamp-2 group-hover:text-gradient transition-all">
                    {item.title}
                  </h3>

                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {item.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs rounded-full bg-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link indicator */}
                  <div className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                    {item.type === "article" && "Read Article"}
                    {item.type === "video" && "Watch Video"}
                    {item.type === "radio" && "Listen Now"}
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Empty state */}
          {filteredNews.length === 0 && (
            <motion.div
              variants={itemVariants}
              className="text-center py-12"
            >
              <Filter className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">
                No items found for this filter.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
