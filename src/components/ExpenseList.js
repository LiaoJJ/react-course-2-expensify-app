import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

// using Provider-connect, there is no parameter passed down from <ExpenseDashboard />

// input props from "mapStateToProps"
// output: render
export const ExpenseList = (props) => (
     <div className="content-container">
         <div className="list-header">
             <div className="show-for-mobile">Expenses</div>
             <div className="show-for-desktop">Expense</div>
             <div className="show-for-desktop">Amount</div>
         </div>
         <div className="list-body">
            {
                props.expenses.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span>No expenses</span>
                    </div>
                ) : (
                    props.expenses.map((expense)=>(
                        <ExpenseListItem key={expense.id} {...expense}/>
                    )
                    )
                )
            }
         </div>
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