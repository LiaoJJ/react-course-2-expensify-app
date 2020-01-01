import {createStore} from 'redux';


const incrementCount = ({incrementBy = 1} = {})=>({
    type: "INCREMENT",
    incrementBy: incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy: decrementBy
});

const setCount = ({count = 1}={}) => ({
    type: 'SET',
    count: count
});

const resetCount = () => ({
    type: 'RESET',
});

// Reducer
// 1. Reducers are pure functions
// 2, Never change state or action
const countReducer = (state = {count: 0}, action)=>{
    switch(action.type){
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            }
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy==='number' ? action.incrementBy : 1;
            return {
                count: state.count+incrementBy
            };
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count-decrementBy
            };
        default:
            return state;
    }

}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
});

store.dispatch(incrementCount({incrementBy: 5}));
store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());
store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(setCount({count:101}));

