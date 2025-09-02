import React from 'react';
import { useApiData } from '../hooks/useApiData';
import VideoCard from '../components/sections/VideoCard';
import { ArrowLeft } from 'lucide-react';

// Reusable Loading and Error components
const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

const ErrorMessage = ({ message }) => (
  <div className="text-center py-20">
    <p className="text-red-500 text-lg">{message}</p>
  </div>
);


export default function AllVideosPage({ onBackClick }) {
  // We'll modify useApiData to fetch all videos
  const { videos, isLoading, error } = useApiData(true); // Pass true to fetch all

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <section className="pt-16 bg-gray-50 min-h-screen my-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header with Back Button */}
        <div className="flex items-center mb-12">
          <button 
            onClick={onBackClick} 
            className="p-2 rounded-full hover:bg-gray-200 transition-colors mr-4"
            aria-label="Kembali ke halaman utama"
          >
            <ArrowLeft className="w-6 h-6 text-gray-800" />
          </button>
          <div className="text-left">
            <p className="text-blue-400 text-sm md:text-base font-medium tracking-wide">
              Arsip Video
            </p>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
              Semua Video Pembelajaran
            </h2>
          </div>
        </div>

        {/* Video Grid */}
        {videos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:mx-10 lg:mx-20 gap-8">
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 py-10">Tidak ada video yang tersedia saat ini.</p>
        )}
      </div>
    </section>
  );
}