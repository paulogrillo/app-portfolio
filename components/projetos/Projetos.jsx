import react from 'react'
import React from 'react'
import { AiOutlineCode } from 'react-icons/ai'
import FaixaProjeto from '../partials/FaixaProjeto';
import CardProjetos from './CardProjetos'


export default function Projetos(){
    return(
    <div className=" ">
                <FaixaProjeto />  
                <div class="grid content-center object-center">
                    <CardProjetos />
                </div>  
        
        <div class="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     
            <div className="content-center  w-full lg:h-80">
                <img className="bg-cover" src="/invertida.png" alt=""/>
            </div>
        
        </div>
  
    </div>

    )
}