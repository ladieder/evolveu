import React, { Component } from 'react';
import math from "./math"

import plusImg from './icons/plus.png';
import minusImg from './icons/minus.png';
import multImg from './icons/multiply.png';
import divImg from './icons/divide.png';

function Calculator(props) {
	let ans;

	if (!isNaN(props.data.input1) && 
		!isNaN(props.data.input2) && 
		props.data.input1 !== null && 
		props.data.input2 !== null && 
		props.data.operator !== "") {
			if (props.data.operator === "+") {
				ans = math.sum(props.data.input1, props.data.input2);
			} else if (props.data.operator === "-") {
				ans = math.subtract(props.data.input1, props.data.input2);
			} else if (props.data.operator === "*") {
				ans = math.multiply(props.data.input1, props.data.input2);
			} else if (props.data.operator === "/") {
				ans = math.divide(props.data.input1, props.data.input2);
			} 
		return(
			<h4>{props.data.input1} {props.data.operator} {props.data.input2} = {ans} </h4>
		)
	} else {
		return (<h4>error: please enter two numbers and choose an operator</h4>);
	};
	
}

class MathComp extends Component {
	constructor() {
		super();
		this.state = {
		  operator: "",
		  input1: null,
		  input2: null
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleChange(event) {
		this.setState({
		  [event.target.name]: event.target.value,
		});
	}

	handleClick(event) {
		this.setState({
		  operator: event.target.alt,
		});
	}

// try to add clear ans functionality
	clearFunc() {
		document.getElementById("input1").value = null;
		document.getElementById("input2").value = null;
	}

	render() {
		return(
	        <div id="calculator">
	          <h1>Calculator</h1>
	          <h4>Input 1: </h4><input name="input1" id="input1" type="number" onChange={this.handleChange} />
	          <h4>Input 2: </h4><input name="input2" id="input2" type="number" onChange={this.handleChange} />
	          <h4>Choose Operator: </h4>

	          <img src={plusImg} className="mathIcons" id="plus" height="64" width="64" alt="+" onClick={this.handleClick} />
	          <img src={minusImg} className="mathIcons" id="minus" height="64" width="64" alt="-" onClick={this.handleClick} />
	          <img src={multImg} className="mathIcons" id="multiply" height="64" width="64" alt="*" onClick={this.handleClick} />
	          <img src={divImg} className="mathIcons" id="divide" height="64" width="64" alt="/" onClick={this.handleClick} />

	          <Calculator data={this.state} />

	          <button type="button" id="clear" onClick={this.clearFunc}> Clear Calculator! </button><br /><br />
	        </div>
		)
	}
}

export default MathComp;