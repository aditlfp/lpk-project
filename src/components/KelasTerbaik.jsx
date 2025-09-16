import { FaClock, FaStar } from "react-icons/fa";
import { FaMedal } from "react-icons/fa6";
import api from "../utils/axios";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StarRating from "./partials/StarRating";
import ButtonBlue from "./partials/ButtonBlue";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * Custom Hook: useKelasTerbaikAnimations
 * Handles all GSAP animations for the KelasTerbaik section
 */
const useKelasTerbaikAnimations = (data, isLoading) => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const cardsGridRef = useRef(null);
  const buttonRef = useRef(null);

  // Initial load animations
  useEffect(() => {
    if (!isLoading && data && data.length > 0) {
      const tl = gsap.timeline();

      // Set initial states
      const elementsToAnimate = [
        headerRef.current,
        titleRef.current,
        subtitleRef.current,
        descriptionRef.current
      ].filter(Boolean);

      gsap.set(elementsToAnimate, {
        opacity: 0,
        y: 30
      });

      if (buttonRef.current) {
        gsap.set(buttonRef.current, {
          opacity: 0,
          scale: 0.9
        });
      }

      // Animate header elements
      tl.to(elementsToAnimate, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1
      })
      .to(buttonRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "back.out(1.7)"
      }, "-=0.2");
    }
  }, [data, isLoading]);

  // Cards animation with ScrollTrigger
  useEffect(() => {
    if (!isLoading && data && data.length > 0 && cardsGridRef.current) {
      const cards = cardsGridRef.current.children;

      // Set initial state for cards
      gsap.set(cards, {
        opacity: 0,
        y: 50,
        scale: 0.9
      });

      // Create ScrollTrigger animation for cards
      ScrollTrigger.create({
        trigger: cardsGridRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.to(cards, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "power2.out",
            stagger: 0.15
          });
        }
      });

      // Add hover animations to cards
      Array.from(cards).forEach((card, index) => {
        const handleMouseEnter = () => {
          gsap.to(card, {
            y: -10,
            scale: 1.03,
            duration: 0.3,
            ease: "power2.out"
          });
        };

        const handleMouseLeave = () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        };

        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);

        // Store cleanup function
        card._gsapCleanup = () => {
          card.removeEventListener('mouseenter', handleMouseEnter);
          card.removeEventListener('mouseleave', handleMouseLeave);
        };
      });

      // Cleanup function
      return () => {
        Array.from(cards).forEach(card => {
          if (card._gsapCleanup) {
            card._gsapCleanup();
          }
        });
        ScrollTrigger.getAll().forEach(trigger => {
          if (trigger.trigger === cardsGridRef.current) {
            trigger.kill();
          }
        });
      };
    }
  }, [data, isLoading]);

  // Card image reveal animation
  useEffect(() => {
    if (!isLoading && data && data.length > 0 && cardsGridRef.current) {
      const images = cardsGridRef.current.querySelectorAll('img');
      
      images.forEach((img, index) => {
        img.addEventListener('load', () => {
          gsap.fromTo(img, {
            scale: 1.1,
            opacity: 0.8
          }, {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out"
          });
        });
      });
    }
  }, [data, isLoading]);

  // Button hover animation
  useEffect(() => {
    if (buttonRef.current) {
      const button = buttonRef.current;
      
      const handleHover = () => {
        gsap.to(button, {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out"
        });
      };

      const handleLeave = () => {
        gsap.to(button, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      };

      button.addEventListener('mouseenter', handleHover);
      button.addEventListener('mouseleave', handleLeave);

      return () => {
        button.removeEventListener('mouseenter', handleHover);
        button.removeEventListener('mouseleave', handleLeave);
      };
    }
  }, [data, isLoading]);

  return {
    sectionRef,
    headerRef,
    titleRef,
    subtitleRef,
    descriptionRef,
    cardsGridRef,
    buttonRef
  };
};

/**
 * Card Component with individual animations
 */
