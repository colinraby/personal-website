"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
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

// Typewriter hook
function useTypewriter(text: string, speed: number = 80, delay: number = 0) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setDisplayedText("");
    setIsComplete(false);

    const startTimeout = setTimeout(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          setIsComplete(true);
          clearInterval(interval);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [text, speed, delay]);

  return { displayedText, isComplete };
}

// Current roles (primary)
const primaryRoles = [
  "AI Builder",
  "Researcher",
  "Communicator",
  "CEO of FarmMind",
];

// Emeritus/past roles
const emeritusRoles = [
  "Congressional AI Specialist",
  "NASA Researcher",
  "Nuclear Engineering",
  "LA Governor's Fellow",
];

export function Hero() {
  const name = "COLIN RABY";
  const { displayedText: displayedName, isComplete: nameComplete } = useTypewriter(name, 100, 500);

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
        {/* Typewriter name */}
        <motion.h1
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6 min-h-[1.2em]"
          variants={itemVariants}
        >
          <span className="sr-only">Colin Raby</span>
          <span aria-hidden="true" className="text-gradient inline-block">
            {displayedName}
            <motion.span
              className="inline-block w-[3px] sm:w-[4px] h-[0.9em] bg-neon-cyan ml-1 align-middle"
              animate={{ opacity: nameComplete ? [1, 0] : 1 }}
              transition={{
                duration: 0.5,
                repeat: nameComplete ? Infinity : 0,
                repeatType: "reverse",
              }}
            />
          </span>
        </motion.h1>

        {/* Primary roles */}
        <motion.div
          variants={itemVariants}
          className="mb-4"
        >
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl font-medium">
            {primaryRoles.map((role, index) => (
              <motion.span
                key={role}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 + index * 0.15, duration: 0.4 }}
                className="text-foreground"
              >
                {role}
                {index < primaryRoles.length - 1 && (
                  <span className="mx-2 sm:mx-3 text-neon-purple">|</span>
                )}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Emeritus roles */}
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.8, duration: 0.5 }}
            className="text-sm sm:text-base text-muted-foreground"
          >
            <span className="text-neon-cyan font-medium">Emeritus:</span>{" "}
            {emeritusRoles.map((role, index) => (
              <span key={role}>
                {role}
                {index < emeritusRoles.length - 1 && (
                  <span className="mx-1.5 text-muted-foreground/50">•</span>
                )}
              </span>
            ))}
          </motion.p>
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
            <p className="text-2xl sm:text-3xl font-bold text-gradient">$95K+</p>
            <p className="text-sm">Prize Funding Won</p>
          </div>
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-bold text-gradient">2x</p>
            <p className="text-sm">National Champion</p>
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
        transition={{ delay: 3.5, duration: 0.5 }}
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
