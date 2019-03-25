import React from "react";
import App from "./App";
import { shallow } from "enzyme";

describe("App", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<App />);
	});
	it("renders a main div", () => {
		//Shallow rendering is useful to constrain yourself to testing a component as a unit, and to ensure that your tests aren't indirectly asserting on behavior of child components.
		// const wrapper = shallow(<App />);

		// .find Finds every node in the render tree of the current wrapper that matches the provided selector.
		expect(wrapper.find("div#main")).toHaveLength(1);
	});

	it("renders PersonList as a child", () => {
		// const wrapper = shallow(<App />);
		expect(wrapper.find("PersonList")).toHaveLength(1);
	});

	it("initialize with two people", () => {
		// const wrapper = shallow(<App />);
		const initPeople = [
			{ firstName: "Daniel", lastName: "Lai" },
			{ firstName: "Jarrett", lastName: "Bariel" }
		];
		//.state, Returns the state hash for the root node of the wrapper. Optionally pass in a prop name and it will return just that value.
		expect(wrapper.state().people).toEqual(initPeople);
		expect(wrapper.state("people")).toEqual(initPeople);
	});

	//refactor
	it("should add person to people", () => {
		//set up
		const initPeople = [
			{ firstName: "Daniel", lastName: "Lai" },
			{ firstName: "Jarrett", lastName: "Bariel" }
		];
		const newPerson = { firstName: "Nicholas", lastName: "Lai" };

		//assertion
		expect(wrapper.state().people).toEqual(initPeople);

		//.instance(), Returns the single-node wrapper's node's underlying class instance; this in its methods.
		//exercise add Person
		wrapper.instance().addPerson(newPerson);

		// assertion
		expect(wrapper.state().people).toEqual([...initPeople, newPerson]);
	});

	//passing down props
	it("passes people to PersonList", () => {
		const personList = wrapper.find("PersonList");
		// .props(), Returns the props object for the root node of the wrapper. It must be a single-node wrapper.
		expect(personList.props().people).toEqual(wrapper.state().people);
	});

	it("passess addPerson to PersonEdit", () => {
		const personEdit = wrapper.find("PersonEdit");

		expect(personEdit.props().addPerson).toEqual(wrapper.instance().addPerson);
	});

	// NEED TO REFACTOR WHEN CONDITIONAL RENDERING OF COMPONENTS KICK IN!!!;
});
