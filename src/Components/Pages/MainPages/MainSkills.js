import React from 'react';
import { skillList, concept } from '../../Data/Skillslist';
import '../../Style/MainSkill.css';
function MainSkills() {
  return (
    <div className='SkillMainContainer'>
      {skillList.map((Tech, key) => {
        return (
          <>
            <div className='MainSillShow'>
              <div className='HeadingSkill'>
                <h1>{Tech.Technology}</h1>
              </div>
              <div className='ImageSkill'>
                {Tech.Image.map(image => (
                  <img src={image} alt='Loading...' />
                ))}
              </div>
              <div className='SkillPara'>
                <p>{Tech.para}</p>
              </div>
            </div>
            <div className='TechList'>
              <div className='TechHead'>
                <h1>{Tech.mainHeading}</h1>
                <h2>{Tech.subHeading}</h2>
              </div>
              <div className='TechSkill'>
                <div className='Language'>
                  <h3>Language</h3>
                  <ol className='LanguageList'>
                    {Tech.languages.map(lanList => (
                      <li><h3>{lanList}</h3></li>
                    ))}
                  </ol>
                </div>
                <div className='FrameWorks'>
                  <h3>FrameWorks</h3>
                  <ol className='FrameWorkList'>
                    {Tech.frameWorks.map(frame => (
                      <li><h3>{frame}</h3></li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </>
        );
      })}
      <div className='Concepts'>
        {concept.map(con => {
          return (<>
            <div className='ConceptTitle'>
              <h1>{con.name}</h1>
            </div>
            <div className='Image'>
              <div className='ConceptImg'>
                {con.skills.map(image =>
                  <img src={image} />)}
              </div>
              <div className='ConceptImg'>
                {con.skills.map(image =>
                  <img src={image} />)}
              </div>
            </div>
          </>)
        })}

      </div>
    </div>
  );
}

export default MainSkills