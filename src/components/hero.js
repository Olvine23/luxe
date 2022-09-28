export const Hero = () => {
  return (
   
    <div className="2xl:mx-auto 2xl:container mx-4 py-6">
    <div className="w-full relative flex items-center justify-center">
        <img src="https://i.ibb.co/4sYZ8gC/img-2.png" alt="dining" className="w-full h-full absolute z-0 hidden xl:block" />
        <img src="https://i.ibb.co/bbS3J9C/pexels-max-vakhtbovych-6301182-1.png" alt="dining" className="w-full h-full absolute z-0 hidden sm:block xl:hidden" />
        <img src="https://i.ibb.co/JKkzGDs/pexels-max-vakhtbovych-6301182-1.png" alt="dining" className="w-full h-full absolute z-0 sm:hidden" />
        <div className="bg-gray-800 bg-opacity-80 md:my-16 lg:py-16 py-10 w-full md:mx-24 md:px-12 px-4 flex flex-col items-center justify-center relative z-0">
            <h1 className="text-4xl font-semibold leading-9 text-white text-center">Welcome To luxelivingairbnbs</h1>
            <p className="text-base leading-normal text-center text-white mt-6">
            Our Luxe club connects you to memorable experiences, specially
                curated to attend to your personal, family or corporate needs.{" "}
                <br />
                We offer exquisite Airbnb accommodation services across East
                Africa in our various apartments and villas with the privacy
                and comfort of a home. <br /> Register today to enjoy our luxe
                unlimited packages!
            </p>
            <div className="sm:border border-white flex-col sm:flex-row flex items-center lg:w-5/12 w-full mt-12 space-y-4 sm:space-y-0">
                <input className="border border-white sm:border-transparent text-base w-full font-medium leading-none text-white p-4 focus:outline-none bg-transparent placeholder-white" placeholder="Email Address" />
                <button className="focus:outline-none focus:ring-offset-2 focus:ring border border-white sm:border-transparent w-full sm:w-auto bg-white py-4 px-6 hover:bg-opacity-75">Subscribe</button>
            </div>
        </div>
    </div>
</div>

  );
};
