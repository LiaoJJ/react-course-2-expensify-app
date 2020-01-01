import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

// using Provider-connect, there is no parameter passed down from <ExpenseDashboard />

// input props from "mapStateToProps"
// output: render
export const ExpenseList = (props) => (
     <div>
         {
             props.expenses.length === 0 ? (
                <p>No expenses</p>
             ) : (
                props.expenses.map((expense)=>(
                    <ExpenseListItem key={expense.id} {...expense}/>
                   )
                )
             )
         }
     </div>
 );

 // input: state
 // output: properties that you want to get out of the store
const mapStateToProps = (state)=>{
    return {
        expenses: selectExpenses(state.expenses, state.filter)
    };
}

const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList);


 export default ConnectedExpenseList;