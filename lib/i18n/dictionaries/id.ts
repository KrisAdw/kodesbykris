/**
 * Bahasa Indonesia (Indonesian) messages.
 * Must match the shape of the English dictionary — TypeScript enforces it.
 * Brand statements (BUILD • SOLVE • DELIVER, CODE CRAFTED BY KRIS) are kept
 * in English for brand consistency.
 */

import type { Messages } from "./en";

export const id: Messages = {
  meta: {
    title: "Jasa Bikin Website & Custom Software Modern | kodesbykris",
    description:
      "Custom website & software sat-set garapan Kris. Solusi tepat guna buat bisnis, ngobrol langsung tanpa ribet birokrasi, dan hasil yang beneran works. Gas diskusiin proyek lu!",
    keywords: [
      "jasa pembuatan website",
      "software engineer indonesia",
      "web developer",
      "bikin website custom",
      "web application",
      "jasa bikin mvp",
      "kodesbykris",
    ],
  },

  header: {
    nav: [
      { label: "Layanan", href: "#services" },
      { label: "Portfolio", href: "#work" },
      { label: "Cara Kerja", href: "#process" },
      { label: "Tentang", href: "#about" },
      { label: "FAQ", href: "#faq" },
    ],
    startProject: "Gas Bikin Proyek",
    logoAlt: "logo kodesbykris",
    openMenu: "Buka menu",
    closeMenu: "Tutup menu",
    languageLabel: "Ganti bahasa",
  },

  hero: {
    availability: "Ready buat proyek baru",
    title: {
      pre: "Gua ngebangun software yang bereskan ",
      highlight: "masalah nyata",
      post: " di bisnis lu.",
    },
    subtitle:
      "Website, web app, dashboard, sampai custom tools — dibikin langsung sama Kris buat lu yang butuh hasil nyata yang beneran jalan. Diskusi langsung, zero ribet ala agensi.",
    startProject: "Mulai Proyek",
    emailMe: "Kirim Email",
    viewWork: "Lihat Karya",
    meta: ["Based in Indonesia", "5+ tahun pengalaman", "40+ proyek kelar"],
    marquee: [
      "WEBSITE",
      "WEB APP",
      "DASHBOARD",
      "CUSTOM SOFTWARE",
      "MVP",
      "INTEGRASI",
      "OTOMASI",
    ],
  },

  services: {
    tag: "Layanan",
    title: "Software bukan cuma barisan kode. Tapi solusi buat masalah bisnis.",
    lead: "Setiap service di bawah ini ada buat satu tujuan: bikin operasional lu makin mulus dan konversi naik. Ini yang bisa gua kerjain bareng lu.",
    items: [
      {
        title: "Website & Landing Page",
        description:
          "Website yang jadi 'sales terbaik' lu 24/7 — kencang, estetik, dan dirancang khusus buat ngubah pengunjung jadi paying customer.",
        points: [
          "Company Profile modern & kredibel",
          "Landing page high-conversion",
          "Revamp web lama biar makin sat-set",
        ],
      },
      {
        title: "Web App & Dashboard",
        description:
          "Sistem yang bikin operasional bisnis lu jalan rapi — dashboard intuitif, panel admin, dan internal tools yang enak dipakai tim tiap hari.",
        points: ["Admin panel & dashboard analytics", "Client portal", "Workflow & productivity tools"],
      },
      {
        title: "Custom Software & Integrasi",
        description:
          "Sistem yang ngikutin cara kerja lu, bukan sebaliknya — mulai dari MVP, platform SaaS, otomasi alur kerja, sampai sinkronisasi antar tools.",
        points: [
          "Peluncuran MVP & produk SaaS",
          "Otomasi workflow & integrasi API",
          "Internal tools khusus bisnis lu",
        ],
      },
    ],
  },

  canBuild: {
    tag: "Bisa bikin apa aja?",
    title: 'Jawaban singkat buat pertanyaan "lu bisa bantu apa aja?"',
    lead: "Tanpa istilah teknis yang bikin pusing. Kalau kebutuhan lu ada di list ini, berarti ini makanan sehari-hari yang udah sering gua bangun.",
    items: [
      {
        title: "Website Bisnis & Company Profile",
        description:
          "Etalase digital yang clean, modern, dan bikin brand lu keliatan jauh lebih kredibel di mata calon klien.",
      },
      {
        title: "Landing Page Fokus Konversi",
        description:
          "Halaman to-the-point yang didesain buat nge-hook calon pembeli dan ngedongkrak leads masuk ke WhatsApp/email.",
      },
      {
        title: "Dashboard & Admin Panel",
        description:
          "Pantau performa bisnis dan atur data penting dalam satu layar — say goodbye to spreadsheet yang berantakan.",
      },
      {
        title: "Client Portal & Internal Tools",
        description:
          "Sediakan workspace simpel dan reliable biar tim atau klien lu bisa kolaborasi tanpa drama salah kirim file.",
      },
      {
        title: "MVP & Produk SaaS",
        description:
          "Validasi ide startup/bisnis lu secara kilat pakai versi pertama yang kokoh, rapi, dan siap di-scale up.",
      },
      {
        title: "Otomasi & Integrasi Sistem",
        description:
          "Bikin tools yang udah lu pakai saling nyambung otomatis — biar lu nggak capek copy-paste manual tiap hari.",
      },
    ],
  },

  work: {
    tag: "Selected Work",
    title: "Beberapa hal yang udah pernah gua bangun",
    lead: "Showcase proyek nyata dilihat dari kacamata bisnis — problem utamanya apa, solusinya gimana, dan hasil akhirnya seperti apa.",
    labels: {
      type: "JENIS",
      stack: "TECH STACK",
      status: "STATUS",
      role: "PERAN",
      problem: "Problem",
      result: "Hasil",
      placeholder: "Placeholder",
      completed: "SELESAI",
      inProgress: "ON PROGRESS",
    },
    projects: [
      {
        name: "JEPANGKU",
        type: "LEARNING PLATFORM",
        stack: "REACT · GO · POSTGRESQL",
        status: "completed",
        year: "—",
        problem:
          "Pembelajar bahasa butuh platform terstruktur buat latihan dan tracking progress belajar mereka secara interaktif.",
        outcome:
          "Platform belajar interaktif dengan fitur gamifikasi & progress tracker yang bikin retensi user meningkat.",
        role: "FULL-STACK DEVELOPMENT",
        isPlaceholder: true,
      },
      {
        name: "PROYEK LU",
        type: "MISAL: COMPANY WEBSITE",
        stack: "REACT · NEXT.JS",
        status: "completed",
        year: "2024",
        problem: "Tulis kendala klien di sini — misal web lama lemot atau conversion rate drop.",
        outcome: "Tulis hasil perubahannya — misal traffic naik 2x lipat dan loading makin instan.",
        role: "MISAL: UI/UX + FULLSTACK DEV",
        isPlaceholder: true,
      },
      {
        name: "PROYEK LU",
        type: "MISAL: ADMIN DASHBOARD",
        stack: "REACT · NODE.JS · POSTGRESQL",
        status: "completed",
        year: "2024",
        problem: "Tulis kendala klien di sini — apa operasional manual yang bikin bottleneck?",
        outcome: "Tulis solusinya — bagaimana dashboard ini menghemat jam kerja tim.",
        role: "MISAL: FULL-STACK DEVELOPMENT",
        isPlaceholder: true,
      },
      {
        name: "PROYEK LU",
        type: "MISAL: CUSTOM SOFTWARE",
        stack: "REACT · GO · POSTGRESQL",
        status: "completed",
        year: "2023",
        problem: "Tulis masalah sistem lama yang butuh solusi kustom.",
        outcome: "Tulis impact setelah sistem baru diterapkan di operasional.",
        role: "MISAL: BACKEND + INTEGRASI",
        isPlaceholder: true,
      },
    ],
  },

  why: {
    tag: "Kenapa kodesbykris",
    title: "One-man studio, 100% tanggung jawab.",
    lead: "Lu nggak lagi deal sama agensi yang oper-operan tim. Lu kerja bareng satu engineer yang pegang kendali penuh dari konsep sampai deployment.",
    sticky: "Kerja bareng gua serasa punya tech partner sendiri yang beneran peduli sama pertumbuhan bisnis lu.",
    items: [
      {
        title: "Ngobrol langsung sama dev-nya",
        description:
          "Orang yang diajak brainstorming adalah orang yang sama yang ngetik kodenya. Tanpa perantara, tanpa miskomunikasi.",
      },
      {
        title: "Scope jelas, tanpa hidden cost",
        description:
          "Timeline realistis, batasan kerja transparan, dan sistem fixed price sebelum mulai. Lu selalu tahu status proyek lu.",
      },
      {
        title: "Dibangun buat jangka panjang, bukan asal kelar",
        description:
          "Arsitektur kode bersih, terdokumentasi, dan scalable — bukan kode asal tempel yang bikin pusing 6 bulan ke depan.",
      },
      {
        title: "Fokus penuh & personal",
        description:
          "Gua batasi jumlah proyek aktif biar setiap detail dikerjain secara maksimal dan dapet perhatian penuh.",
      },
      {
        title: "Tetap standby setelah launch",
        description:
          "Gua nggak bakal ngilang setelah website live. Support, bug fix, dan improvement bakal tetap gua kawal.",
      },
    ],
  },

  process: {
    tag: "Alur Kerja",
    title: "Proses simpel, transparan, no ribet",
    lead: "5 langkah terstruktur tanpa jargon aneh-aneh. Lu bakal selalu tahu progress proyek lu udah sampai tahap mana.",
    items: [
      {
        title: "1. Brainstorming",
        description:
          "Kita bedah target lu, siapa user-nya, dan hasil seperti apa yang lu harapkan. Pure ngobrol santai cari solusi terbaik.",
      },
      {
        title: "2. Planning & Scope",
        description:
          "Gua susun roadmap, scope kerja, dan estimasi waktu yang jelas. Semua disepakati di awal sebelum masuk tahap ngoding.",
      },
      {
        title: "3. Development",
        description:
          "Proses coding bertahap dengan update rutin. Lu bisa lihat progress nyatanya secara berkala, bukan sekadar janji.",
      },
      {
        title: "4. Testing & Polish",
        description:
          "Uji coba di berbagai device, browser, dan skenario nyata — memastikan semuanya responsif, cepat, dan zero bug.",
      },
      {
        title: "5. Launch & Support",
        description:
          "Deployment ke server, serah terima akses, plus sesi panduan. Hubungan kerja kita nggak selesai cuma di hari peluncuran.",
      },
    ],
  },

  about: {
    tag: "Tentang",
    title: "Kris Adiwinata",
    lead: "Orang di balik kodesbykris — alasan kenapa banyak founder lebih milih independent dev dibanding agensi.",
    monoLabel: "Software engineering & web development",
    quote: "Code crafted by Kris.",
    paragraphs: [
      "Halo! Gua Kris, software engineer dan web developer asal Indonesia. Gua ngebangun website, web application, dan custom software buat bantu bisnis dan founder naik kelas lewat teknologi yang tepat guna.",
      "kodesbykris adalah one-man studio. Artinya, saat lu kerja bareng gua, lu dapet satu orang yang megang kendali penuh dari planning, arsitektur kode, pengiriman, sampai post-launch support. Nggak ada birokrasi berbelit, komunikasinya to-the-point, dan fokusnya ke hasil akhir.",
      "Gua fokus ke impact bisnis, bukan sekadar 'asal websitenya jadi'. Kalau ada ide fitur yang dirasa kurang efektif buat tujuan bisnis lu, gua bakal kasih masukan jujur dari awal.",
    ],
    stats: {
      years: "Tahun Pengalaman",
      projects: "Proyek Selesai",
      location: "Lokasi",
    },
  },

  faq: {
    tag: "FAQ",
    title: "Tanya Jawab Langsung",
    lead: "Pertanyaan yang paling sering ditanyain sebelum kita mulai kolaborasi.",
    items: [
      {
        q: "Bisa bikin apa aja?",
        a: "Mulai dari high-converting landing page, company profile modern, web dashboard internal, sampai web application/SaaS skala penuh. Apapun kebutuhan digital bisnis lu, bisa kita wujudkan.",
      },
      {
        q: "Berapa estimasi biayanya?",
        a: "Biaya menyesuaikan kompleksitas dan scope fitur — landing page tentu beda investasinya dengan full-stack web app. Setelah kita ngobrol singkat, gua bakal kasih penawaran harga pasti (fixed price) tanpa biaya tersembunyi.",
      },
      {
        q: "Berapa lama pengerjaannya?",
        a: "Landing page biasanya beres dalam 1–3 minggu. Untuk web app atau custom tools umumnya makan waktu 3–8+ minggu tergantung fitur. Timeline pasti bakal disepakati di awal.",
      },
      {
        q: "Apa yang perlu disiapin buat mulai?",
        a: "Cukup ceritain goals lu, contoh referensi yang lu suka, dan materi/aset yang udah ada (logo/teks). Sisi teknisnya biar gua yang atur semuanya.",
      },
      {
        q: "Bisa kolaborasi bareng agensi atau UI/UX designer?",
        a: "Bisa banget! Gua sering jadi partner teknis buat agensi maupun desainer independen yang butuh implementasi code yang presisi, clean, dan tepat waktu.",
      },
      {
        q: "Gimana setelah websitenya selesai dan live?",
        a: "Lu bakal dapet handoff lengkap plus masa garansi & support. Kalau ke depannya butuh maintenance rutin atau nambah fitur baru, gua tetap siap bantu.",
      },
    ],
  },

  cta: {
    title: "Punya ide proyek? Yuk bikin sesuatu yang beneran works.",
    subtitle:
      "Ceritain kebutuhan atau kendala bisnis lu, gua bakal kasih saran dan estimasi solusi terbaik dalam hitungan jam.",
    startWhatsApp: "Chat via WhatsApp",
    emailLabel: "Email",
    meta: "Based in Indonesia",
  },

  footer: {
    description:
      "Personal studio buat software engineering & modern web development. Custom website & apps berkualitas — crafted by Kris.",
    sections: "Navigasi",
    contact: "Kontak",
    basedIn: "Domisili",
    copyright: "All rights reserved.",
    codeCraftedBy: "CODE CRAFTED BY KRIS",
  },

  contact: {
    whatsappGreeting:
      "Halo Kris, gua nemu kodesbykris dan mau konsultasi soal proyek website nih.",
    emailSubject: "Inquiry Proyek — kodesbykris",
  },

  ui: {
    scrollToTop: "Kembali ke atas",
    whatsappOpen: "Buka chat WhatsApp",
    whatsappClose: "Tutup chat",
    whatsappOnline: "Online",
    whatsappBubble: "Halo! 👋 Punya proyek di pikiran? Yuk kita bahas.",
    whatsappCta: "Mulai chat di WhatsApp",
  },
};