import { ADD_DATA_TO_ORDER_DETAILS, TOrderDetails, TOrderDetailsActions } from "../actions/OrderDetails";

export const initialState = null

const reducer = (state: (null | TOrderDetails) = initialState, action: TOrderDetailsActions) => {
    switch (action.type) {
        case ADD_DATA_TO_ORDER_DETAILS: {
            return action.data
        }
        default:
            return state;
    }
};

export default reducer