import react from 'react'
import React from 'react'
import { AiOutlineCode } from 'react-icons/ai'
import Faixa from '../partials/Faixa';
import CardProjetos from '../partials/CardProjetos';

export default function Projetos(){
    return(
        <div className="space-y-10 ">
                      <Faixa />  
                      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight  text-red-500 sm:text-4xl py-8 text-center px-20 ">
        Hard Skils
      </p>
     
        <div class="lg:text-center">
          
              <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Marketing, Performance & Transformação Digital.
          </p>
        </div>
        <CardProjetos />
  </div>
</div>

    )
}