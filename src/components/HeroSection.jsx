import { useEffect, useState, useMemo, useRef } from "react";
import { gsap } from "gsap";
import api from "../utils/axios";
import ButtonBlue from "./partials/ButtonBlue";

/**
 * Custom Hook: useHeroData
 * This hook encapsulates all the logic for fetching, processing, and managing the hero section data.
 * This makes the main component cleaner and focused only on presentation.
 * @returns {{ heroData: object, loading: boolean, error: object|null }}
 */
const useHeroData = () => {
  const [heroData, setHeroData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      setError(null);

      try {
        const response = await api.get("/main_hero");
        
        // Filter for all items that are pinned.
        const pinnedItems = response?.data?.data?.filter(
          (item) => item.is_pinned == 1
        );

        // Only update state if the component is still mounted.
        if (isMounted) {
            if (pinnedItems && pinnedItems.length > 0) {
              pinnedItems.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
              
              const latestHero = pinnedItems[0]; 
              
              setHeroData({
                logo: latestHero.main_logo
                  ? import.meta.env.VITE_BACKEND_URL_STORAGE + latestHero.main_logo
                  : null,
                image: latestHero.c_image
                  ? import.meta.env.VITE_BACKEND_URL_STORAGE + latestHero.c_image
                  : null,
                title: latestHero.title,
                description: latestHero.desc,
              });
            } else {
              console.log("No pinned hero item found. Using default content.");
            }
        }
      } catch (err) {
        console.error("Failed to fetch hero data:", err);
        if(isMounted) {
            setError(err);
        }
      } finally {
        if (isMounted) {
            setLoading(false);
        }
      }
    };

    fetchData();

    // Cleanup function: This is called when the component unmounts.
    return () => {
      isMounted = false;
    };
  }, []); 

  return { heroData, loading, error };
};

/**
 * Custom Hook: useGSAPAnimations
 * Handles all GSAP animations for the hero section
 */
const useGSAPAnimations = (heroData, loading) => {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);
  const overlayRef = useRef(null);
  const backgroundRef = useRef(null);

  useEffect(() => {
    if (!loading && heroData && containerRef.current) {
      // Small delay to ensure all elements are rendered
      const timer = setTimeout(() => {
        // Check if all required elements exist
        const elementsToAnimate = [
          titleRef.current,
          descriptionRef.current,
          buttonsRef.current,
          overlayRef.current,
          backgroundRef.current
        ].filter(Boolean); // Filter out null elements

        // Only animate if we have elements
        if (elementsToAnimate.length === 0) return;

        // Create GSAP timeline
        const tl = gsap.timeline();

        // Set initial states - only for existing elements
        if (logoRef.current) {
          gsap.set(logoRef.current, { opacity: 0, y: 50 });
        }
        if (titleRef.current) {
          gsap.set(titleRef.current, { opacity: 0, y: 50 });
        }
        if (descriptionRef.current) {
          gsap.set(descriptionRef.current, { opacity: 0, y: 50 });
        }
        if (buttonsRef.current) {
          gsap.set(buttonsRef.current, { opacity: 0, y: 50 });
        }
        if (overlayRef.current) {
          gsap.set(overlayRef.current, { opacity: 0 });
        }
        if (backgroundRef.current) {
          gsap.set(backgroundRef.current, { scale: 1.1, opacity: 0 });
        }

        // Animation sequence - only animate existing elements
        if (backgroundRef.current) {
          tl.to(backgroundRef.current, {
            duration: 1.5,
            opacity: 1,
            scale: 1,
            ease: "power2.out"
          });
        }

        if (overlayRef.current) {
          tl.to(overlayRef.current, {
            duration: 1,
            opacity: 0.75,
            ease: "power2.out"
          }, "-=1");
        }

        if (logoRef.current) {
          tl.to(logoRef.current, {
            duration: 0.8,
            opacity: 1,
            y: 0,
            ease: "back.out(1.7)"
          }, "-=0.5");
        }

        if (titleRef.current) {
          tl.to(titleRef.current, {
            duration: 1,
            opacity: 1,
            y: 0,
            ease: "power3.out"
          }, "-=0.4");
        }

        if (descriptionRef.current) {
          tl.to(descriptionRef.current, {
            duration: 0.8,
            opacity: 1,
            y: 0,
            ease: "power2.out"
          }, "-=0.6");
        }

        if (buttonsRef.current) {
          tl.to(buttonsRef.current, {
            duration: 0.8,
            opacity: 1,
            y: 0,
            ease: "back.out(1.7)"
          }, "-=0.4");

          // Add hover animations for buttons
          const buttons = buttonsRef.current.querySelectorAll('button, a, [role="button"]');
          buttons.forEach(button => {
            const handleMouseEnter = () => {
              gsap.to(button, {
                duration: 0.3,
                scale: 1.05,
                ease: "power2.out"
              });
            };

            const handleMouseLeave = () => {
              gsap.to(button, {
                duration: 0.3,
                scale: 1,
                ease: "power2.out"
              });
            };

            button.addEventListener('mouseenter', handleMouseEnter);
            button.addEventListener('mouseleave', handleMouseLeave);

            // Store cleanup functions
            button._gsapCleanup = () => {
              button.removeEventListener('mouseenter', handleMouseEnter);
              button.removeEventListener('mouseleave', handleMouseLeave);
            };
          });
        }

        // Store timeline for cleanup
        containerRef.current._gsapTimeline = tl;
      }, 50); // Small delay to ensure DOM is ready

      // Cleanup function
      return () => {
        clearTimeout(timer);
        
        if (containerRef.current?._gsapTimeline) {
          containerRef.current._gsapTimeline.kill();
        }

        // Clean up button event listeners
        if (buttonsRef.current) {
          const buttons = buttonsRef.current.querySelectorAll('button, a, [role="button"]');
          buttons.forEach(button => {
            if (button._gsapCleanup) {
              button._gsapCleanup();
            }
          });
        }
      };
    }
  }, [heroData, loading]);

  return {
    containerRef,
    logoRef,
    titleRef,
    descriptionRef,
    buttonsRef,
    overlayRef,
    backgroundRef
  };
};

