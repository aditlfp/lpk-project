import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import api from "../utils/axios";
import { FaClock, FaMedal } from "react-icons/fa";
import StarRating from "../components/partials/StarRating";
import Pagination from "../components/partials/Pagination";
import { ArrowLeft } from "lucide-react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * Custom Hook: useAllClassesAnimations
 * Handles all GSAP animations for the AllClassesPage
 */
const useAllClassesAnimations = (data, isLoading, currentPage) => {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const cardsGridRef = useRef(null);
  const paginationRef = useRef(null);

  // Initial page load animation
  useEffect(() => {
    if (!isLoading && data.length > 0) {
      const tl = gsap.timeline();

      // Set initial states
      const elementsToAnimate = [
        headerRef.current,
        descriptionRef.current,
        paginationRef.current
      ].filter(Boolean);

      gsap.set(elementsToAnimate, {
        opacity: 0,
        y: 30
      });

      // Animate header elements
      tl.to(elementsToAnimate, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.2
      });
    }
  }, [data, isLoading]);

  // Cards animation with ScrollTrigger
  useEffect(() => {
    if (!isLoading && data.length > 0 && cardsGridRef.current) {
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
            stagger: 0.1
          });
        }
      });

      // Add hover animations to cards
      Array.from(cards).forEach((card, index) => {
        const handleMouseEnter = () => {
          gsap.to(card, {
            y: -8,
            scale: 1.02,
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
  }, [data, isLoading, currentPage]);

  // Page change animation
  useEffect(() => {
    if (!isLoading && data.length > 0 && cardsGridRef.current) {
      const cards = cardsGridRef.current.children;
      
      // Animate out old cards and animate in new ones
      gsap.fromTo(cards, {
        opacity: 0,
        y: 20,
        scale: 0.95
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.08
      });
    }
  }, [currentPage, data, isLoading]);

  return {
    containerRef,
    headerRef,
    titleRef,
    descriptionRef,
    cardsGridRef,
    paginationRef
  };
};

/**
 * Individual Class Card Component with animations
 */
const ClassCard = ({ kelas, index }) => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Individual card content animation
    if (contentRef.current) {
      const contentElements = contentRef.current.querySelectorAll('h4, .duration-info, p, .footer-content');
      
      gsap.set(contentElements, {
        opacity: 0,
        y: 15
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
            stagger: 0.08,
            delay: index * 0.05
          });
        }
      });
    }

    // Image load animation
    if (imageRef.current) {
      const img = imageRef.current;
      
      const handleImageLoad = () => {
        gsap.fromTo(img, {
          scale: 1.1,
          opacity: 0.8
        }, {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out"
        });
      };

      if (img.complete) {
        handleImageLoad();
      } else {
        img.addEventListener('load', handleImageLoad);
      }

      return () => {
        img.removeEventListener('load', handleImageLoad);
        ScrollTrigger.getAll().forEach(trigger => {
          if (trigger.trigger === cardRef.current) {
            trigger.kill();
          }
        });
      };
    }
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

function AllClassesPage({ onBackClick }) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const {
    containerRef,
    headerRef,
    titleRef,
    descriptionRef,
    cardsGridRef,
    paginationRef
  } = useAllClassesAnimations(data, isLoading, currentPage);

  const fetchData = async (page = 1) => {
    setLoading(true);
    try {
      const res = await api.get(`/lpk-classes?page=${page}`);
      setData(res.data.data);
      setTotalPages(res.data.meta.last_page);
      setCurrentPage(res.data.meta.current_page);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  // Back button hover animation
  useEffect(() => {
    if (headerRef.current) {
      const backButton = headerRef.current.querySelector('button');
      if (backButton) {
        const handleHover = () => {
          gsap.to(backButton, {
            scale: 1.1,
            duration: 0.2,
            ease: "power2.out"
          });
        };

        const handleLeave = () => {
          gsap.to(backButton, {
            scale: 1,
            duration: 0.2,
            ease: "power2.out"
          });
        };

        backButton.addEventListener('mouseenter', handleHover);
        backButton.addEventListener('mouseleave', handleLeave);

        return () => {
          backButton.removeEventListener('mouseenter', handleHover);
          backButton.removeEventListener('mouseleave', handleLeave);
        };
      }
    }
  }, [data, isLoading]);

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
    <div ref={containerRef} className="container mx-auto px-4 py-28">
      <div className="flex flex-col gap-y-4 mb-2 md:mb-10">
        <div ref={headerRef} className="flex items-center">
          <button
            onClick={onBackClick}
            className="p-2 rounded-full hover:bg-gray-200 transition-colors mr-4"
            aria-label="Kembali ke halaman utama"
          >
            <ArrowLeft className="w-6 h-6 text-gray-800" />
          </button>
          <h2 className="text-3xl font-bold text-gray-800">
            Menampilkan Semua Kelas LPK
          </h2>
        </div>

        <span ref={descriptionRef} className="text-gray-400 font-semibold md:text-xl text-center">
          Kami telah merancang setiap program untuk menjadi bekal lengkap Anda.
          Bersama instruktur terbaik dan kurikulum yang teruji, Anda tidak hanya
          akan menguasai materi, tetapi juga membangun mentalitas dan
          kedisiplinan yang dibutuhkan untuk sukses. Lihatlah daftar kelas kami
          di bawah ini. Pilihlah jalan Anda, dan biarkan kami membimbing Anda
          untuk meraih mimpi tersebut. Masa depan Anda di Negeri Sakura menanti!
        </span>
      </div>

      <div ref={cardsGridRef} className="mt-12 md:grid gap-4 md:gap-4 lg:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-[90rem] mx-auto justify-center items-center">
        {data.map((kelas, idx) => (
          <ClassCard key={`${kelas.id}-${currentPage}-${idx}`} kelas={kelas} index={idx} />
        ))}
      </div>

      {/* Pagination */}
      <div ref={paginationRef} className="mt-10 flex justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
}

export default AllClassesPage;