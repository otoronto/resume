import './css/style.css';
import Home from './page/Home.js'
import { BrowserRouter as Router, Route, Redirect, Switch, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App' >
      <Router>
        <Routes>
          <Route exact path ='/' element ={<Home/>}></Route>
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
