
import one from '../images/backdrop_1.jpg'
export const Header = () => {
    return (
      <div className=" relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0">
         <div className=" mt-0z  inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
          {/* <img
            className="object-cover  w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
            src="https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187_960_720.jpg"
            alt=""
          /> */}
         <img
            className="object-cover  w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
            src={one}
            alt=""
          />
        </div>
        <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-20 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6">
               
              <h2 className="max-w-lg mb-4 font-sans  p-3 font-bold uppercase tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                <span className=" text-lg md:text-2xl text-blue-400">Welcome To</span> <br /> <span className="text-2xl md:text-5xl">Ollylifeairbnb</span>
              </h2>
              <p className="text-base text-lg tracking-wide text-gray-700 md:text-lg">
                Freedom to move anywhere ,anytime with no leases, landlords or commitments
              </p>
            </div>
            <div className="flex flex-col items-center md:flex-row">
              <a
                href="/"
                className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-gray-900 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
               Be a Member
              </a>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                 Explore
              </a>
            </div>
          </div>
        </div>
       
      </div>
    );
  };