import React from 'react'

const Resume = () => {
    // document.body.style.overflow='scroll';

  return (
    <div className='resume'>
        <span className='resume-header'>LOREM IPSUM</span>
        <span className="resume-intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</span>
        <span className="resume-intro-detail">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</span>

        <div className='resume-info'>
                <span><span className='resume-info-title'>Name:</span> Emre</span>
        </div>
    </div>
  )
}

export default Resume