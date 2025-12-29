"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, ArrowRight, ExternalLink, PenLine, Leaf } from "lucide-react";
import { siteConfig } from "@/data/site-data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

// Placeholder blog posts - these would ideally come from RSS feeds or a CMS
const personalBlogPosts = [
  {
    title: "The Future of AI in Government",
    excerpt: "Exploring how artificial intelligence is transforming the way government operates and serves citizens.",
    date: "Coming Soon",
    readTime: "5 min read",
  },
  {
    title: "Lessons from Building a Startup in College",
    excerpt: "What I learned founding FarmMind while completing my engineering degree at LSU.",
    date: "Coming Soon",
    readTime: "7 min read",
  },
];

const farmmindBlogPosts = [
  {
    title: "How AI is Revolutionizing Agriculture",
    excerpt: "Discover how modern AI technologies are helping farmers make better decisions and improve yields.",
    date: "Coming Soon",
    readTime: "6 min read",
  },
  {
    title: "Getting Started with FarmMind",
    excerpt: "A complete guide to using FarmMind's AI-powered agricultural consulting platform.",
    date: "Coming Soon",
    readTime: "4 min read",
  },
];

export function Writing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="writing" className="py-24 sm:py-32 bg-secondary/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Writing & <span className="text-gradient">Thoughts</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Insights on AI, policy, agriculture, and entrepreneurship.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Personal Blog */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-purple to-neon-blue flex items-center justify-center">
                    <PenLine className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Personal Blog</h3>
                    <p className="text-sm text-muted-foreground">
                      AI, policy, and personal insights
                    </p>
                  </div>
                </div>
                {siteConfig.links.substack && (
                  <a
                    href={siteConfig.links.substack}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-primary hover:text-primary/80 flex items-center gap-1"
                  >
                    View All
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>

              <div className="space-y-4">
                {personalBlogPosts.map((post, index) => (
                  <motion.div
                    key={index}
                    className="glass-card rounded-xl p-5 hover:shadow-lg transition-all duration-300 group cursor-pointer"
                    whileHover={{ scale: 1.01, x: 4 }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="font-semibold mb-2 group-hover:text-gradient transition-all">
                          {post.title}
                        </h4>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span>{post.date}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all flex-shrink-0" />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Subscribe CTA */}
              <div className="glass-card rounded-xl p-6 text-center">
                <BookOpen className="w-8 h-8 mx-auto text-neon-purple mb-3" />
                <h4 className="font-semibold mb-2">Subscribe to My Newsletter</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Get the latest insights on AI policy and technology delivered to your inbox.
                </p>
                <motion.a
                  href={siteConfig.links.substack || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:shadow-lg transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe on Substack
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>

            {/* FarmMind Blog */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-green to-neon-cyan flex items-center justify-center">
                    <Leaf className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">FarmMind Blog</h3>
                    <p className="text-sm text-muted-foreground">
                      Agriculture, AI, and innovation
                    </p>
                  </div>
                </div>
                <a
                  href={siteConfig.links.farmmindBlog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-primary hover:text-primary/80 flex items-center gap-1"
                >
                  View All
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="space-y-4">
                {farmmindBlogPosts.map((post, index) => (
                  <motion.a
                    key={index}
                    href={siteConfig.links.farmmindBlog}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block glass-card rounded-xl p-5 hover:shadow-lg transition-all duration-300 group"
                    whileHover={{ scale: 1.01, x: 4 }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="font-semibold mb-2 group-hover:text-gradient transition-all">
                          {post.title}
                        </h4>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span>{post.date}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all flex-shrink-0" />
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* FarmMind CTA */}
              <div className="glass-card rounded-xl p-6 text-center bg-gradient-to-br from-neon-green/5 to-neon-cyan/5">
                <Leaf className="w-8 h-8 mx-auto text-neon-green mb-3" />
                <h4 className="font-semibold mb-2">Explore FarmMind</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  See how AI is transforming agriculture and helping farmers worldwide.
                </p>
                <motion.a
                  href={siteConfig.links.farmmind}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-border bg-card hover:border-neon-green/50 text-sm font-medium transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Visit FarmMind
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
