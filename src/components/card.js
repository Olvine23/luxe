import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Splide, SplideSlide } from '@splidejs/react-splide';

export const Card = () => {
  const [showModal, setShowModal] = useState(false);
  const [showNairobiModal, setShowNairobiModal] = useState(false);
  const [showMalindiModal, setShowMalindiModal] = useState(false);
  const [showKisumuModal, setShowKisumuModal] = useState(false);
  const [showMombasaModal, setShowMombasaModal] = useState(false);

  return (
    <div
      name="destinations"
      className="  px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div>
        <h2 className="text-center text-3xl mb-2 font-bold">Destinations</h2>
        <h3 className="text-center font-bold text-gray-600 divide-y mb-9">
          Wherever, whenever
        </h3>
        <h2 className="text-right mr-6">
          See All <FontAwesomeIcon icon={faArrowRight} />{" "}
        </h2>
        
        <div className="grid gap-11   lg:grid-cols-4  sm:max-w-sm sm:mx-auto lg:max-w-full">
          <div className="rounded-2xl shadow-2xl bg-white overflow-hidden">
            <img
              onClick={() => setShowNairobiModal(true)}
              className="  object-cover w-full h-64"
              alt="t"
              src="https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041__340.jpg"
            />
            <h1 className="mt-3 text-center font-bold text-[#414141]">
              {" "}
              <FontAwesomeIcon className="mr-4" icon={faLocationDot} /> Nairobi
            </h1>
          </div>
          <div className="rounded-2xl shadow-2xl bg-white overflow-hidden">
            <img
              onClick={() => setShowKisumuModal(true)}
              className="object-cover w-full h-64"
              alt="t"
              src="https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_960_720.jpg"
            />
            <h1 className="mt-3 text-center text-[#414141]">
              <FontAwesomeIcon className="mr-4" icon={faLocationDot} /> Kisumu
            </h1>
          </div>
          <div className="rounded-2xl shadow-2xl bg-white overflow-hidden">
            <img
              onClick={() => setShowMalindiModal(true)}
              className="object-cover w-full h-64"
              alt="t"
              src="https://cdn.pixabay.com/photo/2016/11/30/08/46/living-room-1872192__340.jpg"
            />
            <h1 className="mt-3 text-center font-bold text-[#414141]">
              {" "}
              <FontAwesomeIcon className="mr-4" icon={faLocationDot} />
              Malindi
            </h1>
          </div>
          <div className="rounded-2xl shadow-2xl bg-white overflow-hidden">
            <img
              onClick={() => setShowMombasaModal(true)}
              className="object-cover w-full h-64"
              alt="t"
              src="https://cdn.pixabay.com/photo/2013/09/24/12/06/apartment-185778__340.jpg"
            />
            <h1 className="mt-3 font-bold text-center text-[#414141]">
              <FontAwesomeIcon className="mr-4" icon={faLocationDot} />
              Mombasani
            </h1>
          </div>
        </div>
      </div>

      {showModal ? (
        <>
          <div className="flex justify-center items-center bg-black bg-opacity-25 backdrop-blur-sm overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className=" w-auto md:my-6 my-2 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">Awesome Locations</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="  p-6 flex-auto">
                  <img
                    className="object-cover w-full h-64"
                    alt="t"
                    src="https://cdn.pixabay.com/photo/2016/08/26/15/06/home-1622401_960_720.jpg"
                  />
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}

      {showMombasaModal ? (
        <>
          <div className="flex justify-center items-center bg-black bg-opacity-25 backdrop-blur-sm overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className=" w-auto md:my-6 my-2 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">Awesome Locations In Mombasa </h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowMombasaModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="  p-6 flex-auto">
                <div className="grid grid-cols-3 gap-1 md:gap-2">
                    <div>
                      <img
                        className="object-cover h-32 md:w-64 md:h-64"
                        alt="t"
                        src="https://cdn.pixabay.com/photo/2018/01/26/08/15/dining-room-3108037__340.jpg"
                      />
                      <h1 className="text-center py-6">Parklands</h1>
                    </div>
                    <div>
                      <img
                        className="object-cover h-32 md:w-64 md:h-64"
                        alt="t"
                        src="https://www.baufritz.com/images/teaser/crossland_760x700.jpg?t=1615210589"
                      />
                      <h1 className="text-center py-6">Parklands</h1>
                    </div>
                    <div>
                      <img
                        className="object-cover h-32 md:w-64 md:h-64"
                        alt="t"
                        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/brewster-mcleod-architects-1486154143.jpg"
                      />
                      <h1 className="text-center py-6">Parklands</h1>
                    </div>
                  </div>
                 
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowMombasaModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}

      {showNairobiModal ? (
        <>
          <div className="flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className=" w-auto md:my-6 my-2 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-200 outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl text-center font=semibold">
                    Awesome Locations In Nairobi
                  </h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowNairobiModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className=" md:p-6  flex-auto">
                  <div className="grid grid-cols-3 gap-1 md:gap-2">
                    <div>
                      <img
                        className="object-cover h-32 md:w-64 md:h-64"
                        alt="t"
                        src="https://cdn.pixabay.com/photo/2018/01/26/08/15/dining-room-3108037__340.jpg"
                      />
                      <h1 className="text-center py-6">Parklands</h1>
                    </div>
                    <div>
                      <img
                        className="object-cover h-32 md:w-64 md:h-64"
                        alt="t"
                        src="https://www.baufritz.com/images/teaser/crossland_760x700.jpg?t=1615210589"
                      />
                      <h1 className="text-center py-6">Parklands</h1>
                    </div>
                    <div>
                      <img
                        className="object-cover h-32 md:w-64 md:h-64"
                        alt="t"
                        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/brewster-mcleod-architects-1486154143.jpg"
                      />
                      <h1 className="text-center py-6">Parklands</h1>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowNairobiModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}

      {showMalindiModal ? (
        <>
          <div className="flex justify-center items-center bg-black bg-opacity-25 backdrop-blur-sm overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className=" w-auto md:my-6 my-2 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">Awesome Locations In Malindi</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowMalindiModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="  p-6 flex-auto">
                <div className="grid grid-cols-3 gap-1 md:gap-2">
                    <div>
                      <img
                        className="object-cover h-32 md:w-64 md:h-64"
                        alt="t"
                        src="https://cdn.pixabay.com/photo/2018/01/26/08/15/dining-room-3108037__340.jpg"
                      />
                      <h1 className="text-center py-6">Parklands</h1>
                    </div>
                    <div>
                      <img
                        className="object-cover h-32 md:w-64 md:h-64"
                        alt="t"
                        src="https://www.baufritz.com/images/teaser/crossland_760x700.jpg?t=1615210589"
                      />
                      <h1 className="text-center py-6">Parklands</h1>
                    </div>
                    <div>
                      <img
                        className="object-cover h-32 md:w-64 md:h-64"
                        alt="t"
                        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/brewster-mcleod-architects-1486154143.jpg"
                      />
                      <h1 className="text-center py-6">Parklands</h1>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowMalindiModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}

      {showKisumuModal ? (
        <>
          <div className="flex justify-center items-center bg-black bg-opacity-25 backdrop-blur-sm overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className=" w-auto md:my-6 my-2 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">Awesome Locations In Kisumu</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowKisumuModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="  p-6 flex-auto">
                <div className="grid grid-cols-3 gap-1 md:gap-2">
                    <div>
                      <img
                        className="object-cover h-32 md:w-64 md:h-64"
                        alt="t"
                        src="https://cdn.pixabay.com/photo/2018/01/26/08/15/dining-room-3108037__340.jpg"
                      />
                      <h1 className="text-center py-6">Parklands</h1>
                    </div>
                    <div>
                      <img
                        className="object-cover h-32 md:w-64 md:h-64"
                        alt="t"
                        src="https://www.baufritz.com/images/teaser/crossland_760x700.jpg?t=1615210589"
                      />
                      <h1 className="text-center py-6">Parklands</h1>
                    </div>
                    <div>
                      <img
                        className="object-cover h-32 md:w-64 md:h-64"
                        alt="t"
                        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/brewster-mcleod-architects-1486154143.jpg"
                      />
                      <h1 className="text-center py-6">Parklands</h1>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowKisumuModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};
