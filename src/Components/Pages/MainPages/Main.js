import React from 'react'
import MainHero from '../MainHero'
import Protfolio from '../Protfolio'
import Skills from '../Skills'
import Tech from '../Tech'

function Main() {
  return (
    <div className='MainContainer'>
        <MainHero />
        <Skills />
        <Tech />
        <Protfolio />
    </div>
  )
}

export default Main