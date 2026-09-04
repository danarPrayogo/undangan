// ============================================================
// KONFIGURASI UTAMA UNDANGAN PERNIKAHAN
// Edit file ini untuk mengubah semua data undangan
// ============================================================

export const weddingData = {
  groom: {
    name: "Sigit",
    nickname: "Sigit",
    instagram: "@sigit.sptr",
    parents: "Putra dari Bapak H. Suharto & Ibu Hj. Siti Rahayu",
    photo: "/images/groom.png",
  },

  bride: {
    name: "Wike",
    nickname: "Wike",
    instagram: "@wike.wulandari",
    parents: "Putri dari Bapak H. Bambang Sudarsono & Ibu Hj. Endah Lestari",
    photo: "/images/bride.png",
  },

  couplePhoto: "/images/couple.png",

  event: {
    date: "2026-09-24", // YYYY-MM-DD
    dateDisplay: "Minggu, 24 September 2026",
    akad: {
      time: "08:00",
      timeDisplay: "08.00 WIB - Selesai",
      label: "Akad Nikah",
    },
    reception: {
      time: "10:00",
      timeDisplay: "10.00 WIB - Selesai",
      label: "Resepsi",
    },
    countdownTarget: "2026-09-24T08:00:00+07:00",
    venue: "Gedung Serba Guna Harmoni",
    address: "Jl. Mawar No. 12, Kecamatan Sukajadi,\nKota Bandung, Jawa Barat",
    addressOneLine: "Jl. Mawar No. 12, Kecamatan Sukajadi, Kota Bandung, Jawa Barat",
    mapsUrl: "https://maps.google.com/?q=Gedung+Serba+Guna+Harmoni+Bandung",
    mapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.8!2d107.6!3d-6.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTQnMDAuMCJTIDEwN8KwMzYnMDAuMCJF!5e0!3m2!1sen!2sid!4v1620000000000!5m2!1sen!2sid",
  },

  bankAccounts: [
    {
      bank: "BCA",
      accountNumber: "1234 5678 9012 3456",
      accountNumberRaw: "1234567890123456",
      accountName: "Sigit",
      logo: "BCA",
    },
    {
      bank: "Bank Mandiri",
      accountNumber: "1234 5678 9012 345",
      accountNumberRaw: "12345678901235",
      accountName: "Wike",
      logo: "MANDIRI",
    },
  ],

  giftAddress: {
    recipientName: "Sigit & Wike",
    address: "Jl. Melati No. 5, RT 02/RW 03,\nKelurahan Sukamaju, Kecamatan Sukajadi,\nKota Bandung, Jawa Barat 40162",
    phone: "0812-3456-7890",
    note: "Mohon konfirmasi pengiriman via WhatsApp terlebih dahulu.",
  },

  ourStory: [
    {
      year: "2019",
      title: "Pertama Kali Bertemu",
      description:
        "Pertemuan pertama yang tak terduga di sebuah acara kampus, sebuah momen yang mengubah segalanya.",
    },
    {
      year: "2022",
      title: "Mulai Menjalin Hubungan",
      description:
        "Setelah tiga tahun pertemanan yang indah, kami memutuskan untuk melangkah lebih jauh.",
    },
    {
      year: "2025",
      title: "Lamaran",
      description:
        "Dengan restu kedua keluarga, langkah menuju jenjang pernikahan dimulai dengan penuh suka cita.",
    },
    {
      year: "2026",
      title: "Menuju Hari Pernikahan",
      description:
        "Hari yang paling dinantikan pun tiba. Kami siap memulai babak baru kehidupan bersama.",
    },
  ],

  gallery: [
    { src: "/images/couple.png", alt: "Pasangan Mempelai Berdiri" },
    { src: "/images/groom.png", alt: "Mempelai Pria" },
    { src: "/images/bride.png", alt: "Mempelai Wanita" },
    { src: "/images/og-image.png", alt: "Pasangan Mempelai Duduk" },
  ],

  music: {
    src: "/music/musicfix.webm",
    title: "Lagu Tema",
  },

  // URL Google Apps Script Web App untuk menyimpan data RSVP ke Google Sheets
  rsvpGoogleScriptUrl: process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || "",

  seo: {
    title: "Sigit & Wike — Undangan Pernikahan",
    description:
      "Undangan pernikahan Sigit & Wike. Minggu, 24 September 2026 di Gedung Serba Guna Harmoni, Bandung.",
    ogImage: "/images/og-image.png",
    url: "https://undangan-irfan-meysa.vercel.app",
  },
};

export type WeddingData = typeof weddingData;
