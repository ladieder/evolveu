import React from "react";

class CommunityComp extends React.Component {
	constructor(props) {
		super(props);
		this.saveClick = this.saveClick.bind(this);
		this.sphereClick = this.sphereClick.bind(this);
	}

	saveClick() {
		const inPop = Number(document.getElementById("inInput").value);
		this.props.cityData.movedIn(inPop);

		const outPop = Number(document.getElementById("outInput").value);
		this.props.cityData.movedOut(outPop);

		this.props.cityData.name = document.getElementById("chgNameInput").value;
		this.props.cityData.lat = document.getElementById("chgLatInput").value;
		this.props.cityData.long = document.getElementById("chgLongInput").value;
		this.props.cityData.pop = document.getElementById("chgPopInput").value;

		this.props.update();

		document.getElementById("inInput").value = "";
		document.getElementById("outInput").value = "";
		document.getElementById("chgNameInput").value = "";
		document.getElementById("chgLatInput").value = "";
		document.getElementById("chgLongInput").value = "";
		document.getElementById("chgPopInput").value = "";
	}

	sphereClick() {
		console.log(this.props.cityData.lat);
		console.log(this.props.whichSphere(this.props.cityData.lat));
		document.getElementById("whichSphere").textContent = this.props.whichSphere(this.props.cityData.lat);
	}

	render() {
		return (
			<div className="cityCard">
				<h4>{this.props.cityData.name}</h4>
				<h4>City ID: {this.props.cityData.cityID}</h4>
				<h4>Lat / Long: {this.props.cityData.lat} / {this.props.cityData.long}</h4>
				<h4>Population: {this.props.cityData.pop}</h4>
				<h4>Type of city: {this.props.cityData.howBig()}</h4>
				<br />

				<h5>Enter city name:</h5>
				<input id="chgNameInput" type="text"/>

				<h5>Enter latitude (-90 to +90):</h5>
				<input id="chgLatInput" type="text"/>

				<h5>Enter longitude (-180 to +180):</h5>
				<input id="chgLongInput" type="text"/>

				<h5>Enter population:</h5>
				<input id="chgPopInput" type="text"/>

				<h5>People moved in:</h5>
				<input id="inInput" type="number"/>

				<h5>People moved out:</h5>
				<input id="outInput" type="number"/>

				<br />
				<button className="btns" id="inBtn" type="button" onClick={this.saveClick}>Save Changes</button>

				<br />
				<button className="btns" id="chgPopBtn" type="button" onClick={this.sphereClick}>Which hemisphere?</button>
				<div id="whichSphere"></div>

				<br />
				<button className="btns" id="closeBtn" type="button" onClick={this.props.closeWindowClick}>Close Window</button>

				<br /><br />
			</div>
		)
	}
}

export default CommunityComp;