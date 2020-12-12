import React from 'react'

import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';



export default function Social(){
    return(
        <div className="container">
            <ul className="flex space-x-6">
                <li>
                    <FaTwitter
                    size={20}
                /></li>
                <li><FaLinkedin 
                    size={20}
                /></li>
                <li><FaGithub 
                    size={20}
                /></li>
            </ul>
        </div>
    );
}