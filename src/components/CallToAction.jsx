import ButtonBlue from "./partials/ButtonBlue";

const CallToAction = () => {
  return (
    <section className="relative z-10 -mt-10 md:-mt-24 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg px-6 py-10 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Text */}
        <div className="w-full md:w-3/5 lg:w-3/4">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 leading-snug mb-3">
            Percayakan Kepada Kami Bahasa Anda dan Berangkat Ke Jepang
            Secepatnya
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Asa Hikari Mulya Pusat Pelatihan Bahasa Jepang, menyediakan
            kurikulum pembelajaran yang berfokus untuk persiapan kerja ke
            Jepang. Bekerja sama dengan LPK/BLK yang berlokasi di wilayah
            Indonesia
          </p>
        </div>

        {/* Buttons */}
        <div className="w-full md:w-auto flex flex-col md:items-end gap-3">
         <ButtonBlue href={import.meta.env.VITE_URL_SIGN_UP} className={'hover:shadow-md btn-sm text-lg'} title={'Daftar Sekarang'} />
          <a
            href="#info"
            className="text-sm text-gray-700 hover:text-gray-900 transition"
          >
            Informasi Selengkapnya →
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
