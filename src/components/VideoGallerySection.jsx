import React from 'react';
import { useApiData } from '../hooks/useApiData';
import VideoCard from './sections/VideoCard';
import GalleryCarousel from './sections/GalleryCarousel';

// ... (LoadingSpinner and ErrorMessage components remain the same) ...
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

// The component now accepts the 'onSeeAllClick' prop
export default function VideoGallerySection({ onSeeAllClick }) {
  // The hook is now called without arguments to get the default (limited) data
  const { videos, gallery, isLoading, error } = useApiData();
  console.log(videos);
  

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <section className="pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-blue-400 text-sm md:text-base font-medium mb-2 tracking-wide">
            Cuplikan Video Asa Hikari Mulya
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Video Pembelajaran Asa Hikari Mulya
          </h2>
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


        {/* View More Button - Now uses the passed-in function */}
        <div className="text-center mt-12">
          <button 
            onClick={onSeeAllClick}
            className="btn btn-md btn-warning text-white md:text-lg font-bold transition-transform duration-300 hover:scale-110 hover:bg-blue-600 hover:border-0 shadow-none"
          >
            Lihat Semua Video
          </button>
        </div>
      </div>

      <div className="divider"></div>

      {/* Gallery Carousel Section */}
      <GalleryCarousel galleryItems={gallery} />

      <div className="divider"></div>
    </section>
  );
}