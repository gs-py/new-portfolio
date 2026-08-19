export const profile = {
  name: "Gladwin Santhosh",
  role: "Full Stack Developer",
  tagline:
    "Five production codebases, React to FastAPI. I take a feature from the first pixel to the shipped invoice — and make sure search can find it.",
  about:
    "I'm a Full Stack Developer currently building EdTech products at LyfSkills, with expertise across front-end, back-end, and machine learning. I'm passionate about building efficient, scalable web applications that solve real-world problems.",
  email: "info@gladwinsanthosh.dpdns.org",
  phone: "+91 8590645509",
  location: "Alappat H, Thrissur, Kerala",
  nationality: "Indian",
  languages: "English, Hindi, Malayalam",
  freelance: "Available",
  cv: "https://drive.google.com/file/d/12hTVKsL6ryuwwvCyVzUCI8MEFHXvXK7r/view?usp=drive_link",
  github: "https://github.com/gs-py",
  linkedin: "https://www.linkedin.com/in/gladwin7",
};

export const headlineStats = [
  { to: 5, suffix: "", decimals: 0, label: "Production codebases", note: "web, mobile, backend" },
  { to: 20, suffix: "+", decimals: 0, label: "Technologies", note: "shipped, not just tried" },
  { to: 3, suffix: "", decimals: 0, label: "Platforms", note: "React, React Native, FastAPI" },
  { to: 2, suffix: "yrs", decimals: 0, label: "In production teams", note: "since 2024" },
];

export const experience = [
  {
    company: "LyfSkills",
    position: "Full Stack Developer",
    duration: "Nov 2025 — Present",
    current: true,
    highlights: [
      "Ship features across 5 production codebases: admin dashboard, consumer web app, parent portal, React Native partner app, and FastAPI backend",
      "Built end-to-end booking and renewal flows: trial booking with OTP, plan renewals, invoicing, and payment settlement UI",
      "Led full UI revamps of the admin dashboard and parent portal with mobile-first design",
      "Shipped Google OAuth, multi-currency and timezone-aware experiences for international users",
      "Built SEO infrastructure (prerendering, sitemaps, 301 redirect system) that scaled organic search from near-zero to 15M impressions and 79.7K clicks in 3 months, including Google Discover traffic",
    ],
  },
  {
    company: "Taphubs Global Private Limited",
    position: "Full Stack Developer",
    duration: "Jan 2025 — Nov 2025",
    highlights: [],
  },
  {
    company: "IIT Madras Research Park",
    position: "Graduate Fellow",
    duration: "Jan 2024 — Jun 2024",
    highlights: [],
  },
];

export const education = [
  {
    institution: "Government Engineering College",
    degree: "BTech in Computer Science",
    duration: "2020 — 2024",
  },
  { institution: "ExcelR", degree: "Full Stack Developer", duration: "2024" },
  { institution: "Coursera", degree: "Advanced React", duration: "2024" },
];

export const skillGroups = [
  {
    group: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "React Native", "HTML", "CSS"],
  },
  {
    group: "Backend",
    items: ["Node.js", "FastAPI", "Django", "Python", "REST APIs", "MongoDB", "PostgreSQL"],
  },
  {
    group: "ML & Tooling",
    items: ["PyTorch", "TensorFlow", "LLM agents", "Git", "Figma", "Vercel"],
  },
];

