import { ADD_DATA_TO_ORDER_DETAILS } from "../actions/OrderDetails";

const reducer = (state = null, action) => {
    switch (action.type) {
        case ADD_DATA_TO_ORDER_DETAILS: {
            return action.data
        }
        default:
            return state;
    }
};

export default reducer