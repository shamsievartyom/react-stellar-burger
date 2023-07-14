import reducer from './BurgerIngredients'
import * as types from './../actions/BurgerIngredients'
import { ingredient1, ingredient2, ingredient3 } from '../../utils/constants'
import { initialState } from './BurgerIngredients'

describe('BurgerIngredients reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(initialState, {})).toEqual([])
    })
    it('should handle UPDATE_CARDS', () => {
        expect(
            reducer(initialState, {
                type: types.UPDATE_CARDS,
                payload: {
                    success: true,
                    data: [
                        ingredient3,
                        ingredient2]
                }
            })
        ).toEqual(
            [
                ingredient3,
                ingredient2]
        )
    })
    it('should handle INCREASE_COUNT_OF_INGREDIENT', () => {
        expect(
            reducer([
                { ...ingredient3, count: 2 },
                ingredient2], {
                type: types.INCREASE_COUNT_OF_INGREDIENT,
                id: '643d69a5c3f7b9001cfa093e'
            })
        ).toEqual(
            [
                { ...ingredient3, count: 2 },
                { ...ingredient2, count: 1 }]
        )
    })
    it('should handle DECREASE_COUNT_OF_INGREDIENT', () => {
        expect(
            reducer([
                { ...ingredient3, count: 2 },
                ingredient2], {
                type: types.DECREASE_COUNT_OF_INGREDIENT,
                id: '643d69a5c3f7b9001cfa0945'
            })
        ).toEqual(
            [
                { ...ingredient3, count: 1 },
                ingredient2]
        )
        expect(
            reducer([
                { ...ingredient1, count: 2 },
                ingredient2], {
                type: types.DECREASE_COUNT_OF_INGREDIENT,
                id: '643d69a5c3f7b9001cfa093d'
            })
        ).toEqual(
            [
                { ...ingredient1, count: 0 },
                ingredient2]
        )
    })
})