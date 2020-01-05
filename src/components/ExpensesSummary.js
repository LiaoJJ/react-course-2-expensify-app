import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import selectExpenses from '../selectors/expenses';
import expense_sum from '../selectors/ExpensesTotal';
import numeral from 'numeral';

// using Provider-connect, there is no parameter passed down from <ExpenseDashboard />

// input props from "mapStateToProps"
// output: render
export const ExpensesSummary = (props) => (
     <div className="page-header">
         <div className="content-container">
            <h1 className="page-header__title">Viewing <span>{props.expenses.length}</span> expense{props.expenses.length>1?'s':''} totaling <span>{numeral(expense_sum(props.expenses)/100).format('$0,0.00')}</span></h1>
            <div className="page-header__actions">
                <Link className="button" to="/create">AddExpense</Link>
            </div>
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

const ConnectedExpenseList = connect(mapStateToProps)(ExpensesSummary);


 export default ConnectedExpenseList;