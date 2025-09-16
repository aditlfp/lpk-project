import { useApiData } from '../hooks/useApiData';
import VideoCard from './sections/VideoCard';
import GalleryCarousel from './sections/GalleryCarousel';
import ButtonBlue from './partials/ButtonBlue';

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

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <section className="pt-16 bg-gray-50">
      {/* <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-blue-400 text-sm md:text-base font-medium mb-2 tracking-wide">
            Cuplikan Video Asa Hikari Mulya
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Video Pembelajaran Asa Hikari Mulya
          </h2>
        </div>

          {videos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:mx-10 lg:mx-20 gap-8">
              {videos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 py-10">Tidak ada video yang tersedia saat ini.</p>
          )}


        <div className="text-center pb-2 my-12">
          <ButtonBlue navigateToLink={onSeeAllClick} title={'Lihat Semua Video'} className={'btn-md hover:shadow-md'}/>
        </div>
      </div> */}

      <div className="divider"></div>

      {/* Gallery Carousel Section */}
      <div>
        <GalleryCarousel galleryItems={gallery} />
      </div>

      <div className="divider"></div>
    </section>
  );
}