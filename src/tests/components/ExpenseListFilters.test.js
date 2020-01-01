import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';
import moment from 'moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(()=>{
    setTextFilter = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters  
        filter = {filters}
        setTextFilter = {setTextFilter}
        setStartDate = {setStartDate}
        setEndDate = {setEndDate}
        sortByDate = {sortByDate}
        sortByAmount = {sortByAmount}
        />
    );
});

test('ajnbhjbdasdas', ()=>{
    expect(wrapper).toMatchSnapshot(); 
});

test('adasdwqe', ()=>{
    wrapper.setProps({filter: altFilters});
    expect(wrapper).toMatchSnapshot();
});

test('adasqweeqeqwd',()=>{
    const value = 'rent';
    wrapper.find('input').simulate('change', {
        target:{value},
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('adaasdsadsasqweeqeqwd',()=>{
    const value = 'date';
    wrapper.setProps({filter: altFilters});
    wrapper.find('select').simulate('change', {
        target: {value}
    });
    expect(sortByDate).toHaveBeenCalled();
});

test('adasqweeqeqqweeqeqwd',()=>{
    const value = 'amount';
    wrapper.find('select').simulate('change', {
        target: {value}
    });
    expect(sortByAmount).toHaveBeenCalled();
});

test('adasqweeqeqwd',()=>{
    const startDate = moment(0).add(4, 'years');
    const endDate = moment(0).add(4, 'years');
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate});
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);

});

test('adasqweeqeqwd',()=>{
    const calendarFocused = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});