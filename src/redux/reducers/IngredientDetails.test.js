import reducer from './IngredientDetails'
import * as types from './../actions/IngredientDetails'

describe('IngredientDetails reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(null, {})).toEqual(
            null
        )
    })
    it('should handle UPDATE_INGREDIENT_DETAILS_DATA', () => {
        expect(reducer(null, {
            type: types.UPDATE_INGREDIENT_DETAILS_DATA,
            data: {
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
            }
        })).toEqual(
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
            }
        )
    })
})