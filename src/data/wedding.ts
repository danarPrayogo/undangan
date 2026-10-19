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
    date: "2026-11-15", // YYYY-MM-DD
    dateDisplay: "Minggu, 15 November 2026",
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
    countdownTarget: "2026-11-15T08:00:00+07:00",
    venue: "Gg. Ciptasari 2",
    address: "Gg. Ciptasari 2, Purajaya, kec.kebun tebu, kab. Lampung barat",
    addressOneLine: "Gg. Ciptasari 2, Purajaya, kec.kebun tebu, kab. Lampung barat",
    mapsUrl: "https://maps.app.goo.gl/Xe7oiv5daspTN2ek7",
    mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d305.6443282766379!2d104.52704509708843!3d-5.047441317429535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e47659ba7bc2b49%3A0x835925175ec27da9!2sSDN%202%20PURAJAYA!5e1!3m2!1sid!2sid!4v1788787306301!5m2!1sid!2sid"
  },


  bankAccounts: [
    {
      bank: "BRI",
      accountNumber: "806401007771535",
      accountNumberRaw: "806401007771535",
      accountName: "Wike Widhyawati",
      logo: "BRI",
    }
  ],

  giftAddress: {
    recipientName: "Sigit & Wike",
    address: "Jl. Kebun Tebu, Pura Jaya, Kec. Sumber Jaya, Kabupaten Lampung Barat",
    phone: "+62 819-1552-8013",
    note: "Mohon konfirmasi pengiriman via WhatsApp terlebih dahulu.",
  },

  ourStory: [
    {
      year: "21 April2023",
      title: "Pertama Kali Bertemu",
      description:
        "Berawal dari sebuah pertemuan sederhana, kami mulai saling mengenal dan berbagi banyak cerita. Seiring berjalannya waktu, tanpa disadari, kebersamaan itu perlahan menumbuhkan rasa nyaman yang semakin dalam, hingga akhirnya kami menyadari bahwa ada perasaan istimewa yang tumbuh di antara kami.",
    },
    {
      year: "8 Juni 2023",
      title: "Mulai Menjalin Hubungan",
      description:
        "Menjadi awal dari kisah kami dalam membangun sebuah hubungan. Melalui proses saling mengenal dan memahami satu sama lain, kami mulai menyatukan harapan serta tujuan, dengan keyakinan bahwa setiap hubungan yang baik berawal dari ketulusan, kepercayaan, dan kesediaan untuk tumbuh bersama.",
    },
    {
      year: "01 September 2026",
      title: "Lamaran",
      description:
        "Hari di mana menandai keseriusan hubungan kami melalui prosesi lamaran, sebagai bentuk komitmen untuk melangkah ke jenjang pernikahan. Dengan niat yang tulus dan harapan yang baik, kami memantapkan langkah untuk melangkah bersama menuju masa depan yang lebih pasti.",
    },
    {
      year: "15 November 2026",
      title: "Menuju Hari Pernikahan",
      description:
        "Hari yang menjadi awal dari perjalanan baru dalam kehidupan kami dan sekaligus menunaikan ibadah ter panjang  dalam hidup ,Dengan penuh rasa syukur, kami akan mengikat janji suci pernikahan sebagai bentuk komitmen untuk membangun rumah tangga yang harmonis, dilandasi kasih sayang, tanggung jawab, serta harapan untuk senantiasa bersama dalam suka maupun duka.",
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
      "Undangan pernikahan Sigit & Wike. Minggu, 15 november 2026 di Gedung Serba Guna Harmoni, Bandung.",
    ogImage: "/images/og-image.png",
    url: "https://undangan-irfan-meysa.vercel.app",
  },
};

export type WeddingData = typeof weddingData;
