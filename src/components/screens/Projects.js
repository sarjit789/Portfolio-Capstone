import React from 'react'
import '../styles/Projects.css'
import {crunch, dyceanddyne, earthling, khetibadi, foco} from '../projectsimports';
import flutter from '../../assets/skills/frameworks/flutter.svg'
import firebase from '../../assets/skills/others/firebase.svg'
import flask from '../../assets/skills/frameworks/flask.svg'
import nodejs from '../../assets/skills/frameworks/nodejs.svg'
import react from '../../assets/skills/frameworks/react.svg'
import javascript from '../../assets/skills/programminglanguages/javascript.svg'
import ProjectCard from '../utils/ProjectCard';

export default function Projects() {
    return (
        <div className='pageWrapper'>
            <h1 className='projectsPageTitle'>Some things I've built</h1>
                    <div className='projectsWrapper'>
            <ProjectCard image = {crunch} projectTitle= "Portfolio" techstack ={[react,  javascript]} deployed ="https://github.com/sarjit789/sarjit-Portfolio1" github ="porfolio" summary ="Project Portfolio Management becomes a must-do endeavor. Companies aiming to achieve the above-mentioned objectives need to understand their significance and act accordingly. Review the article to grasp each concept concerning Project Portfolio Management or PPM.  ."></ProjectCard>
            <ProjectCard image = {dyceanddyne} projectTitle ="cyber security course" techstack={[flask, javascript]} github ="Cyber courses" summary="It is not only used to solve digital crimes but also used to solve real-world crimes like theft cases, murder, etc.
              Businesses are equally benefitted from cyber forensics in tracking system breaches and finding the attackers.."></ProjectCard>
            <ProjectCard image = {earthling} projectTitle ="Sql injection" techstack ={[flutter, firebase, flask]} github ="cyber attack " summary="A common attack vector that uses malicious SQL code for backend database manipulation to access information that was not intended to be displayed. This information may include any number of items, including sensitive company data, user lists or private customer details.."></ProjectCard>
            <ProjectCard image = {khetibadi} projectTitle ="Guess the word" techstack ={[flutter, flask]} github="Guess the word game" summary="In this game students read a definition of a word and have to guess what the word is using the letters that appear. This game is a great way to practice reading, spelling and review vocabulary all at the same time.."></ProjectCard>
            <ProjectCard image ={foco} projectTitle="Guess the picture" github="guess the picture" summary ="This game encourages careful listening and helps children to develop their vocabulary and observational skills. It also incorporates maths skills as you can use number, shape and information about size." techstack = {[react]}></ProjectCard>
        </div>
    
        </div>
)
}
