// Site-wide data and content

export const siteConfig = {
  name: "Colin Raby",
  title: "Colin Raby | AI Innovator | Congressional AI Specialist | Entrepreneur",
  description: "Congressional AI Specialist for Rep. Raja Krishnamoorthi and CEO of FarmMind. Building the future of AI from Capitol Hill to the farm field.",
  tagline: "Building the Future of AI: From Capitol Hill to the Farm Field",
  url: "https://colinraby.com", // Update when domain is purchased
  links: {
    linkedin: "https://www.linkedin.com/in/colin-raby-6266a5191/",
    farmmind: "https://farmmind.org/",
    farmmindBlog: "https://farmmind.org/blogs/",
    github: "", // Add if available
    twitter: "", // Add if available
    substack: "", // Add Substack URL
  },
  email: "", // Add professional email
  location: "Washington, D.C.",
};

export const navigationItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Timeline", href: "#timeline" },
  { name: "Projects", href: "#projects" },
  { name: "In the News", href: "#news" },
  { name: "Writing", href: "#writing" },
  { name: "Skills", href: "#skills" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

export const timelineEvents = [
  {
    id: "early-years",
    year: "Early Years",
    title: "Early Interests in Tech & Engineering",
    description: "Growing up with a passion for technology, engineering, and understanding how things work.",
    category: "personal",
  },
  {
    id: "lsu-start",
    year: "2020",
    title: "Started at LSU",
    description: "Began studying Mechanical Engineering with minors in Aerospace Engineering and Economics at Louisiana State University.",
    category: "education",
  },
  {
    id: "tiger-twelve",
    year: "2021",
    title: "Tiger Twelve Recipient",
    description: "Selected as one of LSU's Tiger Twelve, recognizing outstanding student leadership and achievement.",
    category: "award",
  },
  {
    id: "homecoming-1",
    year: "2022",
    title: "LSU Homecoming Court",
    description: "First selection to the LSU Homecoming Court, representing student excellence and engagement.",
    category: "award",
  },
  {
    id: "aaea-champion-1",
    year: "2022",
    title: "AAEA Academic Bowl National Champion",
    description: "Won the American Agricultural Economics Association Academic Bowl national championship.",
    category: "award",
  },
  {
    id: "homecoming-2",
    year: "2023",
    title: "LSU Homecoming Court (2nd Time)",
    description: "Second selection to the LSU Homecoming Court.",
    category: "award",
  },
  {
    id: "aaea-champion-2",
    year: "2023",
    title: "AAEA Academic Bowl National Champion (2nd Time)",
    description: "Defended the national championship title at the AAEA Academic Bowl.",
    category: "award",
  },
  {
    id: "farmmind-founding",
    year: "2023",
    title: "Founded FarmMind",
    description: "Co-founded FarmMind (formerly FarmSmart), an AI-powered agricultural consulting platform using agentic AI networks.",
    category: "entrepreneurship",
  },
  {
    id: "venture-challenge",
    year: "2024",
    title: "J. Terrell Brown Venture Challenge Winner",
    description: "FarmMind won the J. Terrell Brown Venture Challenge at LSU, validating the business model and technology.",
    category: "entrepreneurship",
  },
  {
    id: "lsu-graduation",
    year: "2024",
    title: "Graduated from LSU",
    description: "Graduated from LSU Honors College with a degree in Mechanical Engineering, minors in Aerospace Engineering and Economics.",
    category: "education",
  },
  {
    id: "congressional-role",
    year: "2024",
    title: "Congressional AI Specialist",
    description: "Became one of the nation's first Congressional AI Specialists, working with Rep. Raja Krishnamoorthi on AI policy.",
    category: "career",
  },
  {
    id: "farm-bureau-semifinalist",
    year: "2025",
    title: "Farm Bureau Top-10 Semi-Finalist",
    description: "FarmMind selected as a Top-10 semi-finalist in the American Farm Bureau Federation's 2026 Ag Innovation Challenge.",
    category: "entrepreneurship",
  },
  {
    id: "future",
    year: "Future",
    title: "What's Next",
    description: "Continuing to shape AI policy, grow FarmMind, and build solutions that make technology accessible and impactful.",
    category: "future",
  },
];

export const projects = [
  {
    id: "farmmind",
    title: "FarmMind",
    subtitle: "AI-Powered Agricultural Consultant",
    description: "FarmMind is an AI-powered agricultural consulting platform that uses agentic AI networks to make agricultural expertise accessible to farmers worldwide. The platform can identify plants and weeds from photos, provide research-backed recommendations with citations, and turn massive datasets into actionable insights.",
    problem: "Farmers struggle to access timely, expert agricultural advice. Traditional consulting is expensive and not always available when needed. Meanwhile, vast amounts of agricultural data exist but aren't easily accessible or actionable.",
    solution: "FarmMind leverages advanced AI to provide instant, expert-level agricultural guidance. Users can upload photos for plant/weed identification, get personalized recommendations based on their location and conditions, and access research-backed insights with full citations.",
    technologies: ["AI/ML", "Agentic AI", "Computer Vision", "LLMs", "React", "Node.js"],
    impact: [
      "Top-10 Semi-Finalist in American Farm Bureau 2026 Ag Innovation Challenge",
      "Winner of J. Terrell Brown Venture Challenge at LSU",
      "Featured in multiple publications including LSU, Business Report, Farm Bureau News",
    ],
    links: {
      website: "https://farmmind.org/",
      blog: "https://farmmind.org/blogs/",
    },
    featured: true,
  },
  {
    id: "senior-design",
    title: "LSU Senior Design Project",
    subtitle: "Mechanical Engineering Capstone",
    description: "Capstone engineering project completed as part of LSU Mechanical Engineering degree requirements.",
    technologies: ["Mechanical Engineering", "CAD", "Systems Design"],
    featured: false,
  },
  {
    id: "congressional-ai",
    title: "Congressional AI Systems",
    subtitle: "AI Tools for Legislative Efficiency",
    description: "Working with Rep. Raja Krishnamoorthi's office and House Committees (Select Committee on CCP, Space Science and Technology, Energy and Commerce) to develop AI tools and systems that improve congressional efficiency and inform AI policy.",
    technologies: ["AI Policy", "Government Technology", "Process Optimization"],
    featured: false,
  },
];

export const newsItems = [
  {
    id: "lsu-ai-dc",
    type: "article" as const,
    title: "AI Meets Public Policy: LSU Graduate Plays Groundbreaking Role in D.C.",
    publication: "LSU",
    date: "2024",
    excerpt: "Colin Raby is among the nation's first congressional AI specialists, working with Rep. Raja Krishnamoorthi.",
    url: "#", // Add actual URL
    tags: ["AI Policy", "Congressional"],
  },
  {
    id: "lsu-farmmind",
    type: "article" as const,
    title: "Meet Colin Raby: First to Create an Agricultural Consultant With AI",
    publication: "LSU",
    date: "2024",
    excerpt: "LSU student develops revolutionary AI-powered agricultural consulting platform.",
    url: "#", // Add actual URL
    tags: ["FarmMind", "AI", "Agriculture"],
  },
  {
    id: "lsu-farmsmart",
    type: "article" as const,
    title: "LSU Student Team's FarmSmart App Helps Farmers Manage Crops, Weeds With AI",
    publication: "LSU Media Center",
    date: "2024",
    excerpt: "The FarmSmart app uses AI to help farmers identify weeds and manage crops more effectively.",
    url: "#", // Add actual URL
    tags: ["FarmMind", "Agriculture"],
  },
  {
    id: "lsu-venture-challenge",
    type: "article" as const,
    title: "Pitch Perfectors: How LSU Louisiana Small Business Development Center Helped FarmSmart Win the Venture Challenge",
    publication: "LSU",
    date: "2024",
    excerpt: "Behind the scenes of FarmSmart's journey to winning the J. Terrell Brown Venture Challenge.",
    url: "#", // Add actual URL
    tags: ["FarmMind", "Entrepreneurship"],
  },
  {
    id: "business-report-1",
    type: "article" as const,
    title: "This LSU-born startup wants to build the next big thing in agriculture",
    publication: "Baton Rouge Business Report",
    date: "2024",
    excerpt: "FarmMind aims to revolutionize how farmers access agricultural expertise through AI.",
    url: "#", // Add actual URL
    tags: ["FarmMind", "Startup"],
  },
  {
    id: "business-report-2",
    type: "article" as const,
    title: "This Baton Rouge startup is bringing AI to the farm field",
    publication: "Baton Rouge Business Report",
    date: "2024",
    excerpt: "How FarmMind is making artificial intelligence accessible to farmers.",
    url: "#", // Add actual URL
    tags: ["FarmMind", "AI", "Agriculture"],
  },
  {
    id: "farm-bureau",
    type: "article" as const,
    title: "Meet Colin Raby: First to Create an Agricultural Consultant With AI",
    publication: "Louisiana Farm Bureau News",
    date: "2024",
    excerpt: "Louisiana native develops innovative AI solution for agricultural consulting.",
    url: "#", // Add actual URL
    tags: ["FarmMind", "Agriculture"],
  },
  {
    id: "reveille",
    type: "article" as const,
    title: "LSU students launch AI app to simplify agricultural research",
    publication: "LSU Reveille",
    date: "2024",
    excerpt: "Student entrepreneurs create app that brings AI to agriculture.",
    url: "#", // Add actual URL
    tags: ["FarmMind", "LSU"],
  },
  {
    id: "it-boltwise",
    type: "article" as const,
    title: "FarmMind: Ein vielversprechendes AgTech-Startup aus Louisiana",
    publication: "IT Boltwise",
    date: "2024",
    excerpt: "German publication covers the promising AgTech startup from Louisiana.",
    url: "#", // Add actual URL
    tags: ["FarmMind", "International"],
  },
  {
    id: "future-in-focus",
    type: "video" as const,
    title: "FUTURE IN FOCUS: Congressional AI specialist Colin Raby",
    publication: "Local News Live",
    date: "2024",
    excerpt: "Video interview about the role of Congressional AI Specialist and the future of AI policy.",
    url: "#", // Add actual URL
    tags: ["AI Policy", "Congressional"],
  },
  {
    id: "talk-radio",
    type: "radio" as const,
    title: "Mornings with Brian Haldane: Colin Raby and Grant Muslow",
    publication: "Talk 107.3FM",
    date: "2024",
    excerpt: "Radio interview discussing FarmMind and the intersection of AI and agriculture.",
    url: "#", // Add actual URL
    tags: ["FarmMind", "Interview"],
  },
];

export const skills = {
  "AI & Machine Learning": [
    "Large Language Models (LLMs)",
    "Agentic AI Systems",
    "AI Policy & Governance",
    "Machine Learning Applications",
    "AI Ethics & Responsible AI",
    "Computer Vision",
  ],
  "Engineering": [
    "Mechanical Engineering",
    "Aerospace Engineering",
    "Systems Design",
    "Technical Problem-Solving",
    "CAD & Prototyping",
  ],
  "Leadership & Entrepreneurship": [
    "Startup Founding & Scaling",
    "Team Building & Management",
    "Pitch Development & Fundraising",
    "Product Development",
    "Business Strategy",
  ],
  "Policy & Governance": [
    "Congressional Operations",
    "AI Regulation & Legislation",
    "Technology Policy",
    "Government Innovation",
    "Stakeholder Engagement",
  ],
};

export const aboutContent = {
  intro: "I'm Colin Raby, a Congressional AI Specialist for Rep. Raja Krishnamoorthi and CEO of FarmMind. I'm passionate about making AI accessible and impactful, whether that's shaping policy on Capitol Hill or helping farmers leverage cutting-edge technology.",
  journey: "My path from LSU mechanical engineering student to AI policy and entrepreneurship has been driven by a simple belief: technology should solve real problems for real people. At LSU, I discovered my passion for innovation through the Honors College, competitive academic teams, and eventually founding FarmMind. Now in Washington, D.C., I'm working to ensure AI policy keeps pace with technological advancement while remaining grounded in practical benefits for Americans.",
  personal: "When I'm not working on AI policy or FarmMind, you can find me cheering for the LSU Tigers, exploring D.C.'s food scene, or diving into the latest developments in tech and aerospace.",
  funFacts: [
    "2x National Champion in the AAEA Academic Bowl",
    "2x LSU Homecoming Court",
    "Tiger Twelve Recipient",
    "First to create an AI agricultural consultant",
    "One of the nation's first Congressional AI Specialists",
  ],
};
