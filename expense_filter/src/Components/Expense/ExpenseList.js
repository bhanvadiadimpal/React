import React from 'react';
import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';

const ExpenseList = (props) => {

    if (props.items.length === 0) {
      return <h2 className='expenses-list__fallback'>No expenses found</h2>
    } 
    
    return (
      <ul className='expenses-list'>
        {props.items.map((expense) => (
          <ExpenseItem
            key = {expense.id}
            date = {expense.date}
            title = {expense.title}
            amount = {expense.amount}
          />
        ))}
      </ul>
    );
};

export default ExpenseList;