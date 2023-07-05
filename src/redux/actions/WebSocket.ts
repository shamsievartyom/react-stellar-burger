import { TWSState, Torder } from "../reducers/WebSocket";

export const WS_CONNECTION_START: 'WS_CONNECTION_START' = 'WS_CONNECTION_START';
export const WS_CONNECTION_SUCCESS: 'WS_CONNECTION_SUCCESS' = 'WS_CONNECTION_SUCCESS';
export const WS_CONNECTION_ERROR: 'WS_CONNECTION_ERROR' = 'WS_CONNECTION_ERROR';
export const WS_CONNECTION_CLOSED: 'WS_CONNECTION_CLOSED' = 'WS_CONNECTION_CLOSED';
export const WS_GET_MESSAGE: 'WS_GET_MESSAGE' = 'WS_GET_MESSAGE';
export const WS_SEND_MESSAGE: 'WS_SEND_MESSAGE' = 'WS_SEND_MESSAGE';

export interface IWSConnectionStartAction {
    type: typeof WS_CONNECTION_START;
    payload: string
}

export interface IWSConnectionSuccessAction {
    type: typeof WS_CONNECTION_SUCCESS;
    payload: Event
}

export interface IWSConnectionErrorAction {
    type: typeof WS_CONNECTION_ERROR;
    payload: Event;
}

export interface IWSConnectionClosedAction {
    type: typeof WS_CONNECTION_CLOSED;
    payload: Event
}
export interface IWSGetMessageAction {
    type: typeof WS_GET_MESSAGE;
    payload: {
        success: boolean,
        orders: Torder[]
        total: number,
        totalToday: number,
      };
}
export interface IWSSendMessageAction {
    type: typeof WS_SEND_MESSAGE;
    payload: {};
}

export type WebSocketActions = IWSConnectionStartAction | IWSConnectionSuccessAction | IWSConnectionErrorAction | IWSConnectionClosedAction | IWSGetMessageAction | IWSSendMessageAction