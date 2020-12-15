import React from 'react'
import Social from '../social/Social'


export default function Footer(){
    return(
    <div 
    className="flex bg-gradient-to-r via-blue-400 from-indigo-600  to-transparent bg-pink-500 opacity-80 justify-center divide-x divide-fuchsia-300 ">
     
           <div className="max-w-md h-24 p-6">
               <Social />
               
           </div>
           
</div>
    )
}