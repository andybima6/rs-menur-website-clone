import IconBed from "@/assets/icons/Hospital-Bed.svg";
import IconIDCard from "@/assets/icons/ID-Card.png";
import IconWaiting from "@/assets/icons/Waiting-Period.svg";
import IconClaim from "@/assets/icons/Online-Claim.png";

import Berita1 from "@/assets/berita1.png";
import Berita2 from "@/assets/berita2.jpg";
import Berita3 from "@/assets/berita3.jpg";
import Maklumat from "@/assets/Maklumat.jpg";
import HomeSection from "@/assets/home_section.png";

const features = [
  { icon: IconBed, alt: "Tempat Tidur", label: "Ketersediaan Tempat Tidur" },
  { icon: IconIDCard, alt: "Pendaftaran Online", label: "Pendaftaran Online" },
  { icon: IconWaiting, alt: "Jadwal Dokter", label: "Jadwal Dokter" },
  { icon: IconClaim, alt: "Tarif Layanan", label: "Tarif Layanan" },
];

const articles = [
  {
    image: Berita1,
    date: "July 9, 2025",
    title: "Kecanduan Judi Online? Ini Fakta dari RS Menur",
    excerpt: "Dalam setengah tahun, RS Menur telah menangani 86 pasien dengan...",
    link: "#",
  },
  {
    image: Berita2,
    date: "July 2, 2025",
    title: "Pelatihan Komunikasi Efektif dan PPI",
    excerpt: "Bidang Diklatlitbang RSJ Menur telah melaksanakan Pelatihan Pencegahan dan Pengendalian...",
    link: "#",
  },
  {
    image: Berita3,
    date: "June 30, 2025",
    title: "RS Menur Provinsi Jawa Timur Raih Tiga Penghargaan dalam Pekan Literasi Jawa Timur 2025",
    excerpt: "Surabaya (21/5/2025) – Rumah Sakit Menur Provinsi Jawa Timur memperoleh...",
    link: "#",
  },
];

const Home = () => {
  return (
    <section className="p-12">
      {/* Hero */}
      <div className="min-h-screen">
        <img src={HomeSection} alt="home" className="w-full h-auto" />
      </div>

      {/* Fitur */}
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

      {/* Berita */}
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-500 text-center mb-10">Berita dan Kegiatan Terbaru</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto py-12">
        {articles.map((item, i) => (
          <div key={i} className="flex flex-col justify-between h-full bg-white group transition-transform duration-300">
            <div className="w-full overflow-hidden rounded-lg">
              <img src={item.image} alt={item.title} className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
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

      {/* Maklumat */}
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-500 text-center mb-10">Maklumat Pelayanan</h2>
      <div className="justify-center items-center flex pb-12">
        <img src={Maklumat} alt="Maklumat" width={800} height={300} />
      </div>
    </section>
  );
};

export default Home;
