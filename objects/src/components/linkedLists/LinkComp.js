import React from "react";

class LinkComp extends React.Component {

	render() {
		return (
			<div className="linkComp">
				<h4>Subject: {this.props.linkData.subject}</h4>
				<h4>Amount: {this.props.linkData.amount}</h4>
			</div>
		)
	}
}

export default LinkComp;