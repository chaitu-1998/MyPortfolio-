import React from 'react';
import { Link } from 'react-router-dom';
import MainImg from '../Design/Main.png';
import '../Style/MainHero.css'

function MainHero() {
  return (
    <div className='Hero'>
        <div className='HeroImg'>
            <img src={MainImg}/>
        </div>
        <div className='BottomHero'>
            <div className='MainHeading'>
            <h1>Illustrating the influence of my comprehensive skill set in full-stack development.</h1>
            </div>
            <div className='Para'>
            <p>Welcome to my portfolio website, where I showcase my proficiency in full-stack development.</p>
            <Link>View..</Link>
            </div>
        </div>
    </div>
  )
}

export default MainHero