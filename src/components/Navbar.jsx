import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm fixed mb-10 z-50 top-0 left-0">
      <div className="flex justify-center w-screen">
        <div className="flex justify-between items-center gap-x-10 p-3 sm:p-3">
          <>
            <img
              src={logo}
              alt=""
              srcset=""
              className="w-[25%] h-[80%] sm:w-[75%]"
            />
          </>

          {/* Nav Mobile */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <div class="dropdown dropdown-hover uppercase font-bold w-full">
                  <label
                    tabIndex="0"
                    className="bg-transparent hover:text-amber-500 group flex items-center gap-2"
                  >
                    MediaSosial
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
            <a className="btn btn-sm btn-warning text-white font-bold transition-transform duration-300 hover:-translate-y-4 hover:bg-blue-600 hover:border-0 shadow-none">
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
              className="bg-transparent hover:text-amber-500 group flex items-center gap-2"
            >
              MediaSosial
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
            <a className="btn btn-warning text-white font-bold transition-transform duration-300 hover:-translate-y-4 hover:bg-blue-600 hover:border-0 shadow-none">
              Daftar Sekarang
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
