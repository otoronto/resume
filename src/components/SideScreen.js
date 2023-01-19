import React from 'react'
import Navbar from './Navbar'
import {useEffect,useState} from 'react';
import Resume from './Resume';
const SideScreen = ({show,setShow,content}) => {

  useEffect(() => {
    setShow(show);
  },[])
  return (
    <div className={`side-container ${show?'show':''}`}>
      <Navbar setShow={setShow}/>
      <Resume/>

    </div>
  )
}

export default SideScreen