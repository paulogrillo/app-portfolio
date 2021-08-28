import { Container } from 'postcss';
import React from 'react';


import Link from 'next/link'

export default function Layer(){
    return(
        <div>
            
             <div class="w-full h-35  bg-white  ">
           
        
            
           

        
        <div class=" flex flex-wrap justify-center space-y-4 space-x-3">
      
                    

        <ul className="flex flex-wrap sm:space-x-7 space-x-2 ">
                        <li className="cursor-pointer w-32">
                            <Link href="https://github.com/paulogrillo">
                                <img src="/social/codewars.png" alt="" className="w-60"/>
                            </Link> 
                        </li>

                        <li className="cursor-pointer w-32">
                            <Link href="https://github.com/paulogrillo">
                                <img src="/social/freecodecamp.svg" alt="" className="w-auto"/>
                            </Link> 
                        </li>

                        <li className="cursor-pointer w-32">
                            <Link href="https://github.com/paulogrillo">
                                <img src="/social/hackrank.svg" alt="" className="w-auto"/>
                            </Link> 
                        </li>
                </ul>
               
            </div>
           
         
        </div>
        </div>
       
    )
}