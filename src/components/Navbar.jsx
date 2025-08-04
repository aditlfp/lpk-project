import { LuX } from "react-icons/lu";
import logo from "../assets/img_fix/logo_dark.png";
import { RiMenu5Fill } from "react-icons/ri";
import { useState } from "react";

function Navbar() {
  const [mobileNav, setMobileNav] = useState(false);
  const whatsappNumber = "6281395554334"; // Replace with your WhatsApp number (with country code)
  const message =
    "Halo Admin LPK Asa Hikari Mulya, Saya ingin menanyakan informasi lebih lanjut mengenai program pelatihan yang tersedia!"; // Optional default message

  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };
  return (
    <div className="navbar bg-base-100 shadow-sm fixed mb-10 z-50 top-0 left-0 w-screen">
      <div className="flex justify-center w-screen">
        <div className="flex justify-between md:justify-evenly items-center lg:gap-x-10 p-3 sm:p-3">
          <div className="w-[33%] md:w-auto flex gap-1">
            <img
              src={logo}
              alt=""
              srcset=""
              className="w-[40%] h-auto sm:w-[12%]"
            />
            <div className="flex flex-col text-xs font-bold">
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
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              {mobileNav ? (
                <LuX className="w-6 h-6" />
              ) : (
                <RiMenu5Fill className="w-6 h-6" />
              )}
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box rounded-t-none z-0 mt-[48pt] sm:mt-[22.5pt] w-[80vw] p-2 drop-shadow-md"
            >
              <li>
                <div className="dropdown dropdown-hover uppercase font-bold w-full ml-3">
                  <label
                    tabIndex="0"
                    className="bg-transparent hover:text-amber-500 group flex items-center gap-2"
                  >
                    Sign In
                  </label>
                </div>
                <div className="dropdown dropdown-hover uppercase font-bold w-full ml-3">
                  <label
                    tabIndex="0"
                    className="bg-transparent hover:text-amber-500 group flex items-center gap-2"
                  >
                    Sign Up
                  </label>
                </div>
              </li>
            </ul>
          </div>
          <div className="lg:hidden w-[33%]">
            <a className="btn btn-warning text-xs text-white font-bold transition-transform duration-300 hover:scale-105 hover:bg-blue-600 hover:border-0 shadow-none flex flex-col leading-tight items-center">
              <span>Daftar</span>
              <span>Sekarang</span>
            </a>
          </div>
        </div>
        {/* End Nav Mobile */}

        {/* Nav Pc */}
        <div className="navbar-center hidden lg:flex gap-x-9">
          <div className="dropdown dropdown-hover uppercase font-bold w-full ml-3">
            <label
              tabIndex="0"
              className="bg-transparent hover:text-amber-500 group flex items-center gap-2"
            >
              Sign In
            </label>
          </div>
          <div className="dropdown dropdown-hover uppercase font-bold w-full ml-3">
            <label
              tabIndex="0"
              className="bg-transparent hover:text-amber-500 group flex items-center gap-2"
            >
              Sign Up
            </label>
          </div>
          <div className="navbar-end ml-16">
            <a className="btn btn-warning text-white font-bold transition-transform duration-300 hover:scale-110 hover:bg-blue-600 hover:border-0 shadow-none">
              Daftar Sekarang
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
