import React from 'react'
import Link from 'next/link'
import { DiCode } from 'react-icons/di';

export default function CardProjetos(){
  return(
    <div class="mt-6">
      <div class="flex flex-wrap justify-center space-x-4 space-y-1 ">

         {/* Marketing Digital */}
          <div className="lg:w-2/12">
            <div
              className="
              cursor-pointer 
              h-16
              w-full
              rounded-lg
              hover:bg-green-400
              bg-accent-1
              transition
              flex
              justify-center
              ">
                <h1 className="mt-2 text-current dark:divide-current font-medium text-3xl text-green-200 hover:text-green-50">Marketing Digital</h1>
              </div>

                    {/* Portfolio 01 */}
                    <h2 className="flex justify-center py-2"> 
                              <DiCode size={26} />
                              Portfolio
                    </h2>
                    <div className="space-y-2">
                        <Link href="/projetos/marketing-digital/portfolio-marketing.pdf" >
                        <img 
                              src="/projetos/marketing-digital/image-01.png" 
                              alt=""
                              className="
                              h-auto
                              cursor-pointer
                              hover:opacity-60
                              transition
                              "/>
                        </Link>
                        
                        {/* Portfolio 02 */}
                        <h2 className="flex justify-center py-2"> 
                              <DiCode size={26} />
                              Portfolio
                        </h2>
                        <Link href="/projetos/marketing-digital/portfolio-marketing.pdf"  >
                        <img 
                              src="/projetos/marketing-digital/image-02.png" 
                              alt=""
                              className="
                              h-auto
                              cursor-pointer
                              hover:opacity-60
                              transition
                              "/>
                        </Link>
                    </div>
              </div>




          {/* WEB APPS */}
          <div className="lg:w-2/12 ">
            <div
              className="
              cursor-pointer 
              h-16
              w-full
              rounded-lg
              hover:bg-green-400
              bg-accent-1
              flex
              justify-center
            
              ">
                <h1 className="mt-2 text-current dark:divide-current font-medium text-3xl text-green-200 hover:text-green-50">Web Apps</h1>
              </div>
            
                    <div className="space-y-2 ">
                        
                        
                        {/*  E-coleta - Bootcamp */} 
                        <h2 className="flex justify-center py-2"> 
                              <DiCode size={26} />
                              E-coleta - Bootcamp
                        </h2>
                        <Link href="https://next-level.herokuapp.com/" >
                        <img 
                              src="/projetos/ecoleta/acoleta-01.png" 
                              alt=""
                              className="
                              h-auto
                              cursor-pointer
                              hover:opacity-60
                              transition
                              "/>
                        </Link>
                        
                        {/*  Proffy - Bootcamp */} 
                        <h2 className="flex justify-center py-2"> 
                              <DiCode size={26} />
                              Proffy - Bootcamp
                        </h2>
                        <Link href="https://proffy-rouge.vercel.app/" >
                        <img 
                              src="/projetos/proffy/proffy-01.png" 
                              alt=""
                              className="
                              h-auto
                              cursor-pointer
                              hover:opacity-60
                              transition
                              "/>
                        </Link>
                        
                    </div>
              </div>

          {/* E-commerce */}
          <div className="lg:w-2/12 ">
            <div
              className="
              cursor-pointer 
              h-16
              w-full
              rounded-lg
              hover:bg-green-400
              transition
              bg-accent-1
              flex
              justify-center
              ">
                <h1 className="mt-2 text-current dark:divide-current font-medium text-3xl text-green-200 hover:text-green-50">E-commerce</h1>
              </div>
                    
                    {/* Lojas Central Fogões */}
                    <h2 className="flex justify-center py-2"> 
                              <DiCode size={26} />
                              Central Fogões
                    </h2>
                    <div className="space-y-2 py-2">
                        <Link href="https://centralfogoes.com.br/" >
                        
                        <img 
                              src="/projetos/e-commerce/loja-01.png" 
                              alt=""
                              className="
                              h-auto
                              cursor-pointer
                              hover:opacity-60
                              transition
                              
                              
                              "/>
                        </Link>
                        {/* Lojas Isaura */}
                        <h2 className="flex justify-center py-2"> 
                              <DiCode size={26} />
                              Lojas Isaura
                        </h2>
                        <Link href="https://lojasisaura.com.br/" >
                        <img 
                              src="/projetos/e-commerce/loja-02.png" 
                              alt=""
                              className="
                              h-auto
                              cursor-pointer
                              hover:opacity-60
                              transition
                              "/>
                        </Link>
                    </div>
              </div>


              

      </div>
  </div>
    )
}