import react from 'react'
import React from 'react'
import { AiOutlineCode } from 'react-icons/ai'
import Faixa from '../partials/Faixa';

export default function Projetos(){
    return(
        <div className="space-y-10">
                      <Faixa />  
            <div className=" ">
            <div class="grid gap-4 grid-cols-2">

                <div className="text-sm w-360">
                    <img src="/google.jpg" alt=""/>TextoTextoTextoTextoTextoTexto</div>
                <div>
                    <img src="/google.jpg" alt=""/></div>
                <div>
                    <img src="/google.jpg" alt=""/></div>
                <div>
                    <img src="/google.jpg" alt=""/></div>
                <div>
                    <img src="/google.jpg" alt=""/></div>
                <div>
                    <img src="/google.jpg" alt=""/></div>
            </div>   
        </div>
        </div>


    )
}