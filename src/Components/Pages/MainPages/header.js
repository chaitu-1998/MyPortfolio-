import React, { useState } from 'react';
import "../../Style/header.css";
import { Link } from 'react-router-dom';
import NavigationIcon from '@mui/icons-material/Reorder';

export default function Headers()
{
    const [showHiddenBar,setshowHiddenBar]=useState(false);
    const showBar = ()=>{
        setshowHiddenBar(!showHiddenBar);
    }
    return(
        <div className='Header'>
            <div className='LeftHeader'>
               <Link to='/'> <h1>Chaitanya Vidudhala</h1></Link>
            </div>
            <div className='Navigation'>
                <Link to='/Projects'>Projects</Link>
                <Link to='/MainSkills'>Skills</Link>
                <Link to='/Contact'>Contact</Link>
            </div>
            <div className='RightHeader'>
                <button aria-placeholder='Hire' onClick={() => window.open('mailto:chaitanya.vidudhala@gmail.com')}>Hire</button>
            </div>
        </div>
    );
}