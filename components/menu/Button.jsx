
import React from 'react';
import Link from 'next/link'
import { AiOutlineMenuFold } from 'react-icons/ai';
import {
    Menu,
    MenuItem,
    MenuButton
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import next from 'next';

export default function Example() {
    return (
        <div>
            <Menu  menuButton={<MenuButton><AiOutlineMenuFold /></MenuButton>}>
                
            <MenuItem>Curriculum</MenuItem>
          
            <MenuItem>  <Link href="/#servicos">
            Serviços </Link>
            </MenuItem>
        
            <MenuItem>Stacks</MenuItem>
        </Menu> 
        </div>
       
    );
}