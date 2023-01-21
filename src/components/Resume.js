import React from 'react'
import IconCircle from '../icons/circle'
import { ExperienceIcon } from '../icons/experience'
import {EducationIcon} from '../icons/education'
import IconCertificate from '../icons/certificate'

const Resume = () => {
    // document.body.style.overflow='scroll';

    return (
        <div className='resume'>
            <span className='resume-header'>PROFILE</span>
            <span className="resume-intro">I am a fullstack developer from Melbourne. I strive to bring creative solutions to business needs</span>
            <span className="resume-intro-detail">During my undergraduate studies and career, I have always focused on communication and got to know people from all over the world. I have always cared about teamwork involving both professional and social life activities.
                My ultimate career goal is to enhance my knowledge and experience to a highest level possible and to take the steps of a competent developer with determined steps.</span>
            <div className='resume-info'>
                <div className='resume-info-column'>
                    <span><span className='resume-info-title'>Name:</span> Emre Başar</span>
                    <span><span className='resume-info-title'>Adress:</span> Melbourne, Australia</span>
                    <span><span className='resume-info-title'>Phone:</span> +61 231412 3</span>
                    <span><span className='resume-info-title'>Interest:</span> Fulltime, Freelance</span>
                </div>
                <div className='resume-info-column'>
                    <span><span className='resume-info-title'>Date of birth:</span> 30-08-1994</span>
                    <span><span className='resume-info-title'>Email:</span> emrebasar1994@gmail.com</span>
                    <span><span className='resume-info-title'>Skype:</span> skype.skype</span>
                </div>
            </div>

            <div>
                <span className='resume-header'>SKILLS</span>

                <div className='resume-skill'>
                    <ul>
                        <li>ReactJs</li>
                        <li>React Native</li>
                        <li>NodeJs</li>
                        <li>Mysql,MongoDB </li>
                    </ul>
                    <ul>
                        <li>Java</li>
                        <li>Spring Boot</li>
                        <li>Linux</li>
                        <li>Opentext Documentum</li>
                    </ul>
                </div>
            </div>

            <div>
                <span className='resume-header'>EXPERIENCE</span>

                <div className='exp'>
                    <div className='exp-icon'>
                        <ExperienceIcon size={'48'} fill='#bdbdbd' />
                    </div>
                    <div className="exp-block">
                        <div className='exp-block-icon'>
                            <IconCircle height='20px' width='20px' fill='#bdbdbd' />
                        </div>
                        <span className="exp-title">IT Consultant - Documentum 
                            <span className='exp-company'>&emsp;PlanetGroup Turkey <span className="exp-period">2021-2022- 12 months</span></span>
                            
                        </span>
                        <span className="exp-context">Information Services Consultant</span>

                    </div>

                    <div className="exp-block">
                        <div className='exp-block-icon'>
                            <IconCircle height='20px' width='20px' fill='#bdbdbd' />
                        </div>
                        <span className="exp-title">QUALITY-PRODUCTION ENGINEER 
                            <span className='exp-company'>&emsp;FORD OTOSAN AŞ.<span className="exp-period">2019-2021 - 14 months</span></span>
                            
                        </span>
                        <span className="exp-context">Paintshop production technologies engineer</span>
                    </div>

                </div>
            </div>

            <div>
                <span className='resume-header'>EDUCATION</span>

                <div className='exp'>
                    <div className='exp-icon'>
                        <EducationIcon size={'48'} fill='#bdbdbd' />
                    </div>

                    <div className="exp-block">
                        <div className='exp-block-icon'>
                            <IconCircle height='20px' width='20px' fill='#bdbdbd' />
                        </div>
                        <span className="exp-title"> Mechanical Engineering
                            <span className='exp-company'>&emsp;Istanbul Technical University<span className="exp-period">2012-2018</span></span>
                            
                        </span>

                    </div>
                </div>
            </div>

            <div>
                <span className='resume-header'>CERTIFICATIONS</span>

                <div className='exp'>
                    <div className='exp-icon'>
                        <IconCertificate size={'48'} fill='#bdbdbd' />
                    </div>

                    <div className="exp-block">
                        <div className='exp-block-icon'>
                            <IconCircle height='20px' width='20px' fill='#bdbdbd' />
                        </div>
                        <span className="exp-title"> ORACLE CERTIFICATE - 
                        <span>
                        JAVA SE 8 PROGRAMMER I
                            <span  className='exp-period' >(86/100)</span>
                        </span>
                        </span>

                    </div>

                    <div className="exp-block">
                        <div className='exp-block-icon'>
                            <IconCircle height='20px' width='20px' fill='#bdbdbd' />
                        </div>
                        <span className="exp-title"> IELTS ACADEMICS
                            <span className='exp-period' style={{'position':'absolute','right':'6rem'}}>(Band 7/9)</span>
                        </span>

                    </div>
                </div>

                    
                </div>
                
        </div>
    )
}

export default Resume