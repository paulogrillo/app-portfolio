import React from 'react';
import { Component, useState } from 'react'
import { Transition } from '@headlessui/react'
import { AiOutlineCoffee } from 'react-icons/ai';
import { RiWhatsappLine } from 'react-icons/ri'

import { Box } from "@chakra-ui/react"
import MenuMobile from './MenuMobile'

import MediaQuery from 'react-responsive'



function NavMenu() {
  const [isOpen, setIsOpen] = useState(false)
  
  return (

    
<div className="relative bg-black-03 w-full">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100  md:justify-start md:space-x-10">

                <div className="flex justify-start lg:w-0 lg:flex-1">
                    <a href="/">   
                        <img src="/global/logo-01.png" className="w-48" alt=""/>           
                    </a>
                        
                    <MenuMobile/>
                   
                </div>


        {/* NAV */}

        





        <MediaQuery minWidth={986}>

        <nav className="hidden md:flex space-x-10 ">
          
            <div className="relative ">

            <a href="/" className="text-base font-medium pr-10 text-white hover:text-yellow-300">
            Inicio
            </a>
                <button onClick={() => setIsOpen(!isOpen)} type="button" className="group  rounded-md text-white inline-flex items-center text-base font-medium hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <span >Soluções</span>
            
                    <svg className="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </button>

            <Transition
                  show={isOpen}
                  enter="transition ease-out duration-100 transform"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="transition ease-in duration-75 transform"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
              {(ref) => (
                <div ref={ref} className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg ">
                  <div className="rounded-md shadow-xs   ">
                    {/* Snipped */}

                  <div className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2 ">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden ">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          <a href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                          
                          <svg className="flex-shrink-0 h-6 w-6 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                          <div className="ml-4">
                             
                              <p className="text-base font-medium text-gray-900">
                              Desgin
                              </p>
                              <ul className="mt-4 text-sm text-gray-500">
                                  <li className="list-disc">Identidade Visual</li>
                                  <li className="list-disc">Mídias sociais</li>
                                  <li className="list-disc">Web Design</li>
                              </ul>          
                          </div>
                          </a>

                          <a href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                          
                          <svg className="flex-shrink-0 h-6 w-6 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                          </svg>
                          <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">
                              Marketing Digital
                              </p>
                              <ul className="mt-4 text-sm text-gray-500">
                                  <li className="list-disc">Auditoria</li>
                                  <li className="list-disc">SEO</li>
                                  <li className="list-disc">Inbound</li>
                                  <li className="list-disc">Data Analytics</li>

                              </ul>  
                             
                          </div>
                          </a>

                          <a href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                          
                          <svg className="flex-shrink-0 h-6 w-6 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                          <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">
                              Desenvolvimento Web
                              </p>
                              <ul className="mt-4 text-sm text-gray-500">
                                  <li className="list-disc">Site institucional</li>
                                  <li className="list-disc">E-commerce</li>
                                  <li className="list-disc">Blog</li>
                                  <li className="list-disc">Landing Page</li>

                              </ul>  
                          </div>
                          </a>

                          <a href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                          
                          <svg className="flex-shrink-0 h-6 w-6 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                          </svg>
                          <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">
                              Onboarding
                              </p>
                              <ul className="mt-4 text-sm text-gray-500">
                                  <li className="list-disc">Marketplaces</li>
                                  <li className="list-disc">Magento</li>
                                  <li className="list-disc">Wordpress</li>
                                  <li className="list-disc">Loja Integrada</li>
                                  <li className="list-disc">Vtex</li>


                              </ul>  
                          </div>
                          </a>

                          
                      </div>
                      <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                          <div className="flow-root">
                          <a href="#" className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
                          
                              <svg className="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span className="ml-3">Baixar apresentação</span>
                          </a>
                          </div>

                          <div className="flow-root">
                          <a href="#" className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
                          
                              <svg className="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                              <span className="ml-3">Falar com um especialista</span>
                          </a>
                          </div>
                      </div>
                      </div>
                  </div>
                    
                  </div>
                </div>
              )}
            </Transition>


            </div>

            <a href="#" className="text-base font-medium  text-white hover:text-yellow-300">
            Portfólio
            </a>
     
            <a href="#" className="text-base font-medium text-white hover:text-yellow-300">
            Blog
            </a>
            
        </nav>
        </ MediaQuery>
        <MediaQuery minWidth={1000}>
        <div className="hidden h-auto md:flex items-center justify-end md:flex-1 lg:w-0">
        <Box
           
            w="2.rem"
            as="button"
            p={2}
            color="white"
            fontWeight="bold"
            borderRadius="md"
            bgGradient="linear(to-r, teal.500,green.500)"
            _hover={{
              bgGradient: "linear(to-r, red.500, yellow.500)",
            }}
        >
          <h3  className="font-normal py-2 ">
                                             <strong>Fale com nosso time </strong>
            </h3>
          
          <a href="#" className=" whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-normal text-white bg-black-02 ">
              <span className="mr-2"><RiWhatsappLine  size={18}/> </span>      Orçamentos
          </a>
</Box>
       
        
      </div>

      

      <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
      

    


    </div>
    
  </div>
  </MediaQuery>
</div>





</div>
</div>
















  )
}

export default NavMenu;

