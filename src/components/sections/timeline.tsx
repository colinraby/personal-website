"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  GraduationCap,
  Trophy,
  Rocket,
  Briefcase,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { timelineEvents } from "@/data/site-data";
import { cn } from "@/lib/utils";

const categoryIcons: Record<string, React.ReactNode> = {
  personal: <Sparkles className="w-4 h-4" />,
  education: <GraduationCap className="w-4 h-4" />,
  award: <Trophy className="w-4 h-4" />,
  entrepreneurship: <Rocket className="w-4 h-4" />,
  career: <Briefcase className="w-4 h-4" />,
  future: <Sparkles className="w-4 h-4" />,
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
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

  // Reverse the events so most recent is first
  const reversedEvents = [...timelineEvents].reverse();

  const selectedEventData = timelineEvents.find((e) => e.id === selectedEvent);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <section id="timeline" className="py-24 sm:py-32" ref={ref}>
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-4">
            From LSU to Capitol Hill to FarmMind, a timeline of milestones and achievements.
          </p>
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            <ChevronLeft className="w-4 h-4" />
            Scroll to explore
            <ChevronRight className="w-4 h-4" />
          </p>
        </motion.div>
      </div>

      {/* Horizontal scrolling timeline */}
      <div className="relative">
        {/* Scroll buttons - desktop only */}
        <button
          onClick={scrollLeft}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-card/90 backdrop-blur-sm border border-border items-center justify-center hover:bg-card hover:border-primary/50 transition-all shadow-lg"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={scrollRight}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-card/90 backdrop-blur-sm border border-border items-center justify-center hover:bg-card hover:border-primary/50 transition-all shadow-lg"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Gradient fades on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Scrollable container */}
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto scrollbar-hide"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {/* Timeline container with fixed height for alternating cards */}
          <div className="relative min-h-[520px] px-8 md:px-20">
            {/* Main horizontal timeline line */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

            {/* Timeline events */}
            <div className="inline-flex items-center h-full" style={{ minWidth: `${reversedEvents.length * 220}px` }}>
              {reversedEvents.map((event, index) => {
                const isAbove = index % 2 === 0;

                return (
                  <motion.div
                    key={event.id}
                    className="relative flex-shrink-0 w-[200px] h-[520px] flex flex-col items-center justify-center"
                    initial={{ opacity: 0, y: isAbove ? -20 : 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: Math.min(index * 0.05, 1) }}
                  >
                    {/* Card positioned above or below */}
                    <div
                      className={cn(
                        "absolute w-[180px]",
                        isAbove ? "bottom-[calc(50%+40px)]" : "top-[calc(50%+40px)]"
                      )}
                    >
                      {/* Connector line from card to timeline */}
                      <div
                        className={cn(
                          "absolute left-1/2 -translate-x-1/2 w-px bg-gradient-to-b",
                          isAbove
                            ? "top-full h-[30px] from-primary/50 to-transparent"
                            : "bottom-full h-[30px] from-transparent to-primary/50"
                        )}
                      />

                      {/* Event card */}
                      <motion.button
                        className={cn(
                          "w-full text-left glass-card rounded-xl p-4 hover:shadow-lg transition-all duration-300 group",
                          "border border-border/50 hover:border-primary/30"
                        )}
                        onClick={() => setSelectedEvent(event.id)}
                        whileHover={{ scale: 1.03, y: isAbove ? -4 : 4 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {/* Year badge */}
                        <span className="inline-block px-2 py-0.5 text-xs font-semibold rounded-full bg-secondary text-foreground mb-2">
                          {event.year}
                        </span>

                        <h3 className="text-sm font-semibold mb-1 group-hover:text-gradient transition-all line-clamp-2">
                          {event.title}
                        </h3>
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {event.description}
                        </p>
                      </motion.button>
                    </div>

                    {/* Timeline node (icon) - centered on the timeline */}
                    <div className="absolute top-1/2 -translate-y-1/2 z-10">
                      <motion.div
                        className={cn(
                          "w-10 h-10 rounded-full flex items-center justify-center text-white",
                          "bg-gradient-to-br shadow-lg cursor-pointer",
                          categoryColors[event.category]
                        )}
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 400 }}
                        onClick={() => setSelectedEvent(event.id)}
                      >
                        {categoryIcons[event.category]}
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
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
                  "w-12 h-12 rounded-full flex items-center justify-center text-white",
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

      {/* Hide scrollbar CSS */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
