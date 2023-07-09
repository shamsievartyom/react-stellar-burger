import reducer from './BurgerIngredients'
import * as types from './../actions/BurgerIngredients'

describe('BurgerIngredients reducer', () => {
    it('should return the initial state', () => {
        expect(reducer([], {})).toEqual([])
    })
    it('should handle UPDATE_CARDS', () => {
        expect(
            reducer([], {
                type: types.UPDATE_CARDS,
                payload: {
                    success: true,
                    data: [
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
                            listId: '6c46631d-a0ed-46de-b357-c4d2dd6928d6'
                        }]
                }
            })
        ).toEqual(
            [
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
                }]
        )
    })
    it('should handle INCREASE_COUNT_OF_INGREDIENT', () => {
        expect(
            reducer([
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
                    count: 2,
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
                }], {
                type: types.INCREASE_COUNT_OF_INGREDIENT,
                id: '643d69a5c3f7b9001cfa093e'
            })
        ).toEqual(
            [
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
                    count: 2,
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
                    count: 1,
                    listId: '6c46631d-a0ed-46de-b357-c4d2dd6928d6'
                }]
        )
    })
    it('should handle DECREASE_COUNT_OF_INGREDIENT', () => {
        expect(
            reducer([
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
                    count: 2,
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
                }], {
                type: types.DECREASE_COUNT_OF_INGREDIENT,
                id: '643d69a5c3f7b9001cfa0945'
            })
        ).toEqual(
            [
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
                    count: 1,
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
                }]
        )
        expect(
            reducer([
                {
                    _id: '643d69a5c3f7b9001cfa093c',
                    name: 'Краторная булка N-200i',
                    type: 'bun',
                    proteins: 80,
                    fat: 24,
                    carbohydrates: 53,
                    calories: 420,
                    price: 1255,
                    image: 'https://code.s3.yandex.net/react/code/bun-02.png',
                    image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
                    image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
                    __v: 0,
                    count: 2
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
                }], {
                type: types.DECREASE_COUNT_OF_INGREDIENT,
                id: '643d69a5c3f7b9001cfa093c'
            })
        ).toEqual(
            [
                {
                    _id: '643d69a5c3f7b9001cfa093c',
                    name: 'Краторная булка N-200i',
                    type: 'bun',
                    proteins: 80,
                    fat: 24,
                    carbohydrates: 53,
                    calories: 420,
                    price: 1255,
                    image: 'https://code.s3.yandex.net/react/code/bun-02.png',
                    image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
                    image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
                    __v: 0,
                    count: 0,
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
                }]
        )
    })
})