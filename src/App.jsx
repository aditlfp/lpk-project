import { useState } from 'react';

// Import all the components from the original file
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import KelasTerbaik from "./components/KelasTerbaik";
import TestimonialCarousel from "./components/TestimonialCarousel";
import VideoGallerySection from "./components/VideoGallerySection";
import CallToAction from "./components/CallToAction";
import CustomFAQ from "./components/CustomFAQ";
import Footer from "./components/Footer";
import SSWTokuteiGinou from "./components/SSWTokuteiGinou";
import EmployeRequired from "./components/EmployeRequired";
import CandidateCard from "./components/CandidateCard";
import WhatsappBubble from "./components/WhatsappBubble";
import RequirementPages from './pages/RequirementPages';
import AllVideosPage from './pages/AllVideosPage';

// This is the main application component
export default function App() {
  // We use the useState hook to manage which page is currently displayed.
  // The default page is set to 'home'.
  const [currentPage, setCurrentPage] = useState('home');

  // This function will be passed to the Navbar to allow it to change the current page.
  const navigateTo = (pageName) => {
    setCurrentPage(pageName);
  };

  const navigateToHome = () => {
    setCurrentPage('home');
  };

   const navigateToAllVideos = () => {
    setCurrentPage('allVideos');
    window.scrollTo(0, 0); // Scroll to top on page change
  };


  // This function decides which set of components to render based on the currentPage state.
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        // This is the "Home" page, and the component order is preserved from your original code.
        return (
          <>
            {/* These components are part of the main landing page */}
            <HeroSection navigateTo={navigateTo} />
            <VideoGallerySection onSeeAllClick={navigateToAllVideos} />
            <EmployeRequired />
            <CandidateCard />
            <KelasTerbaik />
            <SSWTokuteiGinou />
            <TestimonialCarousel />
            <CallToAction />
            <CustomFAQ />
          </>
        );
      case 'program':
        // This is a new "Program" page, for demonstration purposes.
        return (
          <>
            {/* The component order for this page is defined here. */}
            <h2 className="text-4xl font-bold text-center my-8">Program Details</h2>
            <SSWTokuteiGinou />
            <EmployeRequired />
            <CandidateCard />
          </>
        );
      case 'requirement':
        return (
          <RequirementPages />
        )
      case 'allVideos':
        return <AllVideosPage onBackClick={navigateToHome} />;
      default:
        // Render the home page by default if the state is not recognized.
        // The component order for this page is also preserved.
        return (
          <>
            <HeroSection navigateTo={navigateTo}/>
            <VideoGallerySection onSeeAllClick={navigateToAllVideos} />
            <EmployeRequired />
            <CandidateCard />
            <KelasTerbaik />
            <SSWTokuteiGinou />
            <TestimonialCarousel />
            <CallToAction />
            <CustomFAQ />
          </>
        );
    }
  };

  return (
    <div className="bg-gray-50">
      {/* The Navbar, Footer, and WhatsappBubble are rendered consistently across all pages. */}
      {/* We pass the navigateTo function to the Navbar so it can change the app's state. */}
      <Navbar navigateTo={navigateTo} currentPage={currentPage}/>
      
      <div className={`!min-h-screen !w-screen ${currentPage == 'requirement' ? '' : 'py-12'}`}>
        {/* The content of the page is determined by the renderPage function */}
        {renderPage()}
      </div>
      
      <Footer />
      <WhatsappBubble />
    </div>
  );
}
