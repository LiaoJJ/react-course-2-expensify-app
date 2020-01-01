import moment from 'moment';
import {
    setStartDate, 
    setEndDate,
    setTextFilter,
    sortByDate,
    sortByAmount,
} from '../../actions/filters';


test('should generate set start date action object', ()=>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0),
    });
});

test('aaa', ()=>{
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: "SET_END_DATE",
        endDate: moment(0),
    });
})

test('shad', ()=>{
    const action = setTextFilter('something');
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: 'something'
    });
});

test('aaaa', ()=>{
    const action = setTextFilter();;
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text:''
    });
});

test('adsad', ()=>{
    expect(sortByDate()).toEqual({
        type: "SORT_BY_DATE",
        sortBy: 'date',
    });
});