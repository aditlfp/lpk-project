import { LuX } from "react-icons/lu";
import logo from "../assets/img_fix/logo_dark.png";
import { RiMenu5Fill } from "react-icons/ri";
import { useState } from "react";
import { HomeButton, ReqButton, SignInButton, SignUpButton } from "./partials/SignButton";
import { FilePenLine, House, KeyRound } from "lucide-react";

function Navbar({ navigateTo, currentPage }) {
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <div className="navbar bg-base-100 shadow-sm fixed mb-10 z-50 top-0 left-0 w-screen">
      <div className="flex justify-center lg:justify-around w-screen">
        <div className="flex justify-between md:justify-evenly items-center lg:gap-x-10 p-3 sm:p-3 lg:p-0">
          <div className="w-[33%] md:w-auto flex items-center gap-1 md:gap-2">
            <img
              src={logo}
              alt=""
              srcSet=""
              className="w-[40%] h-auto md:w-[25%] lg:w-[20%]"
            />
            <div className="flex flex-col text-xs md:text-sm lg:text-base font-bold">
              <span>Asa</span>
              <span>Hikari</span>
              <span>Mulya</span>
            </div>
          </div>

          <div className="md:hidden w-[45%] flex gap-x-2">
           <a
            href={import.meta.env.VITE_URL_SIGN_IN}
            className="btn btn-warning text-xs text-white font-bold transition-transform duration-300 hover:scale-105 hover:bg-blue-600 hover:border-0 shadow-none flex flex-col leading-tight items-center"
          >
            <span>Sign In</span>
          </a>
            <a
              href={import.meta.env.VITE_URL_SIGN_UP}
              className="btn btn-warning text-xs text-white font-bold transition-transform duration-300 hover:scale-105 hover:bg-blue-600 hover:border-0 shadow-none flex flex-col leading-tight items-center"
            >
              <span>Daftar</span>
              <span>Sekarang</span>
            </a>
          </div>
        </div>
        {/* End Nav Mobile */}

        {/* Nav Pc */}
        <div className="navbar-center hidden md:flex gap-x-9">
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
          <div className="navbar-end md:ml-8 lg:ml-16 md:mr-4">
            <a
              href={import.meta.env.VITE_URL_SIGN_UP}
              className="btn lg:btn-lg lg:text-base btn-warning text-white font-bold transition-transform duration-300 hover:scale-105 hover:bg-blue-600 hover:border-0 shadow-none"
            >
              Daftar Sekarang
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
