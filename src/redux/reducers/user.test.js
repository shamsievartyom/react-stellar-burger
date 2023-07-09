import reducer from './user'
import * as types from './../actions/user'

describe('user reducer', () => {
    it('should return the initial state', () => {
        expect(reducer({
            user: null,
            isAuthChecked: false
        }, {})).toEqual(
            {
                user: null,
                isAuthChecked: false
            }
        )
    })
    it('should handle SET_AUTH_CHECK', () => {
        expect(reducer({
            user: null,
            isAuthChecked: false
        }, {
            type: types.SET_AUTH_CHECK,
            payload: true
        })).toEqual(
            {
                user: null,
                isAuthChecked: true
            }
        )
    })
    it('should handle SET_USER', () => {
        expect(reducer({
            user: null,
            isAuthChecked: false
        }, {
            type: types.SET_USER,
            payload: {
                email: 'dasdsad@dasd.dsd',
                name: 'dasdasd'
            }
        })).toEqual(
            {
                user: {
                    email: 'dasdsad@dasd.dsd',
                    name: 'dasdasd'
                },
                isAuthChecked: false
            }
        )
    })
})