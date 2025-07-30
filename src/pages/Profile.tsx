import { useState } from "react";
import Layout from "@/components/Layout";

// Hero dan gambar utama
import heroImage from "@/assets/profile_hero.png";
import dpIcon from "@/assets/icons/dp_icon2.png";

// Icon layananCards
import icon1 from "@/assets/icons/icon1.png";
import icon2 from "@/assets/icons/icon2.png";
import icon3 from "@/assets/icons/icon3.png";
import icon4 from "@/assets/icons/icon4.png";
import icon5 from "@/assets/icons/icon5.png";
import icon6 from "@/assets/icons/icon6.png";
import icon7 from "@/assets/icons/icon7.png";
import icon8 from "@/assets/icons/icon8.png";

// Icon layanan utama
import icons1 from "@/assets/icons/icons1.png";
import icons2 from "@/assets/icons/icons2.png";
import icons3 from "@/assets/icons/icons3.png";
import icons4 from "@/assets/icons/icons4.png";

// Dokter
import doctor1 from "@/assets/doctor1.png";
import doctor2 from "@/assets/doctor2.png";
import doctor3 from "@/assets/doctor3.png";

const layananCards = [
  { icon: icon1, title: "Konsultasi & Check Up" },
  { icon: icon2, title: "Tenaga Medis Profesional" },
  { icon: icon3, title: "Gawat Darurat Tersedia 24/7" },
  { icon: icon4, title: "Pengobatan Yang Tepat" },
  { icon: icon5, title: "Dokter Spesialis" },
  { icon: icon6, title: "Fasilitas Nyaman" },
  { icon: icon7, title: "Rekam Medis Elektronik" },
  { icon: icon8, title: "Kepuasan Pasien Prioritas Kami" },
];

const layanan = [
  { icon: icons1, title: "Rawat Jalan", desc: "Kami menyediakan berbagai layanan kesehatan rawat jalan baik jiwa maupun non jiwa", link: "Poliklinik" },
  { icon: icons2, title: "Rawat Inap", desc: "Kami menyediakan layanan rawat inap baik untuk layanan jiwa maupun non jiwa", link: "Rawat Inap" },
  { icon: icons3, title: "Penunjang Medis", desc: "Kami menyediakan berbagai layanan penunjang medis untuk menunjang pelayanan kesehatan kami", link: "Layanan Penunjang" },
  { icon: icons4, title: "IGD", desc: "Kami menyediakan pelayanan kasus gawat darurat baik jiwa maupun non jiwa", link: "Instalasi Gawat Darurat" },
];

const doctors = [
  { name: "Mega Nilam Sari", specialization: "Dokter, Spesialis Kedokteran Jiwa", image: doctor1 },
  { name: "Christie Indira", specialization: "Dokter, Spesialis Kedokteran Jiwa", image: doctor2 },
  { name: "Sista Diahlaksmi", specialization: "Dokter, Spesialis Kedokteran Jiwa", image: doctor3 },
];

