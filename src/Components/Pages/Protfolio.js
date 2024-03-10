import React from 'react'
import Prot1 from '../Design/Prot-1.png';
import Port2 from '../Design/Prot-2.png';
import '../Style/Protfolio.css';
function Protfolio() {
  return (
    <div className='ProtfolioContainer'>
        <div className='ProtfolioHeading'>
            <h1>Portfolio Showcase</h1>
            <p>Explore my completed projects through this image gallery.</p>
        </div>
        <div className='ProtfolioImages'>
            <img src={Prot1}/>
            <img src={Port2}/>
        </div>
        <div className='ProtfolioFooter'>
            <h1>Prepared to join your team as a Full-Stack Developer</h1>
            <div className='FooterButton'>
                <p>Skilled developer looking for full-stack development opportunities</p>
                <button onClick={() => window.open('mailto:chaitanya.vidudhala@gmail.com')}>Hire</button>
            </div>
        </div>
    </div>
  )
}

export default Protfolio