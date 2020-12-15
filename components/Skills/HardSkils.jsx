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
  <div class="py-4 bg-white">
     <div className="flex justify-center w-full py-6">
      <p class="text-2xl leading-4 font-thin tracking-tight  text-gray-900 opacity-90 sm:text-4xl text-center sm:text-left  py-2">
            Hard Skills
            </p>
     </div>
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-4 justify-center">

       <dl class="space-y-20 md:space-y-0 md:grid md:grid-cols-4 md:gap-x-40 md:gap-y-10 w-full ">
          
       
          {/* Segundo: Marketing */}
      <div class="flex justify-center w-96">

            <div 
            class="
              lg:ml-16
               bg-indigo-100 
               p-2 
               text-center 
               rounded-md 
               border-4 
               border-purple-400 
               hover:border-purple-600 
               border-opacity-40 
               border-double
               transition duration-700
              ">
            <div 
            class="
              flex 
              self-center
              h-auto justify-center 
              rounded-md 
              bg-indigo-500 
              text-white 
              p-2
              ">
                <FcSalesPerformance size={36}/>
                <dt 
                class="
                  text-lg 
                  leading-6 
                  font-medium 
                  p-1 
                  m-px
                ">
                Marketing Digital
                </dt>
              </div>
             
              <dd class="mt-2 py-2">
               <dt>
                 <p className="font-medium text-opacity-70  text-gray-700">
                  Marketing
                  <hr/>
                  Planejamento
                  <hr/>
                  Metodologias
                  <hr/>
                  Criação
                  <hr/>
                  Performance
                  <hr/>
                  Resultados
                 </p>
               </dt>
               <div className="flex space-x-2 justify-center pt-4 pb-4 w-full space-x-4 text-base text-gray-500 ">
                 <SiGoogleads size={22}/>
                 <DiGoogleAnalytics size={22}/>
                 <SiMinutemailer size={22}/>
                 
               </div>
              </dd>
            </div>
          </div>



                    
          {/* Segundo: Marketing */}
          <div class="flex justify-center w-96">
           
            <div class="flex-shrink-0">      
           
            </div>
            <div 
            class="
              
              lg:ml-16
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
            <div class="flex self-center h-auto justify-center rounded-md bg-indigo-500 text-white p-2">
                <FcPaid size={36}/>
                <dt class="text-lg leading-6 font-medium p-1 m-px">
                  E-commerce
              </dt>
              </div>
             
              <dd class="mt-2 py-2 ">
               <dt>
                 <p className="font-medium text-opacity-70  text-gray-700">
                  Implantação
                  <hr/>
                  Desenvolvimento
                  <hr/>
                  Marketplaces
                  <hr/>
                  Performance
                  <hr/>
                  SEO
                  <hr/>
                  Plataformas
                 </p>
               </dt>
               <div className="flex space-x-2 justify-center pt-4 pb-4 w-full space-x-4 text-base text-gray-500 p-4">
               <SiWordpress size={22}/>
                <BiCodeAlt size={22}/>
                 <SiMagento size={22}/>
                 <SiWoo size={22}/>

               </div>
              </dd>
            </div>
          </div>



                    
          {/* Segundo: Marketing */}
          <div class="flex justify-center w-96">
            <div class="flex-shrink-0">      
           
            </div>
            <div 
            class="
            sm:w-60  
          
              lg:ml-16
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
            <div class="flex self-center h-auto justify-center rounded-md bg-indigo-500 text-white p-2">
                <FcMultipleDevices size={36}/>
                <dt class="text-lg leading-6 font-medium p-1 m-px">
                Web Devepoler
              </dt>
              </div>
             
              <dd class="mt-2 py-2">
               <dt>
                 <p className=" font-medium text-opacity-70  text-gray-700">
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