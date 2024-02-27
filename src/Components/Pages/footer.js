import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
        <div className='LeftFooter'>
           <LocationOnIcon /> <h2>Birmingham, AL, 35209 </h2>
            <CallIcon /> <h2>+1(205)-899-6197 </h2>
        </div>
        <div className='RightFooter'>
        <Link to={'https://www.linkedin.com/in/chaitanyavidudhala'}><LinkedInIcon /></Link>
        <Link to={'https://github.com/chaitu-1998'}><GitHubIcon /></Link>
        </div>
    </div>
  )
}

export default Footer