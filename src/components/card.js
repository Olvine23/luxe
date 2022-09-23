
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
 
export const Card = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div>
        <h2 className="text-center text-3xl mb-2 font-bold">Destinations</h2>
        <h3 className="text-center font-bold text-gray-600 divide-y mb-9">Wherever, whenever</h3>
        <h2 className="text-right mr-6">See All <FontAwesomeIcon icon={faArrowRight} /> </h2>
        <div className="grid gap-11   lg:grid-cols-4  sm:max-w-sm sm:mx-auto lg:max-w-full">
          <div className="rounded-2xl shadow-2xl bg-white overflow-hidden">
            <img className="object-cover w-full h-64" alt="t" src="https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041__340.jpg" />
            <h1 className=  "mt-3 text-center font-bold text-[#414141]"> <FontAwesomeIcon className="mr-4" icon={faLocationDot} /> Nairobi</h1>
          </div>
          <div className="rounded-2xl shadow-2xl bg-white overflow-hidden">
            <img className="object-cover w-full h-64" alt="t" src="https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_960_720.jpg" />
            <h1 className=  "mt-3 text-center text-[#414141]"><FontAwesomeIcon className="mr-4" icon={faLocationDot} /> Kisumu</h1>
          </div>
          <div className="rounded-2xl shadow-2xl bg-white overflow-hidden">
            <img className="object-cover w-full h-64" alt="t" src="https://media.istockphoto.com/photos/modern-architecture-with-playground-picture-id474649154?b=1&k=20&m=474649154&s=170667a&w=0&h=n_IL8zBZiFbmagwRU-waE375OfoWioAZ7EvRgivunCY=" />
            <h1 className=  "mt-3 text-center font-bold text-[#414141]"> <FontAwesomeIcon className="mr-4" icon={faLocationDot} />Malindi</h1>
          </div>
          <div className="rounded-2xl shadow-2xl bg-white overflow-hidden">
            <img className="object-cover w-full h-64" alt="t" src="https://media.istockphoto.com/photos/residential-area-in-the-city-modern-apartment-buildings-picture-id1159873271?b=1&k=20&m=1159873271&s=170667a&w=0&h=q3NzDwLx1_phKGuwoky47RcELDt8PMr3zA8WdaauCRg=" />
            <h1 className=  "mt-3 font-bold text-center text-[#414141]"><FontAwesomeIcon className="mr-4" icon={faLocationDot} />Mombasa</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
