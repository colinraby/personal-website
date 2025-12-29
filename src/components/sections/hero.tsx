"use client";

import { motion } from "framer-motion";
import { ChevronDown, Linkedin, ExternalLink } from "lucide-react";
import { ParticleBackground } from "@/components/ui/particle-background";
import { siteConfig } from "@/data/site-data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1] as const,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1] as const,
    },
  },
};

export function Hero() {
  const nameLetters = "COLIN RABY".split("");

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-secondary/20"
    >
      {/* Animated background */}
      <ParticleBackground />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Animated name */}
        <motion.h1
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6"
          variants={itemVariants}
        >
          <span className="sr-only">Colin Raby</span>
          <span aria-hidden="true" className="flex justify-center flex-wrap gap-1 sm:gap-2">
            {nameLetters.map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className={
                  letter === " "
                    ? "w-4 sm:w-8"
                    : "text-gradient inline-block hover:scale-110 transition-transform cursor-default"
                }
              >
                {letter}
              </motion.span>
            ))}
          </span>
        </motion.h1>

        {/* Subtitle with typewriter effect simulation */}
        <motion.div variants={itemVariants} className="mb-8">
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium">
            <span className="text-foreground">Congressional AI Specialist</span>
            <span className="mx-3 text-neon-purple">|</span>
            <span className="text-foreground">CEO, FarmMind</span>
            <span className="mx-3 text-neon-cyan">|</span>
            <span className="text-foreground">Engineer</span>
          </p>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          {siteConfig.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium
                       hover:shadow-lg hover:shadow-primary/25 transition-all duration-300
                       flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View My Work
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>

          <motion.a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-3 rounded-full border border-border bg-card/50 backdrop-blur-sm
                       hover:border-primary/50 hover:bg-card transition-all duration-300
                       flex items-center gap-2 font-medium"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Linkedin className="w-4 h-4" />
            Connect on LinkedIn
          </motion.a>
        </motion.div>

        {/* Social proof / quick stats */}
        <motion.div
          variants={itemVariants}
          className="mt-16 flex flex-wrap justify-center gap-8 sm:gap-12 text-muted-foreground"
        >
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-bold text-gradient">2x</p>
            <p className="text-sm">National Champion</p>
          </div>
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-bold text-gradient">Top 10</p>
            <p className="text-sm">Farm Bureau Challenge</p>
          </div>
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-bold text-gradient">First</p>
            <p className="text-sm">Congressional AI Specialist</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        onClick={scrollToAbout}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        aria-label="Scroll to About section"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  );
}