export const projects = [
  {
    num: "01",
    category: "Artificial Intelligence",
    title: "Agentic AI: Terminal Assistant",
    description:
      "An autonomous terminal-based agent powered by large language models. Reads and edits files, executes shell commands, and logs interactive sessions — an AI coding assistant in the shape of GitHub Copilot or Cursor.",
    stack: ["Node.js", "TypeScript", "HuggingFace Inference", "OpenAI.js", "Shell"],
    image: "/assets/work/agentic_ai.png",
    github: "https://github.com/gs-py/Agentic_AI",
    live: null,
  },
  {
    num: "02",
    category: "Machine Learning",
    title: "Deepfake Video Detection",
    description:
      "A deepfake detection model using ResNeXt for spatial feature extraction and LSTM for temporal sequence analysis, identifying manipulated videos with high accuracy.",
    stack: ["Python", "Flask", "ResNeXt", "LSTM", "PyTorch"],
    image: "/assets/work/dfd.png",
    github: "https://github.com/gs-py/DeepSecure",
    live: null,
  },
  {
    num: "03",
    category: "SaaS Application",
    title: "RiffWave",
    description:
      "A SaaS music app with personalized playlists, recommendations, and social sharing. Admin access covers user management, analytics, and content control.",
    stack: ["React", "Express", "MongoDB", "Node.js"],
    image: "/assets/work/muzi.png",
    github: "https://github.com/gs-py/spoti",
    live: "https://muzi1.netlify.app/",
  },
  {
    num: "04",
    category: "Agency Website",
    title: "XONE13 Marketing",
    description:
      "Marketing site for a Dubai agency covering strategy, brand, video production, social, performance marketing, and SEO — built to convert founders browsing for a partner.",
    stack: ["React", "Vite", "Vercel"],
    image: "/assets/work/xenon.jpg",
    github: null,
    live: "https://xone13.com",
  },
  {
    num: "05",
    category: "Business Website",
    title: "Tidy Point",
    description:
      "Booking-led site for a Norwich cleaning company: services, coverage areas, FAQ, and a quote request flow with WhatsApp handoff, all built around fixed pricing and no contracts.",
    stack: ["React", "Vite", "Vercel"],
    image: "/assets/work/tidy-point.jpg",
    github: null,
    live: "https://www.tidy-point.co.uk",
  },
  {
    num: "06",
    category: "Business Website",
    title: "Interior World",
    description:
      "Product site for a Kerala gypsum wall panel and false ceiling supplier, leading with the material case — fire resistance, sound insulation, durability — and routing enquiries to the showroom.",
    stack: ["React", "Vite", "Vercel"],
    image: "/assets/work/kottayam-interior.jpg",
    github: null,
    live: "https://interiorworld.in",
  },
  {
    num: "07",
    category: "Community Website",
    title: "Zion Brethren Church, Mysore",
    description:
      "Site for a Mysore church community — service times, events, and ministries — written for visitors deciding whether to walk in on a Sunday.",
    stack: ["React", "Vite", "Vercel"],
    image: "/assets/work/church-site.jpg",
    github: null,
    live: "https://www.zbcmysuru.in",
  },
  {
    num: "08",
    category: "Studio Website",
    title: "Aconcept Studio",
    description:
      "Site for a Kerala luxury architecture and interior design studio — a full-bleed hero carousel of built work, project gallery, and a consultation booking flow, pitched at residential, commercial, and hospitality clients.",
    stack: ["React", "Vite", "Vercel"],
    image: "/assets/work/aconcept.jpg",
    github: null,
    live: "https://aconceptstudio.in",
  },
];

export const services = [
  {
    title: "Web Development",
    description:
      "Tailored web builds that pair responsive design with real performance — custom sites, e-commerce, and content platforms that hold up under production traffic.",
  },
  {
    title: "UI/UX Design",
    description:
      "Interfaces that combine aesthetics with function. Research and usability testing shape the decisions, so the result improves satisfaction rather than just looks.",
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform apps with React Native — onboarding, payments, offline-friendly flows, state management, and native integrations. Shipped daily in production.",
  },
  {
    title: "Backend & API Development",
    description:
      "Robust backends with FastAPI, Node.js, and Django: REST APIs, auth, payments, invoicing, and third-party integrations, with the validation production traffic demands.",
  },
  {
    title: "SEO & Performance",
    description:
      "Making JavaScript-heavy sites fully readable to search engines: prerendering pipelines, sitemap architecture, redirect systems, and analytics that close the loop.",
  },
  {
    title: "AI & Machine Learning",
    description:
      "ML-powered features and LLM tooling — from deepfake detection with ResNeXt and LSTM to agentic assistants that read files, run commands, and automate real workflows.",
  },
];

