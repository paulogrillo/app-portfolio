
import React from 'react';

import {BiUpArrow} from 'react-icons/bi'
import { Link } from 'react-scroll';


export default function FixedMenu(){
    return(
        <div className="z-50 lg:h-auto lg:grid  flex-row lg:fixed grid absolute lg:right-40 lg:inset-y-40 inset-y-80  ">
            <ul activeClass="active" className="lg:space-y-9 space-y-4 animate-pulse duration-1000">
                
            
            <li  className="
                    text-center
                    font-semibold
                    rounded-full
                    lg:rounded-l-full
                    rounded-l-none
                    opacity-80
                    
                    
                    text-white
                    bg-green-400 
                    hover:bg-green-600                         lg:w-60 w-32
                    lg:h-10 h-8
                    py-1
                    cursor-pointer
                    duration-300
                    shadow-lg
                    
                    ">
                <Link 
                activeClass="active" 
               
                to="skills" 
                spy={true} 
                smooth={true} 
                duration={500}>
                    <p className="lg:text-2xl text-sm">Hard Skills</p>
                </Link>
            </li>
        
            <div activeClass="active" 
                to="skills" 
                spy={true} 
                smooth={true} 
                duration={500} 
                className="
                    text-center
                    text-base
                    font-semibold
                    rounded-full
                    lg:rounded-l-full
                    rounded-l-none
                    opacity-80
                    text-white
                    bg-green-400 
                    hover:bg-green-600
                    lg:w-60 w-32
                    lg:h-10 h-8
                    py-1
                    cursor-pointer
                    duration-300
                    shadow-lg

                    ">
              <Link 
                activeClass="active" 
               
                to="softskils" 
                spy={true} 
                smooth={true} 
                duration={500}>
                    <p className="lg:text-2xl text-sm">Soft Skills</p>
                </Link>
                    
                
                </div>
            
            <li className="
                    text-center
                    text-base
                    font-semibold
                    rounded-full
                    lg:rounded-l-full
                    rounded-l-none
                    opacity-80
                    text-white
                    bg-green-400 
                    hover:bg-green-600
                    lg:w-60 w-32
                    lg:h-10 h-8
                    py-1
                    cursor-pointer
                    duration-300
                    shadow-lg
                    ">
                <Link 
                activeClass="active" 
                to="projetos" 
                spy={true} 
                smooth={true} 
                duration={500}>
                    <p className="lg:text-2xl text-sm">Portfólio</p>
                </Link>
            </li>
            </ul>

               
        </div>
    )
}