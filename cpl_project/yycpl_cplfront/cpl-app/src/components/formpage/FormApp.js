import React from 'react';

import FeedbackForm from "./FeedbackForm";

class FormApp extends React.Component {
	constructor() {
		super();
	};

	render() {
		return (
			<div className="formApp">
                <FeedbackForm />
			</div>
		);
	};

};

export default FormApp;