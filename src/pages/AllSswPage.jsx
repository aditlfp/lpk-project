import { useEffect, useState, useRef } from "react";
import api from "../utils/axios";
import SswCard from "../components/sections/SswCard";
import Pagination from "../components/partials/Pagination";
import { ArrowLeft } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function AllSswPage({ onBackClick }) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Refs for GSAP animations
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const backButtonRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const cardContainerRef = useRef(null);
  const paginationRef = useRef(null);

  const fetchData = async(page = 1) => {
    const res = await api.get(`/ssw-fields?page=${page}`);
    setData(res);
    setTotalPages(res.data.meta.last_page);
    setCurrentPage(res.data.meta.current_page);
    setLoading(false);
  }

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  // Initial page load animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([backButtonRef.current, titleRef.current], {
        opacity: 0,
        x: -30
      });

      gsap.set(descriptionRef.current, {
        opacity: 0,
        y: 20
      });

      gsap.set([cardContainerRef.current, paginationRef.current], {
        opacity: 0,
        y: 30
      });

      // Create entrance timeline
      const entranceTl = gsap.timeline({ delay: 0.2 });

      entranceTl
        .to(backButtonRef.current, {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "back.out(1.7)"
        })
        .to(titleRef.current, {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out"
        }, "-=0.4")
        .to(descriptionRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out"
        }, "-=0.5");

      // Cards and pagination scroll animations
      ScrollTrigger.create({
        trigger: cardContainerRef.current,
        start: "top 85%",
        onEnter: () => {
          gsap.to(cardContainerRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out"
          });
        }
      });

      ScrollTrigger.create({
        trigger: paginationRef.current,
        start: "top 90%",
        onEnter: () => {
          gsap.to(paginationRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out"
          });
        }
      });

    }, containerRef.current);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Page change animation
  useEffect(() => {
    if (cardContainerRef.current && !isLoading) {
      gsap.fromTo(cardContainerRef.current, 
        {
          opacity: 0.3,
          scale: 0.98,
          y: 10
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out"
        }
      );
    }
  }, [currentPage, isLoading]);

  // Enhanced back button click handler with animation
  const handleBackClick = () => {
    const exitTl = gsap.timeline({
      onComplete: () => onBackClick()
    });

    exitTl
      .to([headerRef.current, cardContainerRef.current, paginationRef.current], {
        opacity: 0,
        y: -20,
        duration: 0.4,
        ease: "power2.in",
        stagger: 0.05
      });
  };

  // Hover animations for interactive elements
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Back button hover animation
      if (backButtonRef.current) {
        const backBtn = backButtonRef.current;
        
        backBtn.addEventListener('mouseenter', () => {
          gsap.to(backBtn, {
            scale: 1.1,
            duration: 0.2,
            ease: "power2.out"
          });
        });

        backBtn.addEventListener('mouseleave', () => {
          gsap.to(backBtn, {
            scale: 1,
            duration: 0.2,
            ease: "power2.out"
          });
        });
      }

    }, containerRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      <div className="container mx-auto px-4 py-28">
        <div ref={headerRef} className="flex flex-col gap-y-4 mb-2 md:mb-10">
          <div className="flex items-center">
            <button 
              ref={backButtonRef}
              onClick={handleBackClick} 
              className="p-2 rounded-full hover:bg-gray-200 transition-colors mr-4"
              aria-label="Kembali ke halaman utama"
            >
              <ArrowLeft className="w-6 h-6 text-gray-800" />
            </button>
            <h2 ref={titleRef} className="text-3xl font-bold text-gray-800">
              17 Bidang Pekerjaan SSW
            </h2>
          </div>

          <span ref={descriptionRef} className="text-gray-400 font-semibold md:text-xl text-center">
            Dengan berkurangnya tenaga kerja di Jepang, ada 17 bidang industri
            yang terdampak dengan tidak tercukupinya kebutuhan tenaga kerja
            untuk masa yang akan datang. Bidang itulah yang nantinya diisi
            dengan Specified Skilled Worker (SSW)/Tokutei Ginou 特定技能 ini. Ke
            17 Bidang tersebut adalah :
          </span>
        </div>
        
        <div ref={cardContainerRef}>
          <SswCard data={data?.data?.data} isLoading={isLoading}/>
        </div>
        
        <div ref={paginationRef}>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}

export default AllSswPage;