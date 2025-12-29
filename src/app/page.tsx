import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Timeline } from "@/components/sections/timeline";
import { Projects } from "@/components/sections/projects";
import { News } from "@/components/sections/news";
import { Writing } from "@/components/sections/writing";
import { Skills } from "@/components/sections/skills";
import { Resume } from "@/components/sections/resume";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/data/site-data";

// JSON-LD structured data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: ["Congressional AI Specialist", "CEO"],
  worksFor: [
    {
      "@type": "Organization",
      name: "Office of Rep. Raja Krishnamoorthi",
    },
    {
      "@type": "Organization",
      name: "FarmMind",
      url: siteConfig.links.farmmind,
    },
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Louisiana State University",
  },
  knowsAbout: [
    "Artificial Intelligence",
    "AI Policy",
    "Agriculture Technology",
    "Mechanical Engineering",
    "Entrepreneurship",
  ],
  url: siteConfig.url,
  sameAs: [siteConfig.links.linkedin, siteConfig.links.farmmind],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Washington",
    addressRegion: "DC",
    addressCountry: "US",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Timeline />
        <Projects />
        <News />
        <Writing />
        <Skills />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
