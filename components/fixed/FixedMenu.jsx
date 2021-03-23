
import React from 'react';

import {BiUpArrow} from 'react-icons/bi'
import { Link } from 'react-scroll';


export default function FixedMenu(){
    return(
        <div className="z-50 lg:h-auto lg:grid lg:inset-y-50 flex-row lg:fixed grid absolute inset-y-60 ">
            <ul activeClass="active" className="lg:space-y-9 space-y-4 animate-pulse duration-1000">
                
            
            <li  className="
                    text-center
                    text-base
                    font-semibold
                    rounded-full
                    rounded-l-none
                    text-white
                    bg-green-400 
                    hover:bg-green-600                         lg:w-60 w-40
                    lg:h-10 h-10
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
                    <p className="lg:text-2xl text-xl">Hard Skills</p>
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
                    rounded-l-none
                    text-white
                    bg-green-400 
                    hover:bg-green-600
                    lg:w-60 w-40
                    lg:h-10 h-10
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
                    <p className="lg:text-2xl text-xl">Soft Skills</p>
                </Link>
                    
                
                </div>
            
            <li className="
                    text-center
                    text-base
                    font-semibold
                    rounded-full
                    rounded-l-none
                    text-white
                    bg-green-400 
                    hover:bg-green-600
                    lg:w-60 w-40
                    lg:h-10 h-10
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
                    <p className="lg:text-2xl text-xl">Portfólio</p>
                </Link>
            </li>
            </ul>

               
        </div>
    )
}