const KelasCard = ({ kelas, index }) => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Individual card content animation
    if (contentRef.current) {
      const contentElements = contentRef.current.querySelectorAll('h4, .duration-info, p, .footer-content');
      
      gsap.set(contentElements, {
        opacity: 0,
        y: 20
      });

      // Animate content elements when card becomes visible
      ScrollTrigger.create({
        trigger: cardRef.current,
        start: "top 85%",
        onEnter: () => {
          gsap.to(contentElements, {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out",
            stagger: 0.1,
            delay: index * 0.1
          });
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === cardRef.current) {
          trigger.kill();
        }
      });
    };
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="bg-blue-950 text-white rounded-xl my-5 sm:my-0 shadow-lg overflow-hidden w-full md:w-[22rem] lg:w-full flex flex-col"
      style={{ height: "100%" }}
    >
      <img
        ref={imageRef}
        src={import.meta.env.VITE_BACKEND_URL_STORAGE + kelas.image}
        alt={kelas.title}
        className="w-full h-56 object-cover"
      />
      <div ref={contentRef} className="p-5 flex flex-col flex-1 justify-between">
        {/* Content section */}
        <div>
          <h4 className="text-lg md:text-xl lg:text-lg font-bold mb-2 text-left">
            {kelas.title}
          </h4>
          <div className="duration-info flex items-center justify-between gap-4 text-sm md:text-base mb-3 text-blue-300">
            <div className="flex items-center gap-1">
              <FaClock />
              <span>{kelas.waktu_pendidikan}</span>
            </div>
            {kelas?.bersertifikat ? (
              <div className="flex items-center gap-1">
                <FaMedal />
                <span>Bersertifikat</span>
              </div>
            ) : (
              <span>Tidak Bersetifikat</span>
            )}
          </div>
          <p className="text-gray-300 text-sm md:text-base text-justify">
            {kelas.desc}
          </p>
        </div>

        {/* Footer always at bottom */}
        <div className="footer-content mt-5 flex justify-between items-end">
          <div className="flex items-center gap-1 text-blue-400 text-sm md:text-lg">
            <StarRating rating={kelas.rating} />
          </div>
          <a
            href={import.meta.env.VITE_URL_SIGN_UP}
            className="btn btn-sm btn-primary px-6 text-white font-bold md:text-lg"
          >
            Daftar
          </a>
        </div>
      </div>
    </div>
  );
};

const KelasTerbaik = ({ onSeeAllClick }) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const {
    sectionRef,
    headerRef,
    titleRef,
    subtitleRef,
    descriptionRef,
    cardsGridRef,
    buttonRef
  } = useKelasTerbaikAnimations(data, isLoading);

  const fetchData = async () => {
    try {
      const res = await api.get('/lpk-classes');
      const allData = res.data.data;

      const activeData = allData.filter(item => item.active);
      const last4Active = activeData.slice(-4);
      
      setData(last4Active);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="bg-[#F4F8FB] min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Memuat data kelas LPK...</p>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="bg-[#F4F8FB] min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Data saat ini belum tersedia</p>
      </div>
    );
  }

  return (
    <section ref={sectionRef} id="kelas" className="py-16 px-4 text-center">
      <p ref={headerRef} className="text-sm md:text-base text-blue-500 font-medium">
        Kelas Terbaik Asa Hikari Mulya
      </p>
      <h2 ref={titleRef} className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">
        Kelas BASIC adalah Kelas Terbaik di Asa Hikari Mulya
      </h2>
      <h3 ref={subtitleRef} className="text-xl font-semibold text-blue-900 mt-1">
        MENGAPA DEMIKIAN ?
      </h3>

      <p ref={descriptionRef} className="max-w-3xl lg:max-w-full mx-2 md:mx-4 lg:mx-8 mt-4 text-gray-600 md:text-lg text-justify lg:text-center">
        Di Kelas BASIC, Para Peserta Didik Mendapatkan Berbagai Materi
        Pendidikan yang Menjadi Persyaratan untuk Mengikuti Program SSW
        (Specified Skill Worker) diantaranya Kurikulum Pendidikan Kemampuan
        Bahasa Jepang JF-Test A2 dan Kurikulum Pendidikan Skill SSW di Berbagai
        Bidang.
        <br />
        <br />
        Dan yang Lebih Menariknya Peserta Didik Kelas BASIC akan diikutsertakan
        dalam Wawancara Bersama Pihak User JEPANG untuk Penempatan Kerja di
        Berbagai Wilayah yang ada di Jepang.
      </p>

      <div ref={cardsGridRef} className="mt-12 md:grid gap-4 md:gap-4 lg:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-[90rem] mx-auto justify-center items-center">
        {data?.map((kelas, idx) => (
          <KelasCard key={idx} kelas={kelas} index={idx} />
        ))}
      </div>
      
      <div ref={buttonRef} className="flex justify-center items-center mt-10">
        <ButtonBlue
          title={"Lihat Selengkapnya"}
          navigateToLink={onSeeAllClick}
          className={"hover:shadow-md btn-sm text-lg"}
        />
      </div>
    </section>
  );
};

export default KelasTerbaik;