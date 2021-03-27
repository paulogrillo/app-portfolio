import React, { Children } from 'react'
import TypeWriter from '../escritor/TypeWriter'


export default function Hero({Children}){
    return(
        
            <>
                <div className="flex justify-center">
                    <img 
                        src="/image.png" 
                        alt="" 
                        className=""
                    /> 
                </div>
  
            <div 
            class="
            flex
            justify-center
            mb-40
            ">
                <TypeWriter />
            </div>
            </>
            
    )
}