import React from "react";

import LinkedList from "./LinkedList";
import LinkComp from "./LinkComp";

import "./LinkApp.css";

class LinkApp extends React.Component {
	constructor() {
		super();
		this.ctrl = new LinkedList();
		this.state = {displayNode: this.ctrl.current}
		this.update = this.update.bind(this);
		this.insertClick = this.insertClick.bind(this);
		this.deleteClick = this.deleteClick.bind(this);
		this.firstClick = this.firstClick.bind(this);
		this.lastClick = this.lastClick.bind(this);
		this.prevClick = this.prevClick.bind(this);
		this.nextClick = this.nextClick.bind(this);
	}

	update() {
		this.setState({displayNode: this.ctrl.current});
		document.getElementById("subjInput").value = "";
		document.getElementById("amountInput").value = "";
	}

	insertClick() {
		this.ctrl.insertNode(document.getElementById("subjInput").value, Number(document.getElementById("amountInput").value));
		this.update();
	}

	deleteClick() {
		this.ctrl.deleteNode();
		this.update();
	}

	firstClick() {
		this.ctrl.firstNode();
		this.update();
	}

	lastClick() {
		this.ctrl.lastNode();
		this.update();
	}

	prevClick() {
		this.ctrl.previousNode();
		this.update();
	}

	nextClick() {
		this.ctrl.nextNode();
		this.update();
	}

	render() {
		return (
			<div className="linkApp">
				<div className="linkHeader">
					<h1>Doubly Linked List App</h1><br />
					<h3>Number of Nodes: {this.ctrl.size}</h3><br/>
					<h3>Total of all Nodes: {this.ctrl.totalNodes()}</h3><br/>
				</div>

				<div className="contTop">
					<input id="subjInput" type="text" placeholder="subject"/><br/>
					<input id="amountInput" type="number" placeholder="amount"/><br/>
					<button className="btns" type="button" onClick={this.insertClick}>Insert Node (After Current Node)</button>
				</div>

				<div className="contCenter">
					<div className="contLeft">
						<button className="btns" type="button" onClick={this.firstClick}>First Node</button>
						<button className="btns" type="button" onClick={this.prevClick}>Previous Node</button>
					</div>

					<div className="contMiddle">
						<div className="contMidLeft">
							<h4>Previous Node</h4><br/>
							{this.state.displayNode !== null && this.ctrl.current.prev !== null ? <LinkComp linkData={this.ctrl.current.prev} /> : "Start of List"}
						</div>
						<div className="contMidCenter">
							<h4>Current Node</h4><br/>
							{this.state.displayNode !== null ? <LinkComp linkData={this.ctrl.current} /> : ""}
						</div>
						<div className="contMidRight">
							<h4>Next Node</h4><br/>
							{this.state.displayNode !== null && this.ctrl.current.next !== null ? <LinkComp linkData={this.ctrl.current.next} /> : "End of List"}
						</div>
					</div>

					<div className="contRight">
						<button className="btns" type="button" onClick={this.nextClick}>Next Node</button>
						<button className="btns" type="button" onClick={this.lastClick}>Last Node</button>
					</div>
				</div>

				<div className="contBottom">
					<button className="btns" type="button" onClick={this.deleteClick}>Delete Current Node</button>
				</div>
			</div>
		)
	}
}

export default LinkApp;