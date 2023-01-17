import './css/style.css';
import Home from './page/Home.js'
import Resume from './page/Resume';
import { BrowserRouter as Router, Route, Redirect, Switch, Routes } from 'react-router-dom';
import Contact from './page/Contact';
import Blog from './page/Blog';
import Portfolio from './page/Portfolio';

function App() {
  return (
    <div className='App' >
      <Router>
        <Routes>
          <Route exact path ='/' element ={<Home/>}></Route>
          <Route exact path ='/resume' element ={<Resume/>}></Route>
          <Route exact path ='/portfolio' element ={<Portfolio/>}></Route>
          <Route exact path ='/blog' element ={<Blog/>}></Route>
          <Route exact path ='/contact' element ={<Contact/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
