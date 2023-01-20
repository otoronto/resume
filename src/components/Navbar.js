import React from 'react'


const Navbar = ({setShow,setContent}) => {
  return (
    <div className='nav'>
        <div className='nav-item' onClick={() => {setContent('resume')}}>Resume</div>
        <div className='nav-item' onClick={() => {setContent('portfolio')}}>Portfolio</div>
        <div className='nav-item' onClick={() => {setContent('blog')}}>Blog</div>
        <div className='nav-item' onClick={() => {setContent('contact')}}>Contact</div>  
         {/*TODO SVG  */}
        <div className='nav-item' onClick={() => {setShow(false)}}>X</div>
    </div>
  )
}

export default Navbar