"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Cog, Users, Scale } from "lucide-react";
import { skills } from "@/data/site-data";
import { cn } from "@/lib/utils";

const categoryIcons: Record<string, React.ReactNode> = {
  "AI & Machine Learning": <Brain className="w-6 h-6" />,
  Engineering: <Cog className="w-6 h-6" />,
  "Leadership & Entrepreneurship": <Users className="w-6 h-6" />,
  "Policy & Governance": <Scale className="w-6 h-6" />,
};

const categoryColors: Record<string, string> = {
  "AI & Machine Learning": "from-neon-cyan to-neon-blue",
  Engineering: "from-neon-green to-neon-cyan",
  "Leadership & Entrepreneurship": "from-neon-purple to-neon-blue",
  "Policy & Governance": "from-orange-400 to-neon-purple",
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

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 sm:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Skills & <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A diverse skillset spanning technology, engineering, leadership, and policy.
            </p>
          </motion.div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {Object.entries(skills).map(([category, skillList], categoryIndex) => (
              <motion.div
                key={category}
                variants={itemVariants}
                className="glass-card rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300"
              >
                {/* Category header */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br text-white",
                      categoryColors[category]
                    )}
                  >
                    {categoryIcons[category]}
                  </div>
                  <h3 className="text-xl font-semibold">{category}</h3>
                </div>

                {/* Skills list */}
                <div className="space-y-3">
                  {skillList.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      className="flex items-center gap-3 group"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                    >
                      <div
                        className={cn(
                          "w-2 h-2 rounded-full bg-gradient-to-br",
                          categoryColors[category]
                        )}
                      />
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional skills/tools section */}
          <motion.div variants={itemVariants} className="mt-12">
            <h3 className="text-center text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">
              Tools & Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Python",
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "TensorFlow",
                "AWS",
                "Git",
                "SQL",
                "CAD/SolidWorks",
                "Data Analysis",
                "Public Speaking",
              ].map((tool, index) => (
                <motion.span
                  key={tool}
                  className="px-4 py-2 rounded-full bg-secondary border border-border hover:border-primary/50 transition-colors text-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
