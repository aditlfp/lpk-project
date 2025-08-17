const FooterAction = () => {
  return (
    <section className="relative z-10 -mt-20 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-2xl px-6 py-10 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Text */}
        <div className="w-full md:w-3/4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-snug mb-3">
            Daftar Sekarang dan Mulai Karirmu di Jepang!
          </h2>
          <p className="text-gray-600 text-sm md:text-lg leading-relaxed">
            Jangan lewatkan kesempatan emas ini! Bergabunglah dengan Asa Hikari
            Mulya dan raih sukses karirmu di Jepang! Kursi Kami terbatas!
          </p>
        </div>

        {/* Buttons */}
        <div className="w-full md:w-auto flex flex-col md:items-end gap-3">
          <a
            href={import.meta.env.VITE_URL_SIGN_UP}
            className="bg-orange-400 hover:bg-orange-500 text-white font-semibold md:text-center px-6 py-3 rounded-md transition duration-200"
          >
            Daftar Sekarang
          </a>
        </div>
      </div>
    </section>
  );
};

export default FooterAction;
