import React from 'react'
import Navbar from './Navbar'
import {useEffect,useState} from 'react';
import Resume from './Resume';
import Portfolio from './Portfolio'
import Blog from './Blog'
import Contact from './Contact'
const SideScreen = ({show,setShow,content,setContent}) => {
console.log(content);
  useEffect(() => {
    setShow(show);
  },[])
  return (
    <div className={`side-container ${show?'show':''}`}>
      <Navbar setShow={setShow} setContent={setContent}/>
      {content==='resume'&&<Resume/>}
      {content==='portfolio'&&<Portfolio/>}
      {content==='blog'&&<Blog/>}
      {content==='contact'&&<Contact/>}


    </div>
  )
}

export default SideScreen