export const posts = [
  {
    slug: "scaling-organic-search",
    tag: "SEO Engineering",
    publishedAt: "2026-07-08",
    keywords: ["technical SEO", "prerendering", "sitemap architecture", "301 redirects", "Google Discover"],
    title: "Scaling Organic Search from Zero to 15M Impressions in 3 Months",
    date: "July 2026",
    metrics: [
      { value: "15M", label: "Impressions" },
      { value: "79.7K", label: "Clicks" },
      { value: "#8", label: "Avg. position" },
      { value: "3 mo", label: "Timeframe" },
    ],
    intro:
      "When I joined, our consumer platform was a client-rendered React app — nearly invisible to search engines. Three months after shipping a prerendering pipeline, sitemap architecture, and a 301 redirect system, Google Search Console showed 15M impressions and 79.7K clicks, with meaningful traffic arriving from Google Discover. This is the engineering behind that curve.",
    sections: [
      {
        heading: "The problem: a rich product Google couldn't read",
        body: "Thousands of listing and profile pages existed only after JavaScript executed. Crawlers saw empty shells, indexing was inconsistent, and organic traffic was effectively zero. The product had the content; the architecture hid it.",
      },
      {
        heading: "Prerendering without a rewrite",
        body: "A full SSR migration would have taken months we didn't have. Instead I added a prerendering layer that serves crawlers fully rendered HTML — complete with body content, titles, and meta keywords — while real users keep the same SPA experience. Shipping days instead of months, with a clear upgrade path to SSR later.",
      },
      {
        heading: "Sitemaps and the 301 system",
        body: "Discovery needs a map. I built sitemap generation covering every listing, profile, and city page, and a 301 redirect system so legacy URLs and renamed localities pass their equity to canonical pages instead of 404ing. When the platform expanded to new cities, redirects and sitemaps updated with it.",
      },
      {
        heading: "The result",
        body: "Daily clicks went from single digits in April to over 2,000 by July, at an average position of 8. Pages began surfacing in Google Discover — traffic that requires no query at all, only content Google can fully read and trust. Analytics events on every page close the loop between shipped code and measured outcome.",
      },
      {
        heading: "Lessons",
        body: "Ship the layer, not the rewrite: the prerendering pipeline delivered 90% of SSR's value at 10% of its cost. Treat URLs as an asset with equity — every migration needs a redirect plan before it needs a deploy. And instrument first: without Search Console and analytics wired in from day one, this graph would just be a feeling.",
      },
    ],
  },
  {
    slug: "shipping-across-five-codebases",
    tag: "Full Stack",
    publishedAt: "2026-07-16",
    keywords: ["full stack development", "React", "FastAPI", "React Native", "monorepo workflow"],
    title: "Shipping Across 5 Production Codebases at an EdTech Startup",
    date: "July 2026",
    metrics: [
      { value: "5", label: "Production repos" },
      { value: "4", label: "Platforms" },
      { value: "2", label: "Languages" },
    ],
    intro:
      "At LyfSkills I ship features across five production repositories: a React admin dashboard, a consumer-facing web app, a parent portal, a React Native partner app, and a FastAPI backend. This is what owning a full product surface actually looks like.",
    sections: [
      {
        heading: "The surface area",
        body: "Every feature at a small startup cuts through the whole stack. A single booking feature touches the consumer app (the booking UI), the backend (availability, OTP verification, invoicing), the partner app (the coach sees the new session), and the parent portal (the parent sees the enrollment). Owning a feature means owning it in every repo it touches — there is no team to hand it off to.",
      },
      {
        heading: "What I shipped",
        body: "End-to-end trial booking with OTP verification. Plan renewal and invoicing flows with payment settlement UI. Full mobile-first UI revamps of the admin dashboard and parent portal. Google OAuth sign-in. Multi-currency and timezone-aware experiences for international users. The SEO infrastructure covered in the case study above.",
      },
      {
        heading: "What five repos teach you",
        body: "Context switching is the real cost. The fix was consistency: the same API interceptor pattern in every frontend, the same state conventions, the same component structure. When every repo follows the same shape, switching costs drop from hours to minutes. The second lesson: frontend validation is a courtesy, backend validation is the contract. Every flow I built validates twice.",
      },
    ],
  },
  {
    slug: "booking-flow-end-to-end",
    tag: "Product Engineering",
    publishedAt: "2026-07-24",
    keywords: ["product engineering", "OTP verification", "payments", "edge cases", "booking flow"],
    title: "Building a Trial Booking Flow End-to-End",
    date: "July 2026",
    metrics: [
      { value: "OTP", label: "Verified booking" },
      { value: "Intl", label: "Currency & timezone" },
      { value: "E2E", label: "UI to invoice" },
    ],
    intro:
      "A booking flow looks like a form and a button. Building one that survives real users — international phone numbers, retried OTPs, expired plans, currency differences — is where the actual engineering lives.",
    sections: [
      {
        heading: "The happy path is 10% of the work",
        body: "The first version took days: pick a slot, enter a phone number, verify OTP, confirm. Everything after that took months. International users needed country codes and currency handling. Users abandoned mid-OTP and came back. Plans expired between selection and payment. Each edge case became a guard, a redirect, or a clearer error message.",
      },
      {
        heading: "OTP without frustration",
        body: "OTP verification fails in boring ways: wrong number typed, SMS delayed, user switches apps and loses state. The flow keeps form state through the verification round-trip, prefills everything it already knows, and never makes the user re-enter data because of our failure rather than theirs.",
      },
      {
        heading: "Lessons",
        body: "Design the failure states before the success state — the success state designs itself. Keep money-adjacent logic on the backend only; the frontend renders what the API decides, it never computes a price. And instrument everything: the difference between guessing and knowing why users drop off is one analytics event.",
      },
    ],
  },
];

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Resume", path: "/resume" },
  { name: "Work", path: "/work" },
  { name: "Writing", path: "/blog" },
  { name: "Contact", path: "/contact" },
];
