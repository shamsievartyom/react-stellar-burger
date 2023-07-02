import { ADD_DATA_TO_ORDER_DETAILS, TOrderDetails, TOrderDetailsActions } from "../actions/OrderDetails";

const reducer = (state: (null | TOrderDetails) = null, action: TOrderDetailsActions) => {
    switch (action.type) {
        case ADD_DATA_TO_ORDER_DETAILS: {
            return action.data
        }
        default:
            return state;
    }
};

export default reducer