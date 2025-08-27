import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import DetailModal from './partials/DetailModal';
import api from '../utils/axios';

  // --- Helper function untuk mendapatkan inisial nama ---
  const getInitials = (name) => {
    if (!name || typeof name !== 'string') return '?';
    const names = name.split(' ');
    if (names.length > 1) {
      return `${names[0][0]}${names[1][0]}`.toUpperCase();
    }
    return `${names[0][0]}`.toUpperCase();
  };


// / --- Fungsi untuk mengubah data API ke format yang dibutuhkan ---
const transformApiData = (apiData) => {
  const formattedData = [];
  
  apiData.forEach(period => {
    // Cek dan proses data Siswa Terbaik
    if (period.best_student) {
      formattedData.push({
        id: `student-${period.best_student.id}`,
        category: "Siswa Terbaik",
        name: period.best_student.nama_lengkap,
        image: `https://placehold.co/600x400/003366/FFFFFF?text=${getInitials(period.best_student.nama_lengkap)}`,
        description: period.best_student.prestasi || "Siswa dengan prestasi gemilang selama masa pendidikan.",
        details: {
          "Nama Lengkap": period.best_student.nama_lengkap,
          "Jurusan": period.best_student.jurusan || "Tidak disebutkan",
          "Angkatan": period.best_student.angkatan || "Tidak disebutkan",
          "Prestasi": period.best_student.prestasi || "Tidak disebutkan",
        }
      });
    }

    // Cek dan proses data Pekerja Lapangan Terbaik
    if (period.field_officiers) {
      formattedData.push({
        id: `officer-${period.field_officiers.id}`,
        category: "Pekerja Lapangan Terbaik",
        name: period.field_officiers.nama_lengkap,
        image: `https://placehold.co/600x400/F5A200/000000?text=${getInitials(period.field_officiers.nama_lengkap)}`,
        description: `Visi: "${period.field_officiers.visi}"`,
        details: {
          "Nama Lengkap": period.field_officiers.nama_lengkap,
          "Area Penugasan": period.field_officiers.area_penugasan,
          "Rating Kinerja": period.field_officiers.performance_rating,
          "Misi": period.field_officiers.misi,
        },
        document: {
          "file_path" : period.field_officiers.document.file_path
        }
      });
    }

    // Cek dan proses data Sensei Terbaik
    if (period.sensei) {
      formattedData.push({
        id: `sensei-${period.sensei.id}`,
        category: "Sensei Terbaik",
        name: period.sensei.nama_lengkap,
        image: `https://placehold.co/600x400/EFEFEF/000000?text=${getInitials(period.sensei.nama_lengkap)}`,
        description: `Keunggulan: "${period.sensei.keunggulan_diri}"`,
        details: {
          "Nama Lengkap": period.sensei.nama_lengkap,
          "Bidang Keahlian": period.sensei.bidang_keahlian || "Tidak disebutkan",
          "Pengalaman": period.sensei.pengalaman || "Tidak disebutkan",
          "Hobi": period.sensei.hobi || "Tidak disebutkan",
        }
      });
    }
  });

  return formattedData;
};

