import reducer from './BurgerConstructor'
import * as types from './../actions/BurgerConstructor'

describe('BurgerConstructor reducer', () => {
    it('should return the initial state', () => {
        expect(reducer({ bun: null, ingredients: [] }, {})).toEqual(
            { bun: null, ingredients: [] }
        )
    })

    it('should handle CHANGE_INGREDIENT_POSITION', () => {
        expect(
            reducer({
                bun: null, ingredients: [
                    {
                        _id: '643d69a5c3f7b9001cfa0945',
                        name: 'Соус с шипами Антарианского плоскоходца',
                        type: 'sauce',
                        proteins: 101,
                        fat: 99,
                        carbohydrates: 100,
                        calories: 100,
                        price: 88,
                        image: 'https://code.s3.yandex.net/react/code/sauce-01.png',
                        image_mobile: 'https://code.s3.yandex.net/react/code/sauce-01-mobile.png',
                        image_large: 'https://code.s3.yandex.net/react/code/sauce-01-large.png',
                        __v: 0,
                        count: 0,
                        listId: '5ca691f6-fb5b-4878-b7d5-a2c330d75fa0'
                    },
                    {
                        _id: '643d69a5c3f7b9001cfa0944',
                        name: 'Соус традиционный галактический',
                        type: 'sauce',
                        proteins: 42,
                        fat: 24,
                        carbohydrates: 42,
                        calories: 99,
                        price: 15,
                        image: 'https://code.s3.yandex.net/react/code/sauce-03.png',
                        image_mobile: 'https://code.s3.yandex.net/react/code/sauce-03-mobile.png',
                        image_large: 'https://code.s3.yandex.net/react/code/sauce-03-large.png',
                        __v: 0,
                        count: 0,
                        listId: 'c615dd9a-cfe3-4882-878b-347fcb35510b'
                    },
                    {
                        _id: '643d69a5c3f7b9001cfa093e',
                        name: 'Филе Люминесцентного тетраодонтимформа',
                        type: 'main',
                        proteins: 44,
                        fat: 26,
                        carbohydrates: 85,
                        calories: 643,
                        price: 988,
                        image: 'https://code.s3.yandex.net/react/code/meat-03.png',
                        image_mobile: 'https://code.s3.yandex.net/react/code/meat-03-mobile.png',
                        image_large: 'https://code.s3.yandex.net/react/code/meat-03-large.png',
                        __v: 0,
                        count: 0,
                        listId: '6c46631d-a0ed-46de-b357-c4d2dd6928d6'
                    }
                ]
            }, {
                type: types.CHANGE_INGREDIENT_POSITION,
                dragIndex: 2,
                hoverIndex: 1,
            })
        ).toEqual(
            {
                bun: null,
                ingredients: [
                    {
                        _id: '643d69a5c3f7b9001cfa0945',
                        name: 'Соус с шипами Антарианского плоскоходца',
                        type: 'sauce',
                        proteins: 101,
                        fat: 99,
                        carbohydrates: 100,
                        calories: 100,
                        price: 88,
                        image: 'https://code.s3.yandex.net/react/code/sauce-01.png',
                        image_mobile: 'https://code.s3.yandex.net/react/code/sauce-01-mobile.png',
                        image_large: 'https://code.s3.yandex.net/react/code/sauce-01-large.png',
                        __v: 0,
                        count: 0,
                        listId: '5ca691f6-fb5b-4878-b7d5-a2c330d75fa0'
                    },
                    {
                        _id: '643d69a5c3f7b9001cfa093e',
                        name: 'Филе Люминесцентного тетраодонтимформа',
                        type: 'main',
                        proteins: 44,
                        fat: 26,
                        carbohydrates: 85,
                        calories: 643,
                        price: 988,
                        image: 'https://code.s3.yandex.net/react/code/meat-03.png',
                        image_mobile: 'https://code.s3.yandex.net/react/code/meat-03-mobile.png',
                        image_large: 'https://code.s3.yandex.net/react/code/meat-03-large.png',
                        __v: 0,
                        count: 0,
                        listId: '6c46631d-a0ed-46de-b357-c4d2dd6928d6'
                    },
                    {
                        _id: '643d69a5c3f7b9001cfa0944',
                        name: 'Соус традиционный галактический',
                        type: 'sauce',
                        proteins: 42,
                        fat: 24,
                        carbohydrates: 42,
                        calories: 99,
                        price: 15,
                        image: 'https://code.s3.yandex.net/react/code/sauce-03.png',
                        image_mobile: 'https://code.s3.yandex.net/react/code/sauce-03-mobile.png',
                        image_large: 'https://code.s3.yandex.net/react/code/sauce-03-large.png',
                        __v: 0,
                        count: 0,
                        listId: 'c615dd9a-cfe3-4882-878b-347fcb35510b'
                    }
                ]
            }
        )
    })
    it('should handle ADD_CARD_TO_CONSTRUCTOR', () => {
        expect(reducer({ bun: null, ingredients: [] }, {
            type: types.ADD_CARD_TO_CONSTRUCTOR,
            payload: {
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
                "__v": 0,
                "count": 0,
                "listId": "598c4c4d-9ac5-4d73-8500-eebd872b4b9f"
            }
        })).toEqual(
            {
                bun: {
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
                    "__v": 0,
                    "count": 0,
                    "listId": "598c4c4d-9ac5-4d73-8500-eebd872b4b9f"
                }, ingredients: []
            }
        )
        expect(reducer({
            bun: {
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
                "__v": 0,
                "count": 0,
                "listId": "598c4c4d-9ac5-4d73-8500-eebd872b4b9f"
            }, ingredients: []
        }, {
            type: types.ADD_CARD_TO_CONSTRUCTOR,
            payload: {
                _id: '643d69a5c3f7b9001cfa093e',
                name: 'Филе Люминесцентного тетраодонтимформа',
                type: 'main',
                proteins: 44,
                fat: 26,
                carbohydrates: 85,
                calories: 643,
                price: 988,
                image: 'https://code.s3.yandex.net/react/code/meat-03.png',
                image_mobile: 'https://code.s3.yandex.net/react/code/meat-03-mobile.png',
                image_large: 'https://code.s3.yandex.net/react/code/meat-03-large.png',
                __v: 0,
                count: 0,
                listId: '6c46631d-a0ed-46de-b357-c4d2dd6928d6'
            }
        })).toEqual(
            {
                bun: {
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
                    "__v": 0,
                    "count": 0,
                    "listId": "598c4c4d-9ac5-4d73-8500-eebd872b4b9f"
                }, ingredients: [{
                    _id: '643d69a5c3f7b9001cfa093e',
                    name: 'Филе Люминесцентного тетраодонтимформа',
                    type: 'main',
                    proteins: 44,
                    fat: 26,
                    carbohydrates: 85,
                    calories: 643,
                    price: 988,
                    image: 'https://code.s3.yandex.net/react/code/meat-03.png',
                    image_mobile: 'https://code.s3.yandex.net/react/code/meat-03-mobile.png',
                    image_large: 'https://code.s3.yandex.net/react/code/meat-03-large.png',
                    __v: 0,
                    count: 0,
                    listId: '6c46631d-a0ed-46de-b357-c4d2dd6928d6'
                }]
            }
        )
    })
    it('should handle DELETE_CARD_FROM_CONSTRUCTOR', () => {
        expect(reducer({
            bun: {
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
                "__v": 0,
                "count": 0,
                "listId": "598c4c4d-9ac5-4d73-8500-eebd872b4b9f"
            }, ingredients: [{
                _id: '643d69a5c3f7b9001cfa0945',
                name: 'Соус с шипами Антарианского плоскоходца',
                type: 'sauce',
                proteins: 101,
                fat: 99,
                carbohydrates: 100,
                calories: 100,
                price: 88,
                image: 'https://code.s3.yandex.net/react/code/sauce-01.png',
                image_mobile: 'https://code.s3.yandex.net/react/code/sauce-01-mobile.png',
                image_large: 'https://code.s3.yandex.net/react/code/sauce-01-large.png',
                __v: 0,
                count: 0,
                listId: '5ca691f6-fb5b-4878-b7d5-a2c330d75fa0'
            }, {
                _id: '643d69a5c3f7b9001cfa093e',
                name: 'Филе Люминесцентного тетраодонтимформа',
                type: 'main',
                proteins: 44,
                fat: 26,
                carbohydrates: 85,
                calories: 643,
                price: 988,
                image: 'https://code.s3.yandex.net/react/code/meat-03.png',
                image_mobile: 'https://code.s3.yandex.net/react/code/meat-03-mobile.png',
                image_large: 'https://code.s3.yandex.net/react/code/meat-03-large.png',
                __v: 0,
                count: 0,
                listId: '6c46631d-a0ed-46de-b357-c4d2dd6928d6'
            }]
        }, {
            type: types.DELETE_CARD_FROM_CONSTRUCTOR,
            id: '6c46631d-a0ed-46de-b357-c4d2dd6928d6'
        })).toEqual(
            {
                bun: {
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
                    "__v": 0,
                    "count": 0,
                    "listId": "598c4c4d-9ac5-4d73-8500-eebd872b4b9f"
                }, ingredients: [{
                    _id: '643d69a5c3f7b9001cfa0945',
                    name: 'Соус с шипами Антарианского плоскоходца',
                    type: 'sauce',
                    proteins: 101,
                    fat: 99,
                    carbohydrates: 100,
                    calories: 100,
                    price: 88,
                    image: 'https://code.s3.yandex.net/react/code/sauce-01.png',
                    image_mobile: 'https://code.s3.yandex.net/react/code/sauce-01-mobile.png',
                    image_large: 'https://code.s3.yandex.net/react/code/sauce-01-large.png',
                    __v: 0,
                    count: 0,
                    listId: '5ca691f6-fb5b-4878-b7d5-a2c330d75fa0'
                }]
            }
        )
    })
}) 