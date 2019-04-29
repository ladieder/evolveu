import React from 'react';

class CityListComp extends React.Component {

	render() {
		return (
			<div className="cityListComp">
				<h3>{this.props.cityData.name}</h3>
				<h4>ID: {this.props.cityData.cityID}</h4>
				<h4>Latitude: {this.props.cityData.lat}</h4>
				<h4>Longitude: {this.props.cityData.long}</h4>
				<h4>Population: {this.props.cityData.pop}</h4>
				<button className="btns" type="button" id={"edit"+this.props.cityData.cityID} onClick={this.props.editBtn}>Edit City</button>
				<button className="btns" type="button" id={"del"+this.props.cityData.cityID} onClick={this.props.delBtn}>Delete City</button>
			</div>
		);
	}
}

export default CityListComp;