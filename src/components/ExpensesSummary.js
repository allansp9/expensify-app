import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import selectExpensesTotal from "../selectors/expenses-total";
import selectExpenses from "../selectors/expenses";
import numeral from "numeral";

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? "despesa, " : "despesas, ";
  const formattedExpensesTotal = numeral(expensesTotal / 100).format("$0,0.00");

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          Você tem <span>{expenseCount} </span> {expenseWord} totalizando:{" "}
          <span>{formattedExpensesTotal}</span>
          <div className="page-header__actions">
            <Link className="button" to="/create">
              Adicionar
            </Link>
          </div>
        </h1>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);

  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
