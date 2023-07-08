import { SET_AUTH_CHECK, SET_USER, TUserUser, userActions } from "../actions/user";

type TinitialState = {
    user: TUserUser | null,
    isAuthChecked: boolean,
}

const initialState = {
    user: null,
    isAuthChecked: false
};

const reducer = (state: TinitialState = initialState, action: userActions) => {
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