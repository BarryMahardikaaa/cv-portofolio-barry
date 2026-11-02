/* ============================================================
   SEMUA ISI CV ADA DI SINI
   Ubah teks/tambah item cukup lewat file ini —
   tidak perlu menyentuh komponen JSX.
   ============================================================ */

export const navLinks = [
  { href: "#tentang", label: "Tentang" },
  { href: "#pendidikan", label: "Pendidikan" },
  { href: "#pengalaman", label: "Pengalaman" },
  { href: "#organisasi", label: "Organisasi" },
  { href: "#keterampilan", label: "Keterampilan" },
  { href: "#prestasi", label: "Prestasi" },
  { href: "#portofolio", label: "Portofolio" },
  { href: "#sertifikat", label: "Sertifikat" },
  { href: "#kontak", label: "Kontak" },
];

export const hero = {
  eyebrow: "Curriculum Vitae",
  name: "AHMAD BARRY MAHARDIKA",
  role: (
    <>
      Mahasiswa <strong>Informatika</strong> -{" "}
      <strong>Desain Grafis</strong> &amp; Web Development
    </>
  ),
  bio: "Fokus utama saya ada di desain grafis - Figma dan Canva untuk poster, banner, dan aset visual. Coding menjadi pendukung: HTML, CSS, JavaScript, TypeScript, serta React Native. Aktif berprestasi di bidang akademik maupun non-akademik, dan terbiasa bekerja dalam tim dengan standar ketelitian tinggi.",
  photo: "assets/foto.svg",
  photoAlt: "Foto profil Ahmad Barry Mahardika",
};

export const stats = [
  { num: "3,68", cap: "IPK Terakhir" },
  { num: "5", cap: "Semester Berjalan" },
  { num: "3", cap: "Semester Beasiswa" },
];

export const about = {
  paragraphs: [
    "Saya mahasiswa Teknik Informatika semester 5 dengan IPK 3,68. Kekuatan saya berada di bidang desain grafis - saya mahir menggunakan Figma dan Canva untuk mengerjakan poster, banner, editing foto, sampai identitas visual. Kemampuan programming saya menjadi pelengkap: HTML, CSS, JavaScript, TypeScript, React Native, serta dasar C dan Java.",
    "Di sisi akademik, saya lolos seleksi Beasiswa Bakti BCA dan aktif mengikuti lomba kreativitas tingkat kampus. Di sisi non-akademik, saya meraih Juara 1 pada Rector Cup Basket 2025 dan Rector Cup PKM 2025, serta Juara 3 Rector Cup Basket 2026. Kombinasi desain, teknologi, dan prestasi ini membentuk cara kerja saya: teliti, konsisten, dan mampu mengubah ide menjadi karya nyata.",
  ],
  facts: [
    { k: "Tempat, Tgl Lahir", v: "Amuntai, 8 Mei 2005" },
    { k: "Jenis Kelamin", v: "Laki-laki" },
    { k: "Status", v: "Mahasiswa Aktif" },
    { k: "Bahasa", v: "Indonesia, Inggris (dasar)" },
    { k: "Fokus Utama", v: "Desain Grafis" },
    { k: "Pendamping", v: "Web Dev & Mobile (React Native)" },
  ],
};

