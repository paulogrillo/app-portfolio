import React from 'react'
import { AiOutlineCode } from 'react-icons/ai'

export default function Faixa(){
    return(
        <div id="#servicos" class="flex px-5 py-5 w-60 min-w-full bg-gradient-to-r via-blue-400 from-indigo-600  to-transparent">
            <AiOutlineCode
                size={35}
                color="f1f1f1"
              />
          <h2 class=" py-1 px-2  text-base text-gray-50 font-semibold tracking-wide uppercase">
          Web Developer
          </h2>
        </div>
    )
}