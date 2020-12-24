import Link from 'next/link'
import Image from 'next/image'
import Social from '../social/Social'
import Menu from '../menu/Menu'


export default function Nav() {
  return (
    <nav className=" h-20 mx-auto md:px-40 
    ">
      <ul className="flex items-center justify-between p-8 ">
        <li className="flex space-x-2 space-y-2">

          <div className="flex space-x-2">
          <Image 
            src="/global/logo05.svg"
            width={22}
            height={22}
  
          />
           <p className="font-mono ">Paulo Grillo</p>
          </div>
         
            
         
         
        </li>
            <ul className="flex items-center justify-between space-x-4">
          <Social />
          <Menu />
          </ul>
       
      </ul>
     
    </nav>
  )
}
