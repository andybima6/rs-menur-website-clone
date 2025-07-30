import { useState } from "react";
import Layout from "@/components/Layout";

const layananCards = [
  { icon: "/src/assets/icons/icon1.png", title: "Konsultasi & Check Up" },
  { icon: "/src/assets/icons/icon2.png", title: "Tenaga Medis Profesional" },
  { icon: "/src/assets/icons/icon3.png", title: "Gawat Darurat Tersedia 24/7" },
  { icon: "/src/assets/icons/icon4.png", title: "Pengobatan Yang Tepat" },
  { icon: "/src/assets/icons/icon5.png", title: "Dokter Spesialis" },
  { icon: "/src/assets/icons/icon6.png", title: "Fasilitas Nyaman" },
  { icon: "/src/assets/icons/icon7.png", title: "Rekam Medis Elektronik" },
  { icon: "/src/assets/icons/icon8.png", title: "Kepuasan Pasien Prioritas Kami" },
];

const layanan = [
  {
    icon: "/src/assets/icons/icons1.png",
    title: "Rawat Jalan",
    desc: "Kami menyediakan berbagai layanan kesehatan rawat jalan baik jiwa maupun non jiwa",
    link: "Poliklinik",
  },
  {
    icon: "/src/assets/icons/icons2.png",
    title: "Rawat Inap",
    desc: "Kami menyediakan layanan rawat inap baik untuk layanan jiwa maupun non jiwa",
    link: "Rawat Inap",
  },
  {
    icon: "/src/assets/icons/icons3.png",
    title: "Penunjang Medis",
    desc: "Kami menyediakan berbagai layanan penunjang medis untuk menunjang pelayanan kesehatan kami",
    link: "Layanan Penunjang",
  },
  {
    icon: "/src/assets/icons/icons4.png",
    title: "IGD",
    desc: "Kami menyediakan pelayanan kasus gawat darurat baik jiwa maupun non jiwa",
    link: "Instalasi Gawat Darurat",
  },
];

const doctors = [
  {
    name: "Mega Nilam Sari",
    specialization: "Dokter, Spesialis Kedokteran Jiwa",
    image: "/src/assets/doctor1.png",
  },
  {
    name: "Christie Indira",
    specialization: "Dokter, Spesialis Kedokteran Jiwa",
    image: "/src/assets/doctor2.png",
  },
  {
    name: "Sista Diahlaksmi",
    specialization: "Dokter, Spesialis Kedokteran Jiwa",
    image: "/src/assets/doctor3.png",
  },
];
export default function Profile() {
  const [play, setPlay] = useState(false);
  const videoId = "fo6uPgx3D1M";

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: "url('/src/assets/profile_hero.png')" }}>
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-3xl font-bold max-w-4xl">Rumah Sakit Jiwa Menur merupakan satu-satunya rumah sakit jiwa milik Pemerintah Provinsi Jawa Timur.</h1>
          <p className="mt-4 text-sm max-w-xl">Saat ini Rumah Sakit Jiwa Menur telah membuka layanan Non Jiwa yang didukung oleh tenaga medis yang profesional.</p>
        </div>
      </div>

      {/* Konten Profil */}
      <div className="px-6 py-12 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Rumah sakit jiwa kelas A pendidikan dengan pelayanan prima.</h2>

        <ul className="list-disc pl-6 text-blue-900 space-y-3 mb-12">
          <li>Pelayanan kesehatan jiwa subspesialistik dan non jiwa sebagai penunjang.</li>
          <li>Evidence Based Medicine dengan mengutamakan keselamatan pasien.</li>
          <li>Pelayanan pendidikan, pelatihan, dan penelitian kesehatan jiwa yang bermutu dan beretika.</li>
        </ul>

        {/* Video */}
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

        {/* Sejarah RS */}
        <div className="max-w-3xl mx-auto mb-10">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Sejarah Singkat Rumah Sakit Jiwa Menur</h3>
          <p className="text-gray-600">
            RS Jiwa Menur diresmikan oleh Gubernur KDH TK I Jawa Timur (Bapak Soenandar Prijosoedarmo) tahun 1977 dengan jumlah tempat tidur sebanyak 100. Dipimpin oleh dr. R. Moeljono Notosoedirdjo, Sp.S., Sp.KJ., MPH.
          </p>
          <div className="flex items-center gap-2 mt-4 font-semibold text-blue-900">
            <a href="#" className="hover:underline">
              Selengkapnya
            </a>
            <div className="bg-blue-900 text-white rounded-full p-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 3l6 6-6 6-1.41-1.41L13.17 10 8.59 5.41 10 3z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="text-center mb-10">
          <p className="italic text-sm text-gray-700">“Deskripsi Tugas dan Fungsi Pokok RS berdasarkan Pergub Nomor 110 Tahun 2021”</p>
          <div className="flex justify-center gap-2 mt-2 font-semibold text-blue-900">
            <a href="#" className="hover:underline">
              Lihat Pergub
            </a>
            <div className="bg-blue-900 text-white rounded-full p-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 3l6 6-6 6-1.41-1.41L13.17 10 8.59 5.41 10 3z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Grid Card */}
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

        {/* Teal Section */}
        <div className="bg-teal-300 relative left-1/2 mb-20 w-screen -translate-x-1/2 py-16 mt-[-2px]">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-start gap-4">
              <img src="/src/assets/icons/dp_icon2.png" alt="Ilustrasi RS" className="w-24 h-24 " />
              <div className="px-4">
                <h3 className="text-lg md:text-2xl font-bold text-blue-900 mb-2">Layanan Kesehatan Jiwa dan Non Jiwa Untuk Keluarga Anda!</h3>
                <p className="text-sm text-blue-900 max-w-xl">
                  Memberikan pelayanan kesehatan jiwa dan non-jiwa dengan meningkatkan kualitas hidup melalui kesehatan yang lebih baik. Kami telah menerapkan protokol untuk melindungi pasien dan staf kami sambil terus memberikan perawatan
                  yang diperlukan secara medis.
                </p>
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
