import Nav from '../components/nav/nav'
import Hero from '../components/hero/Hero'
import HardSkils from '../components/curriculum/HardSkils'
import Layer from '../components/layer/Layer'
import React from 'react'
import SoftSkils from '../components/curriculum/SoftSkils'
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
       
        <Layer />
   
        
        <Element name="test2" className="element">
                <HardSkils />
        </Element>
        
        <Projetos />
        <Footer />
       

      
      </div>
  
  )
}
