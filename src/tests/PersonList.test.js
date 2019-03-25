import React from "react";
import { shallow } from "enzyme";
import PersonList from "../Components/PersonList";

describe("PersonList", () => {
	const generatePersonList = overide => {
		const defaultProps = {
			people: []
		};
		const props = { ...defaultProps, ...overide };
		return shallow(<PersonList {...props} />);
	};
	it("should render an ul", () => {
		const wrapper = shallow(<PersonList people={[]} />);
		expect(wrapper.find("ul")).toHaveLength(1);
	});

	it("should render a li for each person in people", () => {
		const people = [
			{ firstName: "Daniel", lastName: "Lai" },
			{ firstName: "Jarrett", lastName: "Bariel" }
		];
		const wrapper = shallow(<PersonList people={people} />);
		expect(wrapper.find("li")).toHaveLength(2);
	});

	it("should display the first and last name for each person", () => {
		const people = [{ firstName: "Daniel", lastName: "Lai" }];
		const wrapper = shallow(<PersonList people={people} />);

		expect(wrapper.find("li").text()).toContain(people[0].firstName);
		expect(wrapper.find("li").text()).toContain(people[0].lastName);
	});

	//refactore with a helper function
	it("should contain a link for each person", () => {
		const people = [
			{ firstName: "Daniel", lastName: "Lai" },
			{ firstName: "Jarrett", lastName: "Bariel" }
		];
		const wrapper = generatePersonList({ people });
		expect(wrapper.find("a")).toHaveLength(2);
	});
});
