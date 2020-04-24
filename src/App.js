import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Menu from './Menu';
import Features from './Features';
import Home from './Home';
import Aboutus from './Aboutus';
import Contactus from './Contactus';
import Footer from './Footer';


 function App() {

  return (
    <BrowserRouter>

    <div className='App'>
    <Menu />

    <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/Features" component={Features} />
    <Route path="/Aboutus" component={Aboutus} />
    <Route path="/Contactus" component={Contactus} />
    </Switch>

     </div>

     <Footer />
     </BrowserRouter>
    
  );
}


 

/*
 function App() {

  return (
   
    <div className='App'>
      
    <h1 className='text-xl'>Hello World</h1>



      </div>
         
  );
}
*/
export default App;
