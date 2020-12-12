import React from 'react';
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
            <Menu  menuButton={<MenuButton><AiOutlineMenuFold /></MenuButton>}>
            <MenuItem>Curriculum</MenuItem>
            <MenuItem>Projetos</MenuItem>
            <MenuItem>Stacks</MenuItem>
        </Menu> 
        </div>
       
    );
}