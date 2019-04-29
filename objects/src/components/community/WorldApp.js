import React from "react";

import Community from "./Community";
import CommunityComp from "./CommunityComp";
import CityListComp from "./CityListComp";

import "./CityListComp.css"
import "./CommunityComp.css"
import "./WorldApp.css"

class WorldApp extends React.Component {
	constructor() {
		super();
		this.ctrl = new Community();
		this.state = {
			ctrl: this.ctrl,
			displayIndex: null
		};
		this.createClick = this.createClick.bind(this);
		this.editClick = this.editClick.bind(this);
		this.delClick = this.delClick.bind(this);
		this.update = this.update.bind(this);
		this.closeWindowClick = this.closeWindowClick.bind(this);
	};

	createClick() {
		this.ctrl.createCity("default name", null, null, null);
		this.setState({ctrl: this.ctrl});
	}

	editClick(e) {
		const editID = Number((e.target.id).slice(4, e.target.id.length));
		const editIndex = this.ctrl.cityList.findIndex(item => item.cityID === editID);
		this.setState({displayIndex: editIndex});
	}

	delClick(e) {
		const delID = Number((e.target.id).slice(3, e.target.id.length));
		this.ctrl.deleteCity(delID);
		this.setState({ctrl: this.ctrl});
	}

	// is this considered force updating state??????????
	update() {
		this.setState({ctrl: this.ctrl});
	}

	closeWindowClick() {
		this.setState({displayIndex: null});
	}

	render() {
		const cityCard = this.ctrl.cityList.map(item => {
			return (
				<li className="cityCard" key={item.cityID}>
					<CityListComp 
						cityData={item}
						editBtn={this.editClick}
						delBtn={this.delClick}
					/>
				</li>
			);
		});

		return (
			<div className="worldApp">
				<div className="header">
					<h1>Cities and Communities App</h1>
					<h4>Most northern city: {this.ctrl.getMostNorthern()}</h4>
					<h4>Most southern city: {this.ctrl.getMostSouthern()}</h4>
					<h4>Total population: {this.ctrl.getPopulation()}</h4>
					<button className="btns" id="createBtn" type="button" onClick={this.createClick}>Create New City</button>
				</div>

				<div className="containers">
					<div className="rightContainer">
						<ul className="cityListComp">{cityCard}</ul>
					</div>

					<div className="leftContainer">
						{this.state.displayIndex !== null ? 
							<CommunityComp 
								cityData={this.ctrl.cityList[this.state.displayIndex]} 
								whichSphere={this.ctrl.whichSphere}
								displayIndex={this.state.displayIndex}
								update={this.update} 
								closeWindowClick={this.closeWindowClick} 
							/> 
						: ""}
					</div>
				</div>

			</div>
		);
	};

};

export default WorldApp;