import { SET_AUTH_CHECK, SET_USER } from "../actions/user";


const initialState = {
    user: null,
    isAuthChecked: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_CHECK: {
            return { ...state, isAuthChecked: action.payload }
        }
        case SET_USER: {
            return { ...state, user: action.payload }
        }
        default:
            return state;
    }
};

export default reducer