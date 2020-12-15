import React from 'react'
import { 
  IoLogoJavascript, 
  IoLogoCss3,
  IoLogoHtml5,

} from 'react-icons/io'

import {
  BiCodeAlt
} from 'react-icons/bi'


export default function CardProjetos(){
    return(
        <div class="mt-16">
       
        <dl class="space-y-20 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-64 md:gap-y-10 justify-center lg:space-x-10 h-auto">
          
          
          {/* Primeiro: Ecoleta */}
          <div class="flex justify-center w-full">
           
            <div class="ml-4 bg-pink-500 duration-300 hover:bg-pink-600 p-2 text-center rounded-md border-4 border-white border-opacity-80 border-double space-y-4">
            <div class="flex self-center h-auto justify-center rounded-md mt-8">
               <a href="https://next-level.herokuapp.com/">
               <img className="w-60 cursor-pointer" src="/projetos/ecoleta/logo.svg" alt="Ecoleta"/>
               </a>
               
              
              </div>
                <img className="rounded-lg w-full" src="/projetos/ecoleta/ecoleta-desktop.svg" alt=""/> 
                <img className="rounded-lg" src="/projetos/ecoleta/desktop-cadastro.svg" alt=""/> 
                <img className="rounded-lg" src="/projetos/ecoleta/mobile-inicial.svg" alt=""/>
                <img className="rounded-lg" src="/projetos/ecoleta/mobile-cadastro.svg" alt=""/> 
              <dd class="mt-2 text-base text-gray-500 p-4 flex justify-center">
                  <IoLogoJavascript size={22} />
              </dd>           
            </div>
          </div>

                 {/* Primeiro: Ecoleta */}
          <div class="flex justify-center   ">
           
           <div class="ml-4 bg-pink-500 duration-300 hover:bg-pink-600 p-2 text-center rounded-md border-4 border-white border-opacity-80 border-double space-y-16 ">
           <div class="flex self-center h-auto justify-center rounded-md mt-8">
              <a href="https://proffy-rouge.vercel.app/">
              <img className="w-60 cursor-pointer" src="/projetos/proffy/logo.svg" alt="Proffy"/>
              </a>
               
             </div>
               <img className="rounded-lg " src="/projetos/proffy/desktop-home.svg" alt=""/> 
               <img className="rounded-lg" src="/projetos/proffy/buscar-prof-desktop.svg" alt=""/> 
               <img className="rounded-lg" src="/projetos/proffy/mobile-home.svg" alt=""/>
               <img className="rounded-lg" src="/projetos/proffy/buscar-prof-mobile.svg" alt=""/> 
             <dd class="mt-2 text-base text-gray-500 p-4 flex justify-center">
                 <IoLogoJavascript size={22} />
             </dd>           
           </div>
         </div>
          
            
            

        </dl>


      </div>
    )
}