import React from 'react'


const Navbar = ({setShow}) => {
  return (
    <div className='nav'>
        <div className='nav-item'>Resume</div>
        <div className='nav-item'>Portfolio</div>
        <div className='nav-item'>Blog</div>
        <div className='nav-item'>Contact</div>  
         {/*TODO SVG  */}
        <div className='nav-item' onClick={() => {setShow(false)}}>X</div>
    </div>
  )
}

export default Navbar