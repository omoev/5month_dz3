import { ADD_NUMBER, CLEAR_LIST } from './../actions/actions';


const initialState = {
    numbers: [],
    sum: 0,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NUMBER:
            const newNumber = action.payload;
            const newSum = state.sum + newNumber;
            return {
                ...state,
                numbers: [...state.numbers, newNumber],
                sum: newSum,
            };
        case CLEAR_LIST:
            return {
                ...state,
                numbers: [],
                sum: 0,
            };
        default:
            return state;
    }
};

export default reducer;