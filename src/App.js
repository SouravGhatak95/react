import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Menu from './FashionPage/Menu';
import Features from './FashionPage/Features';
import Home from './FashionPage/Home';
import Aboutus from './FashionPage/Aboutus';
import Contactus from './FashionPage/Contactus';
import Footer from './FashionPage/Footer';


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
