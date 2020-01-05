import React from 'react';
import {connect} from 'react-redux';
import {DateRangePicker} from 'react-dates';
import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from '../actions/filters.js';

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null,
    };
    onDatesChange = ({startDate, endDate}) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };
    onFocusChange = (calendarFocused) => {
        this.setState(()=>({calendarFocused}));
    };
    onTextChange = (e)=>{
        this.props.setTextFilter(e.target.value);
    }
    onSortChange = (e)=>{
        if(e.target.value==='date'){
            this.props.sortByDate();
        }
        else if(e.target.value==='amount'){
            this.props.sortByAmount();
        }
        
    }
    render(){
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input className="text-input" type="text" value={this.props.filter.text} onChange={this.onTextChange}/>
                    </div>
                    <div className="input-group__item">
                        <select 
                            className="select"
                            value={this.props.filter.sortBy}
                            onChange={this.onSortChange}>
                            <option value="date">Date</option>
                            <option value='amount'>Amount</option>
                        </select> 
                    </div>
                    <div className="input-group__item">
                        <DateRangePicker
                            startDate={this.props.filter.startDate}
                            endDate={this.props.filter.endDate}
                            onDatesChange={this.onDatesChange}
                            focusedInput={this.state.calendarFocused}
                            onFocusChange={this.onFocusChange}
                            showClearDates={true}
                            numberOfMonths={1}
                            isOutsideRange={()=>false}
                        />
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        filter: state.filter
    };
};

const mapDispatchToProps = (dispatch) =>({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    setStartDate: (text) => dispatch(setStartDate(text)),
    setEndDate: (text) => dispatch(setEndDate(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);