import React from 'react'

import { GrReactjs } from 'react-icons/gr'

import {
  IoLogoNodejs,
  IoLogoNpm

} from 'react-icons/io'


import {
  BiCodeAlt, BiShoppingBag
} from 'react-icons/bi'

import { 
  FcSalesPerformance, 
  FcShop, 
  FcPaid, 
  FcMultipleDevices } 
  from 'react-icons/fc'

import {
SiGoogleads, 
SiMinutemailer, 
SiMagento, 
SiWordpress,
SiWoo
} from 'react-icons/si'

import {
  DiGoogleAnalytics
} from 'react-icons/di'


export default function HardSkils(){
    return(
  <div className="py-20 flex justify-center bg-white">

    <div className="max-w-6xl sm:px-6 lg:px-4 justify-center">

       <dl className="space-y-20 md:space-y-0 md:grid md:grid-cols-4 md:gap-x-40 md:gap-y-10 w-full ">
          
      



          {/* Segundo: E-commerce */}
          <div className="flex justify-center w-96">
            <div 
            className="
           
               max-w-56
               bg-indigo-100 
               p-2 text-center 
               rounded-md 
               border-4 
               border-purple-400 
               hover:border-purple-600 
               border-opacity-40 
               border-double
               transition duration-700
              ">
            <div className="flex self-center h-auto justify-center rounded-md bg-indigo-500 text-white p-2  w-56">
                <FcPaid size={36}/>
                <dt className="text-lg  font-medium p-1 ">
                  E-commerce
              </dt>
              </div>
             
              <dd className="mt-2 py-2 px-2 ">
               <dt>
                 <p className="font-medium text-opacity-70  text-gray-700 py-2 space-y-2">
                 <hr/>
                  Planning 
                  <hr/>
                  Deployment
                  <hr/>
                  Marketplaces
                  <hr/>
                  Performance
                  <hr/>
                  SEO
                  <hr/>
                  Measurement
                 </p>
               </dt>
               <div className="flex space-x-2 justify-center pt-4 pb-4  max-w-56 space-x-4 text-base text-gray-500 p-4">
               <SiWordpress size={22}/>
                <BiCodeAlt size={22}/>
                 <SiMagento size={22}/>
                 <SiWoo size={22}/>

               </div>
              </dd>
            </div>
          </div>



          {/* Segundo: E-commerce 2 */}
          <div className="flex justify-center w-96">
           
           
            <div 
            className="
           
               max-w-56
               bg-indigo-100 
               p-2 text-center 
               rounded-md 
               border-4 
               border-purple-400 
               hover:border-purple-600 
               border-opacity-40 
               border-double
               transition duration-700
              ">
            <div className="flex self-center h-auto justify-center rounded-md bg-indigo-500 text-white p-2  w-56">
            <FcSalesPerformance size={36}/>
                <dt className="text-lg  font-medium p-1 ">
                  Marketing Digital
              </dt>
              </div>
             
              <dd className="mt-2 py-2 ">
               <dt>
                 <p className="font-medium text-opacity-70  text-gray-700 py-2 space-y-2">
                 <hr/>
                  Marketing plan
                  <hr/>
                  Digital presence
                  <hr/>
                  Customer reviews
                  <hr/>
                  A/B
                  Performance
                  <hr/>
                  Data visualization
                 </p>
               </dt>
               <div className="flex space-x-2 justify-center pt-4 pb-4  max-w-56 space-x-4 text-base text-gray-500 p-4">
               <SiGoogleads size={22}/>
                 <DiGoogleAnalytics size={22}/>
                 <SiMinutemailer size={22}/>

               </div>
              </dd>
            </div>
          </div>



                    
          {/* Segundo: Marketing */}
          <div className="flex justify-center w-96">
            <div className="flex-shrink-0">      
           
            </div>
            <div 
            className="
             
          
              
               bg-indigo-100 
               p-2 text-center 
               rounded-md 
               border-4 
               border-purple-400 
               hover:border-purple-600 
               border-opacity-40 
               border-double
               transition duration-700
               max-w-56
              ">
            <div className="flex self-center h-auto justify-center rounded-md bg-indigo-500 text-white p-2 w-56">
                <FcMultipleDevices size={36}/>
                <dt className="text-lg leading-6 font-medium p-1 ">
                Web development
              </dt>
              </div>
             
              <dd className="mt-2 py-2">
               <dt>
                 <p className=" font-medium text-opacity-70  text-gray-700 py-2 space-y-2">
                 <hr/>
                 Data Analytics
                  <hr/>
                  System design
                  <hr/>
                  UI/UX
                  <hr/>
                  JavaScript
                  <hr/>
                  API REST
                  <hr/>
                  React
                  <hr/>
                  App Mobile
                 </p>
               </dt>
               <div className="flex space-x-2 justify-center pt-4 pb-4 w-full space-x-4 text-base text-gray-500"> 
                  <IoLogoNodejs size={22} />
                  <IoLogoNpm size={22} />
                  <GrReactjs size={22} />

                
                  



               </div>
              </dd>
            </div>
          </div>

        
        </dl>
  </div>
</div>
    )
}