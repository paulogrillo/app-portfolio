
import React from 'react';
import Link from 'next/link'
import { AiOutlineMenuFold } from 'react-icons/ai';
import {
    Menu,
    MenuItem,
    MenuButton
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

export default function Example() {
    return (
        <div>
            <Menu styles={{
                color: '#5c6ac4',
                backgroundColor: 'white',
                
                hover: {
                    color: '#5c6ac4',
                    backgroundColor: '#5c6ac4'
                },
                active: {
                    backgroundColor: '#5c6ac4'
                }
            }} menuButton={ 
            <MenuButton styles={{
                border: 'none',
                color: 'black',
                border: '2px solid #5c6ac4',

                
               

            }}  >
                
                <AiOutlineMenuFold 
                size={20}
                color="#5c6ac4"
                />
            
            </MenuButton>}>
                
          
          
            <MenuItem>  
                 <Link href="/#">
                     Serviços 
                </Link>
            </MenuItem>
        
            <MenuItem> 
                <Link href="/#">
                    Orçamentos 
                </Link>
            </MenuItem>
            <MenuItem>
                 <Link href="/curriculum-2020.pdf">
                     Baixar Curriculum
                </Link>
            </MenuItem>
        </Menu> 
        </div>
       
    );
}