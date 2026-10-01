import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PROPERTIES = [
  {
    id: 1,
    title: "Rumah Buah Batu",
    category: "Rumah",
    price: "Rp 370.000.000",
    address: "Jl. Jupiter Timur 1 BLOK C 2, Sekajati , Kec Buah Batu Kota Bandung",
    lt: "84 m²",
    lb: "166 m²",
    tgl: "Kamis 22 Oktober 2026",
    certificate: "SHM No.1687",
    contact: "081322264369",
    contactName: "Taufik",
    locationDesc: "Asset berupa rumah 2 lantai, di perumahan Margahayu Raya, dekat ke Metro Indah Mall (MIM)",
    images: [
      "/images/rumah1.jpg",
      "/images/rumah1.2.jpg"
    ]
  },
  {
    id: 2,
    title: "Rumah Kiara Condong",
    category: "Rumah",
    price: "Rp 800.000.000",
    address: "JL. Sariwates V No 2, Antapani Kidul, Antapani, Kota Bandung",
    lt: "70 m²",
    lb: "165 m²",
    tgl: "Senin 05 Oktober 2026",
    certificate: "SHM No.4402",
    contact: "081322264369",
    contactName: "Taufik",
    locationDesc: "Rumah 2 Lantai dekat Gor Sariwates Kiara Condong Bandung",
    images: [
      "/images/rumah2.jpg",
      "/images/rumah2.1.jpg"
    ]
  },
   {
    id: 3,
   title: "Rumah + Workshop Margaasih",
    category: "Rumah",
    price: "Rp 620.000.000",
    address: "Komplek Margaasih Jl. Jati Agung Blok B No 9 RT/RW 003/005, Desa Margaasih Kecamatan Margaasih Kabupaten Bandung",
    lt: "84 m²",
    lb: "166 m²",
    tgl: "Kamis 22 Oktober 2026",
    certificate: "SHM No.2477",
    contact: "081322264369",
    contactName: "Taufik",
    locationDesc: "Rumah 2 lantai dan tempat work shop didalam perumahan Margaasih",
    images: [
      "/images/rumah3.jpg",
      "/images/rumah3.1.jpg"
    ]
  },
  {
    id: 4,
    title: "Rumah Soreang",
    category: "Rumah",
    price: "Rp 400.000.000",
    address: "Komplek Soreang indah Desa Cingcin Kecamatan Soreang Kabupaten Bandung",
    lt: "90 m²",
    lb: "170 m²",
    tgl: "Rabu 14 Oktober 2026",
    certificate: "SHM No.4085",
    contact: "081322264369",
    contactName: "Taufik",
    locationDesc: "Bangunan rumah di komplek Soreang Indah Dekat dengan RSUD Otto Iskandar Dinata",
    images: [
      "/images/rumah4.jpg",
      "/images/rumah4.1.jpg"
    ]
  },
  {
    id: 4,
    title: "Rumah Soreang",
    category: "Rumah",
    price: "Rp 400.000.000",
    address: "Komplek Soreang indah Desa Cingcin Kecamatan Soreang Kabupaten Bandung",
    lt: "90 m²",
    lb: "170 m²",
    tgl: "Rabu 14 Oktober 2026",
    certificate: "SHM No.4085",
    contact: "081322264369",
    contactName: "Taufik",
    locationDesc: "Bangunan rumah di komplek Soreang Indah Dekat dengan RSUD Otto Iskandar Dinata",
    images: [
      "/images/rumah5.1.jpg",
      "/images/rumah5.jpg"
    ]
  }
];

