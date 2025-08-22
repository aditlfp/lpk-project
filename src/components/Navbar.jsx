import { LuX } from "react-icons/lu";
import logo from "../assets/img_fix/logo_dark.png";
import { RiMenu5Fill } from "react-icons/ri";
import { useState } from "react";
import { HomeButton, ReqButton, SignInButton, SignUpButton } from "./partials/SignButton";
import { FilePenLine, House, KeyRound } from "lucide-react";
import ButtonBlueMobile from "./partials/ButtonBlueMobile";

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
              className="w-[40%] h-auto md:w-[50%] lg:w-[20%]"
            />
            {/* <div className="hidden sm:flex flex-col text-xs md:text-sm lg:text-base font-bold">
              <span>Asa</span>
              <span>Hikari</span>
              <span>Mulya</span>
            </div> */}
          </div>

          <div className="sm:hidden w-[50%] flex gap-x-2 mr-2">
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
          <div className="flex navbar-center gap-x-5">
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
          <div className="navbar-end md:ml-8 lg:ml-16 md:mr-4">
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
