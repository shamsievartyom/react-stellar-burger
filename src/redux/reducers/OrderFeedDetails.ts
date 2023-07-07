import { UPDATE_ORDER_FEED_DETAILS_DATA, TOrderItemActions } from "../actions/OrderFeedDetails";
import { Torder } from "./WebSocket";

const reducer = (state: (null | Torder) = null, action: TOrderItemActions) => {
    switch (action.type) {
        case UPDATE_ORDER_FEED_DETAILS_DATA: {
            return action.payload
        }
        default:
            return state;
    }
};

export default reducer