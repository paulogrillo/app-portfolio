import React from 'react'
import { AiOutlineCode } from 'react-icons/ai'

export default function FaixaSoftSkills(){
    return(
        <div  className="flex  min-w-full bg-gradient-to-r via-blue-400 from-indigo-600  to-transparent bg-pink-500 opacity-80 justify-center shadow-lg">
            <AiOutlineCode
                size={35}
                color="f1f1f1"
                className="h-20"
              />
          <h2 className="h-20 py-1 px-2 mt-4 text-4xl text-gray-50 font-semibold tracking-wide uppercase align-text-top">
         SoftSkills
          </h2>
        </div>
    )
}