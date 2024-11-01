function Header() {
  return (
    <div>
      {/* ====== Header Section Start ====== */}
      <div className="ud-header absolute left-0 top-0 z-40 flex w-full items-center bg-transparent">
        <div className="container mx-auto">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4">
              <a href="/" className="navbar-logo block w-full py-5 transition-transform duration-300 hover:scale-105">
                {/* <img
                  src=""
                  alt="logo"
                  class="header-logo w-full"
                /> */}
              </a>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  id="navbarToggler"
                  className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-white transition-all duration-300" />
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-white transition-all duration-300" />
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-white transition-all duration-300" />
                </button>
                <nav
                  id="navbarCollapse"
                  className="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:px-4 lg:py-0 lg:shadow-none dark:lg:bg-transparent xl:px-6 transition-all duration-300 ease-in-out"
                >
                  <ul className="block lg:flex 2xl:ml-20">
                    <li className="group relative">
                      <a
                        href="/#home"
                        className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:mr-0 lg:inline-flex lg:px-6 lg:py-6 lg:text-white lg:group-hover:opacity-70 transition duration-300"
                      >
                        Home
                      </a>
                    </li>
                    <li className="group relative">
                      <a
                        href="/#features"
                        className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-6 lg:py-6 lg:text-white lg:group-hover:opacity-70 transition duration-300"
                      >
                        Features
                      </a>
                    </li>
                    <li className="group relative">
                      <a
                        href="/#about"
                        className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-6 lg:py-6 lg:text-white lg:group-hover:opacity-70 transition duration-300"
                      >
                        About
                      </a>
                    </li>
                    <li className="group relative">
                      <a
                        href="/#faq"
                        className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-6 lg:py-6 lg:text-white lg:group-hover:opacity-70 transition duration-300"
                      >
                        FAQ
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="flex items-center justify-end pr-16 lg:pr-0">
                <div className="hidden sm:flex">
                  <a
                    href="/Signup"
                    className="loginBtn px-[22px] py-2 text-base font-medium text-white hover:opacity-70 transition-opacity duration-300"
                  >
                    Sign In
                  </a>
                  <a
                    href="/Login"
                    className="signUpBtn rounded-md bg-white bg-opacity-20 px-6 py-2 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"
                  >
                    Login
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ====== Header Section End ====== */}
    </div>
  );
}

export default Header;
