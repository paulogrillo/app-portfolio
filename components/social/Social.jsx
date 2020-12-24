import React from 'react'

import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

import Link from 'next/link'


export default function Social(){
    return(
        <div className="container">
            <ul className="flex sm:space-x-7 space-x-2 ">
                <li className="cursor-pointer">
                    <Link href="https://twitter.com/PauloGrillo94">
                        <FaTwitter
                            size={22}
                        />
                    </Link>
                </li>
                
                <li className="cursor-pointer">
                    <Link href="https://www.linkedin.com/in/paulo-augusto-grillo/">
                    <FaLinkedin 
                        size={22}
                        />
                    </Link>
                </li>
               
                <li className="cursor-pointer">
                    <Link href="https://github.com/paulogrillo">
                    <FaGithub 
                        size={22}
                        />
                    </Link> 
                </li>

            </ul>
        </div>
    );
}