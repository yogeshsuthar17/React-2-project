
import Home from './Home';
import About from './About';
import Contact from './Contact';
// import './Kpp.css'

import {HashRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Link to='/Home' >Home | </Link>
        <Link to='/About'>About | </Link>
        <Link to='/Contact'>Contact |</Link>
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        
        
        
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
