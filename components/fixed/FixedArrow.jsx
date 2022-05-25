import { background } from '@chakra-ui/react'
import { BiGame } from 'react-icons/bi'


import { RiArrowDropDownLine } from 'react-icons/ri'

import { Link} from 'react-scroll'


export default function FixedArrow(){
    return(
        <div className="flex  justify-center ">
            <Link 
                activeClass="active" 
                className="p-0 w-20 h-10" 
                to="FaixaHardSkills" 
                spy={true} 
                smooth={true} 
                duration={900} 
                delay={2}
            >
             
                
                    <svg 
                    class="
                    animate-bounce
                    delay-300
                    duration-200
                    flex 
                    justify-center 
                    ">
                        <RiArrowDropDownLine size={80} className="text-gray-800"/>
                        
                    </svg>
              
            </Link>
            
        </div>
        
    )
}
           