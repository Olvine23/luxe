export const Deals = () => {
  return (
    <div className="md:mx-auto md:container px-4">
      <div className="pt-10 md:pt-20">
        <div className="container mx-auto">
          <h1 className="text-center text-4xl mb-8">Weekly Deals</h1>
          <div className="flex flex-wrap items-center  ">
            <div className="md:w-1/2 lg:w-2/3 w-full xl:pr-20 md:pr-6">
              <div className="py-2 pr-7 text-color">
                <h1
                  role="heading"
                  className="text-2xl dark:text-black   md:leading-snug tracking-tighter f-f-l font-black"
                >
                  WEEKDAYS OFFER
                </h1>
                <p
                  role="contentinfo"
                  className="text-lg dark:text-black   lg:leading-7 md:leading-10 f-f-r py-4 md:py-4"
                >
                  Grab yourself a midweek stay offer of up to 20% off!
                </p>
                <button className="flex items-center cursor-pointer pb-4 md:pb-0 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none">
                  <span
                    aria-label="lets get started"
                    role="button"
                    className="focus outline-none f-f-r text-lg lg:text-lg font-semibold underline text-indigo-700 dark:text-indigo-400"
                  >
                    Lets Get Started
                  </span>
                  <div className="pl-2">
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/alternating_description_with_cards-svg1.svg"
                      alt="arrow"
                    />
                  </div>
                </button>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
              <img
                className="absolute w-full h-full inset-0 object-cover object-center rounded-md"
                src="https://cdn.pixabay.com/photo/2017/07/09/03/19/home-2486092_960_720.jpg"
                alt="A girl enjoying in sunlight"
                role="img"
              />
              <div className="relative z-10 bg-white rounded shadow p-6 w-10/12 -mb-20">
                <div className="flex items-center justify-between w-full sm:w-full mb-8">
                  <div className="flex items-center">
                    <div className="p-4 bg-yellow-200 rounded-md">
                      <img
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/alternating_description_with_cards-svg2.svg"
                        alt="icon"
                      />
                    </div>
                    <div className="ml-6">
                      <p className="mb-1 leading-5 text-brown-800 font-bold text-2xl">
                        2,330
                      </p>
                      <p className="text-gray-600 dark:text-brown-900 text-sm tracking-normal font-normal leading-5">
                        Avg Sales
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center pl-3 text-green-400">
                      <img
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/alternating_description_with_cards-svg3.svg"
                        alt="arrow"
                      />
                      <p className="text-green-700 text-xs tracking-wide font-bold leading-normal pl-1">
                        7.2%
                      </p>
                    </div>
                    <p className="font-normal text-xs text-right leading-4 text-green-700 tracking-normal">
                      Increase
                    </p>
                  </div>
                </div>
                <div className="relative mb-3">
                  <hr className="h-1 rounded-sm bg-gray-200" />
                  <hr className="absolute top-0 h-1 w-7/12 rounded-sm bg-indigo-700" />
                </div>
                <h2 className="text-base text-gray-600 dark:text-black font-normal tracking-normal leading-5">
                  Yearly Goal
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="  pt-16">
        <div className="mx-auto">
          <div className="flex flex-wrap flex-row-reverse items-center">
            <div className="md:w-1/2 lg:w-2/3 w-full lg:pl-20 md:pl-10 sm:pl-0 pl-0">
              <div className="py-2 text-color">
                <div>
                  <h1
                    role="heading"
                    className="text-2xl dark:text-black mt-6   tracking-tighter md:leading-snug f-f-l font-black"
                  >
                    NEW HOUSE OFFERS
                  </h1>
                </div>
                <p
                  role="contentinfo"
                  className="text-lg dark:text-black   leading-7   f-f-r py-4"
                >
                  A fresh house is a fresh vibe! Plug yourself to a new house at
                  a discounted price today!
                </p>
                <button className="flex items-center cursor-pointer pb-4 md:pb-0 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none">
                  <span
                    aria-label="lets get started"
                    role="button"
                    className="focus outline-none f-f-r text-lg   font-semibold underline text-indigo-700 dark:text-indigo-400"
                  >
                    Lets Get Started
                  </span>
                  <div className="pl-2">
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/alternating_description_with_cards-svg1.svg"
                      alt="arrow"
                    />
                  </div>
                </button>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
              <img
                className="absolute w-full h-full inset-0 object-cover object-center rounded-md"
                src="https://cdn.pixabay.com/photo/2017/03/28/12/10/chairs-2181947__340.jpg"
                alt="A group of three having a meeting"
                role="img"
              />
              <div className="relative z-10 p-4 bg-white shadow rounded mx-auto w-9/12 -mb-20">
                <p className="text-gray-800 font-normal text-md leading-4 tracking-normal mb-2">
                  Invoice # 35RD87
                </p>
                <p className="text-gray-600 dark:text-gray-200 text-xs leading-3 font-normal">
                  Assigned to: Josh Rollins
                </p>
                <div className="mt-4 flex items-center">
                  <span className="text-gray-600 dark:text-gray-200">
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/alternating_description_with_cards-svg4.svg"
                      alt="account"
                    />
                  </span>
                  <p className="ml-1 text-sm text-gray-800 leading-3 tracking-normal font-normal">
                    Specter Consultancy
                  </p>
                </div>
                <div className="mt-3 flex items-center">
                  <span className="text-gray-600 dark:text-gray-200">
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/alternating_description_with_cards-svg5.svg"
                      alt="dollar"
                    />
                  </span>
                  <p className="ml-1 text-sm text-gray-800 leading-3 tracking-normal font-normal">
                    2,354 USD
                  </p>
                </div>
                <button
                  className="relative focus:outline-none mt-4 py-2 pr-10 bg-indigo-700 text-white tracking-normal text-xs pl-3 cursor-pointer hover:opacity-90 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700"
                  role="button"
                >
                  View Invoice
                  <img
                    className="absolute inset-0 m-auto mr-3 icon icon-tabler icon-tabler-arrow-right"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/alternating_description_with_cards-svg6.svg"
                    alt="arrow"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" pt-16">
        <div className="mx-auto">
          <div className="flex flex-wrap flex-row-reverse items-center">
            <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
              <img
                className="absolute w-full h-full inset-0 object-cover object-center rounded-md"
                src="https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187_960_720.jpg"
                alt="A group of three having a meeting"
                role="img"
              />
              <div className="relative z-10 p-4 bg-white shadow rounded mx-auto w-9/12 -mb-20">
                <p className="text-gray-800 font-normal text-md leading-4 tracking-normal mb-2">
                  Invoice # 35RD87
                </p>
                <p className="text-gray-600 dark:text-gray-200 text-xs leading-3 font-normal">
                  Assigned to: Josh Rollins
                </p>
                <div className="mt-4 flex items-center">
                  <span className="text-gray-600 dark:text-gray-200">
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/alternating_description_with_cards-svg4.svg"
                      alt="account"
                    />
                  </span>
                  <p className="ml-1 text-sm text-gray-800 leading-3 tracking-normal font-normal">
                    Specter Consultancy
                  </p>
                </div>
                <div className="mt-3 flex items-center">
                  <span className="text-gray-600 dark:text-gray-200">
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/alternating_description_with_cards-svg5.svg"
                      alt="dollar"
                    />
                  </span>
                  <p className="ml-1 text-sm text-gray-800 leading-3 tracking-normal font-normal">
                    2,354 USD
                  </p>
                </div>
                <button
                  className="relative focus:outline-none mt-4 py-2 pr-10 bg-indigo-700 text-white tracking-normal text-xs pl-3 cursor-pointer hover:opacity-90 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700"
                  role="button"
                >
                  View Invoice
                  <img
                    className="absolute inset-0 m-auto mr-3 icon icon-tabler icon-tabler-arrow-right"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/alternating_description_with_cards-svg6.svg"
                    alt="arrow"
                  />
                </button>
              </div>
            </div>
            <div className="md:w-1/2 lg:w-2/3 w-full  pr-12 md:pl-10 sm:pl-0 pl-0">
              <div className="md:py-2 py-20 mt-7 text-color">
                <div>
                  <h1
                    role="heading"
                    className="text-2xl dark:text-black   tracking-tighter md:leading-snug f-f-l font-black"
                  >
                    SHEREHE DEALS
                  </h1>
                </div>
                <p
                  role="contentinfo"
                  className="text-lg dark:text-black   leading-7   f-f-r py-8"
                >
                  Are you looking to throw a party, anniversary or celebration
                  and do not want knocks on the door telling you to tone down
                  the noise? Let us sort your headache with a conducive house,
                  décor and catering services. Hit us up today!
                </p>
                <button className="flex items-center cursor-pointer pb-4 md:pb-0 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none">
                  <span
                    aria-label="lets get started"
                    role="button"
                    className="focus outline-none f-f-r text-lg   font-semibold underline text-indigo-700 dark:text-indigo-400"
                  >
                    Lets Get Started
                  </span>
                  <div className="pl-2">
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/alternating_description_with_cards-svg1.svg"
                      alt="arrow"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
