import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Menustyle.css';
import {Link} from 'react-router-dom';


const Menu = () =>{
	return (
		<div className="Menu">
		
		<ul>
		<li><Link to="/">Home</Link></li>
		<li><Link to="Features">Features</Link></li>
		<li><Link to="Aboutus">About Us</Link></li>
		<li><Link to="Contactus">Contact Us</Link></li>
		</ul>

		</div>

		)
}

export default Menu;


