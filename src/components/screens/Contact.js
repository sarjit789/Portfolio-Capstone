import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin,  } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import '../styles/Contact.css'
import React from 'react'

export default function Contact() {
    return (
        <div className='contactWrapper'>
            <h1 className='contactHeading'>Hello there. Feel free to drop me a text!</h1>
            <div className='contactIconWrapper'>
                <a href='https://www.linkedin.com/in/sarjitsinh-yadav-289837201/'><FontAwesomeIcon className='contactIcons' icon={faLinkedin} /><p className='contactTags'>LinkedIn</p></a>
                <a href='https://github.com/sarjit789?tab=repositories'><FontAwesomeIcon className='contactIcons' icon={faGithub} /><p className='contactTags'>GitHub</p></a>
                <a href='https://www.instagram.com/atul_yadav_5678/'><FontAwesomeIcon className='contactIcons' icon={faInstagram} /><p className='contactTags'>Instagram </p></a>
               
                <a href='mailto:sarjitsinhyadav@gmail.com'><FontAwesomeIcon className='contactIcons' icon={faEnvelopeOpenText} /><p className='contactTags'>Gmail</p></a>
            </div></div>
    )
}
