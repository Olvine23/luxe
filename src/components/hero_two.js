export const Headers = () => {
  return (
    <div className="relative">
      <img
        src="https://cdn.pixabay.com/photo/2016/08/26/15/06/home-1622401_960_720.jpg"
        className="absolute inset-0 from-black    object-cover lg:w-full h-full"
        alt=""
      />
      <span id="blackOverlay" class="w-full h-full absolute bg-black opacity-75"></span>
      <div className="relative bg-opacity-75 bg-deep-purple-accent-700">
        <svg
          className="absolute inset-x-0 bottom-0 text-white"
          viewBox="0 0 1160 163"
        >
          <path
            fill="currentColor"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
          />
        </svg>
        <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full z-12 lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-4 font-sans  p-3 font-bold uppercase tracking-tight text-white sm:text-4xl sm:leading-none">
                <span className="  text-lg md:text-2xl text-brown-900">
                  Welcome To
                </span>{" "}
                <br />{" "}
                <span className="text-2xl md:text-5xl">luxelivingairbnbs</span>
              </h2>
              <p className="text-center text-sm tracking-wide text-white md:text-lg">
                Our Luxe club connects you to memorable experiences, specially
                curated to attend to your personal, family or corporate needs.{" "}
                <br />
                We offer exquisite Airbnb accommodation services across East
                Africa in our various apartments and villas – with the privacy
                and comfort of a home. <br /> Register today to enjoy our luxe
                unlimited packages!
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold tracking-wider transition-colors lg:mt-7 duration-200 text-teal-accent-400 hover:text-teal-accent-700"
              >
                <button
                  type="submit"
                  className="inline-flex items-center justify-center bg-[#414141] w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                >
                  Read More
                </button>
              </a>
              <h1 className="text-center text-[#6A92A4] font-bold text-xl">
                Click To View Our Plans Info
              </h1>

              <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-4">
                <div className="grid gap-8 row-gap-8 lg:grid-cols-3 sm:cols-3">
                  <div className="sm:text-center">
                    <div className="flex items-center justify-center mb-2  font-extrabold rounded shadow-2xl   hover:bg-blue-600 hover:text-red-500 bg-white sm:mx-auto">
                      <a
                        href="/"
                        className="text-[#6A92A4] hover:text-white font-semibold md:p-4 p-2 text-lg leading-5"
                      >
                        Family
                      </a>
                    </div>
                  </div>
                  <div className="sm:text-center">
                    <div className="flex items-center justify-center mb-2  font-extrabold rounded shadow-2xl   hover:bg-blue-600 hover:text-red-500 bg-white sm:mx-auto">
                      <a
                        href="/"
                        className="text-[#6A92A4] hover:text-white font-semibold md:p-4 p-2 text-lg leading-5"
                      >
                        Trinity
                      </a>
                    </div>
                  </div>
                  <div className="sm:text-center">
                    <div className="flex items-center justify-center mb-2  font-extrabold rounded shadow-2xl   hover:bg-blue-600 hover:text-red-500 bg-white sm:mx-auto">
                      <a
                        href="/"
                        className="text-[#6A92A4] hover:text-white font-semibold md:p-4 p-2 text-lg leading-5"
                      >
                        Corporate
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                  Join Our Plan
                </h3>
                <form>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="firstName"
                      className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-400"
                    >
                      First name
                    </label>
                    <input
                      placeholder="John"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="firstName"
                      name="firstName"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="lastName"
                      className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-400"
                    >
                      Last name
                    </label>
                    <input
                      placeholder="Doe"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="lastName"
                      name="lastName"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="lastName"
                      className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-400"
                    >
                      Email
                    </label>
                    <input
                      placeholder="Doe"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="lastName"
                      name="lastName"
                    />
                  </div>
                  {/* <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="lastName"
                      className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-400"
                    >
                      Preferred membership package
                    </label>
                    <input
                      placeholder="Doe"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="lastName"
                      name="lastName"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-400"
                    >
                      Week
                    </label>
                    <input
                      placeholder="john.doe@example.org"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email"
                    />
                  </div>
                  <label
                    for="message"
                    class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-400"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Your message..."
                  ></textarea> */}

                  <div className="mt-4 mb-2 sm:mb-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center bg-[#414141] w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    >
                      Subscribe
                    </button>
                  </div>
                  <p className="text-xs text-gray-600 sm:text-sm">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
