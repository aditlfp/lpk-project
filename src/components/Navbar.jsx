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

          {/* Nav Mobile */}
          <div
            className="dropdown flex justify-center w-[33%]"
            onClick={() => setMobileNav(!mobileNav)}
          >
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              {mobileNav ? (
                <LuX className="w-6 h-6" />
              ) : (
                <RiMenu5Fill className="w-6 h-6" />
              )}
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box rounded-t-none z-0 mt-[48pt] sm:mt-[22.5pt] w-[80vw] p-2"
            >
              <li className="flex flex-col items-start w-full ">
                {/* Home */}
                <div className="dropdown dropdown-hover w-full" onClick={() => navigateTo('home')}>
                  <a
                    tabIndex="0"
                    href={null}
                    className={`bg-white rounded-t-md px-4 py-2 flex justify-between items-center w-full text-sm font-semibold  transition-colors duration-200 ${currentPage == 'home' ? 'text-amber-500' : 'hover:text-amber-500 text-gray-700 '}`}
                  >
                    <span>Home</span>
                    <House className="w-5 h-5" />
                  </a>
                </div>

                {/* Requirement */}
                <div className="dropdown dropdown-hover w-full" onClick={() => navigateTo('requirement')}>
                  <a
                    tabIndex="0"
                    href={null}
                    className={`bg-white rounded-t-md px-4 py-2 flex justify-between items-center w-full text-sm font-semibold transition-colors duration-200 ${currentPage == 'requirement' ? 'text-amber-500' : 'text-gray-700 hover:text-amber-500'}`}
                  >
                    <span>Syarat Pendaftaran</span>
                    <FilePenLine  className="w-5 h-5" />
                  </a>
                </div>

                {/* Sign In */}
                <div className="dropdown dropdown-hover w-full ">
                  <a
                    tabIndex="0"
                    href="https://recruitment.savanait.com/auth/login.php"
                    className="bg-white rounded-t-md px-4 py-2 flex justify-between items-center w-full text-sm font-semibold text-gray-700 hover:text-amber-500 transition-colors duration-200"
                  >
                    <span>SIGN IN</span>
                    <KeyRound className="w-5 h-5" />
                  </a>
                </div>

                {/* Sign Up */}
                <div className="dropdown dropdown-hover w-full">
                  <a
                    tabIndex="0"
                    href="https://recruitment.savanait.com/auth/login.php"
                    className="bg-white rounded-b-md px-4 py-2 flex justify-between items-center w-full text-sm font-semibold text-gray-700 hover:text-amber-500 transition-colors duration-200"
                  >
                    <span>SIGN UP</span>
                    <KeyRound className="w-5 h-5" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="md:hidden w-[33%]">
            <a
              href="https://recruitment.savanait.com/auth/login.php"
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
            href="https://recruitment.savanait.com/auth/login.php"
            className="dropdown dropdown-hover uppercase font-bold w-full ml-3"
          >
            <SignInButton />
          </a>
          <a
            href="https://recruitment.savanait.com/auth/login.php"
            className="dropdown dropdown-hover uppercase font-bold w-full lg:ml-3"
          >
            <SignUpButton />
          </a>
           <a className="dropdown dropdown-hover uppercase font-bold w-full lg:ml-3" onClick={() => navigateTo('requirement')}>
              <ReqButton isActive={currentPage == 'requirement'}/>
           </a>
          <div className="navbar-end md:ml-8 lg:ml-16 md:mr-4">
            <a
              href="https://recruitment.savanait.com/auth/login.php"
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
