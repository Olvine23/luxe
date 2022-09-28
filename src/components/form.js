
export const Form = () => {

    return(

    <div>

        <div aria-label="form" tabindex="0" class="focus:outline-none xl:w-10/12 w-full px-8">
            <div class="bg-gray-100 py-12 flex flex-wrap items-center justify-center">
                <div class="w-52 h-16 relative md:mt-0 mt-4">
                    <img src="https://i.ibb.co/DwNs7zG/Steps.png" alt="step1" class="w-full h-full" />
                    <div class="absolute w-full flex flex-col px-6 items-center justify-center inset-0 m-0">
                        <p tabindex="0" class="focus:outline-none w-full text-sm font-medium leading-4 text-white">Sign Up</p>
                        <p tabindex="0" class="focus:outline-none w-full text-xs mt-1 leading-none text-white">description of step 1</p>
                    </div>
                </div>
                <div class="w-52 h-16 relative md:mt-0 mt-4">
                    <img src="https://i.ibb.co/wNZ4nzy/Steps2.png" alt="step2" class="w-full h-full" />
                    <div class="absolute w-full flex flex-col px-6 items-center justify-center inset-0 m-0">
                        <p tabindex="0" class="focus:outline-none w-full text-sm font-medium leading-4 text-indigo-800">About you</p>
                        <p tabindex="0" class="focus:outline-none w-full text-xs mt-1 leading-none text-indigo-800">Some info about you</p>
                    </div>
                </div>
                <div class="w-52 h-16 relative md:mt-0 mt-4">
                    <img src="https://i.ibb.co/c2k4Gbr/Steps3.png" alt="step3" class="w-full h-full" />
                    <div class="absolute w-full flex flex-col px-6 items-center justify-center inset-0 m-0">
                        <p tabindex="0" class="focus:outline-none w-full text-sm font-medium leading-4 text-gray-700">Onboarding</p>
                        <p tabindex="0" class="focus:outline-none w-full text-xs mt-1 leading-none text-gray-500">Get accquainted</p>
                    </div>
                </div>
                <div class="w-52 h-16 relative lg:mt-0 mt-4">
                    <img src="https://i.ibb.co/XCdjrhm/Steps4.png" alt="step4" class="w-full h-full" />
                    <div class="absolute w-full flex flex-col px-6 items-center justify-center inset-0 m-0">
                        <p tabindex="0" class="focus:outline-none w-full text-sm font-medium leading-4 text-gray-700">Getting Started</p>
                        <p tabindex="0" class="focus:outline-none w-full text-xs mt-1 leading-none text-gray-500">Resources to begin</p>
                    </div>
                </div>
            </div>
            <div class="xl:px-24">
                <div class="px-5 py-4 bg-gray-100 rounded-lg flex items-center justify-between mt-7">
                    <div class="flex items-center">
                        <div tabindex="0" class="focus:outline-none flex-shrink-0">
                           <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/form_layout_wizard2-svg1.svg" alt="lock" />
                        </div>

                        <p tabindex="0" class="focus:outline-none text-sm text-gray-800 pl-3">We take privacy issues seriously. You can be sure that your personal data is securely protected.</p>
                    </div>
                    <button  aria-label="Close this banner" class="md:block hidden focus:outline-none focus:ring-2 focus:ring-gray-700 rounded">
                       <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/form_layout_wizard2-svg2.svg" alt="cross" />
                    </button>
                </div>
                <div class="mt-16 lg:flex justify-between border-b border-gray-200 pb-16">
                    <div class="w-80">
                        <div class="flex items-center">
                            <h1 tabindex="0" class="focus:outline-none text-xl font-medium pr-2 leading-5 text-gray-800">Personal Information</h1>
                        </div>
                        <p tabindex="0" class="focus:outline-none mt-4 text-sm leading-5 text-gray-600">Information about the section could go here and a brief description of how this might be used.</p>
                    </div>
                    <div>
                        <div class="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                            <div class="md:w-64">
                                <label class="text-sm leading-none text-gray-800" id="firstName" >First name</label>
                                <input type="name" tabindex="0" class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="firstName" placeholder="John" />
                            </div>
                            <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                                <label class="text-sm leading-none text-gray-800" id="lastName">Last name</label>
                                <input type="name" tabindex="0" class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="lastName" placeholder="Doe" />
                            </div>
                        </div>
                        <div class="md:flex items-center lg:ml-24 mt-8">
                            <div class="md:w-64">
                                <label class="text-sm leading-none text-gray-800" id="emailAddress">Email address</label>
                                <input type="email" tabindex="0" class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="emailAddress" placeholder="youremail@example.com" />
                            </div>
                            <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                                <label class="text-sm leading-none text-gray-800" id="phone" >Phone number</label>
                                <input type="name" tabindex="0" class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="phone" placeholder="123-1234567" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-16 lg:flex justify-between border-b border-gray-200 pb-16 mb-4">
                    <div class="w-80">
                        <div class="flex items-center">
                            <h1 tabindex="0" class="focus:outline-none text-xl font-medium pr-2 leading-5 text-gray-800">Security</h1>
                        </div>
                        <p tabindex="0" class="focus:outline-none mt-4 text-sm leading-5 text-gray-600">Information about the section could go here and a brief description of how this might be used.</p>
                    </div>
                    <div>
                        <div class="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                            <div class="md:w-64">
                                <label class="text-sm leading-none text-gray-800" id="password">Password</label>
                                <input type="name" tabindex="0" class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="password" placeholder="Enter your password" />
                            </div>
                            <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                                <label class="text-sm leading-none text-gray-800" id="securityCode">Security Code</label>
                                <input type="name" tabindex="0" class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="securityCode" placeholder="Enter your security code" />
                            </div>
                        </div>
                        <div class="md:flex items-center lg:ml-24 mt-8">
                            <div class="md:w-64">
                                <label class="text-sm leading-none text-gray-800" id="recoverEmail">Recovery Email address</label>
                                <input type="name" tabindex="0" class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"  placeholder="Your recovery email" />
                            </div>
                            <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                                <label class="text-sm leading-none text-gray-800" id="altPhone">Alternate phone number</label>
                                <input type="name" tabindex="0" class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="altPhone" placeholder="Your alternate phone number" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    </div>
    )
}