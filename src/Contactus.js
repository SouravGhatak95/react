import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Style.css';

class Contactus extends Component{

	constructor(){
		super()
		this.state={
			Name:'',
			Number:'',
			Email:'',
			Message:''
		}
	}

	nameHandler=(event)=>{
		this.setState({
			Name:event.target.value
		})
	}

	numberHandler=(event)=>{
		this.setState({
			Number:event.target.value
		})
	}

	emailHandler=(event)=>{
		this.setState({
			Email:event.target.value
		})
	}

	textHandler=(event)=>{
		this.setState({
			Message:event.target.value
		})
	}

	submitHandler=()=>{
		alert(`Name:${this.state.Name}, Number:${this.state.Number} ,Email:${this.state.Email}, Message:${this.state.Message}`)}
	

	render(){
		return (
		<div className="Contactus">
		<h2 className="text-xl hover:text-black">Kindly Provide Us The Following Info... </h2>
		
		<div className="form">
			<form >

			<div className="">
			<label className="my-2 mr-2">Name:  </label>
			<input type="text" value={this.state.Name} onChange={this.nameHandler}/>
			</div>

			<div className="">
			<label className="my-2 mr-2">Number:  </label>
			<input type="text" value={this.state.Number} onChange={this.numberHandler} className="mr-2"/>
			</div>

			<div className="">
			<label className="my-2 mr-4">Email:  </label>
			<input type="text" value={this.state.Email} onChange={this.emailHandler}/>
			</div>

			<div className="">
			<label className="my-2 mr-3">Message:  </label>
			<textarea value={this.state.Message} onChange={this.textHandler} className="mr-8"/>
			</div>

			<button className="btn btn-primary" onClick={this.submitHandler}>Submit</button>
			</form>
			</div>


		</div>



			)
	}
}

export default Contactus;

