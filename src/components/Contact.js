import React from 'react'
import IconEmailOutline from '../icons/IconEmailOutline';
import IconPhoneCall from '../icons/IconPhoneCall';
import IconSignpost from '../icons/IconSignPost';

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-header'>GET IN TOUCH!</div>
      <div className='contact-block'>
        <div className="contact-block-input">
          <input type='text' placeholder='Name' className='text-input'></input>
          <input type='text' placeholder='email' className='text-input'></input>
          <textarea rows='4' className='text-input'></textarea>
          <button className='input-button'>SEND MESSAGE</button>
        </div>



        <div className="contact-block-info">
          <div className='info-element'>
            <IconSignpost size='48' fill='#a0a0a0'/>
            <div>
              <h5>ADRESS</h5>
              <p>223 House street, melbourne, texas</p>
            </div>
          </div>
          <div className='info-element'>
            <IconPhoneCall size='48' fill='#a0a0a0'/>
            <div>
              <h5>CALL ME</h5>
              <p>+63 234123 1</p>
            </div>
          </div>
          <div className='info-element'>
            <IconEmailOutline size='48' fill='#a0a0a0'/>
            <div>
              <h5>ENQUIRIES</h5>
              <p>emrebasar1994@gmail.com</p>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Contact