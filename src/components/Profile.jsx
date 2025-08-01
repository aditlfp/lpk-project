import React from "react";

function Profile() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-8 p-10">
      {/* Video */}
      <div className="rounded-2xl overflow-hidden shadow-lg">
        <video
          controls
          className="w-[500px] h-auto rounded-2xl shadow-xl border-4 border-blue-900"
        >
          <source src="/video/profil-iso.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Text with hover effect */}
      <div className="max-w-xl p-4 rounded-xl flex flex-col">
        <h2 className="text-3xl font-bold text-black text-center">
          Profil ISO Jepang
        </h2>
        <div>
          <p className="mt-4 text-gray-400 leading-relaxed font-semibold">
            ISO merupakan pusat pelatihan Bahasa Jepang yang menyediakan
            kurikulum pembelajaran yang berfokus untuk persiapan kerja ke
            Jepang.
          </p>
          <p className="mt-4 text-gray-400 leading-relaxed font-semibold">
            Kami Bekerja sama dengan LPK/BLK yang berlokasi di berbagai wilayah
            di Indonesia sehingga ISO membuka peluang secara luas kepada
            masyarakat Indonesia yang memiliki keinginan untuk menguasai
            kemampuan dalam berbahasa Jepang dan berbagai Skill untuk persiapan
            bekerja ke Jepang.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Profile;
