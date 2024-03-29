import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import FileOpenOutlinedIcon from '@mui/icons-material/FileOpenOutlined';
import '../../Style/Footer.css';
import Resume from '../../Files/ChaitanyaVidudhla.pdf';
function Footer(){
  return (
    <div className='FooterContainer'>
        <div className='LeftFooter'>
            <h2>Chaitanya Vidudhala</h2>
            <div className="email-section">
                <h3>Email: </h3>
                <h3 className='Email-Box'>chaitanya.Vidudhala@gmail.com</h3>
                <button onClick={() => window.open('mailto:chaitanya.vidudhala@gmail.com')}>Send</button>
            </div>
        </div>
        <div className='RightFooter'>
            <Link to='https://www.linkedin.com/in/chaitanyavidudhala'><LinkedInIcon />LinkedIn</Link>
            <Link to='https://github.com/chaitu-1998'><GitHubIcon />GitHub</Link>
            <a href={Resume} download>< FileOpenOutlinedIcon/>Resume</a>

        </div>
    </div>
  );
}
export default Footer;