import reducer from './OrderFeedDetails'
import * as types from './../actions/OrderFeedDetails'

describe('OrderFeedDetails reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(null, {})).toEqual(
            null
        )
    })
    it('should handle UPDATE_ORDER_FEED_DETAILS_DATA', () => {
        expect(reducer(null, {
            type: types.UPDATE_ORDER_FEED_DETAILS_DATA,
            payload: {
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
        })).toEqual(
            {
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
        )
    })
})