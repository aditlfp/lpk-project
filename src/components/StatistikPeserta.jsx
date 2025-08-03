import React from "react";

const data = [
  { region: "Sumatera", value: 7 },
  { region: "Jawa", value: 48 },
  { region: "Sulawesi", value: 27 },
  { region: "Kalimantan", value: 10 },
  { region: "Nusa Tenggara", value: 2 },
  { region: "Papua", value: 1 },
];

const StatistikPeserta = () => {
  return (
    <section className="bg-[#061a44] text-white py-20 px-4 h-[70vh]">
      {/* Top Stats */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 text-center gap-8 mb-16">
        {/* 3 statistik cards */}
        <div className="flex flex-col justify-center items-center">
          {/* BookUser SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-book-user"
          >
            <path d="M15 13a3 3 0 1 0-6 0" />
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
            <circle cx="12" cy="8" r="2" />
          </svg>
          <p className="text-3xl font-bold mt-2">320+</p>
          <p className="text-sm mt-1">Peserta Aktif Belajar</p>
        </div>

        <div className="flex flex-col justify-center items-center">
          {/* Goal SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-goal"
          >
            <path d="M12 13V2l8 4-8 4" />
            <path d="M20.561 10.222a9 9 0 1 1-12.55-5.29" />
            <path d="M8.002 9.997a5 5 0 1 0 8.9 2.02" />
          </svg>
          <p className="text-3xl font-bold mt-2">115+</p>
          <p className="text-sm mt-1">Peserta Magang</p>
        </div>

        <div className="flex flex-col justify-center items-center">
          {/* Earth SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-earth"
          >
            <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" />
            <path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17" />
            <path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" />
            <circle cx="12" cy="12" r="10" />
          </svg>
          <p className="text-3xl font-bold mt-2">500+</p>
          <p className="text-sm mt-1">Peserta Di Jepang</p>
        </div>
      </div>

      {/* Text and Chart Section */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-12">
        {/* Text Content */}
        <div className="w-full lg:w-1/2">
          <h4 className="text-blue-400 text-sm font-semibold mb-2">
            Siapa Saja Yang Mendaftar di Asa Hikari Mulya
          </h4>
          <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-4">
            Lebih dari 300+ Peserta Didik Aktif Setiap Periode Pendaftaran
          </h2>
          <p className="text-gray-300 text-sm">
            Peserta Didik Asa Hikari Mulya berasal dari berbagai daerah di seluruh
            Indonesia. Dari Sabang sampai Merauke mereka memiliki mimpi yang
            sama: belajar dan bekerja di Jepang. Kami mendampingi mereka
            dengan proses yang efisien dan target kerja yang jelas.
          </p>
        </div>

        {/* Region Bar Chart */}
        <div className="w-full lg:w-1/2 space-y-4">
          {data.map((item, idx) => (
            <div key={idx}>
              <div className="flex justify-between text-sm mb-1">
                <span>{item.region}</span>
                <span>{item.value}%</span>
              </div>
              <div className="w-full bg-gray-700 h-2 rounded-full">
                <div
                  className="h-2 rounded-full bg-blue-400"
                  style={{ width: `${item.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatistikPeserta;
