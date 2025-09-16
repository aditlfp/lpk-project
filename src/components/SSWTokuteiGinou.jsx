import ButtonBlue from "./partials/ButtonBlue";
import api from "../utils/axios";
import { useEffect, useState, useRef } from "react";
import SswCard from "./sections/SswCard";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const SSWTokuteiGinou = ({ onSeeAllClick }) => {
  const [data, setData] = useState("");
  const [isLoading, setLoading] = useState(true);
  
  // Refs for GSAP animations
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const sourceRef = useRef(null);
  const mainContentRef = useRef(null);
  const sectionTitleRef = useRef(null);
  const sectionDescRef = useRef(null);
  const cardContainerRef = useRef(null);
  const buttonRef = useRef(null);
  const decorativeShapesRef = useRef([]);

  const fetchData = async () => {
    try {
      const res = await api.get("/ssw-fields");
      setLoading(false);
      setData(res.data.data.slice(0, 3));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup - hide elements
      gsap.set([titleRef.current, descriptionRef.current, sourceRef.current], {
        opacity: 0,
        y: 50
      });

      gsap.set([sectionTitleRef.current, sectionDescRef.current], {
        opacity: 0,
        y: 30
      });

      gsap.set(buttonRef.current, {
        opacity: 0,
        scale: 0.8
      });

      // Header animations
      const headerTl = gsap.timeline();
      
      headerTl
        .to(titleRef.current, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out"
        })
        .to(descriptionRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out"
        }, "-=0.5")
        .to(sourceRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out"
        }, "-=0.3");

      // Animate decorative shapes with stagger
      gsap.fromTo(decorativeShapesRef.current, 
        {
          scale: 0,
          rotation: 0,
          opacity: 0
        },
        {
          scale: 1,
          rotation: 360,
          opacity: 0.3,
          duration: 2,
          ease: "elastic.out(1, 0.8)",
          stagger: {
            amount: 1.5,
            from: "random"
          },
          delay: 0.5
        }
      );

      // Main content scroll animations
      ScrollTrigger.create({
        trigger: mainContentRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.to([sectionTitleRef.current, sectionDescRef.current], {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out"
          });
        }
      });

      // Card container animation
      ScrollTrigger.create({
        trigger: cardContainerRef.current,
        start: "top 85%",
        onEnter: () => {
          gsap.fromTo(cardContainerRef.current, 
            {
              opacity: 0,
              y: 40
            },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out"
            }
          );
        }
      });

      // Button animation
      ScrollTrigger.create({
        trigger: buttonRef.current,
        start: "top 90%",
        onEnter: () => {
          gsap.to(buttonRef.current, {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "back.out(1.7)"
          });
        }
      });

      // Parallax effect for header background
      gsap.to(headerRef.current, {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

      // Continuous floating animation for decorative elements
      decorativeShapesRef.current.forEach((shape, index) => {
        if (shape) {
          gsap.to(shape, {
            y: "random(-20, 20)",
            x: "random(-15, 15)",
            rotation: "random(-180, 180)",
            duration: "random(3, 6)",
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            delay: index * 0.3
          });
        }
      });

    }, containerRef.current);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Function to add refs to decorative shapes
  const addToRefs = (el) => {
    if (el && !decorativeShapesRef.current.includes(el)) {
      decorativeShapesRef.current.push(el);
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div ref={headerRef} className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20 relative overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-blue-600/10"></div>

        {/* Animated decorative shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 opacity-20">
          <div ref={addToRefs} className="absolute top-8 right-8 w-40 h-40 border-2 border-blue-300 rounded-2xl transform rotate-12 animate-pulse"></div>
          <div
            ref={addToRefs}
            className="absolute top-16 right-16 w-32 h-32 border border-blue-300 rounded-full animate-bounce"
            style={{ animationDuration: "3s" }}
          ></div>
          <div
            ref={addToRefs}
            className="absolute top-20 right-32 w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-400 rounded-xl transform rotate-45 opacity-30 animate-spin"
            style={{ animationDuration: "8s" }}
          ></div>
          <div
            ref={addToRefs}
            className="absolute top-32 right-20 w-16 h-16 border-2 border-cyan-300 rounded-lg transform -rotate-12 animate-pulse"
            style={{ animationDuration: "2s" }}
          ></div>
        </div>

        <div className="absolute bottom-0 left-0 w-80 h-80 opacity-15">
          <div
            ref={addToRefs}
            className="absolute bottom-8 left-8 w-32 h-32 border-2 border-cyan-300 rounded-full animate-pulse"
            style={{ animationDuration: "2.5s" }}
          ></div>
          <div
            ref={addToRefs}
            className="absolute bottom-16 left-16 w-40 h-40 border border-blue-300 rounded-2xl transform -rotate-12 animate-bounce"
            style={{ animationDuration: "4s" }}
          ></div>
          <div
            ref={addToRefs}
            className="absolute bottom-24 left-32 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full opacity-40 animate-ping"
            style={{ animationDuration: "3s" }}
          ></div>
          <div
            ref={addToRefs}
            className="absolute bottom-32 left-24 w-24 h-24 border-2 border-blue-300 rounded-xl transform rotate-45 animate-spin"
            style={{ animationDuration: "10s" }}
          ></div>
        </div>

        {/* Center decorative elements */}
        <div
          ref={addToRefs}
          className="absolute top-1/2 left-1/4 w-4 h-4 bg-blue-400 rounded-full opacity-30 animate-ping"
          style={{ animationDuration: "2s" }}
        ></div>
        <div
          ref={addToRefs}
          className="absolute top-1/3 right-1/4 w-3 h-3 bg-blue-400 rounded-full opacity-40 animate-pulse"
          style={{ animationDuration: "1.5s" }}
        ></div>
        <div
          ref={addToRefs}
          className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-cyan-400 rounded-full opacity-50 animate-bounce"
          style={{ animationDuration: "2.5s" }}
        ></div>

        <div className="container mx-auto px-4 text-center mt-16">
          <h1 ref={titleRef} className="text-4xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent drop-shadow-lg">
            Specified Skilled Worker (SSW) / Tokutei Ginou
          </h1>
          <p ref={descriptionRef} className="text-blue-100 max-w-4xl mx-auto leading-relaxed mb-6 text-lg md:text-xl text-justify backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10">
            Specified Skilled Workers (SSW) atau Tokutei Ginou 特定技能 adalah
            status visa/izin tinggal bagi warga negara asing di Jepang yang
            mulai berlaku sejak 1 April 2019. Pemegang visa SSW dapat bekerja di
            perusahaan Jepang dengan hak dan kewajiban yang sama dengan pekerja
            Jepang.
          </p>
          <p ref={sourceRef} className="text-cyan-200 text-sm md:text-lg bg-gradient-to-r from-blue-500/20 to-blue-500/20 rounded-full px-6 py-2 inline-block backdrop-blur-sm border border-white/10">
            ✨ Dikutip dari Laman BP2TKI
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div ref={mainContentRef} className="container mx-auto px-4 pb-16">
        <div className="text-center mb-12">
          <h2 ref={sectionTitleRef} className="text-3xl font-bold text-gray-800 mb-4">
            17 Bidang Pekerjaan SSW
          </h2>
          <p ref={sectionDescRef} className="text-gray-600 max-w-4xl lg:max-w-full mx-auto md:mx-4 lg:mx-12 md:text-lg leading-relaxed text-justify">
            Dengan berkurangnya tenaga kerja di Jepang, ada 17 bidang industri
            yang terdampak dengan tidak tercukupinya kebutuhan tenaga kerja
            untuk masa yang akan datang. Bidang itulah yang nantinya diisi
            dengan Specified Skilled Worker (SSW)/Tokutei Ginou 特定技能 ini. Ke
            17 Bidang tersebut adalah :
          </p>
        </div>

        <div ref={cardContainerRef}>
          <SswCard data={data} isLoading={isLoading}/>
        </div>
        
        {/* Lihat Selengkapnya Button */}
        <div className="flex justify-center items-center mt-10">
          <div ref={buttonRef}>
            <ButtonBlue
              title={"Lihat Selengkapnya"}
              navigateToLink={onSeeAllClick}
              className={"hover:shadow-md btn-sm text-lg"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SSWTokuteiGinou;