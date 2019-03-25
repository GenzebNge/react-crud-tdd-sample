import React, { Component } from "react";

class PersonList extends Component {
	render() {
		return (
			<ul>
				{this.props.people.map((person, i) => (
					<li key={i}>
						{person.firstName} {person.lastName} &nbsp; <a href="#">edit</a>
					</li>
				))}
			</ul>
		);
	}
}

export default PersonList;
