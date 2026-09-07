// ============================================================
// KONFIGURASI UTAMA UNDANGAN PERNIKAHAN
// Edit file ini untuk mengubah semua data undangan
// ============================================================

export const weddingData = {
  groom: {
    name: "Sigit Aryanto",
    nickname: "Sigit",
    instagram: "@sigit_aryanto",
    parents: "Putra ke-2 dari Bapak Pendi & Ibu Patonah",
    photo: "/images/groom.png",
  },

  bride: {
    name: "Wike Widhyawati, S.pd",
    nickname: "Wike",
    instagram: "@wike_widhyawati",
    parents: "Putri ke-3 dari Bapak Ngateman & Ibu Sriyatun",
    photo: "/images/bride.png",
  },

  couplePhoto: "/images/couple.png",

  event: {
    date: "2026-11-24", // YYYY-MM-DD
    dateDisplay: "Minggu, 24 November 2026",
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
    countdownTarget: "2026-11-24T08:00:00+07:00",
    venue: "Depan SDN 2 Purajaya",
    address: "Jl. Kebun Tebu, Pura Jaya, Kec. Sumber Jaya, Kabupaten Lampung Barat",
    addressOneLine: "Jl. Kebun Tebu, Pura Jaya, Kec. Sumber Jaya, Kabupaten Lampung Barat",
    mapsUrl: "https://maps.app.goo.gl/Xe7oiv5daspTN2ek7",
    mapsEmbed:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d305.6443282766379!2d104.52704509708843!3d-5.047441317429535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e47659ba7bc2b49%3A0x835925175ec27da9!2sSDN%202%20PURAJAYA!5e1!3m2!1sid!2sid!4v1788787306301!5m2!1sid!2sid"  },


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
    address: "Jl. Kebun Tebu, Pura Jaya, Kec. Sumber Jaya, Kabupaten Lampung Barat",
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
      year: "2026",
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
      "Undangan pernikahan Sigit & Wike. Minggu, 24 november 2026 di Gedung Serba Guna Harmoni, Bandung.",
    ogImage: "/images/og-image.png",
    url: "https://undangan-irfan-meysa.vercel.app",
  },
};

export type WeddingData = typeof weddingData;
