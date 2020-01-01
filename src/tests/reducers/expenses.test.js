import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';


test('asd', ()=>{
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('adsa', ()=>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id,
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('sadad', ()=>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('sadad', ()=>{
    const action = {
        type: 'ADD_EXPENSE',
        expense: expenses[0],
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expenses[0]]);
});

test('sadad', ()=>{
    const action = {
        type: 'EDIT_EXPENSE',
        id: '1',
        updates:{
            description: 'water',
        }
    };
    const state = expensesReducer(expenses, action);
    expenses[0].description = 'water';
    expect(state).toEqual(expenses);
});

test('sadad', ()=>{
    const action = {
        type: 'EDIT_EXPENSE',
        id: '1123123',
        updates:{
            description: 'water',
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});