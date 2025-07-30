const features = [
  {
    icon: "/src/assets/icons/Hospital-Bed.svg",
    alt: "Tempat Tidur",
    label: "Ketersediaan Tempat Tidur",
  },
  {
    icon: "/src/assets/icons/ID-Card.png",
    alt: "Pendaftaran Online",
    label: "Pendaftaran Online",
  },
  {
    icon: "/src/assets/icons/Waiting-Period.svg",
    alt: "Jadwal Dokter",
    label: "Jadwal Dokter",
  },
  {
    icon: "/src/assets/icons/Online-Claim.png",
    alt: "Tarif Layanan",
    label: "Tarif Layanan",
  },
];

const articles = [
  {
    image: "/src/assets/berita1.png",
    date: "July 9, 2025",
    title: "Kecanduan Judi Online? Ini Fakta dari RS Menur",
    excerpt: "Dalam setengah tahun, RS Menur telah menangani 86 pasien dengan...",
    link: "#",
  },
  {
    image: "/src/assets/berita2.jpg",
    date: "July 2, 2025",
    title: "Pelatihan Komunikasi Efektif dan PPI",
    excerpt: "Bidang Diklatlitbang RSJ Menur telah melaksanakan Pelatihan Pencegahan dan Pengendalian...",
    link: "#",
  },
  {
    image: "/src/assets/berita3.jpg",
    date: "June 30, 2025",
    title: "RS Menur Provinsi Jawa Timur Raih Tiga Penghargaan dalam Pekan Literasi Jawa Timur 2025",
    excerpt: "Surabaya (21/5/2025) – Rumah Sakit Menur Provinsi Jawa Timur memperoleh...",
    link: "#",
  },
];
const Home = () => {
  return (
    <section className="p-12">
      <div className="min-h-screen">
        <img src="/src/assets/home_section.png" alt="home" />
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center py-12 mt-8 gap-12">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center space-y-3">
            <div className="rounded-full p-4">
              <img src={feature.icon} alt={feature.alt} width={100} height={100} />
            </div>
            <p className="text-sky-400 text-lg font-medium leading-tight">{feature.label}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl md:text-3xl font-semibold text-gray-500 text-center mb-10">Berita dan Kegiatan Terbaru</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto py-12">
        {articles.map((item, i) => (
          <div key={i} className="flex flex-col justify-between h-full bg-white group transition-transform duration-300">
            {/* Gambar */}
            <div className="w-full overflow-hidden rounded-lg">
              <img src={item.image} alt={item.title} className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>

            {/* Konten */}
            <div className="pt-4 flex flex-col justify-between h-full">
              <p className="text-sm text-blue-700">{item.date}</p>
              <h3 className="text-lg font-semibold leading-snug mt-1">{item.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{item.excerpt}</p>

              <a
                href={item.link}
                className="text-blue-800 font-medium mt-3 inline-flex items-center gap-1 group/link group-hover:bg-blue-900 group-hover:text-white group-hover:w-44 group-hover:h-8 group-hover:items-center group-hover:p-2 group-hover:rounded-full group-hover:justify-center"
              >
                Read more <span className="group-hover/link:translate-x-1 group-hover:transition-transform">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl md:text-3xl font-semibold text-gray-500 text-center mb-10">Maklumat Pelayanan</h2>
      <div className="justify-center items-center flex pb-12">
        <img src="/src/assets/Maklumat.jpg" alt="home" width={800} height={300} />
      </div>
    </section>
  );
};

export default Home;
