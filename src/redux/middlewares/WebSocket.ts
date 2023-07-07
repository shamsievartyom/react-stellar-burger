import type { Middleware, MiddlewareAPI } from 'redux';

import type { TApplicationActions, AppDispatch, RootState } from '../types';
import { WebSocketActions } from '../actions/WebSocket';

export const socketMiddleware = (wsUrl: string): Middleware => {
    return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
        let socket: WebSocket | null = null;

        return next => (action: WebSocketActions) => {
            const { dispatch, getState } = store;
            const { type, payload } = action;

            if (type === 'WS_CONNECTION_START') {
                // объект класса WebSocket
                if (payload === 'orders') { //OrdersHistory
                    const accessToken = localStorage.getItem("accessToken") || '';
                    socket = new WebSocket(wsUrl + payload + `"?token=${accessToken.slice(6)}"`);
                }
                else socket = new WebSocket(wsUrl + payload); //OrderFeed
            }
            if (socket) {

                // функция, которая вызывается при открытии сокета
                socket.onopen = event => {
                    dispatch({ type: 'WS_CONNECTION_SUCCESS', payload: event });
                };

                // функция, которая вызывается при ошибке соединения
                socket.onerror = event => {
                    dispatch({ type: 'WS_CONNECTION_ERROR', payload: event });
                };

                // функция, которая вызывается при получения события от сервера
                socket.onmessage = event => {
                    const { data } = event;
                    const message = JSON.parse(data)
                    if (message.success) {
                        dispatch({ type: 'WS_GET_MESSAGE', payload: message });
                    }
                    else console.log('WS message not success');
                };
                // функция, которая вызывается при закрытии соединения
                socket.onclose = event => {
                    dispatch({ type: 'WS_CONNECTION_CLOSED', payload: event });
                };

                if (type === 'WS_SEND_MESSAGE') {
                    const message = payload;
                    // функция для отправки сообщения на сервер
                    socket.send(JSON.stringify(message));
                }
            }

            next(action);
        };
    }) as Middleware;
}; 