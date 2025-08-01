import ButtonEffect from './partials/ButtonEffect';
import penerbangan from "../assets/Penerbangan.png"
import perhotelan from "../assets/Perhotelan.webp"
import it from "../assets/IT.webp"

const SSWTokuteiGinou = () => {
  const industries = [
    {
      id: 1,
      title: "Industri Penerbangan",
      subtitle: "(航空業)",
      icon: penerbangan,
      description: "Industri Penerbangan ini berupa penanganan lapangan bandara (membantu ground running, menangani baggage/cargo, dll.), pemeliharaan pesawat (pemeliharaan pesawat dan perangkatnya)",
      workers: "1.700 - 2.000 Orang",
      bgColor: "bg-blue-100",
      iconBg: "bg-transparant"
    },
    {
      id: 2,
      title: "Industri Perhotelan",
      subtitle: "(宿泊業)",
      icon: perhotelan,
      description: "Industri Perhotelan berupa penyediaan servis akomodasi seperti: front desk penginapan, perencanaan/relasi publik, hospitality, service restoran.",
      workers: "20.000 - 22.000 Orang",
      bgColor: "bg-orange-100",
      iconBg: "bg-transparant"
    },
    {
      id: 3,
      title: "Industri Elektronik Informatika",
      subtitle: "(電気・電子情報関連産業)",
      icon: it,
      description: "Industri Elektronik Informatika melahirkan banyak perusahaan teknologi terkemuka dunia seperti: Sony, Panasonic, Toshiba, dan masih banyak lagi, serta Produk-produk elektronik Jepang terkenal",
      workers: "5.000 - 7.000 Orang",
      bgColor: "bg-gray-100",
      iconBg: "bg-transparant"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20 relative overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        
        {/* Animated decorative shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 opacity-20">
          <div className="absolute top-8 right-8 w-40 h-40 border-2 border-blue-300 rounded-2xl transform rotate-12 animate-pulse"></div>
          <div className="absolute top-16 right-16 w-32 h-32 border border-purple-300 rounded-full animate-bounce" style={{animationDuration: '3s'}}></div>
          <div className="absolute top-20 right-32 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-400 rounded-xl transform rotate-45 opacity-30 animate-spin" style={{animationDuration: '8s'}}></div>
          <div className="absolute top-32 right-20 w-16 h-16 border-2 border-cyan-300 rounded-lg transform -rotate-12 animate-pulse" style={{animationDuration: '2s'}}></div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-80 h-80 opacity-15">
          <div className="absolute bottom-8 left-8 w-32 h-32 border-2 border-cyan-300 rounded-full animate-pulse" style={{animationDuration: '2.5s'}}></div>
          <div className="absolute bottom-16 left-16 w-40 h-40 border border-blue-300 rounded-2xl transform -rotate-12 animate-bounce" style={{animationDuration: '4s'}}></div>
          <div className="absolute bottom-24 left-32 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full opacity-40 animate-ping" style={{animationDuration: '3s'}}></div>
          <div className="absolute bottom-32 left-24 w-24 h-24 border-2 border-purple-300 rounded-xl transform rotate-45 animate-spin" style={{animationDuration: '10s'}}></div>
        </div>
        
        {/* Center decorative elements */}
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-blue-400 rounded-full opacity-30 animate-ping" style={{animationDuration: '2s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-purple-400 rounded-full opacity-40 animate-pulse" style={{animationDuration: '1.5s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-cyan-400 rounded-full opacity-50 animate-bounce" style={{animationDuration: '2.5s'}}></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent drop-shadow-lg">
            Specified Skilled Worker (SSW) / Tokutei Ginou
          </h1>
          <p className="text-blue-100 max-w-4xl mx-auto leading-relaxed mb-6 text-lg backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10">
            Specified Skilled Workers (SSW) atau Tokutei Ginou 特定技能 adalah status visa/izin tinggal bagi warga negara 
            asing di Jepang yang mulai berlaku sejak 1 April 2019. Pemegang visa SSW dapat bekerja di perusahaan Jepang 
            dengan hak dan kewajiban yang sama dengan pekerja Jepang.
          </p>
          <p className="text-cyan-200 text-sm bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full px-6 py-2 inline-block backdrop-blur-sm border border-white/10">
            ✨ Dikutip dari Laman BP2TKI
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            17 Bidang Pekerjaan SSW
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Dengan berkurangnya tenaga kerja di Jepang, ada 17 bidang industri yang terdampak dengan tidak 
            tercukupinya kebutuhan tenaga kerja untuk masa yang akan datang. Bidang itulah yang nantinya diisi dengan 
            Specified Skilled Worker (SSW)/Tokutei Ginou 特定技能ini. Ke 17 Bidang tersebut adalah :
          </p>
        </div>

        {/* Industry Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {industries.map((industry) => (
            <div key={industry.id} className="group card bg-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-blue-200 relative overflow-hidden">
              {/* Card gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="card-body text-center p-8 relative z-10 flex justify-center items-center">
                {/* Icon with enhanced styling */}
                <div className={`w-32 h-32 ${industry.iconBg}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                  <span className="text-4xl text-white relative z-10">
                    <img src={industry.icon} alt={industry.icon} srcset={industry.icon} />
                  </span>
                </div>

                {/* Title with gradient */}
                <h3 className="card-title text-xl font-bold bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent justify-center mb-2 group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {industry.title}
                </h3>
                <p className="text-gray-500 mb-6 font-medium text-lg">{industry.subtitle}</p>

                {/* Description with better styling */}
                <p className="text-gray-600 text-sm leading-relaxed mb-8 group-hover:text-gray-700 transition-colors duration-300">
                  {industry.description}
                </p>

                {/* Workers Count with gradient background */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 shadow-inner group-hover:from-blue-100 group-hover:to-purple-100 transition-all duration-300 border border-blue-100">
                  <p className="font-bold text-gray-800 text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Dibutuhkan {industry.workers}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Lihat Selengkapnya Button */}
          <ButtonEffect />

      </div>
    </div>
  );
};

export default SSWTokuteiGinou;