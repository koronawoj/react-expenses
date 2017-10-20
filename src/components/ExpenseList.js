import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
import {List, ListItem} from 'material-ui/List';




export const ExpenseList = (props) => (
  <List
    style={{
      width: '400px',
      margin: '0 auto',
    }}>
        {
          props.expenses.length === 0 ? (
            <p>No expenses</p>
          ) : (
              props.expenses.map((expense) => {
                return <ExpenseListItem key={expense.id} {...expense} />;
              })
            )
        }
  </List>

);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

{/* <div>

  {
    props.expenses.length === 0 ? (
      <p>No expenses</p>
    ) : (
      props.expenses.map((expense) => {
        return <ExpenseListItem key={expense.id} {...expense} />;
      })
    )
  }
</div> */}
export default connect(mapStateToProps)(ExpenseList);
