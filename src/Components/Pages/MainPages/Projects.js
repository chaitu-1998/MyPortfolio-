import React, { useState } from 'react';
import { awsImg } from '../../Data/Skillslist';
import awsVideo from '../../Design/Videos/chaitu_output.mp4';
import '../../Style/Projects.css';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

function Projects() {
  const [selectImage, setSelectImage] = useState(0);

  function next() {
    setSelectImage((prevCount) => (prevCount === awsImg.length - 1 ? 0 : prevCount + 1));
  }

  function prev() {
    setSelectImage((prevCount) => (prevCount === 0 ? awsImg.length - 1 : prevCount - 1));
  }


  return (
    <div className='ProjectContainer'>
      <div className='ProjectOne'>
        <h1>AWS Project – SESSecureWeb</h1>
        <ul>
          <li>Engineered and developed an Amazon AWS secure web app, seamlessly improved with Lambda and employed Amazon RDS for structured data management. established a strong mechanism for user authentication to guarantee the integrity of the data. </li>
          <li>
            Enhanced user security with authentication and login page, using Amazon RDS. Simplified file uploads with Amazon S3. Optimized communication with Amazon SES and automated image clean-up.
          </li>
          <li>
            Streamlined email procedures with Amazon SES for effective correspondence. Set up automated clean-up for uploaded photos, prioritizing data protection and resource management. Demonstrated skill in creating comprehensive,
            User-friendly web applications on AWS Cloud.

          </li>
        </ul>
        <div className='ProjectOneImageSection'>
          <button className={selectImage===0 ? 'backDone':'back'}  onClick={prev} >
            <NavigateBeforeIcon />
          </button>
          <div className='ProjectOneImage'>
            {awsImg[selectImage].endsWith('.png') ? ( // Check if it's an image
              <img src={awsImg[selectImage]} alt='Image' />
            ) : ( // Otherwise, it's a video
              <video controls>
                <source src={awsImg[selectImage]} type='video/mp4' />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
          <button className={selectImage===awsImg.length-1 ? 'nextDone':'next'}  onClick={next}>
            <NavigateNextIcon />
          </button>
        </div>
      </div>
      <div>
        <h1>Love</h1>
      </div>
    </div>
  );
}

export default Projects;