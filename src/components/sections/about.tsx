"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, Award, Briefcase, GraduationCap, MapPin } from "lucide-react";
import Image from "next/image";
import { aboutContent } from "@/data/site-data";
import { cn } from "@/lib/utils";

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

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showMore, setShowMore] = useState(false);

  return (
    <section
      id="about"
      className="py-24 sm:py-32 bg-secondary/30"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Engineer, entrepreneur, and policy advocate building at the intersection of AI and real-world impact.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left column - Image and quick stats */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Profile image */}
              <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 via-neon-purple/20 to-neon-blue/20 rounded-2xl" />
                <div className="absolute inset-2 bg-card rounded-xl overflow-hidden">
                  <Image
                    src="/colin-raby.jpg"
                    alt="Colin Raby"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-neon-cyan/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-neon-purple/10 rounded-full blur-2xl" />
              </div>

              {/* Quick info cards */}
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
                <div className="glass-card rounded-xl p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-neon-cyan/10 flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-neon-cyan" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Former Role</p>
                    <p className="text-sm font-medium">Congressional AI Specialist</p>
                  </div>
                </div>

                <div className="glass-card rounded-xl p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-neon-purple/10 flex items-center justify-center">
                    <Award className="w-5 h-5 text-neon-purple" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Company</p>
                    <p className="text-sm font-medium">CEO, FarmMind Inc</p>
                  </div>
                </div>

                <div className="glass-card rounded-xl p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-neon-green/10 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-neon-green" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Education</p>
                    <p className="text-sm font-medium">LSU Honors '24</p>
                  </div>
                </div>

                <div className="glass-card rounded-xl p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-neon-blue/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-neon-blue" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Location</p>
                    <p className="text-sm font-medium">Baton Rouge and Washington, D.C.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right column - Text content */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Quick intro */}
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed">
                  {aboutContent.intro}
                </p>
              </div>

              {/* Expandable deep dive */}
              <motion.div
                className={cn(
                  "overflow-hidden transition-all duration-500",
                  showMore ? "max-h-[1000px]" : "max-h-0"
                )}
              >
                <div className="space-y-4 pt-4 border-t border-border">
                  <h3 className="text-xl font-semibold">My Journey</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {aboutContent.journey}
                  </p>

                  <h3 className="text-xl font-semibold pt-4">Beyond Work</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {aboutContent.personal}
                  </p>
                </div>
              </motion.div>

              <button
                onClick={() => setShowMore(!showMore)}
                className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                {showMore ? "Show less" : "Read more about my journey"}
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform duration-300",
                    showMore && "rotate-180"
                  )}
                />
              </button>

              {/* Fun facts */}
              <div className="pt-6">
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                  Quick Facts
                </h3>
                <div className="flex flex-wrap gap-2">
                  {aboutContent.funFacts.map((fact, index) => (
                    <motion.span
                      key={index}
                      className="px-3 py-1.5 text-sm bg-card rounded-full border border-border hover:border-primary/50 transition-colors"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      {fact}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
