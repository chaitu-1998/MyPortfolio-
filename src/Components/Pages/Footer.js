import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import FileOpenOutlinedIcon from '@mui/icons-material/FileOpenOutlined';
import '../Style/Footer.css';
function Footer(){
  return (
    <div className='FooterContainer'>
        <div className='LeftFooter'>
            <h2>Chaitanya Vidudhala</h2>
            <div className="email-section">
                <h3>Email: </h3>
                <h3 className='Email-Box'>chaitanya.Vidudhala@gmail.com</h3>
                <button>Send</button>
            </div>
        </div>
        <div className='RightFooter'>
            <Link><LinkedInIcon />LinkedIn</Link>
            <Link><GitHubIcon />GitHub</Link>
            <Link>< FileOpenOutlinedIcon/>Resume</Link>

        </div>
    </div>
  );
}
export default Footer;