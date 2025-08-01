import React from 'react';
import { Play, Calendar, Users } from 'lucide-react';

const videoData = [
  {
    id: 1,
    title: "Kegiatan Peserta ISO Jepang",
    thumbnail: "https://placehold.co/400x250",
    duration: "5:45",
    category: "ISO Jepang",
    tag: "Kegiatan",
    description: "Kegiatan Peserta ISO Jepang Dalam Mengikuti Kegiatan Besar dalam Sebuah Kurikulum ISO Jepang. Kurikulum yang Mengajakan Peserta ISO Menjaga Berkualitas Jepang dan Manjur Menghadapi Keadaan Seridaki Dimengerti Pada Perusahaan Jepang."
  },
  {
    id: 2,
    title: "Aplikasi Pera Pera",
    thumbnail: "https://placehold.co/400x250",
    duration: "1:43",
    category: "ISO Jepang",
    tag: "Registrasi",
    description: "Peserta Didik ISO Jepang Online Akan diberikan Pembelajaran Bahasa Jepang via Aplikasi buat ISO Jepang yang bernama Pera Pera Aplikasi ini memfig ukan men bantu peserta mencapai Bahasa Jepang dalam dengan Cepat sekaligus memahami Huruf Hiragana."
  },
  {
    id: 3,
    title: "Highlight Online Class Bersama Ibu Uda Fauzyah Mentri Ketenagakerjaan",
    thumbnail: "https://placehold.co/400x250",
    duration: "6:32",
    category: "ISO Jepang",
    tag: "Program",
    description: "Pada Akhir Tahun 2021 ISO Jepang Mengadakan Class Online Untuk Peserta ISO Jepang Dalam Mengikuti Kegiatan Online Bersama Pendamfkan Kota Palu. Class Online ISO Jepang Dihata Langsung Secara Online via Zoom Oleh Ibu Ida Fauziyah Mentri Ketenagakerjaan Republik Indonesia Acara Berlangsung Sangat Seru dan Spektakular."
  },
  {
    id: 4,
    title: "20 Peserta Lulus Wawancara di Perusahaan Jepang Bidang Perakitan Mobil",
    thumbnail: "https://placehold.co/400x250",
    duration: "12:31",
    category: "ISO Jepang",
    tag: "Testimoni",
    description: "Testimoni 20 Peserta yang Lulus Wawancara Perusahaan Jepang di Bidang Perakitan Mobil Perusahaan Wawancara Jepang dilI Toyota ini Berhasil dari Berbagai Faktor yang ada di Indonesia Mereka adalah yang bersekolah dari Medan Acunaela, Makassar, Lampung, Janti Bersekolah Provinsi yang ada di Pulau Jawa Para Peserta Uni Sudah Berangkat ke Jepang Untuk Mengikuti Kursus Kerja Selama 3 Tahun."
  }
];

export default function VideoGallerySection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-blue-400 text-sm font-medium mb-2 tracking-wide">
            Cuplikan Video ISO Jepang
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Video Pembelajaran & Kegiatan ISO Jepang
          </h2>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videoData.map((video) => (
            <div key={video.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Video Thumbnail */}
              <div className="relative">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-64 object-cover"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center group hover:bg-black/40 transition-colors cursor-pointer">
                  <div className="bg-white/90 rounded-full p-4 group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-blue-600 ml-1" fill="currentColor" />
                  </div>
                </div>
                {/* Duration Badge */}
                <div className="absolute bottom-4 right-4 bg-black/80 text-white px-2 py-1 rounded text-sm font-medium">
                  {video.duration}
                </div>
              </div>

              {/* Video Info */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex gap-2 mb-3">
                  <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    <Calendar className="w-3 h-3" />
                    {video.category}
                  </span>
                  <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    <Users className="w-3 h-3" />
                    {video.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {video.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
                  {video.description}
                </p>

                {/* Watch Button */}
                <button className="mt-4 inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors">
                  <Play className="w-4 h-4" fill="currentColor" />
                  Tonton Video
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="btn btn-md btn-warning text-white font-bold transition-transform duration-300 hover:-translate-y-2 hover:bg-blue-600 hover:border-0 shadow-none">
            Lihat Semua Video
          </button>
        </div>
      </div>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}