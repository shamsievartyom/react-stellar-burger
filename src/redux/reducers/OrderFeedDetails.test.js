import reducer, { initialState } from './OrderFeedDetails'
import * as types from './../actions/OrderFeedDetails'

const obj = {
    "_id": "64aa56dc12f4a2001bd5c798",
    "ingredients": [
        "643d69a5c3f7b9001cfa093d",
        "643d69a5c3f7b9001cfa0943"
    ],
    "status": "done",
    "name": "Space флюоресцентный бургер",
    "createdAt": "2023-07-09T06:42:36.001Z",
    "updatedAt": "2023-07-09T06:42:36.128Z",
    "number": 11589
}

describe('OrderFeedDetails reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(initialState, {})).toEqual(
            initialState
        )
    })
    it('should handle UPDATE_ORDER_FEED_DETAILS_DATA', () => {
        expect(reducer(initialState, {
            type: types.UPDATE_ORDER_FEED_DETAILS_DATA,
            payload: obj
        })).toEqual(
            obj
        )
    })
})