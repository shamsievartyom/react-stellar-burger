import { TIngredient } from "../types";

export const UPDATE_CARDS: 'UPDATE_CARDS' = 'UPDATE_CARDS'
export const INCREASE_COUNT_OF_INGREDIENT: 'INCREASE_COUNT_OF_INGREDIENT' = 'INCREASE_COUNT_OF_INGREDIENT'
export const DECREASE_COUNT_OF_INGREDIENT: 'DECREASE_COUNT_OF_INGREDIENT' = 'DECREASE_COUNT_OF_INGREDIENT'

export interface IUpdateCardsAction {
    readonly type: typeof UPDATE_CARDS;
    readonly payload: {
        data: TIngredient[],
        success: boolean,
    }
}

export interface IIncreaseCountOfIngredientAction {
    readonly type: typeof INCREASE_COUNT_OF_INGREDIENT;
    readonly id: string
}

export interface IDecreaseCountOfIngredientAcrtion {
    readonly type: typeof DECREASE_COUNT_OF_INGREDIENT;
    readonly id: string
}

export type TBurgerIngredientsActions = IUpdateCardsAction | IIncreaseCountOfIngredientAction | IDecreaseCountOfIngredientAcrtion