function CandidateCard({ onSeeAllClick }) {
  const [awardWinnersData, setAwardWinnersData] = useState([]);
  const [[page, direction], setPage] = useState([0, 0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [datas, setDatas] = useState(null);

  // --- Animation Variants ---
  const slideVariants = {
    enter: (direction) => ({ x: direction > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({ x: direction < 0 ? '100%' : '-100%', opacity: 0 }),
  };
  const contentContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delayChildren: 0.3, staggerChildren: 0.15 } }
  };
  const contentItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
  };

// --- Fetch data from API ---
const fetchData = async () => {
  try {
    const response = await api.get('/active-kandidats');
    setDatas(response.data.data || []); // pastikan default []
  } catch (error) {
    console.error("Error fetching data:", error);
    setDatas([]); // fallback supaya tidak crash
  }
};

// --- Trigger fetch on mount ---
useEffect(() => {
  fetchData();
}, []);

// --- Transform data after `datas` is updated ---
useEffect(() => {
  if (datas && datas.length > 0) {
    const formattedData = transformApiData(datas);
    setAwardWinnersData(formattedData);
  }
}, [datas]);


  // --- Logika untuk carousel ---
  const currentIndex = awardWinnersData.length > 0 ? (page < 0 ? (awardWinnersData.length - (Math.abs(page) % awardWinnersData.length)) % awardWinnersData.length : page % awardWinnersData.length) : 0;
  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };
  const handleViewDetails = (person) => {
    setSelectedPerson(person);
    setIsModalOpen(true);
  };
  const handleCloseModal = () => setIsModalOpen(false);

  // --- Auto-slide effect ---
  useEffect(() => {
    if (awardWinnersData.length > 1) {
      const timer = setInterval(() => paginate(1), 5000);
      return () => clearInterval(timer);
    }
  }, [page, awardWinnersData.length]);

  if (awardWinnersData.length === 0) {
    return (
      <div className="bg-[#F4F8FB] min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Memuat data talenta terbaik...</p>
      </div>
    );
  }
  
  const person = awardWinnersData[currentIndex];


  return (
   <>
    <div className="bg-[#F4F8FB] min-h-screen font-sans flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#003366]">Talenta Terbaik Kami</h1>
          <p className="mt-2 text-lg text-gray-600 max-w-2xl mx-auto">Figur-figur inspiratif yang menjadi bukti nyata dari komitmen dan kualitas kami.</p>
        </div>

        {/* --- Unified Responsive Carousel --- */}
        <div className="relative h-[550px] sm:h-[480px] md:h-[400px]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ x: { type: "spring", stiffness: 250, damping: 30 }, opacity: { duration: 0.3 } }}
              className="absolute w-full h-full"
            >
              <div className="bg-white shadow-lg rounded-2xl overflow-hidden md:flex h-full">
                <div className="md:w-1/2">
                  <img src={
                      person?.document?.file_path != undefined
                      ? import.meta.env.VITE_STORAGE_IMG + person?.document?.file_path
                      : person.image
                    } alt={person.nama_lengkap} className="w-full h-64 md:h-full object-cover" onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/CCCCCC/FFFFFF?text=Image+Error'; }} />
                </div>
                <motion.div className="p-6 md:p-8 lg:p-12 flex flex-col justify-center md:w-1/2" variants={contentContainerVariants} initial="hidden" animate="visible">
                  <motion.h3 variants={contentItemVariants} className="text-2xl lg:text-3xl font-bold text-[#003366]">{person.category}</motion.h3>
                  <motion.p variants={contentItemVariants} className="text-lg font-medium text-gray-800 mt-1">{person.name}</motion.p>
                  <motion.p variants={contentItemVariants} className="mt-4 text-gray-600 flex-grow">{person.description}</motion.p>
                  <motion.div variants={contentItemVariants}>
                    <motion.button onClick={() => handleViewDetails(person)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-6 w-full sm:w-auto self-start bg-[#F5A200] text-white font-bold py-3 px-8 rounded-full hover:bg-[#E09300] focus:outline-none focus:ring-4 focus:ring-[#F5A200]/50">
                      Lihat Detail
                    </motion.button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
          <button onClick={() => paginate(-1)} className="absolute top-1/2 left-2 md:-left-4 transform -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow-md transition z-10">
            <ChevronLeft className="text-[#003366]" size={28} />
          </button>
          <button onClick={() => paginate(1)} className="absolute top-1/2 right-2 md:-right-4 transform -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow-md transition z-10">
            <ChevronRight className="text-[#003366]" size={28} />
          </button>
        </div>
        
        <div className="flex justify-center mt-6 space-x-2">
          {awardWinnersData.map((_, index) => (
            <button key={index} onClick={() => { const diff = index - currentIndex; setPage([page + diff, diff > 0 ? 1 : -1]); }} className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-[#003366] scale-125' : 'bg-gray-300 hover:bg-gray-400'}`} />
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center bg-white p-8 rounded-2xl shadow-md border border-gray-200">
          <h3 className="text-2xl font-bold text-[#003366]">Jumlah Pencari Kerja Terus Bertambah</h3>
          <p className="mt-2 text-gray-600">Bergabunglah dengan ratusan talenta lainnya yang siap meraih masa depan cerah di Jepang.</p>
          <motion.button onClick={() => onSeeAllClick() } whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-6 bg-[#003366] text-white font-bold py-3 px-8 rounded-full hover:bg-[#002244] focus:outline-none focus:ring-4 focus:ring-[#003366]/50">
            Temukan Lebih Lanjut
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && <DetailModal person={selectedPerson} onClose={handleCloseModal} />}
      </AnimatePresence>
    </div>
   </>
  )
}

export default CandidateCard
