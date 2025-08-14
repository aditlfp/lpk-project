import { useState, useEffect } from 'react';
import api from '../utils/axios';

const VITE_API_URL = import.meta.env.VITE_API_URL;

// The hook still accepts the optional parameter
export function useApiData(fetchAllVideos = false) {
  const [data, setData] = useState({ videos: [], gallery: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        // The endpoint is now the same for both cases
        const videoEndpoint = `${VITE_API_URL}/post-video-youtubes`;

        const [galleryRes, videoRes] = await Promise.all([
          !fetchAllVideos ? api.get(`${VITE_API_URL}/gallery-media`) : Promise.resolve(null),
          api.get(videoEndpoint),
        ]);
        
        // Correctly access the data array from the paginated response
        const allVideos = videoRes?.data?.data || [];
        const galleryData = galleryRes?.data?.data || [];

        setData({
          gallery: Array.isArray(galleryData) ? galleryData : [],
          // If we are on the homepage (fetchAllVideos is false), slice the first 4 videos.
          // Otherwise, use the full list.
          videos: fetchAllVideos ? allVideos : allVideos.slice(0, 4),
        });
        
      } catch (err) {
        console.error("Failed to fetch data:", err);
        setError("Gagal memuat data. Silakan coba lagi nanti.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [fetchAllVideos]);

  return { ...data, isLoading, error };
}