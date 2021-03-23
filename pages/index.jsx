import Nav from '../components/nav/Nav'
import Hero from '../components/hero/Hero'
import Skills from '../components/Skills/Skills'
import LayerArrow from '../components/layer/LayerArrow'
import React from 'react'

import Projetos from '../components/projetos/Projetos'
import Footer from '../components/footer/Footer'

import FixedMenu from '../components/fixed/FixedMenu'


import { Element } from 'react-scroll'
import Layer from '../components/layer/Layer'
import SoftSkils from '../components/Skills/SoftSkils'

import FaixaHardSkills from '../components/partials/FaixaHardSkills'
import FaixaSoftSkills from '../components/partials/FaixaSoftSkills'
import FaixaProjetos from '../components/partials/FaixaProjeto'

import Voltar from '../components/fixed/Voltar'


export default function IndexPage() {
  return (
      <>
          <FixedMenu />
        <Nav />
      
        
        <Hero />
        
       
        
        <Element name="skills">
          <FaixaHardSkills />         
        </Element>
        <Skills />


        <Element name="softskils">
          <FaixaSoftSkills />
        </Element>
        <SoftSkils />

        <Element name="projetos">
          <FaixaProjetos />
        </Element>
        <Projetos />
       
       <Voltar />
      <Footer />
      
      </>
  
  )
}
