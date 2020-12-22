import Nav from '../components/nav/nav'
import Hero from '../components/hero/Hero'
import Skills from '../components/Skills/Skills'
import LayerArrow from '../components/layer/LayerArrow'
import React from 'react'

import Projetos from '../components/projetos/Projetos'
import Footer from '../components/footer/Footer'

import FixedMenu from '../components/fixed/FixedMenu'

import { Element } from 'react-scroll'




export default function IndexPage() {
  return (
      <div>
          <FixedMenu />
        <Nav />
        
        <Hero />
       
        <LayerArrow />
   
        
        <Element name="skills">
                
                <Skills />
        </Element>
        
        <Element name="projetos">
           <Projetos />
        </Element>
       
        <Footer />
      
      </div>
  
  )
}
