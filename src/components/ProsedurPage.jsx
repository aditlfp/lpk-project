import { BrainCircuit, IdCard, Languages, MapPinned, PlaneTakeoff, Speech, SquarePen, UserRoundSearch } from 'lucide-react';
import img1 from '../assets/img1.webp'
import img2 from '../assets/img2.webp'
import img3 from '../assets/img3.webp'

const steps = [
  { title: "Daftar", desc: "Mendaftar Online Pada Website Kami", icon: <SquarePen />, bgColor: "bg-blue-500" },
  { title: "Seleksi Peserta", desc: "Seleksi Meliputi Proses Seleksi dan Seleksi Berkas.", icon: <UserRoundSearch />, bgColor: "bg-blue-500" },
  { title: "Belajar Bahasa Jepang", desc: "Peserta belajar Bahasa Jepang hingga lulus JLPT N4/Fudokei A2.", icon: <Languages />, bgColor: "bg-blue-500" },
  { title: "Belajar Bidang Keahlian (Skill)", desc: "Peserta juga belajar skill tambahan di bidang yang sesuai.", icon: <BrainCircuit />, bgColor: "bg-blue-500" },
  { title: "Wawancara Dengan Perusahaan Jepang", desc: "Setelah memenuhi syarat, peserta mengikuti wawancara langsung.", icon: <Speech />, bgColor: "bg-blue-500" },
  { title: "Pengurusan Dokumen", desc: "Termasuk Visa, dokumen keberangkatan, dan dokumen kontrak kerja.", icon: <IdCard />, bgColor: "bg-blue-500" },
  { title: "Pra Keberangkatan", desc: "Training 1-3 bulan untuk kesiapan keberangkatan.", icon: <MapPinned />, bgColor: "bg-blue-500" },
  { title: "Pemberangkatan Ke Jepang", desc: "Peserta diberangkatkan ke Jepang dan mulai bekerja.", icon: <PlaneTakeoff />, bgColor: "bg-blue-500" },
];

const ProsedurPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header Info */}
      <div className="text-center mb-12">
        <div className="flex justify-center space-x-12 mb-6">
          <div className="text-center">
            <div className="text-3xl text-blue-600 font-bold">80+</div>
            <div className="text-sm">Perusahaan Magang</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-blue-600 font-bold">15+</div>
            <div className="text-sm">Perusahaan Penyalur</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-2 gap-4 items-start">
        {/* Images */}
        <div className="flex flex-col items-end">
          <div className="space-y-2 max-w-sm">
            <img className="w-[80%] rounded-lg shadow" src={img1} alt="Peserta Jepang 1" />
            <img className="w-[80%] rounded-lg shadow" src={img2} alt="Peserta Jepang 2" />
            <img className="w-[80%] rounded-lg shadow" src={img3} alt="Peserta Jepang 3" />
          </div>
        </div>

        {/* Text and Steps */}
        <div className="w-full">
          <p className="text-blue-600 font-medium text-sm mb-1">Proses Kami</p>
          <h2 className="text-2xl font-bold mb-4 leading-tight">
            Prosedur ISO Jepang dalam Memberangkatkan Peserta Didik ke Jepang
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            Proses dimulai dari pendaftaran hingga keberangkatan ke Jepang. Kami mendampingi peserta setiap langkahnya.
          </p>

          <div className="relative">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center justify-center space-x-4 relative pb-8 last:pb-0">
                {/* Vertical line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-12 w-0.5 h-12 bg-blue-200"></div>
                )}
                
                <div className={`${step.bgColor} w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 relative z-10`}>
                  <span className="text-white text-lg">{step.icon}</span>
                </div>
                
                <div className="flex-1 pt-2">
                  <h3 className="font-semibold text-base text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProsedurPage;