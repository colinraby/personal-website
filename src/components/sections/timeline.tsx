"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  GraduationCap,
  Trophy,
  Rocket,
  Briefcase,
  Sparkles,
  ChevronRight,
  X,
} from "lucide-react";
import { timelineEvents } from "@/data/site-data";
import { cn } from "@/lib/utils";

const categoryIcons: Record<string, React.ReactNode> = {
  personal: <Sparkles className="w-5 h-5" />,
  education: <GraduationCap className="w-5 h-5" />,
  award: <Trophy className="w-5 h-5" />,
  entrepreneurship: <Rocket className="w-5 h-5" />,
  career: <Briefcase className="w-5 h-5" />,
  future: <Sparkles className="w-5 h-5" />,
};

const categoryColors: Record<string, string> = {
  personal: "from-neon-blue to-neon-cyan",
  education: "from-neon-green to-neon-cyan",
  award: "from-yellow-400 to-orange-500",
  entrepreneurship: "from-neon-purple to-neon-blue",
  career: "from-neon-cyan to-neon-green",
  future: "from-neon-purple to-neon-cyan",
};

export function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

  const selectedEventData = timelineEvents.find((e) => e.id === selectedEvent);

  return (
    <section id="timeline" className="py-24 sm:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From LSU to Capitol Hill, a timeline of milestones and achievements.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />

          {/* Events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.id}
                className={cn(
                  "relative flex items-center gap-8",
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                )}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Timeline node */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center",
                      "bg-gradient-to-br shadow-lg",
                      categoryColors[event.category]
                    )}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {categoryIcons[event.category]}
                  </motion.div>
                </div>

                {/* Content card */}
                <div
                  className={cn(
                    "ml-16 md:ml-0 md:w-[calc(50%-2rem)]",
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  )}
                >
                  <motion.button
                    className="w-full text-left glass-card rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
                    onClick={() => setSelectedEvent(event.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <span className="text-sm font-medium text-muted-foreground">
                          {event.year}
                        </span>
                        <h3 className="text-lg font-semibold mt-1 group-hover:text-gradient transition-all">
                          {event.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                          {event.description}
                        </p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all flex-shrink-0" />
                    </div>
                  </motion.button>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Modal for event details */}
        {selectedEvent && selectedEventData && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              onClick={() => setSelectedEvent(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            />

            {/* Modal content */}
            <motion.div
              className="relative bg-card rounded-2xl border border-border shadow-2xl max-w-lg w-full p-6 sm:p-8"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div
                  className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center",
                    "bg-gradient-to-br shadow-lg",
                    categoryColors[selectedEventData.category]
                  )}
                >
                  {categoryIcons[selectedEventData.category]}
                </div>
                <div>
                  <span className="text-sm font-medium text-muted-foreground">
                    {selectedEventData.year}
                  </span>
                  <h3 className="text-xl font-bold">{selectedEventData.title}</h3>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {selectedEventData.description}
              </p>

              {/* Category badge */}
              <div className="mt-6 flex items-center gap-2">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">
                  Category:
                </span>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-secondary capitalize">
                  {selectedEventData.category}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
