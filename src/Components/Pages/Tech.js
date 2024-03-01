import React from 'react';
import '../Style/Tech.css';
import FullStackImg from '../Design/fullstack-1.webp';
import FrontEnd from '../Design/FrontEnd.jpeg';
import DataBase from '../Design/Database.jpeg';

function Tech() {
  return (
    <div className='TechContainer'>
        <div className='Heading'>
        <h1>A Comprehensive Set of Skills and Technologies</h1>
        </div>
        <div className='TechDiv'>
            <div className='FullStack'>
                <img src={FullStackImg}/>
                <h3>Expertise in Full-Stack Development</h3>
                <p>Harnessing the power of both front-end and back-end technologies.</p>
                <button>View</button>
            </div> 
            <div className='FrontEnd'>
                <img src={FrontEnd}/>
                <h3>Responsive and User-Friendly Designs</h3>
                <p>Creating intuitive interfaces that enhance user experience.</p>
                <button>View</button>
            </div> 
            <div className='Database'>
                <img src={DataBase}/>
                <h3>Efficient data management and scaling</h3>
                <p>Maximizing Database Efficiency, Scalability, and Performance for Optimal Results.</p>
                <button>View</button>
            </div>   
        </div>
    </div>
  )
}

export default Tech