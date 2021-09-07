import React from 'react'
import {RiGithubLine}from 'react-icons/ri'
export default function Projetos(){
    return(
    <div > 
        {/* Cabeçalho projeto */}
        <div class="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">    
        <div class="py-4 mt-10 bg-white flex justify-center items-center">
        <div class="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 space-y-4 md:space-y-0">
            
            {/* Primeiro projeto */}
            <div class="max-w-sm bg-white px-6 pt-6  rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
            <h3 class="mb-3 text-xl font-bold text-indigo-600">Proffy - Marketplace de cursos</h3>
            <div class="relative">
                <img class="w-full rounded-xl" src="projetos/homes/proffy.png" alt="Colors" />
                <p class="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">NLW</p>
            </div>
            <h1 class="mt-4 text-gray-800 text-3xl font-bold cursor-pointer">Aplicação Full Stack</h1>
            <div class="my-4">
                <div class="flex space-x-1 items-center">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-800  mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </span>
                <p>Timeboxing 1 semana</p>
                </div>
                <div class="flex space-x-1 items-center">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-900 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                </span>
                <p>Tecnologias</p>
                </div>
                <div className="mt-2 mb-4">
                    <ol>
                        <li>- HTML, CSS e Typescript</li>
                        <li>- React com TSX</li>
                        <li>- API e React router</li>
                        <li>- Deploy Vercel</li>
                    </ol>
                </div>
                <div class="flex space-x-1 items-center">
                <a href="https://github.com/paulogrillo/Proffy  "target="_blank"><RiGithubLine size={26}/></a>
                <p>Repositório</p>
                </div>
                <a href="https://proffy-rouge.vercel.app/" target="_blank">
                <button class="mt-4 text-xl w-full text-white bg-indigo-600 py-1.5 rounded-xl shadow-lg">Ver mais</button>
                </a>
            </div>
        </div>
        
        {/* Segundo projeto */}
        <div class="max-w-sm bg-white px-6 pt-6  rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
            <h3 class="mb-3 text-xl font-bold text-indigo-600">HuppyMoney - Controle financeiro</h3>
            <div class="relative">
                <img class="w-full rounded-xl" src="projetos/homes/huppymoney.png" alt="Colors" />
                <p class="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">Ignite</p>
            </div>
            <h1 class="mt-4 text-gray-800 text-3xl font-bold cursor-pointer">Aplicação Front-End</h1>
            <div class="my-4">
                <div class="flex space-x-1 items-center">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-800  mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </span>
                <p>Em construção</p>
                </div>
                <div class="flex space-x-1 items-center">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-900 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                </span>
                <p>Tecnologias</p>
                </div>
                <div className="mt-2 mb-4">
                    <ol>
                        <li>- HTML, CSS e Typescript</li>
                        <li>- React com TSX</li>
                        <li>- Styled Components</li>
                        <li>- Deploy Vercel</li>
                    </ol>
                </div>
                <div class="flex space-x-1 items-center">
                <a href="https://github.com/paulogrillo/Huppy-Money/tree/main/src" target="_blank">
                    <RiGithubLine size={26}/> </a>
                <p>Repositório</p>
                </div>
                <a href="https://huppymoney.vercel.app/" target="_blank">
                <button class="mt-4 text-xl w-full text-white bg-indigo-600 py-1.5 rounded-xl shadow-lg">Ver mais </button>
                 </a>
            </div>
        </div>
           
           
           {/* Terceiro projeto */}
           <div class="max-w-sm bg-white px-6 pt-6  rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
            <h3 class="mb-3 text-xl font-bold text-indigo-600">E-coleta - App de coleta de lixo</h3>
            <div class="relative">
                <img class="w-full rounded-xl" src="projetos/homes/ecoleta.png" alt="Colors" />
                <p class="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">NLW</p>
            </div>
            <h1 class="mt-4 text-gray-800 text-3xl font-bold cursor-pointer">Aplicação Full Stack</h1>
            <div class="my-4">
                <div class="flex space-x-1 items-center">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-800  mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </span>
                <p>Timeboxing 1 semana</p>
                </div>
                <div class="flex space-x-1 items-center">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-900 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                </span>
                <p>Tecnologias</p>
                </div>
                <div className="mt-2 mb-4">
                    <ol>
                        <li>- HTML, CSS e Typescript</li>
                        <li>- React com TSX</li>
                        <li>- Styled Components</li>
                        <li>- Deploy Heroku</li>
                    </ol>
                </div>
                <div class="flex space-x-1 items-center">
                <a href="https://github.com/paulogrillo/next-level-booster" target="_blank">
                    <RiGithubLine size={26}/> </a>
                <p>Repositório</p>
                </div>
                <a href="https://next-level.herokuapp.com/" target="_blank">
                <button class="mt-4 text-xl w-full text-white bg-indigo-600 py-1.5 rounded-xl shadow-lg">Ver mais </button>
                 </a>
            </div>
        </div>



        </div>
        </div>
        
        </div>

    </div>

    )
}