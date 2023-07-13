import reducer, { initialState } from './user'
import * as types from './../actions/user'

const obj = {
    email: 'dasdsad@dasd.dsd',
    name: 'dasdasd'
}

describe('user reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(initialState, {})).toEqual(
            initialState
        )
    })
    it('should handle SET_AUTH_CHECK', () => {
        expect(reducer(initialState, {
            type: types.SET_AUTH_CHECK,
            payload: true
        })).toEqual(
            { ...initialState, isAuthChecked: true }
        )
    })
    it('should handle SET_USER', () => {
        expect(reducer(initialState, {
            type: types.SET_USER,
            payload: obj
        })).toEqual(
            {
                user: obj,
                isAuthChecked: false
            }
        )
    })
})