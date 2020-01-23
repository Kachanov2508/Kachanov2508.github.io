import React, { Component } from "react";
import Car from "./Car/Car";

class App extends Component {
	render() {
		const divStyle = {
			textAlign: "center"
		};

		return (
			<div style={divStyle}>
				<h1>Car list</h1>
				<Car name={"Ford"} yuear={"2018"} />
				<Car name={"Audi"} yuear={"2016"} />
				<Car name={"Mazda"} yuear={"2010"} />
			</div>
		);
	}
}

export default App;
