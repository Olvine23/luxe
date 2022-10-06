import React, { useState } from "react";

const Modal = ({title}) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="bg-[#414141] mr-6 text-white active:bg-blue-500 
      font-bold px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => setShowModal(true)}
      >
        {title}
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto md:my-6 my-2 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">General Info</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form action="https://getform.io/f/0ecde479-251c-4634-9d7e-91546e8c6840" method="POST" className="bg-gray-200 shadow-md rounded px-8 md:pt-6 pt-6 pb-8 w-full">
                    <label className="block text-black text-sm font-bold mb-1">
                      Full Names
                    </label>
                    <input name="name" placeholder="Enter Full Names" className="shadow appearance-none border rounded w-full py-2  px-1 text-black" />
                    <label className="block mt-5 text-black text-sm font-bold mb-1">
                      Email Address
                    </label>
                    <input name="email" placeholder="Enter your email address" className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    <label className="block mt-5 text-black text-sm font-bold mb-1">
                     Preffered Membership Package
                    </label>
                    <input name="package" placeholder="Enter Membership Package" className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    <label className="block mt-5 text-black text-sm font-bold mb-1">
                      Week
                    </label>
                    <input placeholder="input date" className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="submit"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;