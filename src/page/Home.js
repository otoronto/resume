import React from 'react'
import '../css/style.css';
import { useState,useEffect } from 'react';
import SideScreen from '../components/SideScreen';

import lamba from '../images/lamba.avif';
import flower from '../images/flower.jpg'
import phone from '../images/phone.avif'
import masa from '../images/masa.jpeg'
import matrix from '../images/matrix.avif'
import tus from '../images/tus.jpg'

const Home = (props) => {
  // document.body.style.overflow='hidden';


  const [show, setShow] = useState(false);
  const [content, setContent] = useState('');
  const [backgroundImage, setBackgroundImage] = useState();


  const onClickBox = (content) => {
    setShow(true);
    setContent(content);
  }

  const pickBackgroundImage = () => {

    const imageList = [lamba,flower,phone,matrix];
      
    const image = imageList[Math.floor(Math.random() * imageList.length)];
    console.log(Math.floor(Math.random() * imageList.length));
    // console.log(imageList[1]);
    // console.log(flower);

    return image;
  }
  useEffect(() => {
    setBackgroundImage(pickBackgroundImage())
  }, [])
  return (
    <div className='container' style= {{backgroundImage:`url(${backgroundImage})`}}>
      {/* // <div className='container' style={{ backgroundImage:`url('${backgroundImage}')` }} > */}
      {/* <div className='overlay slide-left '>
      </div> */}

        <div className={`about-box ${show ? 'about-box-side' : ''}`} onClick={() => { setShow(false) }}>
          <div className="about-box-container">
            <span style={{ fontSize: '20px', fontWeight: 300, marginBottom: '10px' }}>Hi, I'm</span>
            <span style={{ fontSize: '40px' }}>EMRE BAŞAR</span>
            <span style={{ fontSize: '26px' }}>Fullstack Developer</span>
          </div>

        </div>
        <div style={{ display: 'flex', justifyContent: 'end', width:'100%' }}>
          <SideScreen show={show} setShow={setShow} onFocus={setShow} content={content} setContent={setContent} />
        </div>

        <div className={`menu-boxes ${show ? 'fade' : ''}`}>
          <div className="resume-box box-item" onClick={() => onClickBox('resume')}>
            <div className="resume-box-container">
              <p className='resume-box-header'>01</p>
              <h2 className="resume-box-resume">RESUME</h2>
            </div>
          </div>
          <div className="portfolio-box box-item" onClick={() => onClickBox('portfolio')}>
            <div className="portfolio-box-container">
              <p className='portfolio-box-header'>02</p>
              <h2 className="portfolio-box-portfolio">PORTFOLIO</h2>
            </div>

          </div>
          <div className="blog-box box-item" onClick={() => onClickBox('blog')}>
            <div className="blog-box-container">
              <p className='blog-box-header'>03</p>
              <h2 className="blog-box-blog">BLOG</h2>
            </div>

          </div>
          <div className="contact-box box-item" onClick={() => onClickBox('contact')}>
            <div className="contact-box-container">
              <p className='contact-box-header'>04</p>
              <h2 className="contact-box-contact">CONTACT</h2>
            </div>
          </div>
        </div>
    </div >
  )
}

export default Home;