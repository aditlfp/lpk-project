import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// 1. Import the 'Controller' module
import { Autoplay, EffectFade, Navigation, Controller } from 'swiper/modules';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import 'swiper/css';
import 'swiper/css/effect-fade';

const STORAGE_URL = import.meta.env.VITE_BACKEND_URL_STORAGE;

export default function GalleryCarousel({ galleryItems }) {
  const [foregroundSwiper, setForegroundSwiper] = useState(null);
  const [backgroundSwiper, setBackgroundSwiper] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const isLoopingEnabled = galleryItems.length >= 3;

  useEffect(() => {
    if (foregroundSwiper && backgroundSwiper) {
      // This code will now work correctly
      foregroundSwiper.controller.control = backgroundSwiper;
      backgroundSwiper.controller.control = foregroundSwiper;
    }
  }, [foregroundSwiper, backgroundSwiper]);


  if (galleryItems.length === 0) {
    return null;
  }

  return (
    <div className="relative mt-4 min-w-full">
      {/* Static Header */}
      <div className="absolute top-5 left-0 right-0 z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-white text-base md:text-lg font-medium mb-2 tracking-wide">
            Foto Kegiatan Peserta Didik
          </h3>
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white leading-tight">
            Galeri Foto Kegiatan Peserta Didik Asa Hikari Mulya
          </h1>
        </div>
      </div>

      {/* Background Carousel */}
      <Swiper
        onSwiper={setBackgroundSwiper}
        // 2. Add 'Controller' to the modules array
        modules={[EffectFade, Autoplay, Controller]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1000}
        allowTouchMove={false}
        loop={isLoopingEnabled}
        autoplay={isLoopingEnabled ? { delay: 8000, disableOnInteraction: false } : false}
        className="h-[75vh] md:h-[62vh] lg:min-h-[540pt] mb-10 lg:mb-0"
      >
        {galleryItems.map((item) => (
          <SwiperSlide key={`bg-${item.id}`}>
            <div
              className="h-full bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url(${STORAGE_URL}/${item.bg_image[0]})`,
              }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      {isLoopingEnabled && (
        <>
          <button ref={prevRef} className="absolute left-8 top-[60%] md:top-[49%] md:left-[10%] z-20 -translate-y-1/2 text-white text-2xl bg-transparent hover:bg-white/10 rounded-full p-3 transition-all duration-300">
            <FaAngleLeft className="md:w-7 h-full" />
          </button>
          <button ref={nextRef} className="absolute right-8 top-[60%] md:top-[49%] md:right-[10%] z-20 -translate-y-1/2 text-white text-2xl bg-transparent hover:bg-white/10 rounded-full p-3 transition-all duration-300">
            <FaAngleRight className="md:w-7 h-full" />
          </button>
        </>
      )}

      {/* Foreground Galery Carousel */}
      <Swiper
        onSwiper={setForegroundSwiper}
        // 3. Add 'Controller' to this modules array as well
        modules={[Navigation, Autoplay, Controller]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        loop={isLoopingEnabled}
        autoplay={isLoopingEnabled ? { delay: 4000, disableOnInteraction: false } : false}
        className="!absolute top-[110pt] md:top-[100pt] lg:top-[150pt] min-h-[380pt] md:min-h-[330pt] lg:min-h-[300pt] left-0 w-full z-10"
      >
        {galleryItems.map((item) => (
          <SwiperSlide key={`fg-${item.id}`}>
            <section className="min-h-full flex items-end justify-center text-white mt-10 pb-0 lg:pb-24">
              <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
                <div className="bg-blue-300/10 backdrop-blur-sm rounded-2xl p-2 md:p-2 lg:p-4 border border-white/10">
                  <div className="flex flex-col items-center">
                    <img
                      src={`${STORAGE_URL}/${item.img}`}
                      alt={item.name}
                      className="w-[100%] h-[50%] md:w-[70%] lg:w-[90%] rounded-xl mb-4 border-3 aspect-[18/9] border-white/20 object-cover"
                    />
                    <h4 className="font-bold text-lg md:text-xl text-white">
                      {item.title}
                    </h4>
                    <p className="text-amber-400 text-sm md:text-base font-medium">
                      {item.location}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}