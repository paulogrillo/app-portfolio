import Link from 'next/link'
import Image from 'next/image'
import Social from '../social/Social'
import Menu from '../menu/Menu'
import Layer from '../layer/Layer'
import { Element } from 'react-scroll'

export default function Nav() {
  return (
    
    <nav className=" h-20 mx-auto md:px-40 
    ">
         <Element name="nav">
            <h2 class="h-2 py-1 px-2 mt-4 text-4xl text-gray-50 font-semibold tracking-wide uppercase align-text-top  ">
            </h2>
          </Element>
      <ul className="flex items-center justify-between p-8 ">
        <li className="flex space-x-2 space-y-2">

          <div className="flex space-x-2 space-y-1">
          <Image 
            src="/global/logo05.png"
            width={36}
            height={36}
  
          />
         
          <p className="font-mono lg:text-2xl ">Paulo Grillo</p>
         
           
          </div>
        </li>
            <ul className="flex items-center justify-between space-x-4">
          <Social />
          <Menu />
          </ul>
       
      </ul>
      <div className=" rounded-tl-3xl rounded-tr-3xl h-1 mx-auto md:px-40 bg-gradient-to-r via-blue-400 from-indigo-600  to-transparent bg-pink-500 opacity-50"></div>
    </nav>
    
  )
}
