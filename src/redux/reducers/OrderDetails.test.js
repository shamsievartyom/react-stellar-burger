import reducer from './OrderDetails'
import * as types from './../actions/OrderDetails'

describe('OrderDetails reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(null, {})).toEqual(
            null
        )
    })
    it('should handle ADD_DATA_TO_ORDER_DETAILS', () => {
        expect(reducer(null, {
            type: types.ADD_DATA_TO_ORDER_DETAILS,
            data: {
                "success": true,
                "name": "Space флюоресцентный бургер",
                "order": {
                    "ingredients": [
                        {
                            "_id": "643d69a5c3f7b9001cfa093d",
                            "name": "Флюоресцентная булка R2-D3",
                            "type": "bun",
                            "proteins": 44,
                            "fat": 26,
                            "carbohydrates": 85,
                            "calories": 643,
                            "price": 988,
                            "image": "https://code.s3.yandex.net/react/code/bun-01.png",
                            "image_mobile": "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
                            "image_large": "https://code.s3.yandex.net/react/code/bun-01-large.png",
                            "__v": 0
                        },
                        {
                            "_id": "643d69a5c3f7b9001cfa0943",
                            "name": "Соус фирменный Space Sauce",
                            "type": "sauce",
                            "proteins": 50,
                            "fat": 22,
                            "carbohydrates": 11,
                            "calories": 14,
                            "price": 80,
                            "image": "https://code.s3.yandex.net/react/code/sauce-04.png",
                            "image_mobile": "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
                            "image_large": "https://code.s3.yandex.net/react/code/sauce-04-large.png",
                            "__v": 0
                        }
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
        })).toEqual(
            {
                "success": true,
                "name": "Space флюоресцентный бургер",
                "order": {
                    "ingredients": [
                        {
                            "_id": "643d69a5c3f7b9001cfa093d",
                            "name": "Флюоресцентная булка R2-D3",
                            "type": "bun",
                            "proteins": 44,
                            "fat": 26,
                            "carbohydrates": 85,
                            "calories": 643,
                            "price": 988,
                            "image": "https://code.s3.yandex.net/react/code/bun-01.png",
                            "image_mobile": "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
                            "image_large": "https://code.s3.yandex.net/react/code/bun-01-large.png",
                            "__v": 0
                        },
                        {
                            "_id": "643d69a5c3f7b9001cfa0943",
                            "name": "Соус фирменный Space Sauce",
                            "type": "sauce",
                            "proteins": 50,
                            "fat": 22,
                            "carbohydrates": 11,
                            "calories": 14,
                            "price": 80,
                            "image": "https://code.s3.yandex.net/react/code/sauce-04.png",
                            "image_mobile": "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
                            "image_large": "https://code.s3.yandex.net/react/code/sauce-04-large.png",
                            "__v": 0
                        }
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
        )
    })
})