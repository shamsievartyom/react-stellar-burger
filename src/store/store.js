import { createStore } from 'redux';

const initialState = {ingredients: null};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_CARDS':
            return {...state, ingredients: action.payload}
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;