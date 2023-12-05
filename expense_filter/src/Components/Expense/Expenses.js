import React, { useState } from "react";
import Card from "../Card/Card";
import FilterYear from "./FilterYear";
import ExpenseList from "./ExpenseList";
import "./Expenses.css";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense =>{
    return expense.date.getFullYear().toString() === filteredYear; // For filter list frpm dropdown
  });

  return (
    <div>
      <Card className="expenses">
        <FilterYear
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart expenses={filteredExpenses} />
        <ExpenseList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
