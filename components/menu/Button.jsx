
import React from 'react';
import Link from 'next/link'

import Social from '../social/Social'
import { AiOutlineMenuFold } from 'react-icons/ai';
import {
    Menu,
    MenuItem,
    MenuButton
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import { Divider } from '@chakra-ui/react';

export default function Example() {
    return (
        <>
            <Menu styles={{
                color: '#5c6ac4',
                backgroundColor: 'white',
                
                active: {
                    backgroundColor: '#5c6ac4'
                }
            }} menuButton={ 
            <MenuButton styles={{
                border: 'none',
                color: 'black',
                border: '2px solid #3E454C',

                hover: {
                    color: '#f8f8f8'
                    
                },
               

            }}  >
                
                <AiOutlineMenuFold 
                size={20}
                color="#5c6ac4"
                />
          
            </MenuButton>}>
                
          

            <MenuItem href="/portfolio"> 
                   <p>Portfólio</p>  
            </MenuItem>
            
            <Divider />
            <MenuItem>
                <Social />
            </MenuItem>
            
        </Menu> 
        </>
       
    );
}