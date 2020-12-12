import Nav from '../components/nav/nav'
import Hero from '../components/hero/Hero'
import Projetos from '../components/projetos/Projetos'
import Layer from '../components/layer/Layer'



import React from 'react'

export default function IndexPage() {
  return (
      <div>
         <link rel="shortcut icon" href="/favicon-icon.png" />
        <Nav />
        <Hero />
        <Layer />
        <Projetos />

      
      </div>
  
  )
}
