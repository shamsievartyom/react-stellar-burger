import reducer from './BurgerConstructor'
import * as types from './../actions/BurgerConstructor'
import { initialState } from './BurgerConstructor'
import { ingredient1, ingredient2, ingredient3, ingredient4, ingredient5 } from '../../utils/constants'

describe('BurgerConstructor reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(initialState, {})).toEqual(
            initialState
        )
    })

    it('should handle CHANGE_INGREDIENT_POSITION', () => {
        expect(
            reducer({
                bun: null, ingredients: [
                    ingredient3,
                    ingredient4,
                    ingredient2
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
                    ingredient3,
                    ingredient5,
                    ingredient4
                ]
            }
        )
    })
    it('should handle ADD_CARD_TO_CONSTRUCTOR', () => {
        expect(reducer(initialState, {
            type: types.ADD_CARD_TO_CONSTRUCTOR,
            payload: ingredient1
        })).toEqual(
            {
                bun: ingredient1, ingredients: []
            }
        )
        expect(reducer({
            bun: ingredient1, ingredients: []
        }, {
            type: types.ADD_CARD_TO_CONSTRUCTOR,
            payload: ingredient2
        })).toEqual(
            {
                bun: ingredient1, ingredients: [ingredient2]
            }
        )
    })
    it('should handle DELETE_CARD_FROM_CONSTRUCTOR', () => {
        expect(reducer({
            bun: ingredient1, ingredients: [ingredient3, ingredient2]
        }, {
            type: types.DELETE_CARD_FROM_CONSTRUCTOR,
            id: '6c46631d-a0ed-46de-b357-c4d2dd6928d6'
        })).toEqual(
            {
                bun: ingredient1, ingredients: [ingredient3]
            }
        )
    })
}) 