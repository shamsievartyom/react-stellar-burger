import reducer, { initialState } from './OrderDetails'
import * as types from './../actions/OrderDetails'
import { ingredient1, ingredient3 } from '../../utils/constants'

const obj = {
    "success": true,
    "name": "Space флюоресцентный бургер",
    "order": {
        "ingredients": [
            ingredient1,
            ingredient3
        ],
        "_id": "64aa56dc12f4a2001bd5c798",
        "owner": {
            "name": "dasdasd",
            "email": "dasdsad@dasd.dsd",
            "createdAt": "2023-07-09T06:42:33.839Z",
            "updatedAt": "2023-07-09T06:42:33.839Z"
        },
        "status": "done",
        "name": "Space флюоресцентный бургер",
        "createdAt": "2023-07-09T06:42:36.001Z",
        "updatedAt": "2023-07-09T06:42:36.128Z",
        "number": 11589,
        "price": 1068
    }
}

describe('OrderDetails reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(initialState, {})).toEqual(
            initialState
        )
    })
    it('should handle ADD_DATA_TO_ORDER_DETAILS', () => {
        expect(reducer(initialState, {
            type: types.ADD_DATA_TO_ORDER_DETAILS,
            data: obj
        })).toEqual(
            obj
        )
    })
})