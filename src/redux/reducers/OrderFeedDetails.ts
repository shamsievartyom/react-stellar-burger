import { UPDATE_ORDER_FEED_DETAILS_DATA, TOrderItemActions } from "../actions/OrderFeedDetails";
import { Torder } from "./WebSocket";

export const initialState = null

const reducer = (state: (null | Torder) = initialState, action: TOrderItemActions) => {
    switch (action.type) {
        case UPDATE_ORDER_FEED_DETAILS_DATA: {
            return action.payload
        }
        default:
            return state;
    }
};

export default reducer