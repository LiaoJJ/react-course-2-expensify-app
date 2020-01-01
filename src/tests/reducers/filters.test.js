import filterReducer from '../../reducers/filters';
import moment from 'moment';

test('asdasdzcz', ()=>{
    const state = filterReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date', //date or amount
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month'),
    });
});

test('sdasc', ()=>{
    const state = filterReducer(undefined, {sortBy: 'amount', type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});


test('sdasdsadasc', ()=>{
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount',
    };
    const action = {type: "SORT_BY_DATE", sortBy:'date'};
    const state = filterReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('sdasasdc', ()=>{
    const state = filterReducer(undefined, {type: 'SET_TEXT_FILTER', text: 'hahaha'});
    expect(state.text).toBe('hahaha');
});

test('sdasasdc', ()=>{
    const state = filterReducer(undefined, {type: 'SET_START_DATE', startDate: moment(0)});
    expect(state.startDate).toEqual(moment(0)); 
});