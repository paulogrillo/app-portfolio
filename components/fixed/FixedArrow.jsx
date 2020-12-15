import { background } from '@chakra-ui/react'
import { BiGame } from 'react-icons/bi'
import { FiArrowDown } from 'react-icons/fi'

import { Link} from 'react-scroll'


export default function FixedArrow(){
    return(
        <div className="flex h-20 justify-center">
            <Link 
                activeClass="active" 
                className="p-0 w-20 h-10" 
                to="skills" 
                spy={true} 
                smooth={true} 
                duration={900} 
                delay={2}
            >
             
                
                    <svg 
                    class="
                    animate-bounce 
                    flex 
                    justify-center 
                    w-20 h-10
                    ">
                        <FiArrowDown 
                            size={36} 
                            className=""
                            
                        />
                    </svg>
              
            </Link>
        </div>
        
    )
}
           