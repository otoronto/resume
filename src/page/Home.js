import React from 'react'
import '../css/style.css';
import { useNavigate, withRouter } from "react-router-dom";
const Home = (props) => {
  // document.body.style.overflow='hidden';

  const navigate = useNavigate();
  return (
    <div className='container'>
      <div className='about-box'>
        <div className="about-box-container">
          <span style={{ fontSize: '20px', fontWeight: 300, marginBottom: '10px' }}>Hi, I'm</span>
          <span style={{ fontSize: '40px' }}>EMRE BAŞAR</span>
          <span style={{ fontSize: '26px' }}>Fullstack Developer</span>

        </div>
      </div>

      <div className="menu-boxes">
        <div className="resume-box box-item" onClick={()=> navigate('resume')} >
            <div className="resume-box-container ">
              <p className='resume-box-header'>01</p>
              <h2 className="resume-box-resume">RESUME</h2>
            </div>
        </div>
        <div className="portfolio-box box-item">
          <div className="portfolio-box-container">
            <p className='portfolio-box-header'>02</p>
            <h2 className="portfolio-box-portfolio">PORTFOLIO</h2>
          </div>

        </div>
        <div className="blog-box box-item">
          <div className="blog-box-container">
            <p className='blog-box-header'>03</p>
            <h2 className="blog-box-blog">BLOG</h2>
          </div>

        </div>
        <div className="contact-box box-item">
          <div className="contact-box-container">
            <p className='contact-box-header'>04</p>
            <h2 className="contact-box-contact">CONTACT</h2>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Home;