import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpensesSummary";

test("should render ExpensesSummary with 1 expense correctly", () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={1} expensesTotal={400} />
  );
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpensesSummary with multiple correctly", () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={5} expensesTotal={4000} />
  );
  expect(wrapper).toMatchSnapshot();
});
