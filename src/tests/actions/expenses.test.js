import { addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('should setup remove expense action object', ()=>{
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc', 
    });

});

test ('should setup edit expense action', ()=>{
    const edit = editExpense("123", {amount:1000, description: 'hahaha'});
    expect(edit).toEqual({
        type: "EDIT_EXPENSE",
        id: "123",
        updates: {
            amount:1000, 
            description: 'hahaha',
        }
    });
});

test('should setup add expense action object with provided values', ()=>{
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'This was last months rent',
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense:{
            ...expenseData,
            id: expect.any(String),
        }
    });
});

test("should setup add expense action object with default values", ()=>{
    const action = addExpense();
    expect(action).toEqual({
        type:"ADD_EXPENSE",
        expense:{
            id: expect.any(String),
            description:'', 
            note:'', 
            amount:0, 
            createdAt:0
        }
    });
});