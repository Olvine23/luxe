import one from "../images/backdrop_1.jpg";
import two from "../images/backdrop_2.jpg";
import three from "../images/backdrop_3.jpg";
import four from "../images/food_burger.jpg";
export const Card = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div>
        <h2 className="text-center text-2xl mb-5 font-bold">Destinations</h2>
        
        <div className="grid gap-9   lg:grid-cols-4  sm:max-w-sm sm:mx-auto lg:max-w-full">
          <div className="rounded-2xl shadow-2xl bg-gray-900 overflow-hidden">
            <img className="object-cover w-full h-64" alt="t" src={one} />
            <h1 className=  "text-white"> YYyy</h1>
          </div>
          <div className="bg-gray-900">
            <img className="object-cover w-full h-64" alt="t" src={two} />
            <h1 className= "text-white"> YYyy</h1>
            <p className="text-white p-4">Sed ut perspiciatis unde omnis iste natus error sit sed quia
                consequuntur magni voluptatem doloremque.</p>
          </div>
          <div className="bg-gray-900">
            <img className="object-cover w-full h-64" alt="t" src={three} />
            <h1> YYyy</h1>
          </div>
          <div className="bg-gray-900">
            <img className="object-cover w-full h-64" alt="t" src={four} />
            <h1> YYyy</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
