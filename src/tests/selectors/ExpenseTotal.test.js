import selectExpenseTotal from '../../selectors/ExpensesTotal';
import expenses from '../fixtures/expenses';

test('asdasd', ()=>{
    const res = selectExpenseTotal([]);
    expect(res).toBe(0);
});

test('asdaswqeq', ()=>{
    const res = selectExpenseTotal(expenses);
    expect(res).toBe(114195);
});