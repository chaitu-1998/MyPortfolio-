import React from 'react';
import '../Style/Skills.css';
import FUllStack from '../Design/FullStack.webp';
import ProjectIcon from '../Design/idea.png';
import SkillIcon from '../Design/Skill.png';
function Skills() {
  return (
    <div className='SkillContainer'>
        <div className='LeftSkill'>
            <div className='LeftHeader'>
                <h2>Showcasing my Skills as a Full-Stack Developer</h2>
            </div>
            <div className='LeftPara'>
                <p>I possess a robust background in full-stack development and have successfully completed a variety of projects that showcase my exceptional skills. My expertise in both front-end and back-end technologies enables me to craft dynamic and interactive websites.</p>
            </div>
            <div className='SkillContainer'>
                <div className='SkillProject'>
                    <img src={ProjectIcon}/>
                    <h3>Projects</h3>
                    <p>Check out some of my featured projects below</p>
                    <button>View</button>
                </div>
                <div className='SkillSkill'>
                    <img src={SkillIcon} />
                    <h3>Skills</h3>
                    <p>Explore my diverse skill set and see what I can bring to the table.</p>
                    <button>View</button>
                </div>
            </div>
        </div>
        <div className='RightSkill'>
            <img src={FUllStack}/>
        </div>
    </div>
  )
}

export default Skills