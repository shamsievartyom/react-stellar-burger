import reducer, { initialState } from './IngredientDetails'
import * as types from './../actions/IngredientDetails'
import { ingredient2 } from '../../utils/constants'

describe('IngredientDetails reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(initialState, {})).toEqual(
            initialState
        )
    })
    it('should handle UPDATE_INGREDIENT_DETAILS_DATA', () => {
        expect(reducer(initialState, {
            type: types.UPDATE_INGREDIENT_DETAILS_DATA,
            data: ingredient2
        })).toEqual(
            ingredient2
        )
    })
})