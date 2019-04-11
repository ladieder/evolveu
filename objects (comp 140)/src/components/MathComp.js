import React from "react"
import math from "./math"

function MathComp(props) {
	let ans;

	if (props.data.operator === "+") {
		ans = math.sum(props.data.input1, props.data.input2);
	} else if (props.data.operator === "-") {
		ans = math.subtract(props.data.input1, props.data.input2);
	} else if (props.data.operator === "*") {
		ans = math.multiply(props.data.input1, props.data.input2);
	} else if (props.data.operator === "/") {
		ans = math.divide(props.data.input1, props.data.input2);
	} else {
		ans = "error - please enter two numbers"
	};

	return(
		<div>
			<h1>Hello World from MathComp</h1>
			<h4>The answer is: {ans}</h4>
		</div>
	);
}

export default MathComp;