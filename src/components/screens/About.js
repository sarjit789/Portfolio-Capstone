import React from 'react'
import Skills from '../utils/Skills'
import '../styles/About.css'
import Experience from '../utils/Experience'
import aboutme from '../../assets/images/q.png'
// import {programmingLanguages, MachineLearning, FullStack} from '../skillsimports'


export default function About() {
    return (
        <div className='aboutWrapper'>
            <div className='topWrapper'>
                <div className='imageWrapper'>
                    <img className='aboutImage' src={aboutme}></img>
                </div>
            
                <div className='expWrapper'>
                    <div className='experience'>
                        <h1>Hello! I am</h1>
                        <span className='name'>Sarjitsinh Yadav,</span>
                        <p className='aboutMe'>A pre-final-year Computer  science Engineering student at LPU, Punjab.
                            <br /><br />
                            I am currently focusing on Web Development & Coding with DSA. I have good experience of Maths onlie tutor for foreign student, details of which you can fine here - <a href='https://github.com/sarjit789?tab=repositories'>GitHub</a>
                            <br /><br />
                            
                        </p>
                    </div>
                </div>
                </div>
            <div className='bottomWrapper'>
                <div className='expWrapper'>
                    <h1 className='heading'>Experience</h1>
                     <Experience company="Online Math tutor " years="March 24  - current working" title="Math Tutor"
                                summary={[
                                    "I have good math teaching experience from last 10 month.",
                                    "I can build the concept of student from basic  .",
                                    "Evaluate weekly assigment and do improvement.",
                                    ]}>
                    </Experience>

                
                // </div>
                <div className='skillsWrapper'>
                    <h1 className='heading'>Skills</h1>
                    
                </div>
            </div>
        </div>
    )
}
