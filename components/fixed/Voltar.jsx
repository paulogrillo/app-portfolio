import {Link} from 'react-scroll';
import React from 'react';

import {BiUpArrow} from 'react-icons/bi'

export default function Voltar(){
    return(
                    <Link 
                activeClass="active" 
               
                to="nav" 
                spy={true} 
                smooth={true} 
                duration={500}>
                    <div 
                    className="
                    flex
                    bottom-4
                    right-1
                    fixed
                    z-10
                    px-5
                
                    ">
                        
                        <strong>
                            <BiUpArrow 
                            activeClass="active" 
                            className="cursor-pointer animate-pulse duration-1000 " size={35} color="black" />
                        </strong>
                        <p className="mt-2 px-1">Subir</p>
                    </div>
            </Link>
    )
}