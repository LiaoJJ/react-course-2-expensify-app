import React from 'react';
import {connect} from 'react-redux';
import selectExpenses from '../selectors/expenses';
import expense_sum from '../selectors/ExpensesTotal';
import numeral from 'numeral';

// using Provider-connect, there is no parameter passed down from <ExpenseDashboard />

// input props from "mapStateToProps"
// output: render
export const ExpensesSummary = (props) => (
     <div>
         <h1>Viewing {props.expenses.length} expense{props.expenses.length>1?'s':''} totaling {numeral(expense_sum(props.expenses)/100).format('$0,0.00')}</h1>
     </div>
 );

 // input: state
 // output: properties that you want to get out of the store
const mapStateToProps = (state)=>{
    return {
        expenses: selectExpenses(state.expenses, state.filter)
    };
}

const ConnectedExpenseList = connect(mapStateToProps)(ExpensesSummary);


 export default ConnectedExpenseList;