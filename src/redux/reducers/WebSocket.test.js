import { initialState, wsReducer } from './WebSocket'
import * as types from './../actions/WebSocket'

describe('WebSocket reducer', () => {
    it('should return the initial state', () => {
        expect(wsReducer(initialState, {})).toEqual(
            initialState
        )
    })
    it('should handle WS_CONNECTION_SUCCESS', () => {
        expect(wsReducer(initialState, {
            type: types.WS_CONNECTION_SUCCESS,
            payload: {
                isTrusted: true
            }
        })).toEqual(
            { ...initialState, wsConnected: true }
        )
    })
    it('should handle WS_CONNECTION_ERROR', () => {
        expect(wsReducer({
            wsConnected: true,
            messages: null
        }, {
            type: types.WS_CONNECTION_ERROR,
            payload: {
                status: "4XX"
            }
        })).toEqual(
            {
                wsConnected: false,
                messages: null,
                error: {
                    status: "4XX"
                }
            }
        )
    })
    it('should handle WS_CONNECTION_CLOSED', () => {
        expect(wsReducer({
            wsConnected: true,
            messages: null
        }, {
            type: types.WS_CONNECTION_CLOSED,
            payload: {
                text: "smth"
            }
        })).toEqual(
            {
                wsConnected: false,
                messages: null,
            }
        )
    })
    it('should handle WS_CLOSE', () => {
        expect(wsReducer({
            wsConnected: true,
            messages: [
                { text: '1' },
                { text: '2' }
            ]
        }, {
            type: types.WS_CLOSE,
            payload: undefined,
        })).toEqual(
            {
                wsConnected: false,
                messages: null
            }
        )
    })
    it('should handle WS_GET_MESSAGE', () => {
        expect(wsReducer({
            wsConnected: true,
            messages: [
                { text: '1' },
                { text: '2' }
            ]
        }, {
            type: types.WS_GET_MESSAGE,
            payload: [{ text: '3' }]
        })).toEqual(
            {
                wsConnected: true,
                error: undefined,
                messages: [
                    { text: '3' }
                ]
            }
        )
    })
})