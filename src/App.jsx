import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import KelasTerbaik from "./components/KelasTerbaik";
import TestimonialCarousel from "./components/TestimonialCarousel";
import VideoGallerySection from "./components/VideoGallerySection";
import CallToAction from "./components/CallToAction";
import HeroImageSection from "./components/HeroImageSection";
import SupportSection from "./components/SupportSection";
import CustomFAQ from "./components/CustomFAQ";
import Footer from "./components/Footer";
import SSWTokuteiGinou from "./components/SSWTokuteiGinou";
import EmployeRequired from "./components/EmployeRequired";
import CandidateCard from "./components/CandidateCard";
import WhatsappBubble from "./components/WhatsappBubble";

export default function App() {
  return (
    <div className="bg-gray-50">
      <div className="!min-h-screen !w-screen py-12">
        <Navbar />
        <HeroSection />
        <VideoGallerySection />
        <EmployeRequired />
        <CandidateCard />
        <KelasTerbaik />
        <SSWTokuteiGinou />
        {/* <h2 className="text-3xl font-bold text-center my-8 text-blue-900">
          Berita dan Artikel Terakhir ISO Jepang
        </h2>
        <div className="flex justify-center mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
            <ArtikelCard
              image={home}
              tag="Artikel"
              title="Tas Anak Jepang Randoseru: 7 Fakta Mengejutkan"
              description="Tas Anak Jepang Randoseru: 7 Fakta Mengejutkan yang Nggak Kamu Sangka!"
              date="July 30, 2025"
              link="#"
            />
            <ArtikelCard
              image={home}
              tag="Artikel"
              title="Peringatan Tsunami: Jepang Kembali Terancam"
              description="Mengapa Negeri Sakura Selalu Jadi Langganan Bencana Laut?"
              date="July 30, 2025"
              link="#"
            />
            <ArtikelCard
              image={home}
              tag="Artikel"
              title="Tips Adaptasi kehidupan di Jepang"
              description="Untuk Pekerja Migran Indonesia (PMI)"
              date="July 28, 2025"
              link="#"
            />
          </div>
        </div> */}
        <TestimonialCarousel />
        <CallToAction />
        {/* <HeroImageSection /> */}
        {/* <SupportSection /> */}
        <CustomFAQ />
      </div>
        <Footer />
        <WhatsappBubble /> 
    </div>
  );
}
