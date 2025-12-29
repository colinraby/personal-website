"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Download,
  Linkedin,
  Briefcase,
  GraduationCap,
  Award,
  ExternalLink,
} from "lucide-react";
import { siteConfig } from "@/data/site-data";

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

const experience = [
  {
    title: "CEO & Co-Founder",
    company: "FarmMind Inc.",
    location: "Baton Rouge, LA",
    period: "May 2025 - Present",
    description:
      "Leading an AI-powered agricultural consulting platform using agentic AI networks to make agricultural expertise accessible to farmers worldwide. Secured recognition as Top-10 Semi-Finalist in American Farm Bureau 2026 Ag Innovation Challenge, winner of 2025 Pelican Cup ($50K), Nexus 2025 Technology Cup ($25K), and J. Terrell Brown Venture Challenge ($20K).",
  },
  {
    title: "Congressional AI Specialist",
    company: "Office of Rep. Raja Krishnamoorthi",
    location: "Washington, D.C.",
    period: "May 2024 - May 2025",
    description:
      "One of the nation's first Congressional AI Specialists. Built AI-enabled solutions for House Committees (Select Committee on CCP, Space Science and Technology, Energy and Commerce). Drafted technical briefs and memos on generative AI including LLMs and foundation models. Educated congressional staff on AI principles and facilitated discussions on AI policy.",
  },
  {
    title: "Teaching Assistant",
    company: "LSU Honors 3025: Applied LLM Systems",
    location: "Baton Rouge, LA",
    period: "Jan 2024 - May 2024",
    description:
      "Teaching assistant for LSU's inaugural large language model class, guiding students through an entire LLM stack including agents, fine-tuning, and Retrieval-Augmented Generation (RAG).",
  },
  {
    title: "Intern, Nuclear Services Group",
    company: "Enercon",
    location: "Baton Rouge, LA",
    period: "May 2023 - Aug 2023",
    description:
      "Performed digital I&C upgrades and control system replacement projects for nuclear power plants. Designed and executed control logic and conducted equipment verification, factory acceptance testing, and site acceptance testing.",
  },
  {
    title: "Intern, Systems Engineering & Project Management",
    company: "NASA Marshall Space Flight Center",
    location: "Huntsville, AL",
    period: "May 2022 - Aug 2022",
    description:
      "Conducted Systems Engineering and Project Management for NASA's MSFC Nuclear Propulsion Program. Supported RFP technical evaluation in the Space Launch System (SLS) Program Office.",
  },
  {
    title: "Louisiana Governor's Fellow",
    company: "Office of Governor John Bel Edwards",
    location: "Baton Rouge, LA",
    period: "May 2021 - Aug 2021",
    description:
      "Represented Louisiana as a Governor's Fellow, working on state-level initiatives and policy. Selected as one of a small cohort of outstanding Louisiana college students.",
  },
];

const education = [
  {
    degree: "B.S. Mechanical Engineering",
    school: "Louisiana State University",
    location: "Baton Rouge, LA",
    period: "2019 - 2024",
    details: [
      "Minors: Aerospace Engineering, Economics",
      "LSU Honors College Graduate",
      "Tiger Twelve Recipient",
    ],
  },
];

const awards = [
  "2025 Pelican Cup Winner - $50,000 (2025)",
  "Nexus 2025 Technology Cup Winner - $25,000 (2025)",
  "American Farm Bureau Ag Innovation Challenge Top-10 Semi-Finalist (2025)",
  "J. Terrell Brown Venture Challenge Winner - $20,000 (2024)",
  "Tiger Twelve Recipient (2021)",
  "2x LSU Homecoming Court (2022, 2023)",
  "2x AAEA Academic Bowl National Champion (2022, 2023)",
  "Louisiana Eagle Scout of the Year (2019)",
  "Order of the Arrow Vigil Honor",
];

export function Resume() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="resume" className="py-24 sm:py-32 bg-secondary/30" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-gradient">Resume</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A summary of my experience, education, and achievements.
            </p>
          </motion.div>

          {/* Download and LinkedIn buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <motion.a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-lg transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="w-5 h-5" />
              Download PDF
            </motion.a>
            <motion.a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card hover:border-primary/50 font-medium transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Linkedin className="w-5 h-5" />
              View LinkedIn
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </motion.div>

          {/* Resume content */}
          <div className="space-y-12">
            {/* Experience */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-blue flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Experience</h3>
              </div>

              <div className="space-y-6">
                {experience.map((job, index) => (
                  <div
                    key={index}
                    className="glass-card rounded-xl p-6 hover:shadow-md transition-all"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <h4 className="font-semibold text-lg">{job.title}</h4>
                        <p className="text-muted-foreground">{job.company}</p>
                      </div>
                      <div className="text-sm text-muted-foreground sm:text-right">
                        <p>{job.period}</p>
                        <p>{job.location}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {job.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-green to-neon-cyan flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Education</h3>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="glass-card rounded-xl p-6 hover:shadow-md transition-all"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <h4 className="font-semibold text-lg">{edu.degree}</h4>
                        <p className="text-muted-foreground">{edu.school}</p>
                      </div>
                      <div className="text-sm text-muted-foreground sm:text-right">
                        <p>{edu.period}</p>
                        <p>{edu.location}</p>
                      </div>
                    </div>
                    <ul className="space-y-1">
                      {edu.details.map((detail, i) => (
                        <li
                          key={i}
                          className="text-sm text-muted-foreground flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-neon-green" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Awards & Recognition */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Awards & Recognition</h3>
              </div>

              <div className="glass-card rounded-xl p-6">
                <ul className="grid sm:grid-cols-2 gap-3">
                  {awards.map((award, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <Award className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                      {award}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
