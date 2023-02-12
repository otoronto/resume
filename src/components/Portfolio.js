import React from 'react'
import login from '../images/portfolio/login.png'
import chatroom from '../images/portfolio/chatroom.png'

const Portfolio = () => {
  return (
    <div className='portfolio-container'>
      <div className="portfolio-header">PORTFOLIO</div>
      {/*------------------------------------- CHATTY--------------------------- */}
      <div className="portfolio-item">
        <div className="portfolio-item-header"> #1{')'} CHATTY</div>
        <div className="portfolio-item-info">
          <p>CHATTY is a chat application similar to whatsapp.
            Reactjs is used for the front-end of the application, whereas java is used for the backend which is handling tokens for authentication,
            storing user information on h2 database and enabling messaging through websocket.  </p>
          <br></br>
          <p> There is only one room available at the moment and three predefined users. user1, user2 and user3 with password 'P4ssword' .
            Feature to sign up new user and open private conversations with other users will come soon  </p>
            <br></br>
        </div>
        <a href="https://github.com/otoronto/Chatty" className="portfolio-item-info" target='-blank'>Go to github</a>
      </div>

      <div className='portfolio-item-images'>
        <img src={login} alt='login' />
        <img src={chatroom} alt='login' />
      </div>
      
      {/*-------------------------------------Todo App--------------------------- */}
      
    </div>
  )
}

export default Portfolio