const CATEGORIES = ["Semua", "Rumah", "Ruko", "Kantor"];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [activeProperty, setActiveProperty] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const filteredProperties = selectedCategory === "Semua"
    ? PROPERTIES
    : PROPERTIES.filter(p => p.category === selectedCategory);

  const openDetail = (property) => {
    setActiveProperty(property);
    setActiveImageIndex(0);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* Background Glow Deco */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-cyan-500/10 via-blue-600/5 to-transparent blur-3xl pointer-events-none" />

      {/* NAVBAR / HEADER LOGO */}
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            {/* Opsi A: Menggunakan Gambar File Logo (Simpan logo di folder public/logo.png) */}
            {/* <img src="/logo.png" alt="Logo Properti" className="h-10 w-auto object-contain" /> */}

            {/* Opsi B: Logo Ikon SVG Modern (Bisa dipakai langsung tanpa file gambar) */}
                <img 
              src="/images/logo.png" 
              alt="Logo" 
              className="w-20 h-20 object-contain" 
            />

            <div className="flex flex-col">
             <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-[#0857c3] via-[#0070C0] to-[#00A3E0] bg-clip-text text-transparent">
                BANSAR
              </span>
              <span className="text-[10px] tracking-widest text-blue-400 font-semibold uppercase">
                BRI BO Dewi Sartika Bandung
              </span>
            </div>
          </motion.div>

          
        </div>
      </nav>

      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <header className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-4 uppercase">
              Katalog Bansar
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-cyan-400 bg-clip-text text-transparent mb-6">
              Temukan Hunian Impian Anda
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Jelajahi katalog lelang agunan rumah, ruko dan kantor, legalitas aman, dan lokasi strategis.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 mt-8"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25 font-semibold scale-105"
                    : "bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </header>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProperties.map((property, idx) => (
              <motion.div
                layout
                key={property.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                onClick={() => openDetail(property)}
                className="group bg-slate-900/80 border border-slate-800/80 rounded-2xl overflow-hidden cursor-pointer backdrop-blur-sm hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col"
              >
                <div className="relative h-64 overflow-hidden bg-slate-800">
                  <img
                    src={property.images[0]}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                  
                  <span className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md border border-slate-700 text-cyan-400 text-xs px-3 py-1 rounded-full font-medium">
                    {property.category}
                  </span>

                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <div>
                      <p className="text-xs text-slate-400 mb-1">Harga Penawaran</p>
                      <p className="text-xl font-bold text-cyan-400">{property.price}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2 line-clamp-1">
                      {property.title}
                    </h3>
                    <p className="text-xs text-slate-400 mb-6 line-clamp-1 flex items-center gap-1">
                      📍 {property.address}
                    </p>

                    <div className="grid grid-cols-2 gap-3 mb-6 bg-slate-950/50 p-3 rounded-xl border border-slate-800/50 text-xs">
                      <div>
                        <span className="text-slate-500 block">Luas Tanah</span>
                        <span className="font-semibold text-slate-200">📐 {property.lt}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block">Luas Bangunan</span>
                        <span className="font-semibold text-slate-200">🏠 {property.lb}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block">Tanggal Lelang</span>
                        <span className="font-semibold text-slate-200">📅 {property.tgl}</span>
                      </div>
                    </div>
                  </div>

                  <button className="w-full py-3 bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-slate-200 font-semibold rounded-xl text-sm transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-cyan-500/20">
                    <span>Lihat Detail Lengkap</span>
                    <span>→</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Modal Pop-Up Detail Interaktif */}
        <AnimatePresence>
          {activeProperty && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProperty(null)}
              className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md p-4 sm:p-6 lg:p-8 flex items-center justify-center overflow-y-auto"
            >
              <motion.div
                initial={{ scale: 0.95, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.95, y: 20, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-slate-900 border border-slate-800 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
              >
                <button
                  onClick={() => setActiveProperty(null)}
                  className="absolute top-4 right-4 z-10 bg-slate-950/80 hover:bg-slate-800 border border-slate-700 text-slate-400 hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-all"
                >
                  ✕
                </button>

                <div className="p-6 border-b border-slate-800">
                  <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden bg-slate-950 mb-4">
                    <img
                      src={activeProperty.images[activeImageIndex]}
                      alt="Gambar Utama"
                      className="w-full h-full object-cover transition-all duration-500"
                    />
                  </div>

                  <div className="flex gap-3 overflow-x-auto pb-2">
                    {activeProperty.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImageIndex(idx)}
                        className={`relative h-20 w-28 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all ${
                          activeImageIndex === idx ? "border-cyan-400 scale-105" : "border-transparent opacity-60 hover:opacity-100"
                        }`}
                      >
                        <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-8">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-slate-800/80 pb-6">
                    <div>
                      <span className="text-cyan-400 font-medium text-xs bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                        {activeProperty.category}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                        {activeProperty.title}
                      </h2>
                      <p className="text-slate-400 text-sm mt-1">📍 {activeProperty.address}</p>
                    </div>
                    <div className="text-left sm:text-right">
                      <p className="text-xs text-slate-400">Harga Properti</p>
                      <p className="text-2xl sm:text-3xl font-extrabold text-cyan-400">{activeProperty.price}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                      Spesifikasi Properti
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800/80">
                        <p className="text-slate-500 text-xs">Luas Tanah (LT)</p>
                        <p className="text-lg font-bold text-white mt-1">📐 {activeProperty.lt}</p>
                      </div>
                      <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800/80">
                        <p className="text-slate-500 text-xs">Luas Bangunan (LB)</p>
                        <p className="text-lg font-bold text-white mt-1">🏠 {activeProperty.lb}</p>
                      </div>
                      <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800/80 col-span-2 sm:col-span-1">
                        <p className="text-slate-500 text-xs">Legalitas / Sertifikat</p>
                        <p className="text-sm font-bold text-emerald-400 mt-1">📜 {activeProperty.certificate}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
                      Deskripsi & Keunggulan Lokasi
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed bg-slate-950/40 p-4 rounded-2xl border border-slate-800/50">
                      {activeProperty.locationDesc}
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-emerald-950/40 via-slate-950 to-slate-950 p-6 rounded-2xl border border-emerald-500/20 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div>
                      <p className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">Contact Person / Agent</p>
                      <p className="text-lg font-bold text-white mt-0.5">{activeProperty.contactName}</p>
                      <p className="text-xs text-slate-400">Hubungi langsung via WhatsApp</p>
                    </div>

                    <a
                      href={`https://wa.me/${activeProperty.contact}?text=Halo%20${encodeURIComponent(activeProperty.contactName)},%20saya%20tertarik%20dengan%20properti%20*${encodeURIComponent(activeProperty.title)}*%20di%20${encodeURIComponent(activeProperty.address)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2"
                    >
                      <span>💬 Chat WhatsApp</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}