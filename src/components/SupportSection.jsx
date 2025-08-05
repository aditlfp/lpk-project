import bg from "../assets/Test1.jpg";
import kab from "../assets/kab.png";
import kemnak from "../assets/Kemnaker.webp";
import kp2 from "../assets/KP2MII.webp";

const SupportSection = () => {
  const dinasLogos = [
    { name: "DEPOK", src: kab },
    { name: "SULAWESI", src: kab },
    { name: "BOLAANG MONGONDOW", src: kab },
    { name: "SUKABUMI", src: kab },
    { name: "CILACAP", src: kab },
    { name: "TANGERANG", src: kab },
    { name: "KOTAMOBAGU", src: kab },
    { name: "CIREBON", src: kab },
    { name: "SUKABUMI", src: kab },
    { name: "BOGOR", src: kab },
    { name: "CIREBON", src: kab },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-no-repeat bg-right bg-cover z-0"
        style={{ backgroundImage: `url(${bg})` }}
      />

      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-[#f8c8dcad] opacity-80 z-10" />

      {/* Content */}
      <div className="relative z-20 py-10 px-5">
        <div className="max-w-7xl mx-auto text-center flex flex-col lg:flex-row justify-center items-center">
          <div className="lg:max-w-1/3">
            <h1 className="text-3xl md:text-5xl font-bold text-black tracking-tight leading-snug text-center lg:text-start">
              Dukungan dan Kerjasama Resmi Asa Hikari Mulya Jepang
            </h1>

            <p className="my-8 text-base md:text-xl text-black tracking-normal leading-relaxed font-semibold">
              Telah diakui resmi oleh:
            </p>

            <div className="flex justify-center items-center gap-10 mt-6">
              <img
                src={kemnak}
                alt="Kemnaker"
                className="w-24 h-auto md:max-w-[8rem] md:h-auto"
              />
              <img
                src={kp2}
                alt="BP2MI"
                className="w-24 h-auto md:max-w-[8rem] md:h-auto"
              />
            </div>
          </div>

          <div>
            <div className="divider md:text-xl my-8 text-black font-semibold">
              Dinas Tenaga Kerja
            </div>

            <div className="flex flex-wrap justify-center md:grid md:grid-cols-3 lg:grid-cols-5 md:gap-8 md:place-items-center">
              {dinasLogos.map((logo, idx) => (
                <div key={idx} className="text-center w-1/2 md:w-auto">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="h-20 md:max-w-[8rem] md:h-auto mx-auto object-contain"
                  />
                  <p className="my-2 text-sm md:text-lg font-medium text-gray-700">
                    {logo.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
