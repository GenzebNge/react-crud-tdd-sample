import React, { Component } from "react";

class PersonEdit extends Component {
	state = {
		firstName: "",
		lastName: ""
	};

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};
	render() {
		return (
			<div>
				<input
					type="text"
					name="firstName"
					id="firstName"
					onChange={this.handleChange}
				/>
				<input
					type="text"
					name="lastName"
					id="lastName"
					onChange={this.handleChange}
				/>
				<button
					type="submit"
					onClick={() => this.props.addPerson(this.state)}
				/>
			</div>
		);
	}
}

export default PersonEdit;
