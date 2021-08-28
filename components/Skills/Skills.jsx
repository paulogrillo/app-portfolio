import React from 'react'
import { DiJava } from 'react-icons/di'
import { GrReactjs, GrMysql, GrStackOverflow} from 'react-icons/gr'
import {FaGitAlt} from 'react-icons/fa'
import {
  IoLogoNodejs,IoLogoVercel,
} from 'react-icons/io'


import {
  SiSpring,
  SiPython,
  SiYarn,
  SiNetlify,
  SiHeroku,
  SiNextDotJs,
  SiAngular,
  SiVisualstudio,
  SiIntellijidea,
  SiEclipseide,
}from 'react-icons/si'


import {
  BiCodeAlt, BiGitBranch, BiShoppingBag
} from 'react-icons/bi'

export default function Skills(){
    return(
        <div className="lg:flex justify-center">
           
           
           <div 
            class="
                grid-item
               bg-indigo-100 
               lg:w-80 sm:max-w-full h-auto lg:m-20 
               my-10 m-4
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
                
                <h2 class="
                  text-lg 
                  leading-6 
                  font-medium 
                  p-1 
                  m-px
                ">
                  Linguagens
                </h2>
                <BiCodeAlt size={40}/>
              </div>

              <div className="p-10 flex ">
              <div className="flex   justify-center  md:grid  pb-4 w-full text-base text-gray-500 ">
                  <IoLogoNodejs size={40} 
                   className="mt-2"
                  />
               </div>

                <div className="flex  justify-center  md:grid  pb-4 w-full text-base text-gray-500 ">
                  <DiJava size={60} 
                  className="mx-2"
                  />
                </div>

                <div className="flex  justify-center  md:grid  pt-2 w-full text-base text-gray-500 ">
                  <SiPython size={45} 
                  className="mx-2"
                  />
                </div>
              </div>
          </div>





          <div 
            class="
                grid-item
               bg-indigo-100 
               lg:w-80 sm:max-w-full h-auto lg:m-20 
               my-10 m-4
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
                
                <h2 class="
                  text-lg 
                  leading-6 
                  font-medium 
                  p-1 
                  m-px
                ">
                  Frame Works
                </h2>
                <BiCodeAlt size={40}/>
              </div>

              <div className="p-10 flex ">
              <div className="flex  justify-center  md:grid  pb-4 w-full text-base text-gray-500 ">
                  <SiAngular size={40} 
                   className="mt-2"
                  />
               </div>
              <div className="flex justify-center  md:grid  pb-4 w-full text-base text-gray-500 ">
                  <GrReactjs size={40} 
                   className="mt-2"
                  />
                </div>
                <div className="flex justify-center  md:grid  pb-4 w-full text-base text-gray-500 ">
                  <SiSpring size={50} 
                  className="mx-2"
                  />
                </div>
              </div>
          </div>




          <div 
            class="
                grid-item
               bg-indigo-100 
               lg:w-80 sm:max-w-full h-auto lg:m-20 my-10 m-4 
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
                
                <h2 class="
                  text-lg 
                  leading-6 
                  font-medium 
                  p-1 
                  m-px
                ">
                  Outras ferramentas
                </h2>
                <GrStackOverflow size={40}/>
              </div>

              <div className="p-10 flex ">
              <div className="flex  justify-center  md:grid  pb-4 w-full text-base text-gray-500 ">
                  <GrMysql size={40} 
                   className="mt-2"
                  />
               </div>
              <div className="flex  justify-center  md:grid  pb-4 w-full text-base text-gray-500 ">
                  <SiHeroku size={40} 
                   className="mt-2"
                  />
                </div>
                <div className="flex  justify-center  md:grid  pb-4 w-full text-base text-gray-500 ">
                  <FaGitAlt size={60} 
                  className="mx-2"
                  />
                </div>
              </div>
          </div>


        </div>

    )
}