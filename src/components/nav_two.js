import { useState } from "react";
import logo from "../assets/png/logo-no-background.png"
 
import { Link } from "react-scroll";
export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div class="">
      <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div class="relative flex items-center justify-between">
          <a
            href="/"
            aria-label="Company"
            title="Company"
            class="inline-flex items-center"
          >
            <span class="ml-2 text-xl font-bold tracking-wide">
              <Link smooth={true} duration={500} to="home">
              luxelivingairbnbs
              </Link>
            </span>
          </a>
          <ul class="flex items-center hidden space-x-8 lg:flex">
            <li>
              <Link smooth={true} duration={500} to ="deals">
              <a
                href="/"
                aria-label="Our product"
                title="Our product"
                class="font-medium tracking-wide   transition-colors duration-200 hover:text-teal-accent-400"
              >
                Deals
              </a>
              </Link>
            </li>
            <li>
            <Link smooth={true} duration={500} to="destinations">
            <a
                href="/"
                aria-label="Our product"
                title="Our product"
                class="font-medium tracking-wide   transition-colors duration-200 hover:text-teal-accent-400"
              >
                Destinations
              </a>
               
            </Link>
            </li>
            <li>
              <Link smooth={true} duration={500}  to="blogs">
              
              <a
                href="/"
                aria-label="Our product"
                title="Our product"
                class="font-medium tracking-wide   transition-colors duration-200 hover:text-teal-accent-400"
              >
               Blogs
              </a>
               
              </Link>
            </li>
            <li>
              <a
                href="/"
                aria-label="About us"
                title="About us"
                class="font-medium tracking-wide   transition-colors duration-200 hover:text-teal-accent-400"
              >
                Contact
              </a>
            </li>
          </ul>
          <ul class="flex items-center hidden space-x-8 lg:flex">
            <li>
              <a
                href="/"
                class="inline-flex text-white items-center bg-[#414141] justify-center h-12 px-6 font-medium tracking-wide   transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                aria-label="Sign up"
                title="Sign up"
              >
                JOIN US
              </a>
            </li>
          </ul>
          <div class="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div class="absolute z-10 top-0 h-full left-0 w-full">
                <div class="px-9 py-6 bg-white w-screen h-screen border rounded shadow-sm">
                  <div class="flex items-center justify-between mb-4">
                    <div>
                      <a
                        href="/"
                        aria-label="Company"
                        title="Company"
                        class="inline-flex items-center"
                      >
                        <span class="ml-2 text-xl font-bold tracking-wide text-gray-800">
                          <img className="h-20 w-20 text-center" src={logo} alt="logo" />
                        </span>
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul class="items-center   space-y-4">
                      <li>
                        <div className="bg-[#414141] p-3">
                        <Link smooth={true} duration={500} to="home">
                          <a
                            href="/"
                            aria-label="Our product"
                            title="Our product"
                            class="font-medium tracking-wide text-white  transition-colors duration-200 hover:text-teal-accent-400"
                          >
                            Home
                          </a>
                          </Link>
                        </div>
                      </li>
                      <hr />
                      <li>
                        <div className="  p-3">
                        <a
                          href="/"
                          aria-label="Our product"
                          title="Our product"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Destinations
                        </a>
                        </div>
                      </li>
                      <hr />
                      <li>
                        <div className="  p-3">
                        <a
                          href="/"
                          aria-label="Our product"
                          title="Our product"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Blogs
                        </a>
                        </div>
                      </li>
                      <hr />
                      <li>
                        <div className="  p-3">
                        <a
                          href="/"
                          aria-label="Product pricing"
                          title="Product pricing"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Contact
                        </a>
                        </div>
                      </li>
                      <hr />
                      <li>
                        <div className="  p-3">
                        <a
                          href="/"
                          aria-label="About us"
                          title="About us"
                          class="font-medium tracking-wide text-gray-700 uppercase transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Join us
                        </a>
                        </div>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>

       

 
      </div>

      
    </div>
  );
};
