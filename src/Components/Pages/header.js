import React, { useState } from 'react';
import "../Style/header.css";
import { Link } from 'react-router-dom';
import NavigationIcon from '@mui/icons-material/Reorder';

export default function Headers()
{
    const [showHiddenBar,setshowHiddenBar]=useState(false);
    const showBar = ()=>{
        setshowHiddenBar(!showHiddenBar);
    }
    return(
        <div className='Container_Head'>
            <div className='LeftSide'>
                <div className='ProfileName'>
                <Link to='./home'><h1 className='Name'>Chaitanya Vidudhala</h1></Link>
                </div>
                <button className='More' onClick={showBar}>
                        <NavigationIcon />
                </button>
                <div className={`HiddenNavigationBar${showHiddenBar ? 'show' : ''}`}>
                    <Link to='./resume'>Resume</Link>
                    <Link to='./skills'>Skills</Link>
                    <Link to='./certifications'>Certifications</Link>
                    <Link to='./contact'>Contact</Link>
                </div>
            </div>
            <div className='RightSide'>
                <div className='NavigationBar'>
                    <Link to='./resume'>Resume</Link>
                    <Link to='./skills'>Skills</Link>
                    <Link to='./certifications'>Certifications</Link>
                    <Link to='./contact'>Contact</Link>
                </div>
            </div>
        </div>
    );
}