/* Kartu riwayat: pendidikan / pengalaman / organisasi */
export const cardSections = [
  {
    id: "pendidikan",
    alt: true,
    label: "Akademik",
    title: "Riwayat Pendidikan",
    desc: "Rekam jejak akademik saya dari jenjang sekolah hingga perkuliahan.",
    cards: [
      {
        date: "2024 - Sekarang",
        title: "S1 Informatika",
        org: "Universitas Muhammadiyah Malang",
        points: [
          "IPK: 3,68 / 4,00 (semester 5)",
          "Penerima Beasiswa Bakti BCA ",
          "Aktif mengikuti lomba kreativitas tingkat kampus (Rector Cup)",
        ],
      },
      {
        date: "2021 - 2024",
        title: "MA - Jurusan MIPA",
        org: "MAN 2 Hulu Sungai Utara",
        points: [
          "Jurusan MIPA (Matematika dan Ilmu Pengetahuan Alam).",
          "Anggota Paskibra sekolah.",
          "Aktif dalam kegiatan Pramuka.",
        ],
      },
    ],
  },
  {
    id: "pengalaman",
    alt: false,
    label: "Karier",
    title: "Pengalaman Kerja",
    desc: "Pengalaman profesional di lingkungan kerja maupun proyek lepas.",
    cards: [
      {
        date: "2026 - Sekarang",
        title: "Driver Part-Time",
        org: "ShopeeFood",
        points: [
          "Mengantar pesanan pelanggan di area Malang dan sekitarnya dengan waktu yang fleksibel.",
          "Menjaga kualitas layanan dan kepuasan pelanggan di setiap pengantaran.",
          "Bekerja secara mandiri dengan target dan jam kerja yang dapat diatur sendiri.",
        ],
      },
      {
        date: "Sekarang",
        title: "Proyek Mandiri - Web & Desain",
        org: "Proyek pribadi / akademik",
        points: [
          "Membangun website responsif dengan HTML, CSS, dan JavaScript.",
          "Menyusun aset visual poster dan banner menggunakan Canva.",
          "Merancang antarmuka dan prototype desain pada Figma.",
        ],
      },
    ],
  },
  {
    id: "organisasi",
    alt: true,
    label: "Kegiatan",
    title: "Pengalaman Organisasi & Kegiatan",
    desc: "Keterlibatan dalam kegiatan kampus dan kompetisi yang membentuk kemampuan kerja sama, disiplin, dan ketangguhan mental.",
    cards: [
      {
        date: "2025 — 2026",
        title: "Finalis & Juara Rector Cup",
        org: "Lomba Internal — Universitas Muhammadiyah Malang",
        points: [
          "Juara 1 cabang PKM (2025) pada kompetisi kreativitas tingkat kampus.",
          "Juara 1 (2025) dan Juara 3 (2026) cabang Basket.",
          "Berlatih bersama tim secara rutin di luar jam kuliah.",
        ],
      },
      {
        date: "2025",
        title: "Peserta POMPROV",
        org: "Pekan Olahraga Mahasiswa Provinsi — Cabang Basket",
        points: [
          "Mewakili universitas dalam kompetisi olahraga tingkat provinsi.",
          "Menghadapi tim antar-universitas di luar provinsi asal.",
        ],
      },
    ],
  },
];

export const skills = {
  label: "Kompetensi",
  title: "Keterampilan",
  desc: "Kompetensi teknis dan kemampuan pendukung yang saya kembangkan secara konsisten.",
  groups: [
    {
      title: "Desain Grafis",
      strong: true,
      items: [
        "Figma",
        "Canva",
        "Poster & Banner",
        "Desain Sosial Media",
      ],
    },
    {
      title: "Bahasa Pemrograman",
      items: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "TSX / React",
        "C",
        "Java",
        "Python",
      ],
    },
    {
      title: "Alat & Teknologi",
      items: [
        "MySQL",
        "Git",
        "Bootstrap",
        "VS Code",
        "Microsoft Office",
        "React Native",
      ],
    },
    {
      title: "Soft Skills",
      items: [
        "Bekerja dalam tim",
        "Komunikasi",
        "Manajemen waktu",
        "Problem solving",
        "Adaptif",
        "Disiplin",
      ],
    },
  ],
};

export const achievements = {
  label: "Penghargaan",
  title: "Prestasi",
  desc: "Pencapaian di bidang akademik maupun non-akademik yang saya raih selama masa kuliah.",
  groups: [
    {
      subtitle: "Akademik",
      items: [
        {
          icon: "medal",
          title: "Juara 1 — Rector Cup PKM 2025",
          meta: "Universitas Muhammadiyah Malang · 2025 · Lomba kreativitas tingkat kampus",
        },
        {
          icon: "cap",
          title: "Beasiswa Bakti BCA",
          meta: "Program Beasiswa Prestasi",
        },
      ],
    },
    {
      subtitle: "Non-Akademik",
      items: [
        {
          icon: "trophy",
          title: "Juara 1 — Rector Cup Basket 2025",
          meta: "Universitas Muhammadiyah Malang · 2025 · Lomba olahraga tingkat kampus",
        },
        {
          icon: "medal",
          title: "Juara 3 — Rector Cup Basket 2026",
          meta: "Universitas Muhammadiyah Malang · 2026 · Lomba olahraga tingkat kampus",
        },
        {
          icon: "globe",
          title: "Peserta — POMPROV Cabang Basket",
          meta: "Pekan Olahraga Mahasiswa Provinsi · 2025 · Mewakili universitas di tingkat provinsi",
        },
      ],
    },
  ],
};

