import React, { Children } from 'react'
import Image from 'next/image'
import TypeWriter from '../escritor/TypeWriter'



export default function Hero({Children}){
    return(
        
            <div 
            class="bg-white container lg:mt-40 ">
            
            

            <div class=" max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                        
                            
                           <img 
                        src="/image.png" 
                        alt="" 
                        className=""
                    />
                
                <TypeWriter />
                
            </div>
            
            </div>
            
    )
}