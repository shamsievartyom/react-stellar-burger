import { useCallback } from "react";
import { ADD_CARD_TO_CONSTRUCTOR, CHANGE_INGREDIENT_POSITION, DELETE_CARD_FROM_CONSTRUCTOR, TBurgerConstructorActions } from "../actions/BurgerConstructor";
import { TIngredient } from "../types";

export type TBurgerConstructor = {
    bun: null | (TIngredient & { listId: string }),
    ingredients: (TIngredient & { listId: string })[],
}

export const initialState = {
    bun: null,
    ingredients: []
}

const reducer = (state: TBurgerConstructor = initialState, action: TBurgerConstructorActions) => {

    switch (action.type) {
        case CHANGE_INGREDIENT_POSITION: {
            const newArr = [...state.ingredients]
            newArr.splice(action.dragIndex, 1)
            newArr.splice(action.hoverIndex, 0, state.ingredients[action.dragIndex]);
            return { ...state, ingredients: newArr }
        }
        case ADD_CARD_TO_CONSTRUCTOR: {
            if (action.payload.type === 'bun') {
                return { ...state, bun: action.payload };
            }
            else return { ...state, ingredients: [...state.ingredients, action.payload] }
        }
        case DELETE_CARD_FROM_CONSTRUCTOR: {
            const newIngredients = state.ingredients.filter(el => el.listId !== action.id)
            return { ...state, ingredients: newIngredients }
        }
        default:
            return state;
    }
};

export default reducer