import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa6';

const MediaSosial = () => {
  const socials = [
    {
      name: 'YouTube',
      icon: <FaYoutube />,
      link: 'https://www.youtube.com/',
      bg: 'bg-red-600',
    },
    {
      name: 'Facebook',
      icon: <FaFacebook />,
      link: 'https://www.facebook.com/',
      bg: 'bg-blue-700',
    },
    {
      name: 'Instagram',
      icon: <FaInstagram />,
      link: 'https://www.instagram.com/',
      bg: 'bg-pink-500',
    },
    {
      name: 'TikTok',
      icon: <FaTiktok />,
      link: 'https://www.tiktok.com/',
      bg: 'bg-gray-600',
    },
  ];

  return (
    <section className="bg-[#031539] py-16 text-center text-white">
      <p className="text-blue-400 mb-2">Media Sosial Kami</p>
      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        Melihat Lebih Dekat Kegiatan ISO Jepang di Media Kami
      </h2>
      <div className="flex justify-center gap-6 flex-wrap mt-6">
        {socials.map((item) => (
          <a
            key={item.name}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-16 h-16 rounded-full flex items-center justify-center ${item.bg} hover:scale-110 transition-transform duration-300`}
          >
           <span className='text-4xl'>{item.icon }</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default MediaSosial;
