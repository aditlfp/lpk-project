import { LuX } from "react-icons/lu";
import logo from "../assets/logo.png";
import { RiMenu5Fill } from "react-icons/ri";
import { useState } from "react";

function Navbar() {
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <div className="navbar bg-base-100 shadow-sm fixed mb-10 z-50 top-0 left-0">
      <div className="flex justify-center w-screen">
        <div className="flex justify-between items-center lg:gap-x-10 p-3 sm:p-3">
          <>
            <img
              src={logo}
              alt=""
              srcset=""
              className="w-[40%] h-auto sm:w-[50%]"
            />
          </>

          {/* Nav Mobile */}
          <div
            className="dropdown flex justify-center w-[20%]"
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box rounded-t-none z-0 mt-[45pt] sm:mt-[22.5pt] w-[80vw] p-2 drop-shadow-md"
            >
              <li>
                <div class="dropdown dropdown-hover uppercase font-bold w-full">
                  <label
                    tabIndex="0"
                    className="bg-transparent hover:text-amber-500 group flex items-center gap-2"
                  >
                    Media Sosial
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </label>
                  <ul
                    tabIndex="0"
                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a className="bg-transparent hover:text-amber-500">
                        Youtube
                      </a>
                    </li>
                    <li>
                      <a className="bg-transparent hover:text-amber-500">
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a className="bg-transparent hover:text-amber-500">
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a className="bg-transparent hover:text-amber-500">
                        Tiktok
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="dropdown dropdown-hover uppercase font-bold">
                  <label
                    tabIndex="0"
                    className="bg-transparent hover:text-amber-500 group flex items-center gap-2"
                  >
                    Kontak
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </label>
                  <ul
                    tabIndex="0"
                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a className="bg-transparent hover:text-amber-500">
                        Wa 1
                      </a>
                    </li>
                    <li>
                      <a className="bg-transparent hover:text-amber-500">
                        Wa 2
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="dropdown dropdown-hover uppercase font-bold w-full ml-3">
                  <label
                    tabIndex="0"
                    className="bg-transparent hover:text-amber-500 group flex items-center gap-2"
                  >
                    Sign In
                  </label>
                </div>
                <div className="navbar-end ml-16">
                  <a className="btn btn-warning text-white font-bold transition-transform duration-300 hover:-translate-y-4 hover:bg-blue-600 hover:border-0 shadow-none">
                    Daftar Sekarang
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="lg:hidden">
            <a className="btn btn-sm btn-warning text-white whitespace-nowrap font-bold transition-transform duration-300 hover:scale-105 hover:bg-blue-600 hover:border-0 shadow-none">
              Daftar Sekarang
            </a>
          </div>
        </div>
        {/* End Nav Mobile */}

        {/* Nav Pc */}
        <div className="navbar-center hidden lg:flex gap-x-9">
          <div class="dropdown dropdown-hover uppercase font-bold w-full">
            <label
              tabIndex="0"
              className="bg-transparent hover:text-amber-500 group flex items-center gap-2 w-[120pt]"
            >
              Media Sosial
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="bg-transparent hover:text-amber-500">Youtube</a>
              </li>
              <li>
                <a className="bg-transparent hover:text-amber-500">Facebook</a>
              </li>
              <li>
                <a className="bg-transparent hover:text-amber-500">Instagram</a>
              </li>
              <li>
                <a className="bg-transparent hover:text-amber-500">Tiktok</a>
              </li>
            </ul>
          </div>

          <div className="dropdown dropdown-hover uppercase font-bold">
            <label
              tabIndex="0"
              className="bg-transparent hover:text-amber-500 group flex items-center gap-2"
            >
              Kontak
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="bg-transparent hover:text-amber-500">Wa 1</a>
              </li>
              <li>
                <a className="bg-transparent hover:text-amber-500">Wa 2</a>
              </li>
            </ul>
          </div>

          <div className="dropdown dropdown-hover uppercase font-bold w-full ml-3">
            <label
              tabIndex="0"
              className="bg-transparent hover:text-amber-500 group flex items-center gap-2"
            >
              Sign In
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
