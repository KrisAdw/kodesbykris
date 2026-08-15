/**
 * English messages — the source of truth for the `Messages` type.
 * The Indonesian dictionary (`id.ts`) must match this shape exactly;
 * TypeScript enforces it.
 */

export type Project = {
  name: string;
  type: string;
  stack: string;
  status: "completed" | "inProgress";
  year: string;
  problem: string;
  outcome: string;
  role: string;
  tagline: string;
  description: string[];
  href?: string;
  screenImage: string;
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
      { label: "About", href: "#why" },
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
    quotes: [
      "Need a website, not sure where to start",
      "Everything is still manual — exhausting",
      "Our site is slow and outdated",
      "I need a dashboard for my data",
      "Got an idea but can't build it",
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
      viewLive: "View live",
      selectProject: "Select project",
    },
    projects: [
      {
        name: "MacLand",
        type: "3D PRODUCT SHOWCASE",
        stack: "NEXT.JS · THREE.JS · GSAP",
        status: "completed",
        year: "2025",
        tagline: "The future of the web is immersive.",
        problem:
          "A static product page couldn't convey the tactile feel of a premium device — visitors needed to experience it, not just read about it.",
        outcome:
          "An interactive 3D MacBook experience with scroll-driven animations that keeps users exploring every detail of the product.",
        role: "FULL-STACK · 3D INTEGRATION",
        description: [
          "Why just look at a product when you can experience it? MacLand explores the boundary between static web pages and high-fidelity 3D environments.",
          "A fully interactive 3D model sits inside a polished web interface — users can explore every curve and detail of the MacBook Pro.",
          "Built with Three.js for 3D rendering and GSAP for precision scroll animations, optimized so transitions feel as smooth as a native app.",
        ],
        href: "https://mac-land-omega.vercel.app/",
        screenImage: "/projects/macland.jpeg",
      },
      {
        name: "Kris-OS",
        type: "INTERACTIVE PORTFOLIO",
        stack: "NEXT.JS · GSAP · ZUSTAND",
        status: "completed",
        year: "2025",
        tagline: "A portfolio that feels like a desktop.",
        problem:
          "Traditional portfolio sites blend together — recruiters and clients needed a memorable way to browse projects and skills.",
        outcome:
          "A macOS-inspired desktop experience with draggable windows, Finder navigation, and project showcases that stand out from template portfolios.",
        role: "DESIGN + FULL-STACK DEVELOPMENT",
        description: [
          "Kris-OS reimagines a developer portfolio as a living desktop environment — complete with dock, Finder, and native-feeling windows.",
          "Each project lives in its own folder with descriptions, screenshots, and live demo links — browsed the way you'd explore files on a Mac.",
          "GSAP powers smooth window animations and draggable interactions, while Next.js keeps the experience fast and deployable anywhere.",
        ],
        href: "https://krisadiwinata.online/",
        screenImage: "/projects/kris-portfolio.jpeg",
      },
      {
        name: "Jepangku",
        type: "LEARNING PLATFORM",
        stack: "REACT · GO · POSTGRESQL",
        status: "completed",
        year: "2024",
        tagline: "Structured Japanese learning, online.",
        problem:
          "Language learners needed a structured way to practice and track progress online — scattered resources weren't enough.",
        outcome:
          "A complete learning platform with progress tracking and interactive lessons that keeps students engaged and coming back.",
        role: "FULL-STACK DEVELOPMENT",
        description: [
          "Jepangku gives Japanese learners a dedicated space to study with clear lesson paths and measurable progress.",
          "The platform combines structured curriculum with tracking tools so students always know where they stand.",
          "Built for retention — every interaction is designed to keep learners motivated through their language journey.",
        ],
        href: "https://kursus.jepangku.com",
        screenImage: "/projects/kursus-jepangku.jpeg",
      },
      {
        name: "AAPM Layerfarm",
        type: "FARM MANAGEMENT SYSTEM",
        stack: "REACT · NODE.JS · POSTGRESQL",
        status: "completed",
        year: "2024",
        tagline: "Digitizing layer farm operations.",
        problem:
          "Manual record-keeping and disconnected spreadsheets made it hard to track flock health, production, and costs across the farm.",
        outcome:
          "A centralized management dashboard that gives farm operators real-time visibility into operations and cuts down on paperwork.",
        role: "FULL-STACK DEVELOPMENT",
        description: [
          "AAPM Layerfarm Management replaces paper logs and scattered spreadsheets with one system for daily farm operations.",
          "Operators can monitor production metrics, manage flock records, and generate reports without switching between tools.",
          "Designed for the field — a clear interface that works for staff who need answers fast, not another complicated ERP.",
        ],
        screenImage: "/projects/AAPM-layerfarm-management.jpeg",
      },
      {
        name: "Charissa Event",
        type: "EVENT WEBSITE",
        stack: "REACT · NEXT.JS · TAILWIND",
        status: "completed",
        year: "2024",
        tagline: "Events deserve a stage online.",
        problem:
          "The client needed a professional web presence to promote events, share details, and build credibility with attendees.",
        outcome:
          "A polished event website that communicates brand identity clearly and gives visitors everything they need to engage.",
        role: "DESIGN + FRONT-END DEVELOPMENT",
        description: [
          "Charissa Event needed a website that matches the quality of the events themselves — professional, inviting, and easy to navigate.",
          "The site highlights upcoming events, brand story, and contact paths so potential clients can reach out with confidence.",
          "Built with modern front-end tooling for fast load times and a responsive layout across every device.",
        ],
        href: "https://charissaevent.com/",
        screenImage: "/projects/charissaevent.jpeg",
      },
      {
        name: "Seculture",
        type: "CULTURAL PLATFORM",
        stack: "REACT · NEXT.JS · TAILWIND",
        status: "completed",
        year: "2024",
        tagline: "Culture, presented with clarity.",
        problem:
          "A cultural organization needed a digital home to share their mission, programs, and stories with a wider audience.",
        outcome:
          "A content-rich website that presents cultural initiatives professionally and makes information easy to discover.",
        role: "FRONT-END DEVELOPMENT",
        description: [
          "Seculture brings cultural programs and stories to the web with a layout designed for readability and visual impact.",
          "Visitors can explore initiatives, learn about the organization's mission, and stay connected to upcoming activities.",
          "Clean typography and responsive design ensure the content shines on any screen size.",
        ],
        href: "https://seculture.id/",
        screenImage: "/projects/Seculture.jpeg",
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
