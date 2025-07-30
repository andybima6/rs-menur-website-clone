import Layout from "@/components/Layout";

const MISI_LIST = [
  "Mewujudkan keseimbangan pembangunan ekonomi, baik antar kelompok, antar sektor, maupun antar wilayah",
  "Terciptanya kesejahteraan yang berkeadilan sosial, pemenuhan kebutuhan dasar terutama kesehatan dan pendidikan, penyediaan lapangan kerja dengan memperhatikan kelompok rentan",
  "Tata kelola pemerintahan yang bersih, inovatif, terbuka, partisipatoris, memperkuat demokrasi kewargaan untuk menghadirkan ruang sosial yang menghargai prinsip kebhinekaan",
  "Melaksanakan pembangunan berdasarkan semangat gotong royong berwawasan lingkungan untuk menjamin keselarasan ruang ekologi, ruang sosial, ruang ekonomi, dan ruang budaya",
];

export default function VisiMisi() {
  return (
    <Layout>
      <div className="w-screen bg-[#f4fcfc] py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-950">Visi dan Misi</h1>
          <div className="flex items-center text-sm text-gray-500 mt-2 space-x-1">
            <a href="/" className="hover:underline text-blue-950 font-medium">
              Home
            </a>
            <span>&gt;</span>
            <span className="text-blue-500 font-medium">Visi dan Misi</span>
          </div>
        </div>
      </div>
      <div className="p-12">
        <div className="justify-center items-center mx-auto max-w-7xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Visi</h2>
          <p className="text-sm md:text-base text-gray-600 font-semibold mb-2">Visi Gubernur Jawa Timur :</p>
          <p className="text-gray-600 italic max-w-4xl mx-auto mb-12">
            “Terwujudnya Masyarakat Jawa Timur yang Adil, Sejahtera, Unggul, dan Berakhlak dengan Tata Kelola Pemerintahan yang Parsipatoris Inklusif Melalui Kerja Bersama dan Semangat Gotong Royong”. Dari visi ini selanjutnya dijabarkan
            melalui 4 (empat) misi yaitu:
          </p>
        </div>

        {/* Misi */}
        <div className="justify-center items-center mx-auto max-w-7xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Misi</h2>
          <p className="text-sm md:text-base text-gray-600 font-semibold mb-4">Misi Gubernur Jawa Timur :</p>
          <ol className="text-gray-700 text-left max-w-4xl mx-auto list-decimal list-inside space-y-3">
            {MISI_LIST.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-12 mt-10 text-center">
          <div>
            <h3 className="text-xl font-bold mb-1">Tujuan</h3>
            <p className="text-gray-700">Meningkatkan Derajat Kesehatan Masyarakat</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-1">Motto</h3>
            <p className="text-gray-700">Kepuasan Pelanggan Prioritas Kami</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
