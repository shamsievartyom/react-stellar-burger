import doFetch from "../../functions/doFetch";
import { UPDATE_ORDER_FEED_DETAILS_DATA } from "../actions/OrderFeedDetails";
import { Torder } from "../reducers/WebSocket";
import { AppDispatch, AppThunk } from "../types"

export const getOrderThunk: AppThunk = (number: string) => async (dispatch: AppDispatch) => {
    doFetch<{ successs: boolean, orders: Torder[] }>(`orders/${number}`, 'GET')
        .then((data) => {
            dispatch({
                type: UPDATE_ORDER_FEED_DETAILS_DATA,
                payload: data.orders[0],
            })
        })
        .catch((err) => console.log(err))
}