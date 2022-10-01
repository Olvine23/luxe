import {Form} from './form'
import Modal from './modal';
export const Hero = () => {
  return (
   
    <div className="2xl:mx-auto 2xl:container mx-4 py-6">
    <div className="w-full h-full relative flex items-center justify-center">
        <img src="https://i.ibb.co/4sYZ8gC/img-2.png" alt="dining" className="w-full h-full absolute z-0 hidden xl:block" />
        <img src="https://i.ibb.co/bbS3J9C/pexels-max-vakhtbovych-6301182-1.png" alt="dining" className="w-full h-full absolute z-0 hidden sm:block xl:hidden" />
        <img src="https://i.ibb.co/JKkzGDs/pexels-max-vakhtbovych-6301182-1.png" alt="dining" className="w-full h-full absolute z-0 sm:hidden" />
        <div className="bg-gray-800 bg-opacity-80 md:my-16 lg:py-16 py-10 w-full md:mx-24 md:px-12 px-4 flex flex-col items-center justify-center relative z-0">
            <h1 className="md:text-4xl text-2xl font-semibold leading-9 text-white text-center">Welcome To luxelivingairbnbs</h1>
            <p className="text-base leading-normal text-sm text-center text-white mt-6">
            Our Luxe club connects you to memorable experiences, specially
                curated to attend to your personal, family or corporate needs.{" "}
                
            </p>
            <div className='md:mt-7 mt-3 flex'>
            <Modal title="View Plans"   />
            <Modal title="Request"   />
            </div>
         
           
        </div>
    </div>
</div>

  );
};
