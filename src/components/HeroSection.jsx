import { useEffect, useState, useMemo } from "react";
import api from "../utils/axios";
import ButtonBlue from "./partials/ButtonBlue";

/**
 * Custom Hook: useHeroData
 * This hook encapsulates all the logic for fetching, processing, and managing the hero section data.
 * This makes the main component cleaner and focused only on presentation.
 * @returns {{ heroData: object, loading: boolean, error: object|null }}
 */
const useHeroData = () => {
  // --- State Management ---
  // A single state object is more efficient than multiple useState calls.
  // It triggers only one re-render when the data is updated.
  const [heroData, setHeroData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // --- Cleanup Flag ---
    // This flag tracks whether the component is still mounted.
    // It's set to false in the cleanup function.
    let isMounted = true;

    const fetchData = async () => {
      setError(null);

      try {
        const response = await api.get("/main_hero");
        
        // Filter for all items that are pinned.
        const pinnedItems = response?.data?.data?.filter(
          (item) => item.is_pinned == 1
        );

        // --- Check if Mounted Before State Update ---
        // Only update state if the component is still mounted.
        if (isMounted) {
            if (pinnedItems && pinnedItems.length > 0) {
              // If there are multiple pinned items, sort them to find the most recent one.
              // We assume a date field like 'updated_at' or 'created_at' exists.
              // NOTE: Change 'updated_at' if your date field has a different name.
              pinnedItems.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
              
              const latestHero = pinnedItems[0]; // The most recent item is now the first in the array.
              
              // Update the state with the data from the latest hero item.
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
              // If no pinned hero is found, the state already holds the default content.
              console.log("No pinned hero item found. Using default content.");
            }
        }
      } catch (err) {
        // In case of an error, log it and set the error state.
        console.error("Failed to fetch hero data:", err);
        if(isMounted) {
            setError(err);
        }
      } finally {
        // This runs regardless of success or failure.
        if (isMounted) {
            setLoading(false);
        }
      }
    };

    fetchData();

    // Cleanup function: This is called when the component unmounts.
    // It sets our flag to false, preventing any pending state updates.
    return () => {
      isMounted = false;
    };
  }, []); // The empty dependency array ensures this effect runs only once on mount.

  return { heroData, loading, error };
};


/**
 * Main Component: HeroSection
 * This component is now a "presentational" component. Its only job is to display the UI.
 * All the complex logic is handled by the `useHeroData` hook.
 */
export default function HeroSection({ navigateTo }) {
  const { heroData, loading } = useHeroData();

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
    <div className="relative h-[100vh]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={backgroundStyle}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-950 opacity-75" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-4">
        {/* Logo */}
        {heroData?.logo && (
          <div className="flex w-full justify-center items-center gap-x-4 mb-6 mt-[30pt] lg:mt-[10pt]">
            <img
              src={heroData.logo}
              alt="Asa Hikari Mulya"
              className="w-1/3 md:w-1/6 lg:w-1/10 bg-white rounded-sm"
            />
          </div>
        )}

        {/* Title */}
        <h1 className="text-3xl md:text-[2.3rem] lg:text-[2.9rem] font-bold mb-4 md:mb-10 lg:mb-5 text-pretty max-w-5xl mt-60">
          {heroData.title}
        </h1>

        {/* Description */}
        <p className="max-w-5xl md:max-w-[80rem] md:mx-10 font-bold text-sm md:text-lg text-gray-300 mb-6 md:mb-10 lg:mb-5">
          {heroData.description}
        </p>

        {/* Button */}
        <div className="flex w-full justify-center items-center gap-x-1 sm:gap-x-2">
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
