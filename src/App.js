import React, { Component } from "react";
import PersonList from "./Components/PersonList";
import PersonEdit from "./Components/PersonEdit";

class App extends Component {
	state = {
		people: [
			{ firstName: "Daniel", lastName: "Lai" },
			{ firstName: "Jarrett", lastName: "Bariel" }
		]
	};

	addPerson = person => {
		const people = [...this.state.people];
		people.push(person);
		this.setState({ people });
	};

	render() {
		return (
			<div id="main">
				<PersonList people={this.state.people} />
				<PersonEdit addPerson={this.addPerson} />
			</div>
		);
	}
}

export default App;
