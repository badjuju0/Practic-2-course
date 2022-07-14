import * as React from 'react';
import './App.css';
import {Routes, Route, Link} from "react-router-dom";
import Social from './Social';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Facts from './components/Facts.jsx';




const App = () => {
  
  return(
    <Router>
      <div class='ponos'> 
        <Header />
        
        <div>
          <Routes>
            <Route path="/" element={<Facts />}/>
            <Route path="/social/" element={<Social/>}/>
          </Routes>
        </div>
      </div>   
    </Router> 
  )  
}

export default App;
