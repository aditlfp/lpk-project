import { LuX } from "react-icons/lu";
import logo from "../assets/img_fix/logo_dark.png";
import { RiMenu5Fill } from "react-icons/ri";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { HomeButton, ReqButton, SignInButton, SignUpButton } from "./partials/SignButton";
import { FilePenLine, House, KeyRound } from "lucide-react";
import ButtonBlueMobile from "./partials/ButtonBlueMobile";

/**
 * Custom Hook: useNavbarAnimations
 * Handles all GSAP animations for the navbar
 */
const useNavbarAnimations = () => {
  const navbarRef = useRef(null);
  const logoRef = useRef(null);
  const mobileButtonsRef = useRef(null);
  const desktopNavRef = useRef(null);
  const ctaButtonRef = useRef(null);

  useEffect(() => {
    // Initial navbar slide down animation
    const navbar = navbarRef.current;
    if (navbar) {
      // Set initial state
      gsap.set(navbar, {
        y: -100,
        opacity: 0
      });

      // Animate navbar entrance
      gsap.to(navbar, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2
      });

      // Animate logo with a slight delay
      if (logoRef.current) {
        gsap.set(logoRef.current, {
          scale: 0.8,
          opacity: 0
        });

        gsap.to(logoRef.current, {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          delay: 0.6
        });
      }

      // Animate mobile buttons
      if (mobileButtonsRef.current) {
        const mobileButtons = mobileButtonsRef.current.children;
        gsap.set(mobileButtons, {
          x: 50,
          opacity: 0
        });

        gsap.to(mobileButtons, {
          x: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.1,
          delay: 0.8
        });
      }

      // Animate desktop navigation items
      if (desktopNavRef.current) {
        const navItems = desktopNavRef.current.querySelectorAll('a');
        gsap.set(navItems, {
          y: -20,
          opacity: 0
        });

        gsap.to(navItems, {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
          stagger: 0.1,
          delay: 0.7
        });
      }

      // Animate CTA button
      if (ctaButtonRef.current) {
        gsap.set(ctaButtonRef.current, {
          scale: 0.9,
          opacity: 0
        });

        gsap.to(ctaButtonRef.current, {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: "back.out(1.7)",
          delay: 1
        });
      }
    }
  }, []);

  // Add hover animations
  useEffect(() => {
    // Logo hover animation
    if (logoRef.current) {
      const logo = logoRef.current;
      
      const handleLogoHover = () => {
        gsap.to(logo, {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out"
        });
      };

      const handleLogoLeave = () => {
        gsap.to(logo, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      };

      logo.addEventListener('mouseenter', handleLogoHover);
      logo.addEventListener('mouseleave', handleLogoLeave);

      return () => {
        logo.removeEventListener('mouseenter', handleLogoHover);
        logo.removeEventListener('mouseleave', handleLogoLeave);
      };
    }
  }, []);

  // Navigation items hover animation
  useEffect(() => {
    if (desktopNavRef.current) {
      const navItems = desktopNavRef.current.querySelectorAll('a');
      
      navItems.forEach(item => {
        const handleHover = () => {
          gsap.to(item, {
            y: -2,
            duration: 0.2,
            ease: "power2.out"
          });
        };

        const handleLeave = () => {
          gsap.to(item, {
            y: 0,
            duration: 0.2,
            ease: "power2.out"
          });
        };

        item.addEventListener('mouseenter', handleHover);
        item.addEventListener('mouseleave', handleLeave);

        // Store cleanup functions
        item._gsapCleanup = () => {
          item.removeEventListener('mouseenter', handleHover);
          item.removeEventListener('mouseleave', handleLeave);
        };
      });

      return () => {
        navItems.forEach(item => {
          if (item._gsapCleanup) {
            item._gsapCleanup();
          }
        });
      };
    }
  }, []);

  // CTA button hover animation
  useEffect(() => {
    if (ctaButtonRef.current) {
      const button = ctaButtonRef.current;
      
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
  }, []);

  return {
    navbarRef,
    logoRef,
    mobileButtonsRef,
    desktopNavRef,
    ctaButtonRef
  };
};

function Navbar({ navigateTo, currentPage }) {
  const [mobileNav, setMobileNav] = useState(false);
  const {
    navbarRef,
    logoRef,
    mobileButtonsRef,
    desktopNavRef,
    ctaButtonRef
  } = useNavbarAnimations();

  return (
    <div ref={navbarRef} className="navbar bg-base-100 shadow-sm fixed mb-10 z-50 top-0 left-0 w-screen">
      <div className="flex justify-center lg:justify-around w-screen">
        <div className="flex justify-between md:justify-evenly items-center lg:gap-x-10 p-3 sm:p-3 lg:p-0">
          <div ref={logoRef} className="w-[33%] md:w-auto flex items-center gap-1 md:gap-2">
            <img
              src={logo}
              alt=""
              srcSet=""
              className="w-[40%] h-auto md:w-[50%] lg:w-[20%]"
            />
            {/* <div className="hidden sm:flex flex-col text-xs md:text-sm lg:text-base font-bold">
              <span>Asa</span>
              <span>Hikari</span>
              <span>Mulya</span>
            </div> */}
          </div>

          <div ref={mobileButtonsRef} className="sm:hidden w-[50%] flex gap-x-2 mr-2">
            <ButtonBlueMobile href={import.meta.env.VITE_URL_SIGN_IN}><span>Sign In</span></ButtonBlueMobile>
            <ButtonBlueMobile href={import.meta.env.VITE_URL_SIGN_UP}>
                <span>Daftar</span>
                <span>Sekarang</span>
            </ButtonBlueMobile>
          </div>
        </div>
        {/* End Nav Mobile */}

        {/* Nav Pc */}
        <div className="navbar-center hidden md:flex gap-x-9 mr-20">
          <div ref={desktopNavRef} className="flex navbar-center gap-x-5">
                <a className="dropdown dropdown-hover uppercase font-bold w-full lg:ml-3" onClick={() => navigateTo('home')}>
                <HomeButton isActive={currentPage == 'home'}/>
            </a>
            <a
              href={import.meta.env.VITE_URL_SIGN_IN}
              className="dropdown dropdown-hover uppercase font-bold w-full ml-3"
            >
              <SignInButton />
            </a>
            <a
              href={import.meta.env.VITE_URL_SIGN_UP}
              className="dropdown dropdown-hover uppercase font-bold w-full lg:ml-3"
            >
              <SignUpButton />
            </a>
            <a className="dropdown dropdown-hover uppercase font-bold w-full lg:ml-3" onClick={() => navigateTo('requirement')}>
                <ReqButton isActive={currentPage == 'requirement'}/>
            </a>
          </div>
          <div ref={ctaButtonRef} className="navbar-end md:ml-8 lg:ml-16 md:mr-4">
            <ButtonBlueMobile href={import.meta.env.VITE_URL_SIGN_UP} isBgWhite={true}>
              Daftar Sekarang
            </ButtonBlueMobile>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;