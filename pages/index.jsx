import Nav from '../components/nav/nav'
import Hero from '../components/hero/Hero'
import HardSkils from '../components/curriculum/HardSkils'
import Layer from '../components/layer/Layer'
import React from 'react'
import SoftSkils from '../components/curriculum/SoftSkils'
import Projetos from '../components/projetos/Projetos'

export default function IndexPage() {
  return (
      <div>
         <link rel="shortcut icon" href="/favicon-icon.png" />
        <Nav />
        <Hero />
        <Layer />
        <HardSkils />
        <Projetos />
        <SoftSkils />

        

      
      </div>
  
  )
}