/**
 * Main Component: HeroSection
 * This component is now a "presentational" component. Its only job is to display the UI.
 * All the complex logic is handled by the `useHeroData` hook.
 */
export default function HeroSection({ navigateTo }) {
  const { heroData, loading } = useHeroData();
  const {
    containerRef,
    logoRef,
    titleRef,
    descriptionRef,
    buttonsRef,
    overlayRef,
    backgroundRef
  } = useGSAPAnimations(heroData, loading);

  // --- Performance Optimization with useMemo ---
  // useMemo caches the result of a calculation. Here, it prevents the `style` object
  // from being recreated on every render, which is a minor but good performance practice.
  const backgroundStyle = useMemo(() => ({
    backgroundImage: `url(${heroData?.image})`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }), [heroData?.image]); // This will only re-calculate when heroData.image changes.

  // --- NEW: Loading state with DaisyUI Skeleton classes ---
  if (loading) {
      return (
          <div className="relative h-[100vh]">
            {/* Skeleton background */}
            <div className="absolute inset-0 bg-gray-300 skeleton" />
            <div className="absolute inset-0 bg-blue-950 opacity-75" />

            {/* Content skeleton */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4 space-y-5">
                {/* Logo skeleton */}
                <div className="skeleton h-16 w-32 md:w-48 bg-gray-400 rounded-sm"></div>

                {/* Title skeleton */}
                <div className="space-y-2 flex flex-col items-center w-full">
                    <div className="skeleton h-8 w-full max-w-lg bg-gray-400"></div>
                    <div className="skeleton h-8 w-full max-w-md bg-gray-400"></div>
                </div>

                {/* Description skeleton */}
                <div className="space-y-2 flex flex-col items-center w-full pt-4">
                    <div className="skeleton h-4 w-full max-w-2xl bg-gray-500"></div>
                    <div className="skeleton h-4 w-full max-w-2xl bg-gray-500"></div>
                </div>

                {/* Button skeleton */}
                <div className="skeleton h-14 w-48 bg-gray-400 mt-4"></div>
            </div>
        </div>
      );
  }

  return (
    <div ref={containerRef} className="relative h-[100vh]">
      {/* Background Image */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 bg-cover bg-center"
        style={backgroundStyle}
      />

      {/* Overlay */}
      <div ref={overlayRef} className="absolute inset-0 bg-blue-950 opacity-75" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-4">
        {/* Logo */}
        {heroData?.logo && (
          <div ref={logoRef} className="flex w-full justify-center items-center gap-x-4 mb-6 mt-[30pt] lg:mt-[10pt]">
            <img
              src={heroData.logo}
              alt="Asa Hikari Mulya"
              className="w-1/3 md:w-1/6 lg:w-1/10 bg-white rounded-sm"
            />
          </div>
        )}

        {/* Title */}
        <h1 ref={titleRef} className="text-3xl md:text-[2.3rem] lg:text-[2.9rem] font-bold mb-4 md:mb-10 lg:mb-5 text-pretty max-w-5xl mt-60">
          {heroData.title}
        </h1>

        {/* Description */}
        <p ref={descriptionRef} className="max-w-5xl md:max-w-[80rem] md:mx-10 font-bold text-sm md:text-lg text-gray-300 mb-6 md:mb-10 lg:mb-5">
          {heroData.description}
        </p>

        {/* Button */}
        <div ref={buttonsRef} className="flex w-full justify-center items-center gap-x-1 sm:gap-x-2">
          <>
            <ButtonBlue href={import.meta.env.VITE_URL_SIGN_UP} title={'Daftar Sekarang'}/>
          </>

          {/* Button */}
          <>
          <ButtonBlue href={null} navigateToLink={() => navigateTo('requirement')} title={'Syarat Pendaftaran'}/>
          </>

        </div>
      </div>
    </div>
  );
}