import React from 'react'
import './App.css'

import { Brand,Cta,Navbar } from './components'
import { Footer,Blog,Possibility,Features,WhatGPT,Header } from './containers'
function App() {
  return (
    <div className='App'>
        <div className='gradient__bg'> 
        <Navbar/>
        <Header/>

        </div>
        <Brand/>
        <WhatGPT/>
        <Features/>
        <Possibility/>
        <Cta/>
        <Blog/>
        <Footer/>
    
        
    </div>
  )
}

export default App