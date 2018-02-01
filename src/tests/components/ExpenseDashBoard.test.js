import React from "react";
import { shallow } from "enzyme";
import "react-dates/initialize";
import ExpenseDashBoard from "../../components/ExpenseDashBoard";

test("should render ExpenseDashBoard correctly", () => {
  const wrapper = shallow(<ExpenseDashBoard />);
  expect(wrapper).toMatchSnapshot();
});
