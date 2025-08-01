import React, { useState, useEffect } from 'react';
import { BarChart3 } from 'lucide-react';

const statsData = [
  {
    label: "Kurikulum Bahasa Jepang",
    percentage: 94
  },
  {
    label: "Instruktur Bahasa Eks Jepang", 
    percentage: 97
  },
  {
    label: "Kecepatan Pengurusan Dokumen",
    percentage: 95
  }
];

const ProgressBar = ({ label, percentage, delay = 0 }) => {
  const [animatedWidth, setAnimatedWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedWidth(percentage);
    }, delay);

    return () => clearTimeout(timer);
  }, [percentage, delay]);

  return (
    <div className="mb-6 lg:mb-8">
      <div className="flex justify-between items-center mb-2 lg:mb-3">
        <span className="text-white text-sm lg:text-base">{label}</span>
        <span className="text-blue-300 text-sm lg:text-base font-semibold">{percentage}%</span>
      </div>
      <div className="w-full bg-slate-700/40 rounded-full h-1.5">
        <div 
          className="bg-blue-500 h-1.5 rounded-full transition-all duration-1500 ease-out"
          style={{ width: `${animatedWidth}%` }}
        />
      </div>
    </div>
  );
};

export default function ExperienceStatsSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-900">
      <div className="flex flex-col lg:flex-row min-h-screen">
        
        {/* Left Side - Content */}
        <div className="w-full lg:w-1/2 flex items-center py-12 lg:py-0 ml-30">
          <div className="px-6 sm:px-8 md:px-12 lg:pl-16 lg:pr-8 max-w-full mx-auto lg:mx-0">
            
            {/* Header */}
            <div className="mb-8 lg:mb-12">
              <p className="text-blue-400 text-sm mb-4 lg:mb-6 tracking-wide">
                Mengapa memilih ISO Jepang
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 lg:mb-8">
                Berpengalaman 15 Tahun dalam Pelatihan Kerja di Jepang
              </h1>
              <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
                ISO Jepang Terpercaya dan telah bekerjasama dengan lebih dari 40 LPK & BLK yang tersebar diseluruh Indonesia dan 
                berpengalaman 15 Tahun dalam Pelatihan Kerja di Jepang.
              </p>
            </div>

            {/* Progress Bars */}
            <div className="mb-8 lg:mb-12">
              {statsData.map((stat, index) => (
                <ProgressBar 
                  key={index}
                  label={stat.label}
                  percentage={stat.percentage}
                  delay={index * 300}
                />
              ))}
            </div>

            {/* Call to Action Card */}
            <div className="bg-blue-600 rounded-2xl p-3">
              <div className="flex flex-col items-start sm:items-center gap-4 lg:gap-6">
                <div className="bg-white/20 rounded-xl p-3 lg:p-4 flex-shrink-0">
                  <BarChart3 className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-white text-lg lg:text-xl font-semibold leading-relaxed">
                    Belajar Bahasa Jepang Cepat, Tepat, dan Target Sertifikat Bahasa Jepang
                  </h3>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-0">
          <div 
            className="h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('https://placehold.co/800x1080')`
            }}
          >
            {/* Gradient overlay to blend with left side */}
            <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-slate-800/60 lg:from-slate-800/60 to-transparent"></div>
          </div>
        </div>

      </div>
    </section>
  );
}