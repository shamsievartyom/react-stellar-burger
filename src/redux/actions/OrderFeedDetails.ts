import { Torder } from "../reducers/WebSocket";

export const UPDATE_ORDER_FEED_DETAILS_DATA: 'UPDATE_ORDER_FEED_DETAILS_DATA' = 'UPDATE_ORDER_FEED_DETAILS_DATA'

export interface IUpdateOrderFeedDetailsDataAction {
    readonly type: typeof UPDATE_ORDER_FEED_DETAILS_DATA;
    readonly payload: Torder,
}

export type TOrderItemActions = IUpdateOrderFeedDetailsDataAction