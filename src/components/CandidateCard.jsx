import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CandidateCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const candidates = [
    {
      id: 1,
      name: "Yudi Sopiyudin",
      location: "JFT Basic A2, Perhotelan,",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=96&fit=crop&crop=face",
      badge: "belajar",
    },
    {
      id: 2,
      name: "Siti Nurhaliza",
      location: "JFT Basic B1, Kuliner,",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=96&fit=crop&crop=face",
      badge: "aktif",
    },
    {
      id: 3,
      name: "Ahmad Ridwan",
      location: "JFT Basic A3, Teknologi,",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=96&fit=crop&crop=face",
      badge: "siap",
    },
    {
      id: 4,
      name: "Maria Gonzales",
      location: "JFT Basic B2, Perawatan,",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=96&fit=crop&crop=face",
      badge: "tersedia",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % candidates.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [candidates.length]);

  const currentCandidate = candidates[currentIndex];

  return (
    <div className="w-full bg-gray-50 p-4 md:p-6">
      <motion.div
        className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Header */}
        <motion.div
          className="bg-white px-4 py-3 border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-lg md:text-xl md:text-center font-semibold text-gray-800">
            Kandidat Terbaik
          </h2>
        </motion.div>

        <div className="flex flex-col md:items-center lg:flex-row">
          {/* Left Section - Profile Carousel */}
          <motion.div
            className="flex-1 p-6 lg:max-w-[25%]"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="flex flex-row items-start gap-4">
              {/* Profile Image */}
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-20 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg overflow-hidden shadow-md">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentCandidate.id}
                      src={currentCandidate.image}
                      alt="Profile"
                      className="w-full h-full object-cover"
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5 }}
                    />
                  </AnimatePresence>
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`badge-${currentCandidate.id}`}
                    className="absolute -bottom-1 -right-1 bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-medium shadow-lg"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 500 }}
                  >
                    {currentCandidate.badge}
                  </motion.div>
                </AnimatePresence>
              </motion.div>

              {/* Profile Info */}
              <div className="flex-1 min-w-0">
                <AnimatePresence mode="wait">
                  <motion.h3
                    key={`name-${currentCandidate.id}`}
                    className="text-lg font-semibold text-gray-900 mb-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {currentCandidate.name}
                  </motion.h3>
                </AnimatePresence>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={`location-${currentCandidate.id}`}
                    className="flex items-center gap-2 text-sm md:text-base text-gray-600 mb-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{currentCandidate.location}</span>
                  </motion.div>
                </AnimatePresence>

                <motion.button
                  className="text-blue-600 text-sm md:text-base font-medium hover:text-blue-800 transition-colors"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Lihat Profil &gt;
                </motion.button>

                {/* Carousel Indicators */}
                <div className="flex gap-2 mt-4">
                  {candidates.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? "bg-blue-600 w-6"
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Center Section - Description */}
          <motion.div
            className="flex-1 px-6 py-6 lg:border-l lg:border-r border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <motion.div
              className="text-center mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <p className="text-blue-600 font-medium text-sm md:text-base leading-relaxed">
                Dukungan total profesional untuk merekrut tenaga kerja asing
                untuk pertama kalinya
              </p>
              <motion.p
                className="text-blue-600 text-sm md:text-base mt-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                ~Merekrut tenaga kerja asing~
              </motion.p>
            </motion.div>

            <motion.div
              className="space-y-3 text-sm text-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <motion.div
                className="flex items-start gap-3"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <input
                  type="checkbox"
                  checked
                  readOnly
                  className="checkbox checkbox-sm mt-0.5 checkbox-primary"
                />
                <div>
                  <span className="md:text-lg font-medium">
                    Dukungan posting pekerjaan
                  </span>
                  <span className="ml-2 md:text-lg">
                    Temukan bakat yang dicari perusahaan Anda
                  </span>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-3"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <input
                  type="checkbox"
                  checked
                  readOnly
                  className="checkbox checkbox-sm mt-0.5 checkbox-primary"
                />
                <div>
                  <span className="md:text-lg font-medium">
                    Dukungan pemrosesan dokumen
                  </span>
                  <span className="ml-2 md:text-lg">
                    Spesialis akan mendukung Anda mulai dari persiapan dokumen
                    hingga pengajuan atas nama Anda.
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Section - Stats */}
          <motion.div
            className="w-full lg:w-80 bg-gradient-to-br from-blue-600 to-blue-700 text-white p-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="text-center">
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 300 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.div>

              <motion.div
                className="mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                <motion.span
                  className="text-3xl font-bold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                >
                  10841
                </motion.span>
                <span className="text-xl ml-1">+</span>
              </motion.div>

              <motion.p
                className="text-blue-100 text-sm md:text-lg mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.5 }}
              >
                Jumlah pencari kerja
              </motion.p>

              <motion.button
                className="inline-flex items-center gap-2 text-white font-medium text-base md:text-lg hover:text-blue-100 transition-colors group"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Temukan lebih lanjut</span>
                <motion.svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  whileHover={{ x: 3 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </motion.svg>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default CandidateCard;
