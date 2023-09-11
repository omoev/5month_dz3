export const ADD_NUMBER = 'ADD_NUMBER';
export const CLEAR_LIST = 'CLEAR_LIST';

export const addNumber = (value) => ({
    type: ADD_NUMBER,
    payload: value,
});

export const clearList = () => ({
    type: CLEAR_LIST,
});
