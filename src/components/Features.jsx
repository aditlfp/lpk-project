import { FaAward, FaClockRotateLeft, FaMedal, FaUserGraduate } from "react-icons/fa6";

const Features = () => {
  const features = [
    {
      title: "Belajar dari Ahli",
      description:
        "Para pengajar ISO Jepang merupakan Eks Jepang atau memiliki pengalaman magang dan bekerja di Jepang.",
      icon: <FaUserGraduate />, // Ganti dengan ikon SVG jika ada
      color: "hover:bg-amber-500/80 group-hover:text-white",
      textColor: "text-blue-500",
      titleColor: "text-black",
      descColor: "text-gray-400",
    },
    {
      title: "Target Lulus",
      description:
        "Peserta didik ISO Jepang dapat mencapai target lulus sertifikat bahasa JF-Test A2 dalam kurun waktu 1-2 bulan setelah belajar intensif di kelas ISO Jepang.",
      color: "bg-blue-600/85 hover:bg-amber-500/80 group-hover:text-white",
      icon: <FaMedal />,
      textColor: "text-white",
    },
    {
      title: "Durasi Belajar Singkat",
      description:
        "Kelas ISO Jepang memiliki durasi belajar yang singkat, tepat, cepat, dan tentunya sangat efektif untuk mencapai target lulus JF-Test A2.",
      icon: <FaClockRotateLeft />,
      color: "hover:bg-amber-500/80 group-hover:text-white",
      textColor: "text-blue-500",
      titleColor: "text-black",
      descColor: "text-gray-400",
    },
  ];

  return (
    <section className="flex flex-wrap justify-center items-stretch gap-6 p-8 my-12">
      {features.map((item, i) => (
        <div
          key={i}
          className={`group w-full md:w-[400px] p-6 rounded-lg ${item.color}
          } shadow-md transition-all ease-in-out duration-150 hover:-translate-y-2 duration-300 `}
        >
            <div className="flex justify-center items-start gap-4 max-w-[300px]">
                <div className={`text-4xl mt-2 ${item.textColor || "text-white"} group-hover:text-white`}>{item.icon}</div>
                <div>
                    <h3 className={`text-2xl font-semibold mb-2 ${item.titleColor  || "text-white"} group-hover:text-white`}>{item.title}</h3>
                    <p className={`text-sm font-[600] leading-relaxed ${item.descColor || "text-white"} group-hover:text-white`}>{item.description}</p>
                </div>
            </div>
        </div>
      ))}
    </section>
  );
};

export default Features;
