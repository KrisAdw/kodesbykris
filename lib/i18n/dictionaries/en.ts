/**
 * English messages — the source of truth for the `Messages` type.
 * The Indonesian dictionary (`id.ts`) must match this shape exactly;
 * TypeScript enforces it.
 */

export type Project = {
  /** Short project name, e.g. "JEPANGKU" */
  name: string;
  /** Category, e.g. "LEARNING PLATFORM" */
  type: string;
  /** Tech stack, e.g. "REACT · GO · POSTGRESQL" */
  stack: string;
  status: "completed" | "inProgress";
  /** Year delivered, e.g. "2024" */
  year: string;
  /** The business problem — keep it jargon-free */
  problem: string;
  /** The measurable outcome */
  outcome: string;
  /** Kris's role, e.g. "FULL-STACK DEVELOPMENT" */
  role: string;
  /** Mark true until real content is added */
  isPlaceholder?: boolean;
};

export const en = {
  meta: {
    title: "Freelance Web Developer & Software Engineer (Indonesia) | kodesbykris",
    description:
      "Custom websites and software — built by Kris. Business-focused solutions, direct collaboration, and personal attention. Start your project today.",
    keywords: [
      "freelance web developer",
      "software engineer",
      "indonesia",
      "custom websites",
      "web applications",
      "mvp development",
      "kodesbykris",
    ],
  },

  header: {
    nav: [
      { label: "Services", href: "#services" },
      { label: "Work", href: "#work" },
      { label: "Process", href: "#process" },
      { label: "About", href: "#about" },
      { label: "FAQ", href: "#faq" },
    ],
    startProject: "Start a Project",
    logoAlt: "kodesbykris logo",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    languageLabel: "Change language",
  },

  hero: {
    availability: "Available for new projects",
    title: {
      pre: "I build software that solves ",
      highlight: "real",
      post: " business problems.",
    },
    subtitle:
      "Websites, web apps, dashboards, and custom tools — built by Kris, for people who need things that work. Direct collaboration, no agency runaround.",
    startProject: "Start a Project",
    emailMe: "Email me",
    viewWork: "View my work",
    meta: ["Based in Indonesia", "5+ years experience", "40+ projects shipped"],
    marquee: [
      "WEBSITES",
      "WEB APPS",
      "DASHBOARDS",
      "CUSTOM SOFTWARE",
      "MVPS",
      "INTEGRATIONS",
      "AUTOMATION",
    ],
  },

  services: {
    tag: "Services",
    title: "Software isn't just code. It's a solution to a problem.",
    lead: "Every service below exists for one reason: to solve a business problem and deliver something useful. Here's what I can build for you.",
    items: [
      {
        title: "Websites & Landing Pages",
        description:
          "Websites that work as your best salesperson — clear, fast, and built to turn visitors into customers.",
        points: [
          "Company profiles",
          "Landing pages that convert",
          "Fast, modern redesigns",
        ],
      },
      {
        title: "Web Apps & Dashboards",
        description:
          "Tools that run your business — dashboards, admin panels, and internal systems your team will actually use.",
        points: ["Admin panels & dashboards", "Client portals", "Workflow tools"],
      },
      {
        title: "Custom Software & Integrations",
        description:
          "Software built around your workflow — MVPs, SaaS products, automation, and connecting the tools you already use.",
        points: [
          "MVPs & SaaS products",
          "Automation & integrations",
          "Custom internal tools",
        ],
      },
    ],
  },

  canBuild: {
    tag: "What I can build",
    title: 'Plain-English answers to "what can you do for me?"',
    lead: "No jargon. If your problem is on this list, it's something I've built before — or can build for you.",
    items: [
      {
        title: "Business websites & company profiles",
        description:
          "A clean, credible home for your business online — built to make you look as good as you are.",
      },
      {
        title: "Landing pages",
        description:
          "Focused pages designed to turn visitors into leads and inquiries.",
      },
      {
        title: "Dashboards & admin panels",
        description:
          "See what's happening in your business and control it — without a wall of spreadsheets.",
      },
      {
        title: "Client portals & internal tools",
        description:
          "Give clients or your team a simple, reliable way to work with you.",
      },
      {
        title: "MVPs & SaaS products",
        description: "Test an idea quickly with a solid first version you can build on.",
      },
      {
        title: "Automations & integrations",
        description:
          "Make the tools you already use talk to each other — and stop doing things by hand.",
      },
    ],
  },

  work: {
    tag: "Selected work",
    title: "A few things I've built",
    lead: "Selected projects told from the business side — the problem, the result, and my part in it.",
    labels: {
      type: "TYPE",
      stack: "STACK",
      status: "STATUS",
      role: "ROLE",
      problem: "Problem",
      result: "Result",
      placeholder: "Placeholder",
      completed: "COMPLETED",
      inProgress: "IN PROGRESS",
    },
    /**
     * ⚠️ Replace the placeholder entries below with your real projects.
     * Edit the same entries in `id.ts` for the Indonesian version.
     * JEPANGKU ships as an example (from the brand guidelines).
     */
    projects: [
      {
        name: "JEPANGKU",
        type: "LEARNING PLATFORM",
        stack: "REACT · GO · POSTGRESQL",
        status: "completed",
        year: "—",
        problem:
          "Language learners needed a structured way to practice and track progress online.",
        outcome:
          "A complete learning platform with progress tracking that keeps students engaged and coming back.",
        role: "FULL-STACK DEVELOPMENT",
        isPlaceholder: true,
      },
      {
        name: "YOUR PROJECT",
        type: "E.G. COMPANY WEBSITE",
        stack: "REACT · NEXT.JS",
        status: "completed",
        year: "2024",
        problem: "Describe the client's problem here — what were they struggling with?",
        outcome: "Describe the outcome — what improved after the project shipped?",
        role: "E.G. DESIGN + DEVELOPMENT",
        isPlaceholder: true,
      },
      {
        name: "YOUR PROJECT",
        type: "E.G. ADMIN DASHBOARD",
        stack: "REACT · NODE.JS · POSTGRESQL",
        status: "completed",
        year: "2024",
        problem: "Describe the client's problem here — what were they struggling with?",
        outcome: "Describe the outcome — what improved after the project shipped?",
        role: "E.G. FULL-STACK DEVELOPMENT",
        isPlaceholder: true,
      },
      {
        name: "YOUR PROJECT",
        type: "E.G. CUSTOM SOFTWARE",
        stack: "REACT · GO · POSTGRESQL",
        status: "completed",
        year: "2023",
        problem: "Describe the client's problem here — what were they struggling with?",
        outcome: "Describe the outcome — what improved after the project shipped?",
        role: "E.G. BACKEND + INTEGRATION",
        isPlaceholder: true,
      },
    ] as Project[],
  },

  why: {
    tag: "Why kodesbykris",
    title: "A one-person studio, full responsibility.",
    lead: "You're not hiring an agency with a rotating cast. You're hiring one engineer who answers for the whole project.",
    sticky: "Hiring me is like adding a technical partner who actually cares about the outcome.",
    items: [
      {
        title: "You talk directly to the engineer",
        description:
          "The person you discuss your project with is the person who writes the code. No account managers, no handoffs.",
      },
      {
        title: "Honest scoping, no surprises",
        description:
          "Clear scope, a realistic timeline, and a fixed quote before we start. You always know where things stand.",
      },
      {
        title: "Built to last, not just to launch",
        description:
          "Maintainable, documented code — the kind you won't have to rebuild in six months when it needs to grow.",
      },
      {
        title: "Focused, personal attention",
        description:
          "One project at a time, treated with the care it deserves — because your business depends on it.",
      },
      {
        title: "Here after launch",
        description:
          "I stay available after go-live for fixes, improvements, and whatever comes next as your business grows.",
      },
    ],
  },

  process: {
    tag: "Process",
    title: "A simple, transparent way to work",
    lead: "Five steps, no jargon, no surprises. You'll always know what's happening and what comes next.",
    items: [
      {
        title: "Discover",
        description:
          "We talk through your goal, your users, and what success looks like. No sales pressure — just a real conversation.",
      },
      {
        title: "Plan",
        description:
          "A clear scope, a realistic timeline, and a fixed quote. You know exactly what gets built before anything starts.",
      },
      {
        title: "Build",
        description:
          "Focused iterations with regular updates. You always know where things stand — and you see progress, not promises.",
      },
      {
        title: "Test",
        description:
          "Real devices, real browsers, real scenarios — so what you receive actually works, not just looks like it does.",
      },
      {
        title: "Launch & support",
        description:
          "Deployment, handover, and help after launch whenever you need it. Your project doesn't end on launch day.",
      },
    ],
  },

  about: {
    tag: "About",
    title: "Kris Adiwinata",
    lead: "The person behind kodesbykris — why clients hire an individual instead of an agency.",
    monoLabel: "Software engineering & web development",
    quote: "Code crafted by Kris.",
    // ⚠️ TODO: replace with your real bio — keep it credibility-focused, not a full CV.
    paragraphs: [
      "I'm Kris, a software engineer and web developer based in Indonesia, working with businesses and founders around the world. I build websites, web apps, and custom software — and I've been doing it long enough to know that the best projects are the ones that solve a real problem and stay useful long after launch.",
      "kodesbykris is a one-person studio. That means when you work with me, you get one person who owns the whole project: the planning, the code, the delivery, and the support after launch. No handoffs, no “we'll get back to you” — just clear communication and work that ships.",
      "I care about the outcome, not just the output. If a project doesn't serve your business, I'll tell you before I build it.",
    ],
    stats: {
      years: "Years experience",
      projects: "Projects shipped",
      location: "Location",
    },
  },

  faq: {
    tag: "FAQ",
    title: "Questions, answered straight",
    lead: "The things clients usually ask before starting a project.",
    items: [
      {
        q: "What do you build?",
        a: "Websites, web apps, dashboards, and custom software — anything from a company website to a full SaaS product. If it's a digital tool your business needs, it's likely something I can build.",
      },
      {
        q: "How much does a project cost?",
        a: "It depends on scope — a focused landing page is a very different investment from a custom web app. After a quick chat I'll give you a clear, fixed quote before anything starts. No hourly surprises.",
      },
      {
        q: "How long will it take?",
        a: "Landing pages typically take 1–3 weeks; web apps and custom software usually run 3–8+ weeks depending on complexity. You'll get a realistic timeline before we begin.",
      },
      {
        q: "What do you need from me to start?",
        a: "Your goal, a few examples of things you like, and access to any existing systems or accounts. I'll handle the technical side — you just need to know what you want to achieve.",
      },
      {
        q: "Do you work with agencies or designers?",
        a: "Yes — I regularly work as the technical partner for agencies and designers who need reliable development delivered on their timelines.",
      },
      {
        q: "What happens after launch?",
        a: "You get a proper handover, and I stay available for support, fixes, and improvements. Ongoing maintenance and small follow-up projects are always welcome.",
      },
    ],
  },

  cta: {
    title: "Got a project in mind? Let's build something that works.",
    subtitle:
      "Tell me what you're trying to achieve and I'll tell you honestly how I can help — within a day.",
    startWhatsApp: "Start a Project on WhatsApp",
    emailLabel: "Email",
    meta: "Based in Indonesia",
  },

  footer: {
    description:
      "A personal software engineering & web development studio. Websites, web apps, and custom software — built by Kris.",
    sections: "Sections",
    contact: "Contact",
    basedIn: "Based in",
    copyright: "All rights reserved.",
    codeCraftedBy: "CODE CRAFTED BY KRIS",
  },

  contact: {
    whatsappGreeting:
      "Hi Kris, I found kodesbykris and I'd like to talk about a project.",
    emailSubject: "Project inquiry — kodesbykris",
  },

  ui: {
    scrollToTop: "Back to top",
    whatsappOpen: "Open WhatsApp chat",
    whatsappClose: "Close chat",
    whatsappOnline: "Online",
    whatsappBubble: "Hi there! 👋 Got a project in mind? Let's talk about it.",
    whatsappCta: "Start chat on WhatsApp",
  },
};

export type Messages = typeof en;