export default function Profile() {
  const [play, setPlay] = useState(false);
  const videoId = "fo6uPgx3D1M";

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-3xl font-bold max-w-4xl">Rumah Sakit Jiwa Menur merupakan satu-satunya rumah sakit jiwa milik Pemerintah Provinsi Jawa Timur.</h1>
          <p className="mt-4 text-sm max-w-xl">Saat ini Rumah Sakit Jiwa Menur telah membuka layanan Non Jiwa yang didukung oleh tenaga medis yang profesional.</p>
        </div>
      </div>

      <div className="px-6 py-12 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Rumah sakit jiwa kelas A pendidikan dengan pelayanan prima.</h2>

        <ul className="list-disc pl-6 text-blue-900 space-y-3 mb-12">
          <li>Pelayanan kesehatan jiwa subspesialistik dan non jiwa sebagai penunjang.</li>
          <li>Evidence Based Medicine dengan mengutamakan keselamatan pasien.</li>
          <li>Pelayanan pendidikan, pelatihan, dan penelitian kesehatan jiwa yang bermutu dan beretika.</li>
        </ul>

        <div className="relative aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg mb-16">
          {play ? (
            <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} className="w-full h-full" allow="autoplay; encrypted-media" allowFullScreen />
          ) : (
            <div className="relative w-full h-full">
              <img src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} alt="Video Thumbnail" className="w-full h-full object-cover filter blur-sm" />
              <button onClick={() => setPlay(true)} className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-4 rounded-full shadow hover:scale-105 transition-transform">
                  <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 3l6 6-6 6-1.41-1.41L13.17 10 8.59 5.41 10 3z" />
                  </svg>
                </div>
              </button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {layananCards.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
              <img src={item.icon} alt={item.title} className="mx-auto mb-4 h-10 w-10" />
              <h3 className="text-sm font-semibold text-blue-900">{item.title}</h3>
            </div>
          ))}
        </div>

        <div className="text-center mx-auto px-4 p-12 bg-blue-950 mt-12 relative left-1/2 mb-20 w-screen -translate-x-1/2 overflow-hidden translate-y-20">
          <p className="text-sm text-teal-300 font-semibold mb-2">Kami melayani masyarakat dengan sepenuh hati untuk meningkatkan kualitas hidup melalui pelayanan kesehatan yang lebih baik</p>
          <h2 className="text-3xl md:text-4xl text-white font-bold leading-tight mb-12">Kami Menyediakan Segala Aspek Praktek Medis Untuk Seluruh Keluarga Anda!</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto px-6 z-10 relative">
            {layanan.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-md text-blue-900 relative overflow-hidden">
                <div className="flex items-start gap-3">
                  <img src={item.icon} alt={item.title} className="h-14 w-14" />
                  <div className="text-right text-5xl font-bold text-gray-500 absolute top-4 right-4 opacity-30">{String(i + 1).padStart(2, "0")}</div>
                </div>
                <h3 className="mt-6 font-semibold text-lg text-start">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-2 text-start">{item.desc}</p>
                <a href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-900 hover:underline">
                  {item.link}
                  <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 3l6 6-6 6-1.41-1.41L13.17 10 8.59 5.41 10 3z" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-teal-300 relative left-1/2 mb-20 w-screen -translate-x-1/2 py-16 mt-[-2px]">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-start gap-4">
              <img src={dpIcon} alt="Ilustrasi RS" className="w-24 h-24 " />
              <div className="px-4">
                <h3 className="text-lg md:text-2xl font-bold text-blue-900 mb-2">Layanan Kesehatan Jiwa dan Non Jiwa Untuk Keluarga Anda!</h3>
                <p className="text-sm text-blue-900 max-w-xl">Memberikan pelayanan kesehatan jiwa dan non-jiwa dengan meningkatkan kualitas hidup melalui kesehatan yang lebih baik.</p>
              </div>
            </div>
            <a href="#" className="mt-4 md:mt-0 inline-flex items-center gap-2 bg-blue-900 text-white px-6 py-3 rounded-full font-semibold shadow hover:scale-105 transition">
              Layanan Kami
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 3l6 6-6 6-1.41-1.41L13.17 10 8.59 5.41 10 3z" />
              </svg>
            </a>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 text-center">Dokter Kami</h2>
        <p className="text-sm md:text-base text-gray-600 max-w-xl mx-auto mb-12 text-center">
          Semua staf administrasi dan pendukung kami mempunyai keterampilan interpersonal yang luar biasa dan terlatih untuk membantu Anda dengan semua pertanyaan medis.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {doctors.map((doctor, index) => (
            <div key={index} className="text-left rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
              <img src={doctor.image} alt={doctor.name} className="w-full h-auto object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-blue-900">{doctor.name}</h3>
                <p className="text-sm text-teal-500 mt-1">{doctor.specialization}</p>
                <a href="#" className="inline-flex items-center gap-1 text-sm font-semibold text-blue-900 mt-4 hover:underline">
                  Read More
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 3l6 6-6 6-1.41-1.41L13.17 10 8.59 5.41 10 3z" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