export const portfolio = {
  label: "Karya",
  title: "Portofolio",
  desc: "Karya desain yang saya kerjakan. Klik gambar untuk pratinjau ukuran penuh.",
  groupTitle: (
    <>
      Desain Grafis <span className="sub-note">- fokus utama saya</span>
    </>
  ),
  note: "Portofolio untuk bidang pemrograman web & mobile sedang saya kembangkan dan akan ditambahkan menyusul.",
  items: [
    {
      src: "assets/portfolio/portofolio-banner.jpg",
      alt: "Desain banner dan backdrop event",
      title: "Banner",
      meta: "Canva - aset visual acara & organisasi",
    },
    {
      empty: true,
      src: "assets/portfolio/portofolio-kosong.svg",
      alt: "Slot karya desain berikutnya",
      title: "Karya Desain Berikutnya",
      meta: "Sedang dalam proses - segera hadir",
    },
  ],
};

export const certificates = {
  label: "Verifikasi",
  title: "Sertifikat",
  desc: "Dokumentasi pendukung setiap prestasi akademik dan non-akademik. Klik gambar untuk pratinjau ukuran penuh.",
  items: [
    {
      src: "sertifikat/beasiswa-bakti-bca.jpg",
      alt: "Sertifikat Beasiswa Bakti BCA",
      title: "Beasiswa Bakti BCA",
      meta: "Program Beasiswa Prestasi",
    },
    {
      src: "sertifikat/rektor-cup-pkm-2025.jpg",
      alt: "Sertifikat Juara 1 Rector Cup PKM 2025",
      title: "Juara 1 - Rector Cup PKM 2025",
      meta: "Universitas Muhammadiyah Malang · 2025",
    },
    {
      src: "sertifikat/rektor-cup-basket-2025.jpg",
      alt: "Sertifikat Juara 1 Rector Cup Basket 2025",
      title: "Juara 1 - Rector Cup Basket 2025",
      meta: "Universitas Muhammadiyah Malang · 2025",
    },
    {
      src: "sertifikat/rektor-cup-basket-2026.png",
      alt: "Sertifikat Juara 3 Rector Cup Basket 2026",
      title: "Juara 3 - Rector Cup Basket 2026",
      meta: "Universitas Muhammadiyah Malang · 2026",
    },
    {
      src: "sertifikat/pomprov-basket.jpg",
      alt: "Sertifikat Peserta POMPROV Cabang Basket",
      title: "Peserta - POMPROV Cabang Basket",
      meta: "Pekan Olahraga Mahasiswa Provinsi · 2025",
    },
  ],
};

export const contact = {
  label: "Terhubung",
  title: "Kontak",
  desc: "Saya terbuka untuk peluang magang, pekerjaan, maupun kolaborasi. Silakan hubungi saya melalui kanal berikut.",
  items: [
    {
      k: "Email Pribadi",
      v: "barrymahardikaa@gmail.com",
      href: "mailto:barrymahardikaa@gmail.com",
    },
    {
      k: "Email Kampus",
      v: "akbarimahardika@webmail.umm.ac.id",
      href: "mailto:akbarimahardika@webmail.umm.ac.id",
    },
    { k: "Telepon / WA", v: "+62 812-5330-7906", href: "tel:+6281253307906" },
    {
      k: "LinkedIn",
      v: "linkedin.com/in/barrymahardika",
      href: "https://www.linkedin.com/in/barrymahardika",
      ext: true,
    },
    {
      k: "GitHub",
      v: "github.com/BarryMahardikaaa",
      href: "https://github.com/BarryMahardikaaa",
      ext: true,
    },
  ],
  cta: {
    title: "Terbuka untuk kesempatan magang & karier awal",
    desc: "Saya siap berkontribusi di bidang pemrograman maupun desain visual, dan terus berkembang di lingkungan kerja profesional. Silakan hubungi saya untuk diskusi lebih lanjut.",
    href: "https://wa.me/6281253307906",
    label: "Kirim Pesan via WhatsApp",
  },
};

export const footer = {
  left: "© 2026 Ahmad Barry Mahardika. Semua hak dilindungi.",
  right: "CV ini disusun untuk keperluan pelamaran magang dan pekerjaan",
};
