import React from 'react';
import { Play, Calendar, Users } from 'lucide-react';

const STORAGE_URL = import.meta.env.VITE_BACKEND_URL_STORAGE;

export default function VideoCard({ video }) {
  const handleWatchClick = () => {
    if (video.url_video) {
      window.open(video.url_video, '_blank', 'noopener,noreferrer');
    }
  };
  
  const thumbnailUrl = `${STORAGE_URL}/${video.thumbnail}`;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Video Thumbnail */}
      <div className="relative">
        <img
          src={thumbnailUrl}
          alt={video.title}
          className="w-full h-64 object-cover"
        />
        {/* Play Button Overlay */}
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center group hover:bg-black/40 transition-colors cursor-pointer" onClick={handleWatchClick}>
          <div className="bg-white/90 rounded-full p-4 group-hover:scale-110 transition-transform">
            <Play className="w-8 h-8 text-blue-600 ml-1" fill="currentColor" />
          </div>
        </div>
        {/* Duration Badge */}
        {video.duration && (
          <div className="absolute bottom-4 right-4 bg-black/80 text-white px-2 py-1 rounded text-sm font-medium">
            {video.duration}
          </div>
        )}
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

        {/* Title & Description */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
          {video.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
          {video.desc}
        </p>

        {/* Watch Button */}
        <button onClick={handleWatchClick} className="mt-4 inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors">
          <Play className="w-4 h-4" fill="currentColor" />
          Tonton Video
        </button>
      </div>
    </div>
  );
}