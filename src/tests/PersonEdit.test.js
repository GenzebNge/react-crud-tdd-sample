import React from "react";
import { shallow } from "enzyme";
import PersonEdit from "../Components/PersonEdit";

describe("PersonEdit", () => {
	it("render a submit button", () => {
		const wrapper = shallow(<PersonEdit />);
		expect(wrapper.find({ type: "submit" })).toHaveLength(1);
	});

	it("has default state and updates it when fields are filled out", () => {
		const wrapper = shallow(<PersonEdit />);
		const defaultState = {
			firstName: "",
			lastName: ""
		};
		expect(wrapper.state()).toEqual(defaultState);

		const firstNameInput = wrapper.find("input#firstName");
		const lastNameInput = wrapper.find("input#lastName");

		const newFirstName = "Johnny";
		const newLastName = "Depp";
		firstNameInput.simulate("change", {
			target: { name: "firstName", value: newFirstName }
		});
		lastNameInput.simulate("change", {
			target: { name: "lastName", value: newLastName }
		});

		const newState = {
			firstName: "Johnny",
			lastName: "Depp"
		};
		expect(wrapper.state()).toEqual(newState);
	});

	it("calls addPerson with state", () => {
		//mock function with jest
		const mockAddPerson = jest.fn();
		const wrapper = shallow(<PersonEdit addPerson={mockAddPerson} />);
		const submitState = { firstName: "Daniel", lastName: "Lai" };
		wrapper.setState(submitState);
		wrapper.find("button").simulate("click");

		expect(mockAddPerson).toBeCalledWith(submitState);
	});
});
