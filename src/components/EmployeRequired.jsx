import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EmployeRequired = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    setIsModalOpen(false);
  };

  const handleGoogleSignIn = () => {
    // Handle Google sign in logic here
    console.log("Google sign in clicked");
    setIsModalOpen(false);
  };
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const floatingVariants = {
    floating: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.2, 1],
      opacity: [0.6, 0.9, 0.6],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const rotateVariants = {
    rotate: {
      rotate: [0, 360],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <div className="hero min-h-[500px] pt-4 bg-gradient-to-br from-slate-700 via-slate-800 to-blue-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {/* Floating Orbs with matching colors */}
        <motion.div
          className="absolute top-16 left-16 w-32 h-32 bg-amber-400/15 rounded-full blur-2xl"
          variants={floatingVariants}
          animate="floating"
        ></motion.div>

        <motion.div
          className="absolute bottom-20 right-20 w-40 h-40 bg-orange-400/12 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="floating"
          transition={{ delay: 1 }}
        ></motion.div>

        <motion.div
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-400/15 rounded-full blur-xl"
          variants={floatingVariants}
          animate="floating"
          transition={{ delay: 0.5 }}
        ></motion.div>

        {/* Rotating Rings */}
        <motion.div
          className="absolute top-20 right-1/4 w-16 h-16 border-2 border-amber-400/25 rounded-full"
          variants={rotateVariants}
          animate="rotate"
        ></motion.div>

        <motion.div
          className="absolute bottom-32 left-1/3 w-12 h-12 border border-slate-400/30 rounded-full"
          variants={rotateVariants}
          animate="rotate"
          transition={{ direction: "reverse" }}
        ></motion.div>
      </motion.div>

      <motion.div
        className="hero-content flex-col lg:flex-row-reverse max-w-7xl mx-auto px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Right Side - Animated Images */}
        <motion.div
          className="flex-1 flex justify-center lg:justify-end relative"
          variants={itemVariants}
        >
          <div className="relative">
            {/* Professional Man - Main Card */}
            <motion.div
              className="avatar relative z-20"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="w-52 h-72 lg:w-60 lg:h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-500/30 bg-gradient-to-b from-slate-100 to-slate-200 backdrop-blur-sm"
                initial={{ x: 100, opacity: 0, rotateY: -20 }}
                animate={{ x: 0, opacity: 1, rotateY: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="w-full h-full bg-gradient-to-b from-slate-600 to-slate-700 flex items-end justify-center relative">
                  {/* Animated Avatar */}
                  <motion.div
                    className="w-24 h-24 bg-slate-400 rounded-full mb-8 relative border-3 border-amber-500/40"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <motion.div
                      className="absolute inset-2 bg-slate-300 rounded-full"
                      animate={{ scale: [1, 0.95, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    ></motion.div>
                  </motion.div>

                  {/* Floating Particles */}
                  <motion.div
                    className="absolute top-4 right-4 w-2 h-2 bg-amber-400/70 rounded-full"
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  ></motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Professional Woman - Secondary Card */}
            <motion.div
              className="avatar absolute -right-8 top-12 lg:-right-12 lg:top-16"
              whileHover={{ scale: 1.08, rotateY: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="w-44 h-60 lg:w-52 lg:h-68 rounded-3xl overflow-hidden shadow-xl border-4 border-orange-400/40 bg-gradient-to-b from-slate-100 to-slate-200 backdrop-blur-sm"
                initial={{ x: -50, opacity: 0, rotateY: 20 }}
                animate={{ x: 0, opacity: 1, rotateY: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <div className="w-full h-full bg-gradient-to-b from-slate-500 to-slate-600 flex items-end justify-center relative">
                  <motion.div
                    className="w-20 h-20 bg-slate-300 rounded-full mb-6 border-2 border-orange-400/50"
                    animate={{ scale: [1, 1.03, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }}
                  >
                    <motion.div
                      className="absolute inset-2 bg-slate-200 rounded-full"
                      animate={{ scale: [1, 0.92, 1] }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: 0.8,
                      }}
                    ></motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Decorative Animated Elements */}
            <motion.div
              className="absolute -top-6 -left-6 w-12 h-12 bg-amber-500/60 rounded-full shadow-lg"
              variants={pulseVariants}
              animate="pulse"
            ></motion.div>

            <motion.div
              className="absolute -bottom-4 -right-4 w-8 h-8 bg-orange-500/80 rounded-full shadow-lg"
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            ></motion.div>

            {/* Connection Lines */}
            <motion.div
              className="absolute top-1/2 left-1/2 w-px h-16 bg-gradient-to-b from-amber-400/40 to-transparent transform -translate-x-1/2"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            ></motion.div>
          </div>
        </motion.div>

        {/* Left Side - Animated Content */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          variants={itemVariants}
        >
          {/* Animated Badge */}
          <motion.div
            className="inline-flex items-center gap-3 bg-amber-500/80 text-slate-800 px-6 py-3 rounded-full text-sm font-bold mb-8 shadow-2xl backdrop-blur-sm"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 25px 50px -12px rgba(245, 158, 11, 0.4)",
            }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.div
              className="w-3 h-3 bg-slate-800 rounded-full"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            ></motion.div>
            <span>Untuk perusahaan yang tertarik pada pekerja asing</span>
          </motion.div>

          {/* Main Heading with Stagger Animation */}
          <motion.h1
            className="text-4xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6"
            variants={itemVariants}
          >
            <motion.span
              className="block bg-gradient-to-r from-white via-slate-100 to-white bg-clip-text text-transparent whitespace-nowrap"
              animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              "Tenaga kerja asing"
            </motion.span>
          </motion.h1>

          {/* Animated Subheading */}
          <motion.h2
            className="text-2xl lg:text-3xl text-slate-200 font-semibold mb-8 max-w-lg"
            variants={itemVariants}
            whileInView={{ scale: [0.95, 1.02, 1] }}
            transition={{ duration: 0.6 }}
          >
            Mengatasi kekurangan tenaga kerja industri
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-slate-300 mb-10 max-w-md text-lg leading-relaxed"
            variants={itemVariants}
          >
            Sesuai dengan tempat tinggal dan skill yang cocok
          </motion.p>

          {/* Animated Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            variants={itemVariants}
          >
            <motion.button
              className="btn btn-lg bg-amber-500 text-slate-800 hover:bg-amber-400 border-none shadow-2xl font-bold px-10 rounded-full"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(245, 158, 11, 0.3)",
                y: -2,
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
              onClick={() => setIsModalOpen(true)}
            >
              <motion.span
                animate={{ x: [0, 2, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Daftarkan Perusahaan Anda
              </motion.span>
            </motion.button>

            <motion.button
              className="btn btn-lg btn-outline border-2 border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-slate-800 hover:border-amber-500 px-10 rounded-full font-bold backdrop-blur-sm"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(245, 158, 11, 0.2)",
                y: -2,
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <span className="mr-3">Pertama, Unduh Dokumen</span>
              <motion.svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </motion.svg>
            </motion.button>
          </motion.div>

          {/* Animated Trust Indicators */}
          <motion.div
            className="flex items-center justify-center lg:justify-start gap-8 mt-10 text-slate-300"
            variants={itemVariants}
          >
            {[
              { color: "bg-green-400", text: "Tersertifikasi", delay: 0 },
              { color: "bg-amber-400", text: "Terpercaya", delay: 0.2 },
              { color: "bg-slate-400", text: "Legal", delay: 0.4 },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5 + item.delay }}
              >
                <motion.div
                  className={`w-5 h-5 ${item.color} rounded-full shadow-lg`}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: item.delay,
                  }}
                ></motion.div>
                <span className="text-sm font-medium">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Animated Bottom Wave */}
      <motion.div
        className="absolute bottom-0 left-0 right-0"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 1.8 }}
      >
        <motion.svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-20 fill-current text-amber-400/15"
          animate={{
            d: [
              "M0,120 C200,80 400,40 600,60 C800,80 1000,100 1200,60 L1200,120 Z",
              "M0,120 C200,100 400,60 600,80 C800,100 1000,80 1200,100 L1200,120 Z",
              "M0,120 C200,80 400,40 600,60 C800,80 1000,100 1200,60 L1200,120 Z",
            ],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M0,120 C200,80 400,40 600,60 C800,80 1000,100 1200,60 L1200,120 Z"></path>
        </motion.svg>
      </motion.div>

      {/* Sign In/Register Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={(e) => {
                e.stopPropagation();
                setIsModalOpen(false);
              }}
            />

            {/* Modal Content */}
            <motion.div
              className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full mx-4 overflow-hidden"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with gradient */}
              <div className="bg-gradient-to-r from-slate-700 to-blue-800 p-6 text-white relative overflow-hidden">
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 bg-amber-400/20 rounded-full blur-2xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-2">
                    {isSignIn ? "Masuk ke Akun" : "Daftar Akun Baru"}
                  </h3>
                  <p className="text-slate-200 text-sm">
                    {isSignIn
                      ? "Masuk untuk melanjutkan pendaftaran perusahaan"
                      : "Buat akun untuk mendaftarkan perusahaan Anda"}
                  </p>
                </div>

                {/* Close Button */}
                <motion.button
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    setIsModalOpen(false);
                    e.stopPropagation();
                  }}
                  type="button"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </motion.button>
              </div>

              {/* Form Content */}
              <div className="p-6">
                {/* Google Sign In Button */}
                <motion.button
                  className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-200 hover:border-gray-300 rounded-xl py-3 px-4 font-medium text-gray-700 mb-6 shadow-sm hover:shadow-md transition-all"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleGoogleSignIn}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  {isSignIn ? "Masuk dengan Google" : "Daftar dengan Google"}
                </motion.button>

                {/* Divider */}
                <div className="relative flex items-center justify-center mb-6">
                  <div className="border-t border-gray-200 w-full"></div>
                  <span className="bg-white px-4 text-sm text-gray-500 font-medium">
                    atau
                  </span>
                  <div className="border-t border-gray-200 w-full"></div>
                </div>

                {/* Email/Password Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Email Input */}
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      placeholder="masukkan@email.anda"
                      required
                    />
                  </motion.div>

                  {/* Password Input */}
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      placeholder="Masukkan password"
                      required
                    />
                  </motion.div>

                  {/* Confirm Password (only for register) */}
                  {!isSignIn && (
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Konfirmasi Password
                      </label>
                      <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                        placeholder="Konfirmasi password"
                        required
                      />
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold py-3 px-4 rounded-xl shadow-lg hover:shadow-xl transition-all mt-6"
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {isSignIn ? "Masuk" : "Daftar"}
                  </motion.button>
                </form>

                {/* Toggle Sign In/Register */}
                <motion.div
                  className="text-center mt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <p className="text-gray-600 text-sm">
                    {isSignIn ? "Belum punya akun?" : "Sudah punya akun?"}
                    <motion.button
                      type="button"
                      className="text-amber-600 font-semibold ml-1 hover:text-amber-700"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setIsSignIn(!isSignIn);
                        setFormData({
                          email: "",
                          password: "",
                          confirmPassword: "",
                        });
                      }}
                    >
                      {isSignIn ? "Daftar di sini" : "Masuk di sini"}
                    </motion.button>
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EmployeRequired;
