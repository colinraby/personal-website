"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, ArrowRight, Sparkles, Cpu, Leaf } from "lucide-react";
import { projects } from "@/data/site-data";
import { cn } from "@/lib/utils";

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

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 sm:py-32 bg-secondary/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Building solutions at the intersection of AI, agriculture, and policy.
            </p>
          </motion.div>

          {/* Featured Project - FarmMind */}
          {featuredProject && (
            <motion.div
              variants={itemVariants}
              className="mb-16"
            >
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-neon-green/10 via-neon-cyan/10 to-neon-purple/10 border border-border">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
                  <div className="absolute top-10 right-10 w-32 h-32 bg-neon-green rounded-full blur-3xl" />
                  <div className="absolute bottom-10 right-20 w-48 h-48 bg-neon-cyan rounded-full blur-3xl" />
                </div>

                <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 p-8 sm:p-12">
                  {/* Content */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-green to-neon-cyan flex items-center justify-center">
                        <Leaf className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold">
                          {featuredProject.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {featuredProject.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {featuredProject.description}
                    </p>

                    {/* Problem & Solution */}
                    {featuredProject.problem && (
                      <div className="space-y-4">
                        <div className="glass-card rounded-xl p-4">
                          <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                            The Problem
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {featuredProject.problem}
                          </p>
                        </div>
                        <div className="glass-card rounded-xl p-4">
                          <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                            The Solution
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {featuredProject.solution}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {featuredProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-secondary border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    {featuredProject.links && (
                      <div className="flex flex-wrap gap-4 pt-4">
                        {featuredProject.links.website && (
                          <motion.a
                            href={featuredProject.links.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-lg transition-all"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            Visit FarmMind
                            <ExternalLink className="w-4 h-4" />
                          </motion.a>
                        )}
                        {featuredProject.links.blog && (
                          <motion.a
                            href={featuredProject.links.blog}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card hover:border-primary/50 transition-all font-medium"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            Read Blog
                            <ArrowRight className="w-4 h-4" />
                          </motion.a>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Impact & Recognition */}
                  <div className="space-y-6">
                    {/* Placeholder for screenshot/demo */}
                    <div className="aspect-video rounded-xl bg-gradient-to-br from-secondary to-muted flex items-center justify-center border border-border overflow-hidden">
                      <div className="text-center space-y-2">
                        <Cpu className="w-12 h-12 mx-auto text-muted-foreground" />
                        <p className="text-sm text-muted-foreground">
                          Demo / Screenshot
                        </p>
                      </div>
                    </div>

                    {/* Impact metrics */}
                    {featuredProject.impact && (
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                          Recognition & Impact
                        </h4>
                        <div className="space-y-2">
                          {featuredProject.impact.map((item, index) => (
                            <div
                              key={index}
                              className="flex items-start gap-3 text-sm"
                            >
                              <Sparkles className="w-4 h-4 text-neon-green flex-shrink-0 mt-0.5" />
                              <span className="text-muted-foreground">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Other Projects */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-6">More Projects</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {otherProjects.map((project) => (
                <motion.div
                  key={project.id}
                  className="glass-card rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-purple to-neon-blue flex items-center justify-center flex-shrink-0">
                      {project.id === "senior-design" ? (
                        <Cpu className="w-5 h-5 text-white" />
                      ) : (
                        <Sparkles className="w-5 h-5 text-white" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold group-hover:text-gradient transition-all">
                        {project.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        {project.subtitle}
                      </p>
                      <p className="text-sm text-muted-foreground mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs rounded-md bg-secondary"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
