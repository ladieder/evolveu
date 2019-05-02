import React from "react";

class ListApp extends React.Component {
	constructor() {
		super();
		this.array = [];
		this.state = {array: this.array};
		this.insertClick = this.insertClick.bind(this);
		this.fifoClick = this.fifoClick.bind(this);
		this.lifoClick = this.lifoClick.bind(this);
	}

	insertClick() {
		this.array.push(document.getElementById("subjListInput").value)
		this.setState({array: this.array});
		document.getElementById("subjListInput").value = "";
	}

	fifoClick() {
		this.array.pop();
		this.setState({array: this.array});
	}

	lifoClick() {
		this.array.shift();
		this.setState({array: this.array});
	}

	render() {
		const arrayMap = this.array.map((item) =>
			<li>{item}</li>
		);

		return(
			<div>
				<h1>FIFO LIFO App</h1><br />
				<input id="subjListInput" type="text" placeholder="enter subject"/><br/>
				<button className="btns" type="button" onClick={this.insertClick}>Add to List</button>
				<br/>
				<button className="btns" type="button" onClick={this.fifoClick}>FIFO</button>
				<button className="btns" type="button" onClick={this.lifoClick}>LIFO</button>

				<ul>{arrayMap}</ul>
			</div>
		)
	}
}

export default ListApp;