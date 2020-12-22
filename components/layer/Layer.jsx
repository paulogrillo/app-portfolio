import { Container } from 'postcss';
import React from 'react';


import FixedArrow from '../fixed/FixedArrow'


export default function Layer(){
    return(
        <div>
            <FixedArrow />
             <div class="w-full h-35  bg-white  ">
           
        
            
           

        
        <div class=" flex flex-wrap justify-center space-y-4 space-x-3">
      
                    

                
                <img className=" w-64 h-48" src="/magento.jpg" alt=""/>
                <img className=" w-64 h-48" src="/next.png" alt=""/>
                <img className=" w-64 h-48"src="/wordpress.jpg" alt=""/>
                <img className=" w-64 h-48" src="/rd.svg" alt=""/>
                
                <img className="w-64 h-48" src="/google.jpg" alt=""/>
               
            </div>
           
         
        </div>
        </div>
       
    )
}