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
      { label: "Tentang", href: "#why" },
      { label: "FAQ", href: "#faq" },
      { label: "CV", href: "https://krisadiwinata.online" },
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
    meta: ["Based in Indonesia", "3+ tahun pengalaman", "20+ proyek kelar"],
    marquee: [
      "WEBSITE",
      "WEB APP",
      "DASHBOARD",
      "CUSTOM SOFTWARE",
      "MVP",
      "INTEGRASI",
      "OTOMASI",
    ],
    quotes: [
      "Bingung mulai dari mana bikin website",
      "Semua masih manual — capek banget",
      "Website lama lemot & ketinggalan zaman",
      "Butuh dashboard buat data bisnis",
      "Punya ide tapi nggak bisa dibangun",
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
      viewLive: "Lihat live",
      selectProject: "Pilih proyek",
    },
    projects: [
      {
        name: "MacLand",
        type: "3D PRODUCT SHOWCASE",
        stack: "NEXT.JS · THREE.JS · GSAP",
        status: "completed",
        year: "2025",
        tagline: "Masa depan web itu immersive.",
        problem:
          "Halaman produk statis nggak cukup nunjukin feel premium sebuah device — pengunjung perlu merasakannya, bukan cuma baca.",
        outcome:
          "Pengalaman MacBook 3D interaktif dengan animasi scroll yang bikin user explore setiap detail produk.",
        role: "FULL-STACK · 3D INTEGRATION",
        description: [
          "Kenapa cuma lihat produk kalau bisa dialami? MacLand explore batas antara halaman web statis dan environment 3D high-fidelity.",
          "Model 3D interaktif penuh ada di dalam interface web yang rapi — user bisa explore setiap kurva dan detail MacBook Pro.",
          "Dibangun pakai Three.js buat rendering 3D dan GSAP buat animasi scroll presisi, dioptimasi biar transisinya sehalus app native.",
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
        tagline: "Portfolio yang kerasa kayak desktop.",
        problem:
          "Portfolio tradisional pada mirip-mirip — recruiter dan klien butuh cara yang memorable buat browse project dan skill.",
        outcome:
          "Pengalaman desktop ala macOS dengan window draggable, navigasi Finder, dan showcase project yang beda dari template portfolio.",
        role: "DESIGN + FULL-STACK DEVELOPMENT",
        description: [
          "Kris-OS reimagines portfolio developer sebagai desktop environment yang hidup — lengkap dengan dock, Finder, dan window yang kerasa native.",
          "Tiap project ada di folder sendiri dengan deskripsi, screenshot, dan link demo — dibrowse kayak explore file di Mac.",
          "GSAP handle animasi window dan interaksi draggable, sementara Next.js jaga performa tetap cepat dan bisa di-deploy di mana aja.",
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
        tagline: "Belajar bahasa Jepang terstruktur, online.",
        problem:
          "Pembelajar bahasa butuh cara terstruktur buat latihan dan tracking progress online — resource yang tersebar nggak cukup.",
        outcome:
          "Platform belajar lengkap dengan progress tracking dan lesson interaktif yang bikin siswa betah dan balik lagi.",
        role: "FULL-STACK DEVELOPMENT",
        description: [
          "Jepangku kasih ruang khusus buat pelajar bahasa Jepang dengan lesson path yang jelas dan progress yang terukur.",
          "Platform ini gabungin kurikulum terstruktur dengan tools tracking biar siswa selalu tahu posisi belajar mereka.",
          "Dibangun buat retensi — setiap interaksi didesain biar learner tetap termotivasi sepanjang perjalanan belajar.",
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
        tagline: "Digitalisasi operasional peternakan layer.",
        problem:
          "Pencatatan manual dan spreadsheet yang nggak nyambung bikin susah track kesehatan ternak, produksi, dan biaya di peternakan.",
        outcome:
          "Dashboard manajemen terpusat yang kasih operator visibilitas real-time ke operasional dan ngurangin paperwork.",
        role: "FULL-STACK DEVELOPMENT",
        description: [
          "AAPM Layerfarm Management ganti log kertas dan spreadsheet tersebar dengan satu sistem buat operasional harian peternakan.",
          "Operator bisa monitor metrik produksi, kelola catatan ternak, dan generate laporan tanpa bolak-balik antar tools.",
          "Didesain buat lapangan — interface jelas yang works buat staff yang butuh jawaban cepat, bukan ERP rumit lagi.",
        ],
        screenImage: "/projects/AAPM-layerfarm-management.jpeg",
      },
      {
        name: "Charissa Event",
        type: "EVENT WEBSITE",
        stack: "REACT · NEXT.JS · TAILWIND",
        status: "completed",
        year: "2024",
        tagline: "Event layaknya punya panggung online.",
        problem:
          "Klien butuh web presence profesional buat promosi event, share detail, dan bangun kredibilitas ke peserta.",
        outcome:
          "Website event yang rapi, komunikasi brand jelas, dan pengunjung dapet semua info yang mereka butuhin.",
        role: "DESIGN + FRONT-END DEVELOPMENT",
        description: [
          "Charissa Event butuh website yang setara kualitas event-nya — profesional, inviting, dan gampang dinavigasi.",
          "Situs ini highlight event mendatang, brand story, dan jalur kontak biar calon klien bisa reach out dengan percaya diri.",
          "Dibangun pakai tooling front-end modern buat load cepat dan layout responsif di semua device.",
        ],
        href: "https://charissaevent.com/",
        screenImage: "/projects/charissaevent.jpeg",
      },
      {
        name: "Seculture",
        type: "COMPANY PROFILE",
        stack: "REACT · NEXT.JS · TAILWIND",
        status: "completed",
        year: "2024",
        tagline: "Perusahaan event, ditampilkan profesional.",
        problem:
          "Perusahaan rental alat event dan event organizer butuh web presence profesional yang nunjukin ke klien apa yang mereka kerjain — dan bangun kepercayaan sebelum kontak pertama.",
        outcome:
          "Website company profile yang rapi dan jelas, nampilin layanan serta peralatan yang mereka punya, bikin calon klien paham penawarannya dan berani reach out.",
        role: "FRONT-END DEVELOPMENT",
        description: [
          "Seculture adalah perusahaan rental alat event dan event organizer — websitenya jadi company profile yang udah 'jualan' duluan sebelum ada orang yang diajak ngobrol.",
          "Situs ini nampilin layanan mereka — acara perusahaan, pernikahan, konser, dan lainnya — dalam layout yang jelas dan kredibel, gampang ditemuin dan gampang dihubungi.",
          "Tipografi bersih dan desain responsif bikin profil tetap profesional di semua device, sesuai dengan kualitas event yang mereka kerjain.",
        ],
        href: "https://seculture.id/",
        screenImage: "/projects/Seculture.jpeg",
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