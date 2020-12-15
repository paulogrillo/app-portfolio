import {Link} from 'react-scroll';
import React from 'react';

export default function FixedMenu(){
    return(
        <div className="lg:grid lg:inset-y-80 flex-row lg:fixed  grid absolute inset-y-36">
            <ul className="space-y-9 animate-pulse duration-1000">
                
            
            <li className="
                    text-center
                    text-base
                    font-semibold
                    rounded-full
                    rounded-l-none
                    text-white
                    bg-green-400 
                    hover:bg-green-600
                    lg:w-28 w-20
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
                    Hard Skils
                </Link>
            </li>
            <li className="
                    text-center
                    text-base
                    font-semibold
                    rounded-full
                    rounded-l-none
                    text-white
                    bg-green-400 
                    hover:bg-green-600
                    lg:w-28 w-24
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
                    Soft Skils
                </Link>
            </li>
            <li className="
                    text-center
                    text-base
                    font-semibold
                    rounded-full
                    rounded-l-none
                    text-white
                    bg-green-400 
                    hover:bg-green-600
                    lg:w-28 w-28
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
                    Projetos
                </Link>
            </li>
                

            </ul>
        </div>
    )
}